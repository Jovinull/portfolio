"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { featuredCredentials } from "@/lib/education";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function FeaturedCredentials() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className="relative"
    >
      <motion.header variants={headerVariants} className="mb-10">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Award className="size-3.5 text-primary" />
          Credenciais · Em destaque
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Certificações que <span className="text-gradient">abrem portas.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Selos de fabricantes e instituições reconhecidas — Oracle, Microsoft,
          Huawei, Sebrae e IEEE — com certificados oficiais disponíveis para
          consulta.
        </p>
      </motion.header>

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredCredentials.map((cred) => {
          const isPrimary = cred.accent === "primary";
          return (
            <motion.article
              key={cred.slug}
              variants={cardVariants}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-500",
                isPrimary
                  ? "hover:border-primary/50 hover:glow-primary"
                  : "hover:border-secondary/50 hover:glow-secondary",
                cred.span === "wide" && "lg:col-span-2",
              )}
            >
              <a
                href={cred.imagePath}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden border-b border-border bg-background"
                aria-label={`Abrir certificado de ${cred.title}`}
              >
                <Image
                  src={cred.imagePath}
                  alt={cred.alt}
                  fill
                  sizes={cred.span === "wide" ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 540px, 100vw"}
                  className="object-contain object-center p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background: isPrimary
                      ? "radial-gradient(circle, #8b5cf6, transparent 70%)"
                      : "radial-gradient(circle, #06b6d4, transparent 70%)",
                  }}
                />
                <Badge
                  variant="outline"
                  className="absolute top-3 left-3 gap-1.5 border-border bg-background/80 backdrop-blur"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80">
                    {cred.kind}
                  </span>
                </Badge>
              </a>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em]",
                      isPrimary ? "text-primary/90" : "text-secondary/90",
                    )}
                  >
                    {cred.issuer}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {cred.year}
                  </span>
                </div>

                <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight">
                  {cred.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">{cred.blurb}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <BadgeCheck className="size-3.5 text-emerald-300" />
                    {cred.metaLabel}
                  </span>
                  {cred.verifyUrl && (
                    <a
                      href={cred.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline",
                        isPrimary ? "text-primary" : "text-secondary",
                      )}
                    >
                      Verificar
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
