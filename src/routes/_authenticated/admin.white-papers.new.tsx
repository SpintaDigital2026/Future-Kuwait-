import { createFileRoute } from "@tanstack/react-router";
import { WhitePaperEditor } from "@/components/admin/WhitePaperEditor";

export const Route = createFileRoute("/_authenticated/admin/white-papers/new")({
  component: () => <WhitePaperEditor />,
});
