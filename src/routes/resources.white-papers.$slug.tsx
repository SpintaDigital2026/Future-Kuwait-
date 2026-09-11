import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getPublishedWhitePaper, requestWhitePaperDownload } from "@/lib/white-papers.functions";
import { Download, FileText, Lock } from "lucide-react";

export const Route = createFileRoute("/resources/white-papers/$slug")({
  loader: async ({ params }) => {
    const data = await getPublishedWhitePaper({ data: { slug: params.slug } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || `${loaderData.title} | Future Kuwait`;
    const description = loaderData.meta_description || loaderData.summary || "White paper by Future Kuwait.";
    const og = loaderData.cover_url ?? undefined;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(og ? [{ property: "og:image", content: og }, { name: "twitter:image", content: og }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="text-2xl font-semibold">White paper not found</h1>
      <Link to="/resources/white-papers" className="mt-4 inline-block text-primary hover:underline">Back to white papers</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-14 text-center text-destructive">{error.message}</div>,
  component: DetailPage,
});

function DetailPage() {
  const data = Route.useLoaderData();
  const requestDl = useServerFn(requestWhitePaperDownload);
  const [unlocking, setUnlocking] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  async function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    setUnlockError(null);
    setUnlocking(true);
    try {
      const res = await requestDl({ data: { slug: data.slug } });
      if (res.url) window.open(res.url, "_blank", "noopener,noreferrer");
    } catch (err) {
      setUnlockError(err instanceof Error ? err.message : "Could not fetch download");
    } finally {
      setUnlocking(false);
    }
  }

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 lg:px-6">
      <Link to="/resources/white-papers" className="text-sm text-ink-soft hover:text-foreground">← All white papers</Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <header className="space-y-3">
            {data.category && <p className="text-xs uppercase tracking-wide text-primary">{data.category}</p>}
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{data.title}</h1>
            {data.summary && <p className="text-lg text-ink-soft">{data.summary}</p>}
          </header>

          {data.body_html && (
            <div
              className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: data.body_html }}
            />
          )}

          {data.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-1.5">
              {data.tags.map((t: string) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-soft">{t}</span>
              ))}
            </div>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-xl border bg-background">
            {data.cover_url ? (
              <img src={data.cover_url} alt={data.cover_image_alt ?? data.title} className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-muted to-muted/40">
                <FileText className="h-14 w-14 text-muted-foreground/40" />
              </div>
            )}
            <div className="space-y-4 p-5">
              {data.page_count && <p className="text-xs text-ink-soft">{data.page_count} pages</p>}

              {!data.gated && data.pdf_url && (
                <a
                  href={data.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              )}

              {data.gated && (
                <form onSubmit={handleUnlock} className="space-y-2.5">
                  <p className="flex items-center gap-1.5 text-xs text-ink-soft">
                    <Lock className="h-3 w-3" /> Share your details to download
                  </p>
                  <input required placeholder="Full name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className={input} />
                  <input required type="email" placeholder="Work email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className={input} />
                  <input placeholder="Company (optional)" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} className={input} />
                  <button type="submit" disabled={unlocking} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                    <Download className="h-4 w-4" /> {unlocking ? "Preparing…" : "Get the white paper"}
                  </button>
                  {unlockError && <p className="text-xs text-destructive">{unlockError}</p>}
                </form>
              )}

              {!data.pdf_url && !data.gated && (
                <p className="text-xs text-ink-soft">PDF is being prepared. Please check back soon.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

const input = "w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30";
