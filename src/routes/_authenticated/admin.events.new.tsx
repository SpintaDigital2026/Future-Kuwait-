import { createFileRoute } from "@tanstack/react-router";
import { EventEditor } from "@/components/admin/EventEditor";

export const Route = createFileRoute("/_authenticated/admin/events/new")({
  component: () => <EventEditor />,
});
