type Props = {
  src: string;
  alt: string;
  label: string;
  imgClassName?: string;
};

export function ProductLogo({ src, alt, label, imgClassName = "h-10 max-w-[20rem]" }: Props) {
  return (
    <div className="mb-8 flex items-center gap-5">
      <img
        src={src}
        alt={alt}
        className={`${imgClassName} w-auto object-contain`}
      />
      <span aria-hidden className="h-8 w-px shrink-0 bg-white/30" />
      <span className="section-kicker text-brand-tint">{label}</span>
    </div>
  );
}
