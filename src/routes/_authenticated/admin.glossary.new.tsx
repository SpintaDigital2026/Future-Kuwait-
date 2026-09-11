import { createFileRoute } from "@tanstack/react-router";
import { GlossaryEditor } from "@/components/admin/GlossaryEditor";

export const Route = createFileRoute("/_authenticated/admin/glossary/new")({
  component: () => <GlossaryEditor />,
});
