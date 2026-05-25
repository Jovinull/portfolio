"use client";

import { motion, type Variants } from "motion/react";
import {
  Bot,
  Boxes,
  Code2,
  GraduationCap,
  Presentation,
  Users,
  type LucideIcon,
} from "lucide-react";
import { teachingRoles, type TeachingIconKey } from "@/lib/education";
import { cn } from "@/lib/utils";

const iconMap: Record<TeachingIconKey, LucideIcon> = {
  code: Code2,
  users: Users,
  graduationCap: GraduationCap,
  bot: Bot,
  boxes: Boxes,
  presentation: Presentation,
};

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
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function TeachingGrid() {
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
          <GraduationCap className="size-3.5 text-secondary" />
          Ensino & mentoria
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Aprendo — e também <span className="text-gradient">formo gente.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          Antes de liderar squads, já ensinava Python a turmas inteiras. Mais de
          200 horas dedicadas a instruir, monitorar e mentorar estudantes.
        </p>
      </motion.header>

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {teachingRoles.map((role) => {
          const Icon = iconMap[role.iconKey];
          const isPrimary = role.accent === "primary";
          return (
            <motion.article
              key={role.slug}
              variants={cardVariants}
              className={cn(
                "group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-500",
                isPrimary
                  ? "hover:border-primary/50 hover:glow-primary"
                  : "hover:border-secondary/50 hover:glow-secondary",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "inline-flex size-10 items-center justify-center rounded-xl border",
                    isPrimary
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-secondary/30 bg-secondary/10 text-secondary",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full border border-border bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {role.loadLabel}
                </span>
              </div>

              <div>
                <h3 className="text-balance text-base font-semibold leading-snug tracking-tight">
                  {role.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{role.org}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{role.blurb}</p>

              <p className="mt-auto pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/50">
                {role.period}
              </p>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
