import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getPublishedCaseStudy } from "@/lib/case-studies.functions";
import { featuredCaseStudy } from "@/lib/featured-case-study";
import caseStudyAsset from "@/assets/client-2026/homepage-hero-02.jpg.asset.json";

export const Route = createFileRoute("/resources/case-studies/$slug")({
  loader: async ({ params }) => {
    if (params.slug === featuredCaseStudy.slug) return featuredCaseStudy;
    const data = await getPublishedCaseStudy({ data: { slug: params.slug } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || `${loaderData.title} — Case Study | FCC`;
    const description = loaderData.meta_description || loaderData.summary || "Case study by FCC.";
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
      <h1 className="text-2xl font-semibold">Case study not found</h1>
      <Link to="/resources/case-studies" className="mt-4 inline-block text-primary hover:underline">Back to case studies</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-14 text-center text-destructive">{error.message}</div>,
  component: DetailPage,
});

function DetailPage() {
  const data = Route.useLoaderData();
  const cover = data.cover_url || caseStudyAsset.url;

  return (
    <div>
      <SiteNav />
      <article className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <Link to="/resources/case-studies" className="text-sm text-ink-soft hover:text-foreground">← All case studies</Link>
        <header className="mt-6 space-y-3">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">Case study</p>
          {data.client_name && <p className="text-xs uppercase tracking-wide text-ink-soft">{data.client_name}</p>}
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{data.title}</h1>
          {data.summary && <p className="text-lg text-ink-soft">{data.summary}</p>}
          {(data.industry || data.tags?.length) && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {data.industry && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-soft">{data.industry}</span>}
              {data.tags?.map((t: string) => (
                <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-soft">{t}</span>
              ))}
            </div>
          )}
        </header>

        <img src={cover} alt={data.cover_image_alt || data.title} className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />

        {data.results?.length > 0 && (
          <div className="mt-10 grid gap-4 rounded-xl border bg-muted/30 p-6 sm:grid-cols-3">
            {data.results.map((r: { label: string; value: string }, i: number) => (
              <div key={i}>
                <p className="text-2xl font-semibold text-ink">{r.value}</p>
                <p className="mt-1 text-sm text-ink-soft">{r.label}</p>
              </div>
            ))}
          </div>
        )}

        {data.body_html && (
          <div
            className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: data.body_html }}
          />
        )}

        <div className="mt-14 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep transition-colors"
          >
            Speak to an Expert
            <span aria-hidden>→</span>
          </a>
          <Link
            to="/resources/case-studies"
            className="inline-flex items-center rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand"
          >
            More case studies
          </Link>
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
