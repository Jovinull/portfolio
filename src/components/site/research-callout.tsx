"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, FlaskConical, FileText, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Trophy,
    title: "1º lugar",
    subtitle: "Mestrado em Computação · UFS/PROCC",
  },
  {
    icon: GraduationCap,
    title: "Especialista EPT",
    subtitle: "Educação Profissional e Tecnológica",
  },
  {
    icon: FileText,
    title: "Artigos publicados",
    subtitle: "SEMEXT · SNCT — IA aplicada",
  },
  {
    icon: FlaskConical,
    title: "4+ patentes",
    subtitle: "Registradas no INPI",
  },
];

export function ResearchCallout() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 backdrop-blur sm:p-12">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Pesquisa & Academia
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Da bancada ao paper. <span className="text-gradient">Engenharia com lastro científico.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Pesquisa não é hobby: ela sustenta as decisões de arquitetura, o
            design dos modelos e o roadmap dos produtos. Aprovado em 1º lugar no
            Mestrado em Computação da UFS, com artigos publicados em IA e
            atuação em deeptech aplicada.
          </p>
          <Button
            variant="outline"
            className="mt-8 h-10 gap-2 px-4"
            render={<Link href="/pesquisa" />}
          >
            Ver publicações e linhas de pesquisa
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.08 }}
          className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map(({ icon: Icon, title, subtitle }) => (
            <motion.li
              key={title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="rounded-xl border border-border bg-background/40 p-5 backdrop-blur transition-colors hover:border-primary/40"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-border bg-card/60 text-primary">
                <Icon className="size-5" />
              </span>
              <p className="mt-4 text-lg font-semibold text-foreground">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
