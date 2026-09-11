import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEvent, listAllEvents } from "@/lib/events.functions";
import { Pencil, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/events")({
  component: EventsList,
});

function EventsList() {
  const list = useServerFn(listAllEvents);
  const del = useServerFn(deleteEvent);
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({ queryKey: ["admin", "events"], queryFn: () => list() });

  const removeMut = useMutation({
    mutationFn: (id: string) => del({ data: { id } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "events"] }),
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Events & Webinars</h2>
          <p className="mt-1 text-sm text-muted-foreground">Schedule events and webinars and share registration links.</p>
        </div>
        <Link to="/admin/events/new" className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4" /> New event
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border bg-background">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Starts</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y">
            {isLoading && <tr><td className="px-4 py-6 text-muted-foreground" colSpan={5}>Loading…</td></tr>}
            {!isLoading && (data?.length ?? 0) === 0 && (
              <tr><td className="px-4 py-10 text-center text-muted-foreground" colSpan={5}>
                No events yet. <Link to="/admin/events/new" className="text-foreground underline-offset-4 hover:underline">Create your first one</Link>.
              </td></tr>
            )}
            {data?.map((row) => (
              <tr key={row.id}>
                <td className="px-4 py-3 font-medium">{row.title}</td>
                <td className="px-4 py-3 text-muted-foreground capitalize">{row.event_type}</td>
                <td className="px-4 py-3 text-muted-foreground">{new Date(row.start_at).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-xs ${row.status === "published" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>{row.status}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex items-center gap-1">
                    <Link to="/admin/events/$id" params={{ id: row.id }} className="rounded p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground" aria-label="Edit"><Pencil className="h-4 w-4" /></Link>
                    <button
                      onClick={() => { if (confirm(`Delete "${row.title}"?`)) removeMut.mutate(row.id); }}
                      className="rounded p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
