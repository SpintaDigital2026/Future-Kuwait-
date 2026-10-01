type Step = {
  title: string;
  body: string;
};

type Props = {
  steps: Step[];
  className?: string;
  layout?: Variant;
};

type Variant = "spine" | "bento" | "ribbon" | "stage";

function signature(steps: Step[]) {
  const key = steps.map((step) => `${step.title}\n${step.body}`).join("\n");
  let hash = 2166136261;
  for (let i = 0; i < key.length; i++) {
    hash ^= key.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function pickVariant(steps: Step[]): Variant {
  const variants: Variant[] = ["spine", "bento", "ribbon", "stage"];
  return variants[signature(steps) % variants.length];
}

function stepNo(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Spine({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative mx-auto max-w-5xl">
      <div
        aria-hidden
        className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-gradient-to-b from-brand/0 via-brand/55 to-brand/0 md:left-1/2"
      />
      {steps.map((step, i) => {
        const lead = i % 2 === 0;
        return (
          <li
            key={step.title}
            className={`relative mb-5 grid grid-cols-[2.3rem_1fr] items-start gap-4 last:mb-0 md:mb-8 md:grid-cols-[1fr_2.3rem_1fr] md:gap-6 ${
              lead ? "" : "md:[&>article]:col-start-3"
            }`}
          >
            <span
              aria-hidden
              className="relative z-10 mt-7 size-3 justify-self-center rounded-full bg-brand shadow-[0_0_0_7px_color-mix(in_oklab,var(--brand)_16%,white)] md:col-start-2 md:row-start-1"
            />
            <article
              className={`rounded-[1.4rem] border border-hairline bg-white p-6 shadow-soft motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-1 md:row-start-1 ${
                lead ? "md:col-start-1 md:text-right" : "md:col-start-3"
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                Step {stepNo(i)}
              </span>
              <h3 className="mt-3 font-sans text-xl leading-snug tracking-tight text-ink md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function Bento({ steps }: { steps: Step[] }) {
  const spans = [
    "lg:col-span-7 lg:row-span-2",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-4",
    "lg:col-span-8",
    "lg:col-span-6",
  ];
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      {steps.map((step, i) => {
        const lead = i === 0;
        return (
          <li key={step.title} className={spans[i] ?? "lg:col-span-6"}>
            <article
              className={`relative flex h-full flex-col overflow-hidden rounded-[1.6rem] p-6 motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-1 md:p-8 ${
                lead
                  ? "bg-ink text-white shadow-elevated"
                  : "border border-hairline bg-white shadow-soft"
              }`}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute -right-2 -top-6 font-sans text-8xl font-semibold leading-none ${
                  lead ? "text-white/10" : "text-brand/10"
                }`}
              >
                {stepNo(i)}
              </span>
              {lead ? (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 bottom-0 size-48 rounded-full opacity-80"
                  style={{
                    background:
                      "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 55%, transparent), transparent 70%)",
                  }}
                />
              ) : null}
              <span
                className={`relative font-mono text-[11px] uppercase tracking-[0.22em] ${
                  lead ? "text-brand-tint" : "text-brand"
                }`}
              >
                Step {stepNo(i)}
              </span>
              <h3
                className={`relative mt-4 font-sans leading-snug tracking-tight ${
                  lead ? "text-3xl text-white md:text-4xl" : "text-xl text-ink md:text-2xl"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`relative mt-4 max-w-xl text-sm leading-relaxed md:text-base ${
                  lead ? "text-white/75" : "text-ink-soft"
                }`}
              >
                {step.body}
              </p>
            </article>
          </li>
        );
      })}
    </ol>
  );
}

function Ribbon({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={step.title}>
          <article className="group grid overflow-hidden rounded-[1.6rem] border border-hairline bg-white shadow-soft motion-safe:transition-transform motion-safe:duration-500 motion-safe:hover:-translate-y-0.5 md:grid-cols-[9.5rem_1fr]">
            <div className="relative flex items-end bg-ink px-6 py-5 text-white md:items-center md:py-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(120% 80% at 0% 100%, color-mix(in oklab, var(--brand) 70%, transparent), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-tint">
                  Step
                </div>
                <div className="font-sans text-5xl leading-none tracking-tight">{stepNo(i)}</div>
              </div>
            </div>
            <div className="px-6 py-6 md:px-8 md:py-8">
              <h3 className="font-sans text-2xl leading-snug tracking-tight text-ink">{step.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft md:text-base">
                {step.body}
              </p>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}

function Stage({ steps }: { steps: Step[] }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink px-4 py-8 text-white md:px-8 md:py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 65%, transparent), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(90deg, black, transparent 85%)",
        }}
      />
      <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={i < 2 ? "xl:col-span-3" : "xl:col-span-2"}
          >
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm motion-safe:transition-colors motion-safe:duration-500 motion-safe:hover:bg-white/[0.1]">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-tint">
                Step {stepNo(i)}
              </span>
              <h3 className="mt-4 font-sans text-xl leading-snug tracking-tight text-white md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step.body}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ApproachInfographic({ steps, className = "", layout }: Props) {
  const variant = layout ?? pickVariant(steps);
  return (
    <div className={className} data-layout={variant}>
      {variant === "spine" ? <Spine steps={steps} /> : null}
      {variant === "bento" ? <Bento steps={steps} /> : null}
      {variant === "ribbon" ? <Ribbon steps={steps} /> : null}
      {variant === "stage" ? <Stage steps={steps} /> : null}
    </div>
  );
}
