import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { caseStudyInputSchema, type CaseStudyRow } from "./case-studies-schemas";

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

export const listPublishedCaseStudies = createServerFn({ method: "GET" }).handler(async () => {
  const sb = publicClient();
  const { data, error } = await sb
    .from("case_studies")
    .select("id, slug, title, client_name, summary, cover_image_path, cover_image_alt, tags, industry, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) throw new Error(error.message);
  const withUrls = await Promise.all(
    (data ?? []).map(async (row) => ({
      ...row,
      cover_url: await getSignedCoverUrl(row.cover_image_path),
    })),
  );
  return withUrls;
});

export const getPublishedCaseStudy = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => z.object({ slug: z.string() }).parse(d))
  .handler(async ({ data }) => {
    const sb = publicClient();
    const { data: row, error } = await sb
      .from("case_studies")
      .select("*")
      .eq("status", "published")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as CaseStudyRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

// --- ADMIN ---

export const listAllCaseStudies = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data, error } = await context.supabase
      .from("case_studies")
      .select("id, slug, title, client_name, status, updated_at, published_at")
      .order("updated_at", { ascending: false });
    if (error) throw new Error(error.message);
    return data ?? [];
  });

export const getCaseStudyById = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { data: row, error } = await context.supabase
      .from("case_studies")
      .select("*")
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return { ...(row as unknown as CaseStudyRow), cover_url: await getSignedCoverUrl(row.cover_image_path) };
  });

export const upsertCaseStudy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) => caseStudyInputSchema.parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const now = new Date().toISOString();
    const payload = {
      slug: data.slug,
      title: data.title,
      client_name: data.client_name ?? null,
      summary: data.summary ?? null,
      body_json: data.body_json ?? null,
      body_html: data.body_html ?? null,
      cover_image_path: data.cover_image_path ?? null,
      cover_image_alt: data.cover_image_alt ?? null,
      tags: data.tags,
      industry: data.industry ?? null,
      results: data.results,
      meta_title: data.meta_title ?? null,
      meta_description: data.meta_description ?? null,
      status: data.status,
      published_at: data.status === "published" ? now : null,
      author_id: context.userId,
    };
    if (data.id) {
      const { data: row, error } = await context.supabase
        .from("case_studies")
        .update(payload)
        .eq("id", data.id)
        .select("id, slug")
        .single();
      if (error) throw new Error(error.message);
      return row;
    }
    const { data: row, error } = await context.supabase
      .from("case_studies")
      .insert(payload)
      .select("id, slug")
      .single();
    if (error) throw new Error(error.message);
    return row;
  });

export const deleteCaseStudy = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: { id: string }) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { error } = await context.supabase.from("case_studies").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

// --- AUTH ---

export const checkIsAdmin = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    return { isAdmin: Boolean(data), userId: context.userId };
  });

export const bootstrapFirstAdmin = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) =>
    z.object({ email: z.string().email(), password: z.string().min(8).max(72) }).parse(d),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { count, error: countErr } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");
    if (countErr) throw new Error(countErr.message);
    if ((count ?? 0) > 0) throw new Error("An admin already exists. Ask an existing admin to invite you.");

    const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });
    if (createErr || !created.user) throw new Error(createErr?.message ?? "Could not create user");

    const { error: roleErr } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: created.user.id, role: "admin" });
    if (roleErr) throw new Error(roleErr.message);

    return { ok: true, email: data.email };
  });

export const adminExists = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { count, error } = await supabaseAdmin
    .from("user_roles")
    .select("id", { count: "exact", head: true })
    .eq("role", "admin");
  if (error) throw new Error(error.message);
  return { exists: (count ?? 0) > 0 };
});

export const inviteAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d: unknown) =>
    z.object({ email: z.string().email(), password: z.string().min(8).max(72) }).parse(d),
  )
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase as unknown as ReturnType<typeof publicClient>, context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });
    if (error || !created.user) throw new Error(error?.message ?? "Could not create user");
    const { error: roleErr } = await supabaseAdmin
      .from("user_roles")
      .insert({ user_id: created.user.id, role: "admin" });
    if (roleErr) throw new Error(roleErr.message);
    return { ok: true };
  });
