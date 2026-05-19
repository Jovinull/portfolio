"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Camera, Trophy } from "lucide-react";
import { aboutMoments } from "@/lib/about";
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

export function MomentsGrid() {
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
          <Camera className="size-3.5 text-primary" />
          Bastidores · Provas reais
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Premiações, palcos e {" "}
          <span className="text-gradient">noites de protoboard.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Fragmentos da jornada — de bancadas no LABIC a cerimônias de
          premiação, eventos nacionais e networking no ecossistema de tech do
          Nordeste.
        </p>
      </motion.header>

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {aboutMoments.map((moment) => {
          const isPrimary = moment.accent === "primary";
          const isWide = moment.span === "wide";
          return (
            <motion.figure
              key={moment.slug}
              variants={cardVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur transition-all duration-500",
                isWide && "lg:col-span-2 lg:row-span-1",
                isPrimary
                  ? "hover:border-primary/50 hover:glow-primary"
                  : "hover:border-secondary/50 hover:glow-secondary",
              )}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  isWide ? "aspect-[16/9]" : "aspect-[4/5]",
                )}
              >
                <Image
                  src={moment.imagePath}
                  alt={moment.alt}
                  fill
                  sizes={
                    isWide
                      ? "(min-width: 1024px) 760px, (min-width: 640px) 100vw, 100vw"
                      : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                />

                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 size-48 rounded-full opacity-0 blur-3xl mix-blend-screen transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    background: isPrimary
                      ? "radial-gradient(circle, #8b5cf6, transparent 70%)"
                      : "radial-gradient(circle, #06b6d4, transparent 70%)",
                  }}
                />

                {moment.badge && (
                  <div className="absolute left-4 top-4">
                    <Badge
                      variant="outline"
                      className="gap-1.5 border-amber-400/40 bg-amber-400/[0.1] backdrop-blur"
                    >
                      <Trophy className="size-3 text-amber-300" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-200">
                        {moment.badge}
                      </span>
                    </Badge>
                  </div>
                )}
              </div>

              <figcaption className="relative space-y-1 p-5">
                <p
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.2em]",
                    isPrimary ? "text-primary/90" : "text-secondary/90",
                  )}
                >
                  {moment.caption}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {moment.context}
                </p>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </motion.section>
  );
}
