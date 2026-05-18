"use client";

import { motion, type Variants } from "motion/react";
import { Briefcase, Building2, Rocket, MonitorPlay } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const experiences = [
  {
    icon: Briefcase,
    company: "WM Saúde",
    role: "Coordenador de TI",
    period: "Atual",
    description:
      "Lidero squads, defino arquitetura, padrões (GitFlow, CI/CD) e entrego produtos com AdonisJS v6 e Next.js para um setor regulado.",
    chips: ["Liderança", "AdonisJS v6", "Next.js", "PostgreSQL"],
  },
  {
    icon: Rocket,
    company: "AccessSim · Sebrae Catalisa",
    role: "CTO & Co-Founder",
    period: "Deeptech",
    description:
      "Deeptech de acessibilidade com IA e RA aplicada à NBR 9050. Python no backend, React Native no app, modelos próprios.",
    chips: ["IA", "RA", "Python", "React Native"],
  },
  {
    icon: Building2,
    company: "WF3 Solutions",
    role: "Co-Founder",
    period: "Produto",
    description:
      "Construindo produtos escaláveis e seguros com foco em RBAC, LGPD e arquitetura para crescer sem dor.",
    chips: ["RBAC", "LGPD", "SaaS", "Arquitetura"],
  },
  {
    icon: MonitorPlay,
    company: "Masters Tech · YouTube",
    role: "Criador",
    period: "Comunidade",
    description:
      "Democratizando tecnologia em vídeo: ensino, decisões de carreira e bastidores de engenharia.",
    chips: ["Conteúdo", "Educação", "DevRel"],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ExperiencePreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Experiência"
        title="Liderando squads e enviando produto."
        description="Atuação de CTO a Coordenador de TI, de deeptech ao SaaS regulado — sempre com responsabilidade técnica e foco em entregar."
        href="/experiencia"
        hrefLabel="Ver trajetória completa"
      />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid gap-5 sm:grid-cols-2"
      >
        {experiences.map(({ icon: Icon, company, role, period, description, chips }) => (
          <motion.li key={company} variants={cardVariants}>
            <Card className="group relative h-full overflow-hidden border-border bg-card/40 backdrop-blur transition-colors hover:border-primary/40">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
              />
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-lg border border-border bg-background/50 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {period}
                  </span>
                </div>
                <CardTitle className="mt-4 text-xl">{company}</CardTitle>
                <CardDescription className="font-mono text-xs uppercase tracking-wider">
                  {role}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {chips.map((chip) => (
                    <Badge key={chip} variant="outline" className="text-[10px]">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
