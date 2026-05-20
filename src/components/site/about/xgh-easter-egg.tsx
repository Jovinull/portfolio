"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { PartyPopper, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const variants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function XghEasterEgg() {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className="relative"
    >
      <article
        className="group relative overflow-hidden rounded-2xl border border-dashed border-amber-400/40 bg-amber-400/[0.04] backdrop-blur transition-all duration-500 hover:border-amber-400/60"
        aria-label="Certificado oficial XGH — easter egg de cultura dev"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-56 rounded-full opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-40"
          style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }}
        />

        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-amber-400/30 bg-background">
            <Image
              src="/images/sobre/easter-egg-xgh.jpg"
              alt="Certificado oficial XGH — Extreme Go Horse — emitido em tom de humor para Felipe Jovino dos Santos"
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain object-center p-3 transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-amber-300/90">
                <Sparkles className="size-3.5" />
                Easter egg · Cultura dev
              </span>
              <Badge
                variant="outline"
                className="gap-1.5 border-amber-400/40 bg-amber-400/[0.1]"
              >
                <PartyPopper className="size-3 text-amber-300" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200">
                  Só pra rir
                </span>
              </Badge>
            </div>

            <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
              Certificado oficial XGH.
            </h2>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              <em>Extreme Go Horse</em> — a metodologia que ninguém deveria
              seguir. Está aqui porque cultura dev também é portfólio:
              humildade pra reconhecer o caos, leveza pra rir dele e disciplina
              pra nunca aplicar em produção.
            </p>
          </div>
        </div>
      </article>
    </motion.section>
  );
}
