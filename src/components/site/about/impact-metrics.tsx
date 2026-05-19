"use client";

import { motion, type Variants } from "motion/react";
import { Sparkles } from "lucide-react";
import { aboutMetrics } from "@/lib/about";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ImpactMetrics() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      className="relative"
    >
      <motion.header variants={itemVariants} className="mb-8 flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg border border-primary/30 bg-primary/[0.08] text-primary">
          <Sparkles className="size-4" />
        </span>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Métricas de impacto
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Números que sustentam a história
          </h2>
        </div>
      </motion.header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutMetrics.map((metric) => {
          const isPrimary = metric.accent === "primary";
          return (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-all duration-300",
                isPrimary
                  ? "hover:border-primary/50 hover:glow-primary"
                  : "hover:border-secondary/50 hover:glow-secondary",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60",
                )}
                style={{
                  background: isPrimary
                    ? "radial-gradient(circle, #8b5cf6, transparent 70%)"
                    : "radial-gradient(circle, #06b6d4, transparent 70%)",
                }}
              />

              <div className="relative">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </span>
                <p className="mt-2 text-4xl font-bold leading-none sm:text-5xl">
                  <span className="text-gradient">{metric.value}</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {metric.hint}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
