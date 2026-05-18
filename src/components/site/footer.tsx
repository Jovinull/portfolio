import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { navItems } from "@/lib/nav";
import { socialLinks } from "@/lib/social";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 border-t border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.6 }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative inline-block size-12 overflow-hidden rounded-full border border-border ring-1 ring-primary/20">
              <Image
                src="/images/avatar-jovino.jpg"
                alt="Felipe Jovino"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <Logo />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Engenharia de software de ponta, pesquisa em IA e liderança técnica.
            Construindo soluções escaláveis que impactam vidas — do firmware ao
            paper.
          </p>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Navegação
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Conexões
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {socialLinks.map(({ label, href, icon: Icon, handle }) => (
              <li key={label} className="min-w-0">
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  title={`${label} · ${handle}`}
                  className="group flex w-full items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  <span className="shrink-0">{label}</span>
                  <span className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                    · {handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {year} {siteConfig.fullName}. Construído com Next.js, Tailwind e
            cafeína.
          </span>
          <span className="font-mono">
            <span className="text-gradient">v0.1.0</span> · Brasil
          </span>
        </div>
      </div>
    </footer>
  );
}
