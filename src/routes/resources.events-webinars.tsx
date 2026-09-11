import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listPublishedEvents } from "@/lib/events.functions";
import { Calendar, MapPin, Video } from "lucide-react";
import eventsAsset from "@/assets/client-2026/events-webinars-01.jpg.asset.json";

export const Route = createFileRoute("/resources/events-webinars")({
  head: () => ({
    meta: [
      { title: "Events & Webinars — Future Kuwait" },
      { name: "description", content: "Upcoming and on-demand events, webinars and roundtables from Future Kuwait." },
      { property: "og:title", content: "Events & Webinars — Future Kuwait" },
      { property: "og:description", content: "Upcoming and on-demand events, webinars and roundtables from Future Kuwait." },
    ],
  }),
  component: EventsPage,
});

function formatRange(startIso: string, endIso: string | null, tz: string) {
  const start = new Date(startIso);
  const opts: Intl.DateTimeFormatOptions = { dateStyle: "medium", timeStyle: "short", timeZone: tz };
  if (!endIso) return start.toLocaleString("en-GB", opts);
  const end = new Date(endIso);
  const sameDay = start.toDateString() === end.toDateString();
  if (sameDay) {
    const date = start.toLocaleDateString("en-GB", { dateStyle: "medium", timeZone: tz });
    const s = start.toLocaleTimeString("en-GB", { timeStyle: "short", timeZone: tz });
    const e = end.toLocaleTimeString("en-GB", { timeStyle: "short", timeZone: tz });
    return `${date} · ${s} – ${e}`;
  }
  return `${start.toLocaleString("en-GB", opts)} – ${end.toLocaleString("en-GB", opts)}`;
}

function EventsPage() {
  const list = useServerFn(listPublishedEvents);
  const { data, isLoading } = useQuery({ queryKey: ["public", "events"], queryFn: () => list() });
  const items = data ?? [];
  const now = Date.now();
  const upcoming = items.filter((e) => new Date(e.end_at ?? e.start_at).getTime() >= now);
  const past = items.filter((e) => new Date(e.end_at ?? e.start_at).getTime() < now).reverse();

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
      <header className="grid items-center gap-8 overflow-hidden rounded-2xl bg-brand-wash p-7 md:grid-cols-2 md:p-10">
        <div><h1 className="text-4xl font-bold tracking-tight">Events & Webinars</h1>
        <p className="mt-4 text-lg text-ink-soft">Upcoming and on-demand events, webinars and roundtables.</p></div>
        <img src={eventsAsset.url} alt="FCC events and webinars" className="aspect-[16/9] w-full rounded-xl object-cover" />
      </header>

      <div className="mt-12 space-y-16">
        <Section title="Upcoming" items={upcoming} loading={isLoading} emptyMsg="No upcoming events scheduled. Check back soon." />
        {past.length > 0 && <Section title="Past events" items={past} loading={false} emptyMsg="" />}
      </div>
    </div>
  );
}

type Item = {
  id: string; slug: string; title: string; summary: string | null;
  cover_url: string | null; cover_image_alt: string | null;
  event_type: "event" | "webinar"; start_at: string; end_at: string | null;
  timezone: string; location: string | null; is_online: boolean; host_name: string | null;
};

function Section({ title, items, loading, emptyMsg }: { title: string; items: Item[]; loading: boolean; emptyMsg: string }) {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold tracking-tight">{title}</h2>
      {loading && <p className="text-sm text-ink-soft">Loading…</p>}
      {!loading && items.length === 0 && emptyMsg && (
        <p className="rounded-md border border-dashed p-8 text-center text-sm text-ink-soft">{emptyMsg}</p>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <Link
            key={e.id}
            to="/resources/events-webinars/$slug"
            params={{ slug: e.slug }}
            className="group flex flex-col overflow-hidden rounded-xl border bg-background transition hover:shadow-md"
          >
            {e.cover_url ? (
              <img src={e.cover_url} alt={e.cover_image_alt ?? e.title} className="aspect-[16/9] w-full object-cover" loading="lazy" />
            ) : (
              <img src={eventsAsset.url} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" />
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs uppercase tracking-wide text-primary">{e.event_type}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug group-hover:text-primary">{e.title}</h3>
              {e.summary && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{e.summary}</p>}
              <div className="mt-4 space-y-1.5 text-xs text-ink-soft">
                <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatRange(e.start_at, e.end_at, e.timezone)}</div>
                {(e.is_online || e.location) && (
                  <div className="flex items-center gap-1.5">
                    {e.is_online ? <Video className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
                    {e.is_online ? (e.location || "Online") : e.location}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
