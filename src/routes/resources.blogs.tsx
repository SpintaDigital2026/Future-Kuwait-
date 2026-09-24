import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listPublishedBlogs } from "@/lib/blogs.functions";
import blogsAsset from "@/assets/client-2026/blogs.jpg.asset.json";

export const Route = createFileRoute("/resources/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — FCC" },
      { name: "description", content: "Insights, updates and thought leadership from the FCC team." },
      { property: "og:title", content: "Blogs — FCC" },
      { property: "og:description", content: "Insights, updates and thought leadership from the FCC team." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const list = useServerFn(listPublishedBlogs);
  const { data, isLoading } = useQuery({ queryKey: ["public", "blogs"], queryFn: () => list() });
  const items = data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <header className="grid items-center gap-8 overflow-hidden rounded-2xl bg-brand-wash p-7 md:grid-cols-2 md:p-10">
        <div><h1 className="text-4xl font-bold tracking-tight">Blogs</h1>
        <p className="mt-4 text-lg text-ink-soft">Insights, updates and thought leadership from our team.</p></div>
        <img src={blogsAsset.url} alt="Technology insights and thought leadership" className="aspect-[16/9] w-full rounded-xl object-cover" />
      </header>

      <div className="mt-12">
        {isLoading && <p className="text-sm text-ink-soft">Loading…</p>}
        {!isLoading && items.length === 0 && (
          <p className="rounded-md border border-dashed p-8 text-center text-sm text-ink-soft">
            Blog posts are coming soon. Check back shortly.
          </p>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <Link
              key={b.id}
              to="/resources/blogs/$slug"
              params={{ slug: b.slug }}
              className="group overflow-hidden rounded-xl border bg-background transition hover:shadow-md"
            >
              {b.cover_url ? (
                <img src={b.cover_url} alt={b.cover_image_alt ?? b.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
              ) : (
                <img src={blogsAsset.url} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" />
              )}
              <div className="p-5">
                {b.category && <p className="text-xs uppercase tracking-wide text-ink-soft">{b.category}</p>}
                <h2 className="mt-1 text-lg font-semibold leading-snug group-hover:text-primary">{b.title}</h2>
                {b.excerpt && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{b.excerpt}</p>}
                <div className="mt-3 flex items-center gap-2 text-xs text-ink-soft">
                  {b.author_name && <span>{b.author_name}</span>}
                  {b.author_name && b.reading_minutes && <span>·</span>}
                  {b.reading_minutes && <span>{b.reading_minutes} min read</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
