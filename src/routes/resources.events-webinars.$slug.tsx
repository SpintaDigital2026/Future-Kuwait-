import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPublishedEvent } from "@/lib/events.functions";
import { Calendar, MapPin, Video, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/resources/events-webinars/$slug")({
  loader: async ({ params }) => {
    const data = await getPublishedEvent({ data: { slug: params.slug } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || `${loaderData.title} | Future Kuwait`;
    const description = loaderData.meta_description || loaderData.summary || "Event by Future Kuwait.";
    const og = loaderData.cover_url ?? undefined;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(og ? [{ property: "og:image", content: og }, { name: "twitter:image", content: og }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-14 text-center">
      <h1 className="text-2xl font-semibold">Event not found</h1>
      <Link to="/resources/events-webinars" className="mt-4 inline-block text-primary hover:underline">Back to events</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="mx-auto max-w-3xl px-4 py-14 text-center text-destructive">{error.message}</div>,
  component: DetailPage,
});

function formatRange(startIso: string, endIso: string | null, tz: string) {
  const start = new Date(startIso);
  const opts: Intl.DateTimeFormatOptions = { dateStyle: "full", timeStyle: "short", timeZone: tz };
  if (!endIso) return start.toLocaleString("en-GB", opts);
  const end = new Date(endIso);
  const sameDay = start.toDateString() === end.toDateString();
  if (sameDay) {
    const date = start.toLocaleDateString("en-GB", { dateStyle: "full", timeZone: tz });
    const s = start.toLocaleTimeString("en-GB", { timeStyle: "short", timeZone: tz });
    const e = end.toLocaleTimeString("en-GB", { timeStyle: "short", timeZone: tz });
    return `${date} · ${s} – ${e}`;
  }
  return `${start.toLocaleString("en-GB", opts)} – ${end.toLocaleString("en-GB", opts)}`;
}

function DetailPage() {
  const data = Route.useLoaderData();
  const upcoming = new Date(data.end_at ?? data.start_at).getTime() >= Date.now();

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
      <Link to="/resources/events-webinars" className="text-sm text-ink-soft hover:text-foreground">← All events</Link>
      <header className="mt-6 space-y-3">
        <p className="text-xs uppercase tracking-wide text-primary">{data.event_type}{!upcoming && " · Past"}</p>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">{data.title}</h1>
        {data.summary && <p className="text-lg text-ink-soft">{data.summary}</p>}
      </header>

      {data.cover_url && (
        <img src={data.cover_url} alt={data.cover_image_alt ?? data.title} className="mt-8 aspect-[16/9] w-full rounded-xl object-cover" />
      )}

      <div className="mt-8 grid gap-6 rounded-xl border bg-muted/30 p-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">When</p>
            <p className="mt-0.5 text-sm font-medium">{formatRange(data.start_at, data.end_at, data.timezone)}</p>
            <p className="text-xs text-ink-soft">{data.timezone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          {data.is_online ? <Video className="mt-0.5 h-5 w-5 text-primary" /> : <MapPin className="mt-0.5 h-5 w-5 text-primary" />}
          <div>
            <p className="text-xs uppercase tracking-wide text-ink-soft">Where</p>
            <p className="mt-0.5 text-sm font-medium">{data.is_online ? (data.location || "Online") : (data.location || "TBA")}</p>
            {data.host_name && <p className="text-xs text-ink-soft">Hosted by {data.host_name}</p>}
          </div>
        </div>
      </div>

      {upcoming && data.registration_url && (
        <div className="mt-6">
          <a
            href={data.registration_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Register now <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}

      {data.body_html && (
        <div
          className="prose prose-lg mt-10 max-w-none prose-headings:font-semibold prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: data.body_html }}
        />
      )}

      {data.tags?.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-1.5">
          {data.tags.map((t: string) => (
            <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-soft">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}
