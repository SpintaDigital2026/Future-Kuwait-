import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { blogInputSchema, type BlogRow } from "./blogs-schemas";

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

export const listPublishedBlogs = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("blogs")
    .select("id, slug, title, excerpt, cover_image_path, cover_image_alt, tags, category, author_name, reading_minutes, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) throw new Error(error.message);
  return Promise.all(
    (data ?? []).map(async (row) => ({ ...row, cover_url: await getSignedCoverUrl(row.cover_image_path) })),
  );
});

export const getPublishedBlog = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb
      .from("blogs")
      .select("*")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as BlogRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

// --- ADMIN ---

export const listAllBlogs = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data, error } = await context.supabase
      .from("blogs")
      .select("id, slug, title, author_name, status, updated_at, published_at")
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getBlogById = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data: row, error } = await context.supabase
      .from("blogs")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as BlogRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

export const upsertBlog = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => blogInputSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const now = new Date().toISOString();
    const payload = {
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt ?? null,
      body_json: data.body_json ?? null,
      body_html: data.body_html ?? null,
      cover_image_path: data.cover_image_path ?? null,
      cover_image_alt: data.cover_image_alt ?? null,
      tags: data.tags,
      category: data.category ?? null,
      author_name: data.author_name ?? null,
      reading_minutes: data.reading_minutes ?? null,
      meta_title: data.meta_title ?? null,
      meta_description: data.meta_description ?? null,
      status: data.status,
      published_at: data.status === "published" ? now : null,
      author_id: context.userId,
    };
    if (data.id) {
      const { data: row, error } = await context.supabase
        .from("blogs")
        .update(payload)
        .eq("id", data.id)
        .select("id, slug")
        .single();
      if (error) throw new Error(error.message);
      return row;
    }
    const { data: row, error } = await context.supabase
      .from("blogs")
      .insert(payload)
      .select("id, slug")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteBlog = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { error } = await context.supabase.from("blogs").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
