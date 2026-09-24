import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPublishedGlossaryTerm } from "@/lib/glossary.functions";

export const Route = createFileRoute("/resources/glossary/$slug")({
  loader: async ({ params }) => {
    const data = await getPublishedGlossaryTerm({ data: { slug: params.slug } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || `${loaderData.term} | Glossary | FCC`;
    const description = loaderData.meta_description || loaderData.short_definition;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="text-2xl font-semibold">Term not found</h1>
      <Link to="/resources/glossary" className="mt-4 inline-block text-primary hover:underline">Back to glossary</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-14 text-center text-destructive">{error.message}</div>,
  component: DetailPage,
});

function DetailPage() {
  const data = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <Link to="/resources/glossary" className="text-sm text-ink-soft hover:text-foreground">← All terms</Link>
      <header className="mt-6 space-y-2">
        {data.category && <p className="text-xs uppercase tracking-wide text-primary">{data.category}</p>}
        <h1 className="text-4xl font-bold tracking-tight">{data.term}</h1>
        <p className="text-lg text-ink-soft">{data.short_definition}</p>
      </header>

      {data.body_html && (
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        />
      )}

      {data.related_terms?.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">Related terms</h2>
          <div className="flex flex-wrap gap-1.5">
            {data.related_terms.map((t: string) => (
              <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs">{t}</span>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
