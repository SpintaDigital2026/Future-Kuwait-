import { createFileRoute } from "@tanstack/react-router";
import { BlogEditor } from "@/components/admin/BlogEditor";

export const Route = createFileRoute("/_authenticated/admin/blogs/new")({
  component: () => <BlogEditor />,
});
