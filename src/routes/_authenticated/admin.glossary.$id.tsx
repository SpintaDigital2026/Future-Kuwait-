import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getGlossaryTermById } from "@/lib/glossary.functions";
import { GlossaryEditor } from "@/components/admin/GlossaryEditor";

export const Route = createFileRoute("/_authenticated/admin/glossary/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getGlossaryTermById);
  const { data, isLoading } = useQuery({ queryKey: ["admin", "glossary", id], queryFn: () => get({ data: { id } }) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data) return <p className="text-sm text-muted-foreground">Not found.</p>;

  return (
    <GlossaryEditor
      initial={{
        id: data.id,
        slug: data.slug,
        term: data.term,
        short_definition: data.short_definition,
        body_json: data.body_json,
        body_html: data.body_html ?? "",
        category: data.category ?? "",
        related_terms: data.related_terms ?? [],
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        status: data.status,
      }}
    />
  );
}
