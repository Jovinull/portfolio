"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Check } from "lucide-react";
import type { AboutChapter } from "@/lib/about";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const mediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type ChapterSectionProps = {
  chapter: AboutChapter;
  index: number;
};

export function ChapterSection({ chapter, index }: ChapterSectionProps) {
  const isReversed = index % 2 === 1;
  const isPrimary = chapter.accent === "primary";

  return (
    <motion.article
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className="relative"
    >
      <div
        className={cn(
          "grid items-center gap-10 lg:gap-16",
          "lg:grid-cols-[1.05fr_1fr]",
          isReversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        {/* Text column */}
        <div className="relative">
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="font-mono text-6xl font-bold leading-none text-gradient sm:text-7xl">
              {chapter.number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </motion.div>

          <motion.span
            variants={itemVariants}
            className="mt-4 inline-flex items-center rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur"
          >
            {chapter.era}
          </motion.span>

          <motion.h3
            variants={itemVariants}
            className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            {chapter.title}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-pretty text-base font-medium text-foreground/80 sm:text-lg"
          >
            {chapter.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {chapter.body}
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-6 grid gap-2">
            {chapter.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2.5 text-sm text-foreground/80">
                <span
                  className={cn(
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border",
                    isPrimary
                      ? "border-primary/40 bg-primary/[0.08] text-primary"
                      : "border-secondary/40 bg-secondary/[0.08] text-secondary",
                  )}
                >
                  <Check className="size-3" />
                </span>
                {highlight}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Media column */}
        <motion.div
          variants={mediaVariants}
          className={cn(
            "relative",
            isReversed ? "lg:mr-auto" : "lg:ml-auto",
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2rem] opacity-50 blur-3xl"
            style={{
              background: isPrimary
                ? "linear-gradient(135deg, color-mix(in oklab, var(--primary) 50%, transparent), transparent 70%)"
                : "linear-gradient(135deg, color-mix(in oklab, var(--secondary) 50%, transparent), transparent 70%)",
            }}
          />

          <div
            className={cn(
              "group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/80 bg-card/40 backdrop-blur transition-shadow duration-500",
              isPrimary ? "ring-1 ring-primary/30 hover:glow-primary" : "ring-1 ring-secondary/30 hover:glow-secondary",
            )}
          >
            <Image
              src={chapter.imagePath}
              alt={chapter.imageCaption}
              fill
              sizes="(min-width: 1024px) 460px, (min-width: 640px) 60vw, 90vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/30 to-transparent"
            />

            <span
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-30 blur-3xl mix-blend-screen"
              style={{
                background: isPrimary
                  ? "radial-gradient(circle, #8b5cf6, transparent 70%)"
                  : "radial-gradient(circle, #06b6d4, transparent 70%)",
              }}
            />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
              <span className="rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
                Capítulo {chapter.number}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] backdrop-blur",
                  isPrimary
                    ? "border-primary/40 bg-primary/[0.1] text-primary"
                    : "border-secondary/40 bg-secondary/[0.1] text-secondary",
                )}
              >
                <span className="size-1.5 rounded-full bg-current" />
                {chapter.era.split(" · ")[0]}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p
                className={cn(
                  "inline-flex items-center gap-2 font-mono text-[11px] tracking-wide",
                  isPrimary ? "text-primary/90" : "text-secondary/90",
                )}
              >
                <span className="inline-block size-1.5 rounded-full bg-current" />
                {chapter.imageCaption}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
