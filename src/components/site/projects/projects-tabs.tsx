"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, type Variants } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "./project-card";
import { projectFilters, projects, type ProjectFilter } from "@/lib/projects";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(6px)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsTabs() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos");
  const filtered =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full">
      <Tabs value={filter} onValueChange={(v) => setFilter(v as ProjectFilter)}>
        <TabsList
          variant="line"
          className="mb-10 flex h-auto flex-wrap justify-start gap-2 p-0"
        >
          {projectFilters.map(({ value, count }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="h-9 gap-2 rounded-full border border-border bg-card/40 px-4 backdrop-blur"
            >
              <span>{value}</span>
              <span className="rounded-full border border-border bg-background/60 px-1.5 font-mono text-[10px] text-muted-foreground">
                {count}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <LayoutGroup>
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-xl border border-dashed border-border/70 bg-card/30 p-8 text-center text-sm text-muted-foreground">
          Nenhum projeto nessa categoria por enquanto.
        </p>
      )}
    </div>
  );
}
