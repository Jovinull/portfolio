"use client";

import { motion, type Variants } from "motion/react";
import { educationStats } from "@/lib/education";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function EducationStats() {
  return (
    <motion.dl
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {educationStats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={cardVariants}
          className={cn(
            "relative overflow-hidden rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors",
            stat.accent === "primary"
              ? "hover:border-primary/40"
              : "hover:border-secondary/40",
          )}
        >
          <dd className="text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">{stat.value}</span>
          </dd>
          <dt className="mt-1 text-sm font-medium text-foreground">{stat.label}</dt>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.hint}</p>
        </motion.div>
      ))}
    </motion.dl>
  );
}
