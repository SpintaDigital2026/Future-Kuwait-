import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listPublishedWhitePapers } from "@/lib/white-papers.functions";
import { Lock } from "lucide-react";
import whitePapersAsset from "@/assets/client-2026/white-papers.jpg.asset.json";

export const Route = createFileRoute("/resources/white-papers")({
  head: () => ({
    meta: [
      { title: "White Papers — FCC" },
      { name: "description", content: "In-depth research and strategic guides on technology and transformation." },
      { property: "og:title", content: "White Papers — FCC" },
      { property: "og:description", content: "In-depth research and strategic guides on technology and transformation." },
    ],
  }),
  component: WhitePapersPage,
});

function WhitePapersPage() {
  const list = useServerFn(listPublishedWhitePapers);
  const { data, isLoading } = useQuery({ queryKey: ["public", "white-papers"], queryFn: () => list() });
  const items = data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <header className="grid items-center gap-8 overflow-hidden rounded-2xl bg-brand-wash p-7 md:grid-cols-2 md:p-10">
        <div><h1 className="text-4xl font-bold tracking-tight">White Papers</h1>
        <p className="mt-4 text-lg text-ink-soft">In-depth research and strategic guides on technology and transformation.</p></div>
        <img src={whitePapersAsset.url} alt="Technology research and strategic guides" className="aspect-[16/9] w-full rounded-xl object-cover" />
      </header>

      <div className="mt-12">
        {isLoading && <p className="text-sm text-ink-soft">Loading…</p>}
        {!isLoading && items.length === 0 && (
          <p className="rounded-md border border-dashed p-8 text-center text-sm text-ink-soft">
            White papers are coming soon. Check back shortly.
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((wp) => (
            <Link
              key={wp.id}
              to="/resources/white-papers/$slug"
              params={{ slug: wp.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border bg-background transition hover:shadow-md"
            >
              {wp.cover_url ? (
                <img src={wp.cover_url} alt={wp.cover_image_alt || wp.title} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              ) : (
                <img src={whitePapersAsset.url} alt="Technology research and strategic guides" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              )}
              <div className="flex flex-1 flex-col p-5">
                {wp.category && <p className="text-xs uppercase tracking-wide text-ink-soft">{wp.category}</p>}
                <h2 className="mt-1 text-lg font-semibold leading-snug group-hover:text-primary">{wp.title}</h2>
                {wp.summary && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{wp.summary}</p>}
                <div className="mt-4 flex items-center gap-3 text-xs text-ink-soft">
                  {wp.page_count && <span>{wp.page_count} pages</span>}
                  {wp.gated && <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> Gated</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
