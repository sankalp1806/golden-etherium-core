export function SatelliteCard({
  image,
  label,
  caption,
  className = "",
  width = 240,
  delay = 0,
}: {
  image: string;
  label: string;
  caption: string;
  className?: string;
  width?: number;
  delay?: number;
}) {
  return (
    <div
      className={`group glass animate-float-soft overflow-hidden rounded-[20px] p-2 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(167,139,113,0.3)] ${className}`}
      style={{
        width,
        animationDelay: `${delay}s`,
        transitionTimingFunction: "var(--ease-smooth)",
      }}
    >
      <div className="overflow-hidden rounded-[14px]">
        <img
          src={image}
          alt={caption}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
          style={{ transitionTimingFunction: "var(--ease-smooth)" }}
        />
      </div>
      <div className="flex items-center justify-between px-2 pb-1 pt-2.5">
        <span className="text-[9px] uppercase tracking-[0.2em] text-gold">{label}</span>
        <span className="text-xs text-foreground/80">{caption}</span>
      </div>
    </div>
  );
}