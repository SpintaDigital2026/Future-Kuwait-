import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listContactEnquiries } from "@/lib/contact.functions";

export const Route = createFileRoute("/_authenticated/admin/enquiries")({
  component: EnquiriesPage,
});

function EnquiriesPage() {
  const list = useServerFn(listContactEnquiries);
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "enquiries"],
    queryFn: () => list(),
  });
  const items = data ?? [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Enquiries</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Messages and booked calls from the contact page.
        </p>
      </div>
      {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
      {!isLoading && items.length === 0 && (
        <p className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
          No enquiries yet.
        </p>
      )}
      <div className="space-y-3">
        {items.map((item) => (
          <article key={item.id} className="rounded-lg border bg-background p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {item.kind === "booking" ? "Booked call" : "Message"} · {item.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(item.created_at).toLocaleString("en-GB")}
              </p>
            </div>
            <p className="mt-2 text-sm">
              {item.email}
              {item.company ? ` · ${item.company}` : ""}
              {item.topic ? ` · ${item.topic}` : ""}
            </p>
            {item.kind === "booking" && (
              <p className="mt-1 text-sm font-medium">
                {item.preferred_date} at {item.preferred_time} UK
              </p>
            )}
            <p className="mt-3 text-sm text-muted-foreground whitespace-pre-wrap">{item.message}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
