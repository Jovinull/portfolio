"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { aboutCertifications } from "@/lib/about";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
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
  hidden: { opacity: 0, y: 24, scale: 0.96, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function CertificationsGrid() {
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
          <BadgeCheck className="size-3.5 text-primary" />
          Certificações · Credenciais oficiais
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Selos que <span className="text-gradient">sustentam a stack.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Credenciais verificáveis em cloud, IA e linguagens — emitidas por
          fabricantes e plataformas reconhecidas globalmente.
        </p>
      </motion.header>

      <div className="grid gap-6 lg:grid-cols-2">
        {aboutCertifications.map((cert) => {
          const isPrimary = cert.accent === "primary";
          return (
            <motion.article
              key={cert.slug}
              variants={cardVariants}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-500",
                isPrimary
                  ? "hover:border-primary/50 hover:glow-primary"
                  : "hover:border-secondary/50 hover:glow-secondary",
              )}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-background">
                <Image
                  src={cert.imagePath}
                  alt={cert.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-contain object-center p-6 transition-transform duration-700 group-hover:scale-[1.02]"
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
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.2em]",
                      isPrimary ? "text-primary/90" : "text-secondary/90",
                    )}
                  >
                    {cert.issuer}
                  </span>
                  <Badge
                    variant="outline"
                    className="gap-1.5 border-emerald-400/40 bg-emerald-400/[0.08]"
                  >
                    <BadgeCheck className="size-3 text-emerald-300" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-200">
                      Verificável
                    </span>
                  </Badge>
                </div>

                <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight">
                  {cert.title}
                </h3>

                <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs">
                  <dt className="font-mono uppercase tracking-wider text-muted-foreground/70">
                    Emissão
                  </dt>
                  <dd className="text-muted-foreground">{cert.issuedAtLabel}</dd>
                  <dt className="font-mono uppercase tracking-wider text-muted-foreground/70">
                    ID
                  </dt>
                  <dd className="font-mono break-all text-muted-foreground">
                    {cert.credentialId}
                  </dd>
                </dl>

                {cert.verifyUrl && (
                  <Link
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline",
                      isPrimary ? "text-primary" : "text-secondary",
                    )}
                  >
                    Verificar credencial
                    <ExternalLink className="size-3.5" />
                  </Link>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
