import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listAllCaseStudies } from "@/lib/case-studies.functions";
import { listAllBlogs } from "@/lib/blogs.functions";
import { listAllEvents } from "@/lib/events.functions";
import { listAllWhitePapers } from "@/lib/white-papers.functions";
import { listAllGlossary } from "@/lib/glossary.functions";
import { BookA, CalendarDays, FileDown, FileText, Newspaper, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const listCS = useServerFn(listAllCaseStudies);
  const listBlogs = useServerFn(listAllBlogs);
  const listEvents = useServerFn(listAllEvents);
  const listWP = useServerFn(listAllWhitePapers);
  const listGloss = useServerFn(listAllGlossary);
  const { data: cs } = useQuery({ queryKey: ["admin", "case-studies"], queryFn: () => listCS() });
  const { data: blogs } = useQuery({ queryKey: ["admin", "blogs"], queryFn: () => listBlogs() });
  const { data: events } = useQuery({ queryKey: ["admin", "events"], queryFn: () => listEvents() });
  const { data: wps } = useQuery({ queryKey: ["admin", "white-papers"], queryFn: () => listWP() });
  const { data: gloss } = useQuery({ queryKey: ["admin", "glossary"], queryFn: () => listGloss() });
  const csItems = cs ?? [];
  const blogItems = blogs ?? [];
  const eventItems = events ?? [];
  const wpItems = wps ?? [];
  const glossItems = gloss ?? [];
  const all = [...csItems, ...blogItems, ...eventItems, ...wpItems, ...glossItems];
  const totalPublished = all.filter((i) => i.status === "published").length;
  const totalDrafts = all.length - totalPublished;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Welcome back</h2>
        <p className="mt-1 text-sm text-muted-foreground">Manage your resources content from here.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Total items" value={all.length} />
        <Stat label="Published" value={totalPublished} />
        <Stat label="Drafts" value={totalDrafts} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <SectionCard icon={FileText} title="Case Studies" count={csItems.length} newTo="/admin/case-studies/new" allTo="/admin/case-studies" />
        <SectionCard icon={Newspaper} title="Blogs" count={blogItems.length} newTo="/admin/blogs/new" allTo="/admin/blogs" />
        <SectionCard icon={CalendarDays} title="Events & Webinars" count={eventItems.length} newTo="/admin/events/new" allTo="/admin/events" />
        <SectionCard icon={FileDown} title="White Papers" count={wpItems.length} newTo="/admin/white-papers/new" allTo="/admin/white-papers" />
        <SectionCard icon={BookA} title="Glossary" count={glossItems.length} newTo="/admin/glossary/new" allTo="/admin/glossary" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border bg-background p-5">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
}

function SectionCard({ icon: Icon, title, count, newTo, allTo }: { icon: typeof FileText; title: string; count: number; newTo: string; allTo: string }) {
  return (
    <div className="rounded-lg border bg-background">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-2"><Icon className="h-4 w-4 text-muted-foreground" /><h3 className="font-medium">{title}</h3></div>
        <Link to={newTo} className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="h-3.5 w-3.5" /> New
        </Link>
      </div>
      <div className="flex items-center justify-between p-5 text-sm">
        <span className="text-muted-foreground">{count} total</span>
        <Link to={allTo} className="text-foreground underline-offset-4 hover:underline">View all →</Link>
      </div>
    </div>
  );
}

