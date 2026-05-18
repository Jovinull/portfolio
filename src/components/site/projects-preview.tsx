"use client";

import { motion, type Variants } from "motion/react";
import { ProjectCard } from "./projects/project-card";
import { SectionHeading } from "./section-heading";
import { featuredProjects } from "@/lib/projects";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectsPreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projetos em Destaque"
        title="Engenharia de baixo nível, distribuída e tipada."
        description="Três projetos que sintetizam minha forma de pensar sistemas: do C++20 puro ao microserviço com Virtual Threads — e do Vue 3 tipado ao incremental game modernizado."
        href="/projetos"
        hrefLabel="Ver todos os projetos"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.slug} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
