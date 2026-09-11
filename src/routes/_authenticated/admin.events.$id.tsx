import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { getEventById } from "@/lib/events.functions";
import { EventEditor } from "@/components/admin/EventEditor";

export const Route = createFileRoute("/_authenticated/admin/events/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  const get = useServerFn(getEventById);
  const { data, isLoading } = useQuery({ queryKey: ["admin", "event", id], queryFn: () => get({ data: { id } }) });

  if (isLoading) return <p className="text-sm text-muted-foreground">Loading…</p>;
  if (!data) return <p className="text-sm text-muted-foreground">Not found.</p>;

  return (
    <EventEditor
      initial={{
        id: data.id,
        slug: data.slug,
        title: data.title,
        summary: data.summary ?? "",
        body_json: data.body_json,
        body_html: data.body_html ?? "",
        cover_image_path: data.cover_image_path,
        cover_image_alt: data.cover_image_alt ?? "",
        event_type: data.event_type,
        start_at: data.start_at,
        end_at: data.end_at ?? "",
        timezone: data.timezone,
        location: data.location ?? "",
        is_online: data.is_online,
        registration_url: data.registration_url ?? "",
        host_name: data.host_name ?? "",
        tags: data.tags ?? [],
        meta_title: data.meta_title ?? "",
        meta_description: data.meta_description ?? "",
        status: data.status,
        cover_url: data.cover_url,
      }}
    />
  );
}
