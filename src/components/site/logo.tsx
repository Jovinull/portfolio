import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
};

export function Logo({ href = "/", className }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Felipe Jovino — Home"
      className={`group inline-flex items-center gap-2 ${className ?? ""}`}
    >
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-lg border border-border bg-card/60 backdrop-blur transition-colors group-hover:border-primary/50">
        <span className="text-gradient font-mono text-sm font-bold">FJ</span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "var(--gradient-brand)", filter: "blur(20px)", transform: "scale(0.6)" }}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight">Felipe Jovino</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Coordenador · CTO · AI
        </span>
      </span>
    </Link>
  );
}
