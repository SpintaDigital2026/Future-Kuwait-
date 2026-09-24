type Step = {
  title: string;
  body: string;
};

type Props = {
  steps: Step[];
  className?: string;
};

function gridClass(count: number) {
  if (count <= 3) return "md:grid-cols-3";
  if (count === 4) return "md:grid-cols-2 xl:grid-cols-4";
  if (count === 5) return "md:grid-cols-2 xl:grid-cols-5";
  return "md:grid-cols-2 xl:grid-cols-3";
}

export function ApproachInfographic({ steps, className = "" }: Props) {
  return (
    <ol className={`relative grid gap-5 ${gridClass(steps.length)} ${className}`.trim()}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[8%] top-11 hidden h-px bg-gradient-to-r from-transparent via-brand/45 to-transparent xl:block"
      />
      {steps.map((step, i) => (
        <li key={step.title} className="relative">
          <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-background p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-elevated">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 size-28 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 22%, transparent), transparent 72%)",
              }}
            />
            <div className="relative mb-5 flex items-center gap-3">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-soft ring-4 ring-brand-wash">
                <span className="font-sans text-xl font-semibold leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                Step {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="relative font-sans text-xl leading-snug tracking-tight text-ink md:text-[1.35rem]">
              {step.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            {i < steps.length - 1 ? (
              <span
                aria-hidden
                className="absolute right-4 top-8 hidden text-lg text-brand/50 xl:block"
              >
                →
              </span>
            ) : null}
          </article>
        </li>
      ))}
    </ol>
  );
}
