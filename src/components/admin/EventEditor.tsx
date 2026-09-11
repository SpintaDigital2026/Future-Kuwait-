import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { upsertEvent } from "@/lib/events.functions";
import { eventInputSchema, type EventInput } from "@/lib/events-schemas";
import { slugify } from "@/lib/slug";
import { RichTextEditor } from "@/components/admin/RichTextEditor";
import { ImageUploader } from "@/components/admin/ImageUploader";

interface Props {
  initial?: Partial<EventInput> & { id?: string; cover_url?: string | null };
}

function toLocalInputValue(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromLocalInputValue(v: string): string {
  return v ? new Date(v).toISOString() : "";
}

export function EventEditor({ initial }: Props) {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const save = useServerFn(upsertEvent);

  const [form, setForm] = useState<EventInput>({
    id: initial?.id,
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    summary: initial?.summary ?? "",
    body_json: initial?.body_json ?? null,
    body_html: initial?.body_html ?? "",
    cover_image_path: initial?.cover_image_path ?? null,
    cover_image_alt: initial?.cover_image_alt ?? "",
    event_type: initial?.event_type ?? "event",
    start_at: initial?.start_at ?? "",
    end_at: initial?.end_at ?? "",
    timezone: initial?.timezone ?? (Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"),
    location: initial?.location ?? "",
    is_online: initial?.is_online ?? false,
    registration_url: initial?.registration_url ?? "",
    host_name: initial?.host_name ?? "",
    tags: initial?.tags ?? [],
    meta_title: initial?.meta_title ?? "",
    meta_description: initial?.meta_description ?? "",
    status: initial?.status ?? "draft",
  });
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const previewUrl = initial?.cover_url ?? null;

  const mut = useMutation({
    mutationFn: (status: "draft" | "published") => {
      const payload = { ...form, status };
      const parsed = eventInputSchema.parse(payload);
      return save({ data: parsed });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "events"] });
      navigate({ to: "/admin/events" });
    },
    onError: (e: Error) => setError(e.message),
  });

  function updateTitle(v: string) {
    setForm((f) => ({ ...f, title: v, slug: f.slug || slugify(v) }));
  }
  function addTag() {
    const t = tagInput.trim();
    if (!t || form.tags.includes(t)) return;
    setForm((f) => ({ ...f, tags: [...f.tags, t] }));
    setTagInput("");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">{initial?.id ? "Edit event" : "New event"}</h2>
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
          <div className="grid gap-4 sm:grid-cols-[1fr_180px]">
            <Field label="Title">
              <input value={form.title} onChange={(e) => updateTitle(e.target.value)} className={input} />
            </Field>
            <Field label="Type">
              <select value={form.event_type} onChange={(e) => setForm((f) => ({ ...f, event_type: e.target.value as "event" | "webinar" }))} className={input}>
                <option value="event">Event</option>
                <option value="webinar">Webinar</option>
              </select>
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Slug" hint="URL: /resources/events-webinars/{slug}">
              <input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: slugify(e.target.value) }))} className={input} />
            </Field>
            <Field label="Host name">
              <input value={form.host_name ?? ""} onChange={(e) => setForm((f) => ({ ...f, host_name: e.target.value }))} className={input} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Starts at">
              <input
                type="datetime-local"
                value={toLocalInputValue(form.start_at)}
                onChange={(e) => setForm((f) => ({ ...f, start_at: fromLocalInputValue(e.target.value) }))}
                className={input}
              />
            </Field>
            <Field label="Ends at">
              <input
                type="datetime-local"
                value={toLocalInputValue(form.end_at)}
                onChange={(e) => setForm((f) => ({ ...f, end_at: fromLocalInputValue(e.target.value) }))}
                className={input}
              />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Timezone" hint="IANA, e.g. Asia/Kuwait">
              <input value={form.timezone} onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value }))} className={input} />
            </Field>
            <Field label="Location" hint="Venue or 'Online'">
              <input value={form.location ?? ""} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} className={input} />
            </Field>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="is_online"
              type="checkbox"
              checked={form.is_online}
              onChange={(e) => setForm((f) => ({ ...f, is_online: e.target.checked }))}
              className="h-4 w-4 rounded border"
            />
            <label htmlFor="is_online" className="text-sm">This event/webinar is fully online</label>
          </div>
          <Field label="Registration URL" hint="External signup link (optional)">
            <input type="url" value={form.registration_url ?? ""} onChange={(e) => setForm((f) => ({ ...f, registration_url: e.target.value }))} placeholder="https://…" className={input} />
          </Field>
          <Field label="Summary" hint="Shown on cards and at the top of the page.">
            <textarea value={form.summary ?? ""} onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))} rows={3} className={input} />
          </Field>
          <Field label="Body">
            <RichTextEditor valueJson={form.body_json} onChange={(j, h) => setForm((f) => ({ ...f, body_json: j, body_html: h }))} />
          </Field>
        </div>

        <div className="space-y-5">
          <Field label="Cover image">
            <ImageUploader value={form.cover_image_path ?? null} previewUrl={previewUrl} folder="events/covers" onChange={(p) => setForm((f) => ({ ...f, cover_image_path: p }))} />
          </Field>
          <Field label="Cover image alt text">
            <input value={form.cover_image_alt ?? ""} onChange={(e) => setForm((f) => ({ ...f, cover_image_alt: e.target.value }))} className={input} />
          </Field>
          <Field label="Tags">
            <div className="flex flex-wrap gap-1.5">
              {form.tags.map((t) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full bg-muted px-2 py-0.5 text-xs">
                  {t}
                  <button type="button" onClick={() => setForm((f) => ({ ...f, tags: f.tags.filter((x) => x !== t) }))} className="text-muted-foreground hover:text-destructive">×</button>
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-2">
              <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }} placeholder="Add tag…" className={input} />
              <button type="button" onClick={addTag} className="rounded-md border px-3 text-sm hover:bg-muted">Add</button>
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
