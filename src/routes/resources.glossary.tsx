import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { listPublishedGlossary } from "@/lib/glossary.functions";
import { Search } from "lucide-react";
import glossaryAsset from "@/assets/client-2026/glossary-01.jpg.asset.json";

export const Route = createFileRoute("/resources/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary — Future Kuwait" },
      { name: "description", content: "A quick reference for key terms and concepts across our solutions." },
      { property: "og:title", content: "Glossary — Future Kuwait" },
      { property: "og:description", content: "A quick reference for key terms and concepts across our solutions." },
    ],
  }),
  component: GlossaryPage,
});

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function GlossaryPage() {
  const list = useServerFn(listPublishedGlossary);
  const { data, isLoading } = useQuery({ queryKey: ["public", "glossary"], queryFn: () => list() });
  const [q, setQ] = useState("");
  const items = data ?? [];

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return items;
    return items.filter((t) => t.term.toLowerCase().includes(needle) || t.short_definition.toLowerCase().includes(needle));
  }, [items, q]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const t of filtered) {
      const letter = (t.term[0] ?? "#").toUpperCase();
      const key = /[A-Z]/.test(letter) ? letter : "#";
      const arr = map.get(key) ?? [];
      arr.push(t);
      map.set(key, arr);
    }
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

  const presentKeys = new Set(grouped.map(([k]) => k));

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 lg:px-6">
      <header className="grid items-center gap-8 overflow-hidden rounded-2xl bg-brand-wash p-7 md:grid-cols-2 md:p-10">
        <div><h1 className="text-4xl font-bold tracking-tight">Glossary</h1>
        <p className="mt-4 text-lg text-ink-soft">A quick reference for key terms and concepts across our solutions.</p></div>
        <img src={glossaryAsset.url} alt="Technology glossary and reference" className="aspect-[16/9] w-full rounded-xl object-cover" />
      </header>

      <div className="mt-8 space-y-4">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search terms…"
            className="w-full rounded-md border bg-background py-2 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {LETTERS.map((l) => {
            const active = presentKeys.has(l);
            return active ? (
              <a key={l} href={`#letter-${l}`} className="flex h-7 w-7 items-center justify-center rounded text-xs font-medium hover:bg-muted">{l}</a>
            ) : (
              <span key={l} className="flex h-7 w-7 items-center justify-center rounded text-xs text-ink-soft/40">{l}</span>
            );
          })}
        </div>
      </div>

      <div className="mt-12">
        {isLoading && <p className="text-sm text-ink-soft">Loading…</p>}
        {!isLoading && items.length === 0 && (
          <p className="rounded-md border border-dashed p-8 text-center text-sm text-ink-soft">
            Glossary entries are coming soon. Check back shortly.
          </p>
        )}
        {!isLoading && items.length > 0 && filtered.length === 0 && (
          <p className="text-sm text-ink-soft">No terms match "{q}".</p>
        )}
        <div className="space-y-10">
          {grouped.map(([letter, terms]) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">{letter}</h2>
              <dl className="grid gap-4 sm:grid-cols-2">
                {terms.map((t) => (
                  <Link
                    key={t.id}
                    to="/resources/glossary/$slug"
                    params={{ slug: t.slug }}
                    className="block rounded-lg border bg-background p-4 transition hover:border-primary/40 hover:shadow-sm"
                  >
                    <dt className="font-semibold group-hover:text-primary">{t.term}</dt>
                    <dd className="mt-1 line-clamp-3 text-sm text-ink-soft">{t.short_definition}</dd>
                  </Link>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
