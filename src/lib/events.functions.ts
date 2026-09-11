import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { eventInputSchema, type EventRow } from "./events-schemas";

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

async function getSignedCoverUrl(path: string | null): Promise<string | null> {
  if (!path) return null;
  const sb = publicClient();
  const { data } = await sb.storage.from("resources").createSignedUrl(path, 60 * 60 * 24);
  return data?.signedUrl ?? null;
}

// --- PUBLIC ---

export const listPublishedEvents = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("events")
    .select("id, slug, title, summary, cover_image_path, cover_image_alt, tags, event_type, start_at, end_at, timezone, location, is_online, host_name")
    .eq("status", "published")
    .order("start_at", { ascending: true });
  if (error) throw new Error(error.message);
  return Promise.all(
    (data ?? []).map(async (row) => ({ ...row, cover_url: await getSignedCoverUrl(row.cover_image_path) })),
  );
});

export const getPublishedEvent = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb
      .from("events")
      .select("*")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as EventRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

// --- ADMIN ---

export const listAllEvents = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data, error } = await context.supabase
      .from("events")
      .select("id, slug, title, event_type, start_at, status, updated_at")
      .order("start_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getEventById = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data: row, error } = await context.supabase
      .from("events")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as EventRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

export const upsertEvent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => eventInputSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const payload = {
      slug: data.slug,
      title: data.title,
      summary: data.summary ?? null,
      body_json: data.body_json ?? null,
      body_html: data.body_html ?? null,
      cover_image_path: data.cover_image_path ?? null,
      cover_image_alt: data.cover_image_alt ?? null,
      event_type: data.event_type,
      start_at: data.start_at,
      end_at: data.end_at || null,
      timezone: data.timezone,
      location: data.location ?? null,
      is_online: data.is_online,
      registration_url: data.registration_url ? data.registration_url : null,
      host_name: data.host_name ?? null,
      tags: data.tags,
      meta_title: data.meta_title ?? null,
      meta_description: data.meta_description ?? null,
      status: data.status,
      author_id: context.userId,
    };
    if (data.id) {
      const { data: row, error } = await context.supabase
        .from("events")
        .update(payload)
        .eq("id", data.id)
        .select("id, slug")
        .single();
      if (error) throw new Error(error.message);
      return row;
    }
    const { data: row, error } = await context.supabase
      .from("events")
      .insert(payload)
      .select("id, slug")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteEvent = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { error } = await context.supabase.from("events").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
