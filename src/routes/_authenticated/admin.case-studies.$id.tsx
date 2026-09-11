import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getCaseStudyById } from "@/lib/case-studies.functions";
import { CaseStudyEditor } from "@/components/admin/CaseStudyEditor";

export const Route = createFileRoute("/_authenticated/admin/case-studies/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getCaseStudyById);
  const { data, isLoading } = useQuery({ queryKey: ["admin", "case-study", id], queryFn: () => get({ data: { id } }) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data) return <p className="text-sm text-muted-foreground">Not found.</p>;

  return (
    <CaseStudyEditor
      initial={{
        id: data.id,
        slug: data.slug,
        title: data.title,
        client_name: data.client_name ?? "",
        summary: data.summary ?? "",
        body_json: data.body_json,
        body_html: data.body_html ?? "",
        cover_image_path: data.cover_image_path,
        cover_image_alt: data.cover_image_alt ?? "",
        tags: data.tags ?? [],
        industry: data.industry ?? "",
        results: data.results ?? [],
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        status: data.status,
        cover_url: data.cover_url,
      }}
    />
  );
}
