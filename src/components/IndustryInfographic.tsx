type Item = {
  title: string;
  body: string;
};

type Layout = "feature" | "strip" | "path" | "cascade";

type Props = {
  items: Item[];
  layout?: Layout;
  className?: string;
};

function no(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Feature({ items }: { items: Item[] }) {
  const [lead, ...rest] = items;
  if (!lead) return null;
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      <article className="relative overflow-hidden rounded-[1.8rem] bg-ink p-8 text-white lg:col-span-7 lg:row-span-3">
        <span aria-hidden className="pointer-events-none absolute -right-2 -top-6 font-sans text-8xl text-white/10">
          {no(0)}
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)",
          }}
        />
        <h3 className="relative mt-10 font-sans text-3xl tracking-tight md:text-4xl">{lead.title}</h3>
        <p className="relative mt-4 max-w-md text-sm leading-relaxed text-white/75 md:text-base">{lead.body}</p>
      </article>
      {rest.map((item, i) => (
        <article
          key={item.title}
          className="rounded-[1.4rem] border border-hairline bg-white p-6 shadow-soft lg:col-span-5"
        >
          <span className="font-mono text-[11px] tracking-[0.22em] text-brand">{no(i + 1)}</span>
          <h3 className="mt-3 font-sans text-xl tracking-tight text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Strip({ items }: { items: Item[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item.title}>
          <article className="grid overflow-hidden rounded-[1.5rem] border border-hairline bg-white shadow-soft motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-0.5 md:grid-cols-[7.5rem_1fr]">
            <div className="flex items-center justify-center bg-brand px-4 py-5 text-white">
              <span className="font-sans text-4xl leading-none">{no(i)}</span>
            </div>
            <div className="px-6 py-5">
              <h3 className="font-sans text-xl tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

function Path({ items }: { items: Item[] }) {
  const cols = items.length > 4 ? "xl:grid-cols-5" : "xl:grid-cols-4";
  return (
    <ol className={`relative grid gap-4 md:grid-cols-2 ${cols}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent xl:block"
      />
      {items.map((item, i) => (
        <li key={item.title} className={i % 2 ? "xl:mt-10" : ""}>
          <span className="relative z-10 mb-4 inline-flex size-12 items-center justify-center rounded-full border-2 border-brand bg-white font-sans text-sm text-brand">
            {no(i)}
          </span>
          <article className="rounded-[1.4rem] border border-hairline bg-white p-5 shadow-soft">
            <h3 className="font-sans text-xl tracking-tight text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}

function Cascade({ items }: { items: Item[] }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} className={i % 2 ? "md:mt-8" : ""}>
          <article className="flex h-full gap-5 rounded-[1.5rem] border border-hairline bg-white p-6 shadow-soft">
            <span className="font-sans text-5xl leading-none text-brand/30">{no(i)}</span>
            <div>
              <h3 className="font-sans text-xl tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

export function IndustryInfographic({ items, layout = "feature", className = "" }: Props) {
  return (
    <div className={className} data-industries={layout}>
      {layout === "feature" ? <Feature items={items} /> : null}
      {layout === "strip" ? <Strip items={items} /> : null}
      {layout === "path" ? <Path items={items} /> : null}
      {layout === "cascade" ? <Cascade items={items} /> : null}
    </div>
  );
}
