import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/lib/blogs.functions";
import { BlogEditor } from "@/components/admin/BlogEditor";

export const Route = createFileRoute("/_authenticated/admin/blogs/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getBlogById);
  const { data, isLoading } = useQuery({ queryKey: ["admin", "blog", id], queryFn: () => get({ data: { id } }) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data) return <p className="text-sm text-muted-foreground">Not found.</p>;

  return (
    <BlogEditor
      initial={{
        id: data.id,
        slug: data.slug,
        title: data.title,
        excerpt: data.excerpt ?? "",
        body_json: data.body_json,
        body_html: data.body_html ?? "",
        cover_image_path: data.cover_image_path,
        cover_image_alt: data.cover_image_alt ?? "",
        tags: data.tags ?? [],
        category: data.category ?? "",
        author_name: data.author_name ?? "",
        reading_minutes: data.reading_minutes ?? null,
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        status: data.status,
        cover_url: data.cover_url,
      }}
    />
  );
}
