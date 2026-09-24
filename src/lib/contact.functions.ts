import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { CONTACT_EMAIL } from "./contact";

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

async function notifyInbox(subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const to = process.env.CONTACT_INBOX_EMAIL || CONTACT_EMAIL;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "FCC Website <noreply@fcc.uk>",
      to: [to],
      subject,
      text,
    }),
  });
  return res.ok;
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

    const subject =
      data.kind === "booking"
        ? `New call booking: ${data.name} · ${data.preferred_date} ${data.preferred_time}`
        : `New website message from ${data.name}`;
    const text = [
      `Kind: ${data.kind}`,
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Topic: ${data.topic || "—"}`,
      data.kind === "booking" ? `Slot: ${data.preferred_date} ${data.preferred_time} UK` : null,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    await notifyInbox(subject, text).catch(() => false);

    return { ok: true as const, inbox: CONTACT_EMAIL };
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
