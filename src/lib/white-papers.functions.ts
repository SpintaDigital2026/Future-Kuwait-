import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { whitePaperInputSchema, type WhitePaperRow } from "./white-papers-schemas";

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

async function getSignedUrl(path: string | null, ttlSeconds = 60 * 60 * 24): Promise<string | null> {
  if (!path) return null;
  const sb = publicClient();
  const { data } = await sb.storage.from("resources").createSignedUrl(path, ttlSeconds);
  return data?.signedUrl ?? null;
}

// --- PUBLIC ---

export const listPublishedWhitePapers = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("white_papers")
    .select("id, slug, title, summary, cover_image_path, cover_image_alt, tags, category, page_count, gated, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) throw new Error(error.message);
  return Promise.all(
    (data ?? []).map(async (row) => ({ ...row, cover_url: await getSignedUrl(row.cover_image_path) })),
  );
});

export const getPublishedWhitePaper = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb
      .from("white_papers")
      .select("*")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return {
      ...(row as unknown as WhitePaperRow),
      cover_url: await getSignedUrl(row.cover_image_path),
      pdf_url: row.gated ? null : await getSignedUrl(row.pdf_path),
    };
  });

// Issue a fresh signed download URL (for gated or general download tracking)
export const requestWhitePaperDownload = createServerFn({ method: "POST" })
  .inputValidator((d: { slug: string }) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb
      .from("white_papers")
      .select("pdf_path")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row?.pdf_path) throw new Error("PDF not available");
    return { url: await getSignedUrl(row.pdf_path, 60 * 10) };
  });

// --- ADMIN ---

export const listAllWhitePapers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data, error } = await context.supabase
      .from("white_papers")
      .select("id, slug, title, category, status, updated_at, published_at")
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getWhitePaperById = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data: row, error } = await context.supabase
      .from("white_papers")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return {
      ...(row as unknown as WhitePaperRow),
      cover_url: await getSignedUrl(row.cover_image_path),
      pdf_url: await getSignedUrl(row.pdf_path),
    };
  });

export const upsertWhitePaper = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => whitePaperInputSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const now = new Date().toISOString();
    const payload = {
      slug: data.slug,
      title: data.title,
      summary: data.summary ?? null,
      body_json: data.body_json ?? null,
      body_html: data.body_html ?? null,
      cover_image_path: data.cover_image_path ?? null,
      cover_image_alt: data.cover_image_alt ?? null,
      pdf_path: data.pdf_path ?? null,
      pdf_filename: data.pdf_filename ?? null,
      category: data.category ?? null,
      tags: data.tags,
      page_count: data.page_count ?? null,
      gated: data.gated,
      meta_title: data.meta_title ?? null,
      meta_description: data.meta_description ?? null,
      status: data.status,
      published_at: data.status === "published" ? now : null,
      author_id: context.userId,
    };
    if (data.id) {
      const { data: row, error } = await context.supabase
        .from("white_papers")
        .update(payload)
        .eq("id", data.id)
        .select("id, slug")
        .single();
      if (error) throw new Error(error.message);
      return row;
    }
    const { data: row, error } = await context.supabase
      .from("white_papers")
      .insert(payload)
      .select("id, slug")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteWhitePaper = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { error } = await context.supabase.from("white_papers").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
