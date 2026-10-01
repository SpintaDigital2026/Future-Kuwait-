import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { bookingCalendarLinks, bookingIcs, CONTACT_EMAIL } from "./contact";

function publicClient() {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
  );
}

async function assertAdmin(supabase: ReturnType<typeof publicClient>, userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error) throw new Error("Role check failed");
  if (!data) throw new Error("Forbidden: admin only");
}

const enquirySchema = z.object({
  kind: z.enum(["message", "booking"]),
  name: z.string().min(1).max(120),
  email: z.string().email().max(160),
  company: z.string().max(160).optional(),
  topic: z.string().max(120).optional(),
  message: z.string().min(1).max(4000),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
});

async function notifyInbox(
  subject: string,
  text: string,
  ics?: string,
  to = process.env.CONTACT_INBOX_EMAIL || CONTACT_EMAIL,
  replyTo?: string,
  fromName?: string,
) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false as const, error: "Email sending is not configured." };
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromName ? `${fromName} <onboarding@resend.dev>` : process.env.CONTACT_FROM_EMAIL || "FCC <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo,
      subject,
      text,
      attachments: ics
        ? [
            {
              filename: "invite.ics",
              content: Buffer.from(ics).toString("base64"),
              content_type: "text/calendar; charset=utf-8; method=REQUEST",
            },
          ]
        : undefined,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    let error = body.slice(0, 280);
    try {
      const parsed = JSON.parse(body) as { message?: string };
      if (parsed.message) error = parsed.message;
    } catch {
      /* keep the raw text */
    }
    return { ok: false as const, error };
  }
  return { ok: true as const, error: "" };
}

export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => enquirySchema.parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();

    if (data.kind === "booking") {
      if (!data.preferred_date || !data.preferred_time) {
        throw new Error("Choose a date and time for the booking.");
      }
      const { data: taken } = await sb
        .from("contact_enquiries")
        .select("id")
        .eq("kind", "booking")
        .eq("preferred_date", data.preferred_date)
        .eq("preferred_time", data.preferred_time)
        .maybeSingle();
      if (taken) throw new Error("That slot is already booked. Please choose another time.");
    }

    const { error } = await sb.from("contact_enquiries").insert({
      kind: data.kind,
      name: data.name,
      email: data.email,
      company: data.company || null,
      topic: data.topic || null,
      message: data.message,
      preferred_date: data.kind === "booking" ? data.preferred_date : null,
      preferred_time: data.kind === "booking" ? data.preferred_time : null,
    });
    if (error) {
      if (error.code === "23505") {
        throw new Error("That slot is already booked. Please choose another time.");
      }
      throw new Error(error.message);
    }

    const booking =
      data.kind === "booking" && data.preferred_date && data.preferred_time
        ? {
            name: data.name,
            email: data.email,
            date: data.preferred_date,
            time: data.preferred_time,
            topic: data.message,
          }
        : null;
    const links = booking ? bookingCalendarLinks(booking) : null;
    const ics = booking ? bookingIcs(booking) : undefined;
    const subject = booking
      ? `Call booking from ${data.name}`
      : `New website message from ${data.name}`;
    const text = booking
      ? [
          data.message,
          "",
          `From: ${data.name} <${data.email}>`,
          `When: ${booking.date} at ${booking.time} UK`,
          "",
          `Add this call to the calendar: ${links?.google}`,
        ].join("\n")
      : [
          data.message,
          "",
          `From: ${data.name} <${data.email}>`,
          `Company: ${data.company || "—"}`,
          `Topic: ${data.topic || "—"}`,
        ].join("\n");

    const inbox = CONTACT_EMAIL;
    const sent = await notifyInbox(subject, text, ics, inbox, data.email, data.name).catch((err: unknown) => ({
      ok: false as const,
      error: err instanceof Error ? err.message : "Email failed",
    }));
    if (!sent.ok) {
      const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SECRET_KEY;
      if (key) {
        const admin = createClient<Database>(process.env.SUPABASE_URL!, key, {
          auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
        });
        const removal = admin.from("contact_enquiries").delete().eq("kind", data.kind).eq("email", data.email);
        if (booking) {
          await removal.eq("preferred_date", booking.date).eq("preferred_time", booking.time);
        } else {
          await removal.eq("message", data.message);
        }
      }
      throw new Error(sent.error || `The message could not be emailed to ${inbox}.`);
    }

    return { ok: true as const, inbox, emailed: sent.ok, subject, text };
  });

export const listBookedSlots = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb.rpc("list_booked_contact_slots");
  if (error || !data) return [] as { date: string; time: string }[];
  return data
    .filter((row) => row.preferred_date && row.preferred_time)
    .map((row) => ({ date: String(row.preferred_date), time: String(row.preferred_time) }));
});

export const listContactEnquiries = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data, error } = await context.supabase
      .from("contact_enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });
