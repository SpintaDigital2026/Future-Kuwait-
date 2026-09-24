import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listPublishedCaseStudies } from "@/lib/case-studies.functions";
import caseStudyAsset from "@/assets/client-2026/homepage-hero-02.jpg.asset.json";

export const Route = createFileRoute("/resources/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — FCC" },
      { name: "description", content: "Explore how FCC has helped organisations transform with technology." },
      { property: "og:title", content: "Case Studies — FCC" },
      { property: "og:description", content: "Explore how FCC has helped organisations transform with technology." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const list = useServerFn(listPublishedCaseStudies);
  const { data, isLoading } = useQuery({ queryKey: ["public", "case-studies"], queryFn: () => list() });
  const items = data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <header className="grid items-center gap-8 overflow-hidden rounded-2xl bg-brand-wash p-7 md:grid-cols-2 md:p-10">
        <div><h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="mt-4 text-lg text-ink-soft">Real outcomes from organisations — how we have helped them modernise, secure, and grow with technology.</p></div>
        <img src={caseStudyAsset.url} alt="FCC transformation case studies" className="aspect-[16/9] w-full rounded-xl object-cover" />
      </header>

      <div className="mt-12">
        {isLoading && <p className="text-sm text-ink-soft">Loading…</p>}
        {!isLoading && items.length === 0 && (
          <p className="rounded-md border border-dashed p-8 text-center text-sm text-ink-soft">
            Case studies are coming soon. Check back shortly.
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs) => (
            <Link
              key={cs.id}
              to="/resources/case-studies/$slug"
              params={{ slug: cs.slug }}
              className="group overflow-hidden rounded-xl border bg-background transition hover:shadow-md"
            >
              {cs.cover_url ? (
                <img src={cs.cover_url} alt={cs.cover_image_alt || cs.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              ) : (
                <img src={caseStudyAsset.url} alt="FCC transformation case studies" className="aspect-[16/9] w-full object-cover" loading="lazy" />
              )}
              <div className="p-5">
                {cs.client_name && <p className="text-xs uppercase tracking-wide text-ink-soft">{cs.client_name}</p>}
                <h2 className="mt-1 text-lg font-semibold leading-snug group-hover:text-primary">{cs.title}</h2>
                {cs.summary && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{cs.summary}</p>}
                {cs.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-ink-soft">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
