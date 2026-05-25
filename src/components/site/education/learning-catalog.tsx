"use client";

import { motion, type Variants } from "motion/react";
import {
  Brain,
  CalendarDays,
  Code2,
  Cpu,
  Library,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { learningCatalog, type CatalogIconKey } from "@/lib/education";
import { cn } from "@/lib/utils";

const iconMap: Record<CatalogIconKey, LucideIcon> = {
  code: Code2,
  cpu: Cpu,
  brain: Brain,
  calendar: CalendarDays,
  library: Library,
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

export function LearningCatalog() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-5%" }}
      className="relative"
    >
      <motion.header variants={headerVariants} className="mb-10">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Layers className="size-3.5 text-primary" />
          Catálogo completo
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          A trilha por trás da <span className="text-gradient">stack.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          De COBOL e Assembly x86 a redes neurais e Flutter — uma seleção da
          formação técnica acumulada em plataformas e instituições.
        </p>
      </motion.header>

      <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
        {learningCatalog.map((group) => {
          const Icon = iconMap[group.iconKey];
          const isPrimary = group.accent === "primary";
          return (
            <motion.article
              key={group.slug}
              variants={cardVariants}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all duration-500",
                isPrimary
                  ? "hover:border-primary/40"
                  : "hover:border-secondary/40",
              )}
            >
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <span
                  className={cn(
                    "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border",
                    isPrimary
                      ? "border-primary/30 bg-primary/10 text-primary"
                      : "border-secondary/30 bg-secondary/10 text-secondary",
                  )}
                >
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-semibold tracking-tight">
                    {group.provider}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {group.kind}
                  </p>
                </div>
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium",
                    isPrimary
                      ? "border-primary/30 text-primary"
                      : "border-secondary/30 text-secondary",
                  )}
                >
                  {group.items.length}
                </span>
              </div>

              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5 text-sm">
                    <span
                      aria-hidden
                      className={cn(
                        "mt-1.5 size-1.5 shrink-0 rounded-full",
                        isPrimary ? "bg-primary/70" : "bg-secondary/70",
                      )}
                    />
                    <span className="flex-1 text-pretty leading-snug text-foreground/90">
                      {item.title}
                      {item.meta && (
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                          {item.meta}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
