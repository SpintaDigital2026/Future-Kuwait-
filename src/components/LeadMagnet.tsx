import { CONTACT_EMAIL } from "@/lib/contact";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  asset: string;
  format?: string;
  pages?: string;
  ctaLabel?: string;
  subject?: string;
  previewImage?: string;
};

export function LeadMagnet({
  eyebrow = "Lead Magnet · Placeholder",
  title,
  description,
  asset,
  format = "PDF",
  pages = "12 pages",
  ctaLabel = "Download the guide",
  subject,
  previewImage,
}: Props) {
  const mailSubject = encodeURIComponent(subject ?? `Lead magnet request: ${asset}`);
  return (
    <section className="bg-background py-16 lg:py-14 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-5 sm:p-8 md:p-12 lg:p-14 ring-1 ring-white/10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full opacity-50"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--brand) 60%, transparent), transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative grid min-w-0 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="min-w-0 lg:col-span-7">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-tint sm:tracking-[0.25em]">
                  {eyebrow}
                </span>
                <span className="h-px w-10 shrink-0 bg-brand-tint/40" />
              </div>
              <h3 className="font-sans text-[1.65rem] sm:text-3xl md:text-4xl tracking-tight leading-[1.15] break-words text-balance">
                {title}
              </h3>
              <p className="mt-5 text-white/70 leading-relaxed max-w-xl break-words">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${mailSubject}`}
                  className="btn-expert group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-soft whitespace-nowrap"
                >
                  {ctaLabel}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    ↓
                  </span>
                </a>
              </div>
            </div>
            <div className="min-w-0 lg:col-span-5">
              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6 backdrop-blur">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="size-12 shrink-0 rounded-xl bg-brand/20 grid place-items-center text-brand-tint text-xl">
                    📄
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Resource · {format}
                    </div>
                    <div className="font-sans text-base sm:text-lg text-white mt-1 break-words">
                      {asset}
                    </div>
                    <div className="text-xs text-white/50 mt-1">{pages} · Free download</div>
                  </div>
                </div>
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={`${asset} preview`}
                    className="mt-6 aspect-[16/9] w-full rounded-lg border border-white/10 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="h-scroll mt-6"
                    aria-label="Guide page previews"
                  >
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="aspect-[3/4] w-[42%] min-w-[8rem] max-w-[11rem] shrink-0 snap-start rounded-md border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]"
                      />
                    ))}
                  </div>
                )}
                <p className="mt-5 text-[11px] text-white/40 leading-relaxed">
                  Placeholder asset — final lead magnet will be supplied per page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
