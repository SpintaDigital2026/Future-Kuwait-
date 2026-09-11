import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPublishedBlog } from "@/lib/blogs.functions";

export const Route = createFileRoute("/resources/blogs/$slug")({
  loader: async ({ params }) => {
    const data = await getPublishedBlog({ data: { slug: params.slug } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || `${loaderData.title} | Future Kuwait`;
    const description = loaderData.meta_description || loaderData.excerpt || "Blog post by Future Kuwait.";
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
      <h1 className="text-2xl font-semibold">Blog post not found</h1>
      <Link to="/resources/blogs" className="mt-4 inline-block text-primary hover:underline">Back to blogs</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-14 text-center text-destructive">{error.message}</div>,
  component: DetailPage,
});

function DetailPage() {
  const data = Route.useLoaderData();
  const publishedDate = data.published_at ? new Date(data.published_at).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" }) : null;

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
      <Link to="/resources/blogs" className="text-sm text-ink-soft hover:text-foreground">← All blogs</Link>
      <header className="mt-6 space-y-3">
        {data.category && <p className="text-xs uppercase tracking-wide text-primary">{data.category}</p>}
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{data.title}</h1>
        {data.excerpt && <p className="text-lg text-ink-soft">{data.excerpt}</p>}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-sm text-ink-soft">
          {data.author_name && <span>By {data.author_name}</span>}
          {publishedDate && <span>· {publishedDate}</span>}
          {data.reading_minutes && <span>· {data.reading_minutes} min read</span>}
        </div>
        {data.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {data.tags.map((t: string) => (
              <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-soft">{t}</span>
            ))}
          </div>
        )}
      </header>

      {data.cover_url && (
        <img src={data.cover_url} alt={data.cover_image_alt ?? data.title} className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />
      )}

      {data.body_html && (
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        />
      )}
    </article>
  );
}
