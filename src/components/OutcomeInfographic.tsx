type Layout = "meter" | "mosaic" | "signal" | "columns";

type Props = {
  items: string[];
  layout?: Layout;
  className?: string;
};

function no(index: number) {
  return String(index + 1).padStart(2, "0");
}

function mosaicSpans(count: number) {
  const spans = Array.from({ length: count }, () => 2);
  if (count > 0) spans[0] = 4;
  let used = 0;
  for (let i = 0; i < count; i++) {
    const room = 6 - (used % 6);
    if (i === count - 1) spans[i] = room;
    else if (spans[i] > room) spans[i] = room;
    used += spans[i];
  }
  return spans;
}

function Meter({ items }: { items: string[] }) {
  return (
    <ol className="relative space-y-4">
      <div
        aria-hidden
        className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-brand/0 via-brand/50 to-brand/0 md:left-1/2"
      />
      {items.map((item, i) => {
        const left = i % 2 === 0;
        return (
          <li key={item} className={`relative md:w-[46%] ${left ? "" : "md:ml-auto"}`}>
            <article className="rounded-[1.4rem] border border-hairline bg-white p-5 shadow-soft motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-1">
              <span className="font-sans text-4xl leading-none text-brand/35">{no(i)}</span>
              <p className="mt-2 font-sans text-lg leading-snug text-ink">{item}</p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

const spanClass: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
};

function Mosaic({ items }: { items: string[] }) {
  const spans = mosaicSpans(items.length);
  return (
    <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
      {items.map((item, i) => {
        const lead = i === 0;
        return (
          <li key={item} className={spanClass[spans[i]] ?? "lg:col-span-2"}>
            <article
              className={`flex h-full flex-col justify-between rounded-[1.4rem] p-6 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-1 ${
                lead ? "bg-ink text-white" : "border border-hairline bg-white text-ink shadow-soft"
              }`}
            >
              <span className={`font-mono text-[11px] tracking-[0.22em] ${lead ? "text-white/70" : "text-brand"}`}>
                {no(i)}
              </span>
              <p className={`mt-6 font-sans leading-snug ${lead ? "text-2xl md:text-3xl" : "text-lg"}`}>{item}</p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function Signal({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-8 text-white md:px-10 md:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)",
        }}
      />
      <ol className="relative grid gap-x-12 gap-y-8 md:grid-cols-2">
        {items.map((item, i) => (
          <li key={item} className="border-t border-white/15 pt-5">
            <span className="font-sans text-4xl leading-none text-white/25">{no(i)}</span>
            <p className="mt-3 font-sans text-xl leading-snug text-white">{item}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Columns({ items }: { items: string[] }) {
  const groups: { item: string; index: number }[][] = [[], [], []];
  items.forEach((item, index) => groups[index % 3].push({ item, index }));
  const shift = ["", "md:mt-8", "md:mt-16"];
  return (
    <div className="grid items-start gap-4 md:grid-cols-3">
      {groups.map((group, column) => {
        const lead = column === 0;
        return (
          <ol
            key={column}
            className={`overflow-hidden rounded-[1.6rem] shadow-soft ${shift[column]} ${
              lead ? "bg-ink text-white" : "border border-hairline bg-white"
            }`}
          >
            {group.map(({ item, index }) => (
              <li
                key={item}
                className={`px-6 py-6 ${lead ? "border-t border-white/10" : "border-t border-hairline"} first:border-t-0`}
              >
                <span className={`font-sans text-3xl leading-none ${lead ? "text-white/35" : "text-brand/40"}`}>
                  {no(index)}
                </span>
                <p className={`mt-3 font-sans text-lg leading-snug ${lead ? "text-white" : "text-ink"}`}>{item}</p>
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}

export function OutcomeInfographic({ items, layout = "mosaic", className = "" }: Props) {
  return (
    <div className={className} data-outcomes={layout}>
      {layout === "meter" ? <Meter items={items} /> : null}
      {layout === "mosaic" ? <Mosaic items={items} /> : null}
      {layout === "signal" ? <Signal items={items} /> : null}
      {layout === "columns" ? <Columns items={items} /> : null}
    </div>
  );
}
