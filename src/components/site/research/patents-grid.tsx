"use client";

import { motion, type Variants } from "motion/react";
import { Fingerprint } from "lucide-react";
import { PatentCard } from "./patent-card";
import { patents } from "@/lib/research";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function PatentsGrid() {
  return (
    <section className="relative">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Fingerprint className="size-3.5 text-primary" />
            INPI · Registros de Software
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Quatro softwares — {" "}
            <span className="text-gradient">protegidos por lei.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Plataformas, APIs e pipelines de IA com registro formal no Instituto
            Nacional da Propriedade Industrial. Cada um resolve um problema real e
            carrega o peso da Lei 9.609/98.
          </p>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        className="mt-10 grid auto-rows-fr gap-6 lg:grid-cols-3"
      >
        {patents.map((patent) => (
          <motion.div
            key={patent.slug}
            variants={cardVariants}
            className={patent.span === "wide" ? "lg:col-span-2" : "lg:col-span-1"}
          >
            <PatentCard patent={patent} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
