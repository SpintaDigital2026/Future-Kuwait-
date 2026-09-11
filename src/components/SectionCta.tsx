type Props = {
  headline?: string;
  body?: string;
  variant?: "light" | "dark";
};

export function SectionCta({
  headline = "Ready to move forward?",
  body = "Speak to an FCC expert or grab a case study to see how we deliver results.",
  variant = "light",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-ink text-white"
          : "border-y border-hairline bg-muted/40"
      }
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight">
              {headline}
            </h3>
            <p
              className={`mt-2 text-sm md:text-base ${
                isDark ? "text-white/70" : "text-ink-soft"
              }`}
            >
              {body}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-primary-foreground whitespace-nowrap hover:bg-brand-deep transition-colors"
            >
              Speak to an Expert
            </a>
            <a
              href="/resources/case-studies"
              className="inline-flex items-center gap-2 rounded-full bg-brand-wash px-6 py-3 text-sm font-medium text-brand whitespace-nowrap transition-colors border border-brand/10 shadow-soft hover:bg-brand-wash/80"
            >
              Download a case study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
