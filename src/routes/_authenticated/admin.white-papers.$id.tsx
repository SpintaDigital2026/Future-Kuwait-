import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getWhitePaperById } from "@/lib/white-papers.functions";
import { WhitePaperEditor } from "@/components/admin/WhitePaperEditor";

export const Route = createFileRoute("/_authenticated/admin/white-papers/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getWhitePaperById);
  const { data, isLoading } = useQuery({ queryKey: ["admin", "white-paper", id], queryFn: () => get({ data: { id } }) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data) return <p className="text-sm text-muted-foreground">Not found.</p>;

  return (
    <WhitePaperEditor
      initial={{
        id: data.id,
        slug: data.slug,
        title: data.title,
        summary: data.summary ?? "",
        body_json: data.body_json,
        body_html: data.body_html ?? "",
        cover_image_path: data.cover_image_path,
        cover_image_alt: data.cover_image_alt ?? "",
        pdf_path: data.pdf_path,
        pdf_filename: data.pdf_filename ?? "",
        category: data.category ?? "",
        tags: data.tags ?? [],
        page_count: data.page_count ?? null,
        gated: data.gated,
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        status: data.status,
        cover_url: data.cover_url,
        pdf_url: data.pdf_url,
      }}
    />
  );
}
