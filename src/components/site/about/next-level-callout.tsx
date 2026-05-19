"use client";

import { motion, type Variants } from "motion/react";
import { GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aboutNextLevel } from "@/lib/about";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function NextLevelCallout() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur sm:p-12"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--gradient-brand)", opacity: 0.6 }}
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary">
              <GraduationCap className="size-5" />
            </span>
            <Badge
              variant="outline"
              className="border-emerald-400/40 bg-emerald-400/[0.06] gap-1.5"
            >
              <Trophy className="size-3 text-emerald-300" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                {aboutNextLevel.badge}
              </span>
            </Badge>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {aboutNextLevel.era}
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            <span className="text-gradient">{aboutNextLevel.title}</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {aboutNextLevel.body}
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative hidden lg:block"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-full opacity-40 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <span className="relative grid size-32 place-items-center rounded-full border border-border bg-background/60 backdrop-blur">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              próximo
            </span>
            <span className="mt-0 text-2xl font-bold">
              <span className="text-gradient">2026 → 2028</span>
            </span>
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
