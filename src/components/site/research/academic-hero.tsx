"use client";

import { motion, type Variants } from "motion/react";
import { Award, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { academic, publications } from "@/lib/research";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AcademicHero() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
    >
      <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur sm:p-8">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 size-56 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />

        <div className="relative flex flex-wrap items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/[0.08] text-primary">
            <GraduationCap className="size-5" />
          </span>
          <Badge variant="outline" className="border-emerald-400/40 bg-emerald-400/[0.06] gap-1.5">
            <Trophy className="size-3 text-emerald-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              1º lugar · Edital 04/2025
            </span>
          </Badge>
        </div>

        <h2 className="relative mt-5 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {academic.degree}
          <span className="block text-gradient">{academic.track}</span>
        </h2>

        <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {academic.highlight}
        </p>

        <dl className="relative mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-dashed border-border/70 bg-background/30 p-3">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Instituição
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">
              {academic.institution}
            </dd>
            <dd className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              {academic.program}
            </dd>
          </div>
          <div className="rounded-lg border border-dashed border-border/70 bg-background/30 p-3">
            <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Período
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{academic.period}</dd>
            <dd className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              Programa stricto sensu
            </dd>
          </div>
        </dl>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-secondary/30 bg-secondary/[0.08] text-secondary">
            <BookOpen className="size-4" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Artigos & premiações
          </h3>
        </div>

        <motion.ul variants={containerVariants} className="space-y-3">
          {publications.map((pub) => {
            const isAwarded = Boolean(pub.award);
            return (
              <motion.li
                key={`${pub.title}-${pub.event ?? "paper"}`}
                variants={itemVariants}
                className="group relative flex items-start gap-3 overflow-hidden rounded-xl border border-border bg-card/40 p-4 backdrop-blur transition-colors hover:border-primary/40"
              >
                <span
                  className={
                    isAwarded
                      ? "grid size-9 shrink-0 place-items-center rounded-lg border border-amber-400/30 bg-amber-400/[0.08] text-amber-300"
                      : "grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background/40 text-primary"
                  }
                >
                  {isAwarded ? <Award className="size-4" /> : <BookOpen className="size-4" />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-foreground">{pub.title}</p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    {pub.event && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {pub.event}
                      </span>
                    )}
                    {pub.award && (
                      <Badge
                        variant="outline"
                        className="border-amber-400/40 bg-amber-400/[0.06] gap-1 font-mono text-[10px] uppercase tracking-wider text-amber-200"
                      >
                        <Trophy className="size-2.5" />
                        {pub.award}
                      </Badge>
                    )}
                    {pub.qualis && (
                      <Badge
                        variant="outline"
                        className="border-primary/40 bg-primary/[0.06] font-mono text-[10px] uppercase tracking-wider text-primary"
                      >
                        {pub.qualis}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
