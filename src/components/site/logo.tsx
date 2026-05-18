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
      className={`inline-flex items-center text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary ${className ?? ""}`}
    >
      Felipe Jovino
    </Link>
  );
}
