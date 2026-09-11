import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { upsertGlossaryTerm } from "@/lib/glossary.functions";
import { glossaryInputSchema, type GlossaryInput } from "@/lib/glossary-schemas";
import { slugify } from "@/lib/slug";
import { RichTextEditor } from "@/components/admin/RichTextEditor";

interface Props {
  initial?: Partial<GlossaryInput> & { id?: string };
}

export function GlossaryEditor({ initial }: Props) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const save = useServerFn(upsertGlossaryTerm);

  const [form, setForm] = useState<GlossaryInput>({
    id: initial?.id,
    slug: initial?.slug ?? "",
    term: initial?.term ?? "",
    short_definition: initial?.short_definition ?? "",
    body_json: initial?.body_json ?? null,
    body_html: initial?.body_html ?? "",
    category: initial?.category ?? "",
    related_terms: initial?.related_terms ?? [],
    meta_title: initial?.meta_title ?? "",
    meta_description: initial?.meta_description ?? "",
    status: initial?.status ?? "draft",
  });
  const [relInput, setRelInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const mut = useMutation({
    mutationFn: (status: "draft" | "published") => {
      const parsed = glossaryInputSchema.parse({ ...form, status });
      return save({ data: parsed });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "glossary"] });
      navigate({ to: "/admin/glossary" });
    },
    onError: (e: Error) => setError(e.message),
  });

  function updateTerm(v: string) {
    setForm((f) => ({ ...f, term: v, slug: f.slug || slugify(v) }));
  }
  function addRel() {
    const t = relInput.trim();
    if (!t || form.related_terms.includes(t)) return;
    setForm((f) => ({ ...f, related_terms: [...f.related_terms, t] }));
    setRelInput("");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">{initial?.id ? "Edit term" : "New glossary term"}</h2>
        <div className="flex gap-2">
          <button type="button" onClick={() => mut.mutate("draft")} disabled={mut.isPending}
            className="rounded-md border bg-background px-3 py-2 text-sm font-medium hover:bg-muted disabled:opacity-50">Save draft</button>
          <button type="button" onClick={() => mut.mutate("published")} disabled={mut.isPending}
            className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
            {form.status === "published" ? "Update published" : "Publish"}
          </button>
        </div>
      </div>

      {error && <div className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</div>}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-[1fr_220px]">
            <Field label="Term">
              <input value={form.term} onChange={(e) => updateTerm(e.target.value)} className={input} />
            </Field>
            <Field label="Category">
              <input value={form.category ?? ""} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))} className={input} />
            </Field>
          </div>
          <Field label="Slug" hint="URL: /resources/glossary/{slug}">
            <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))} className={input} />
          </Field>
          <Field label="Short definition" hint="One- or two-sentence summary shown on the glossary index.">
            <textarea value={form.short_definition} onChange={(e) => setForm((f) => ({ ...f, short_definition: e.target.value }))} rows={3} className={input} />
          </Field>
          <Field label="Long-form explanation (optional)">
            <RichTextEditor valueJson={form.body_json} onChange={(j, h) => setForm((f) => ({ ...f, body_json: j, body_html: h }))} />
          </Field>
        </div>

        <div className="space-y-5">
          <Field label="Related terms" hint="Free-text labels shown on the term page.">
            <div className="flex flex-wrap gap-1.5">
              {form.related_terms.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs">
                  {t}
                  <button type="button" onClick={() => setForm((f) => ({ ...f, related_terms: f.related_terms.filter((x) => x !== t) }))} className="text-muted-foreground hover:text-destructive">×</button>
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <input value={relInput} onChange={(e) => setRelInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addRel(); } }} placeholder="Add related term…" className={input} />
              <button type="button" onClick={addRel} className="rounded-md border px-3 text-sm hover:bg-muted">Add</button>
            </div>
          </Field>
          <div className="rounded-lg border bg-background p-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">SEO</p>
            <Field label="Meta title">
              <input value={form.meta_title ?? ""} onChange={(e) => setForm((f) => ({ ...f, meta_title: e.target.value }))} className={input} />
            </Field>
            <div className="h-3" />
            <Field label="Meta description">
              <textarea value={form.meta_description ?? ""} onChange={(e) => setForm((f) => ({ ...f, meta_description: e.target.value }))} rows={3} className={input} />
            </Field>
          </div>
        </div>
      </div>
    </div>
  );
}

const input = "w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {children}
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </label>
  );
}
