type Props = {
  src: string;
  alt: string;
  label: string;
  imgClassName?: string;
  plate?: boolean;
};

export function ProductLogo({ src, alt, label, imgClassName = "h-8 max-w-[9.5rem] sm:h-10 sm:max-w-[20rem]", plate = false }: Props) {
  return (
    <div className="mb-6 flex w-full min-w-0 max-w-full flex-wrap items-center gap-3 sm:mb-8 sm:gap-5">
      {plate ? (
        <span className="inline-flex max-w-full rounded-xl bg-white px-3 py-1.5">
          <img src={src} alt={alt} className={`${imgClassName} w-auto object-contain`} />
        </span>
      ) : (
        <img src={src} alt={alt} className={`${imgClassName} w-auto max-w-full object-contain`} />
      )}
      <span aria-hidden className="h-8 w-px shrink-0 bg-white/30" />
      <span className="section-kicker min-w-0 text-brand-tint">{label}</span>
    </div>
  );
}
