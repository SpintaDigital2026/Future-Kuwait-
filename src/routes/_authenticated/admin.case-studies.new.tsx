import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyEditor } from "@/components/admin/CaseStudyEditor";

export const Route = createFileRoute("/_authenticated/admin/case-studies/new")({
  component: () => <CaseStudyEditor />,
});
