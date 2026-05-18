"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Activity, Captions, Cpu, Gamepad2 } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";

const projects = [
  {
    icon: Activity,
    name: "Glicemy",
    tag: "Patente · INPI",
    summary:
      "API e plataforma patenteadas para gestão de diabetes — integração com dispositivos, dashboards clínicos e ML para predição de eventos.",
    chips: ["Saúde", "API", "ML", "INPI"],
    href: "/projetos",
  },
  {
    icon: Captions,
    name: "SignForest · CaptionEase",
    tag: "Patentes · IA",
    summary:
      "Softwares patenteados envolvendo IA, automação de legendagem e processamento de Libras com modelos próprios.",
    chips: ["IA", "Acessibilidade", "Automação"],
    href: "/projetos",
  },
  {
    icon: Gamepad2,
    name: "BitHunter",
    tag: "Java puro",
    summary:
      "Jogo 2D criado do zero em Java sem engines. Dominando a linguagem desde o game loop até a física e renderização.",
    chips: ["Java", "Game Dev", "Fundamentos"],
    href: "/projetos",
  },
  {
    icon: Cpu,
    name: "DomuServer",
    tag: "IoT · MQTT",
    summary:
      "Sistema de automação residencial com ESP32, MQTT e backend leve. Hardware e software conversando em tempo real.",
    chips: ["ESP32", "MQTT", "Embedded"],
    href: "/projetos",
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

export function ProjectsPreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projetos & Patentes"
        title="Engenharia que sai do papel — e do INPI."
        description="Patentes registradas, deeptech embarcada e experimentos sérios em IA, jogos e hardware."
        href="/projetos"
        hrefLabel="Ver todos os projetos"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid gap-5 md:grid-cols-2"
      >
        {projects.map(({ icon: Icon, name, tag, summary, chips, href }) => (
          <motion.div key={name} variants={cardVariants}>
            <Link href={href} className="group block h-full">
              <Card className="relative h-full overflow-hidden border-border bg-card/40 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                {/* PLACEHOLDER_IMAGE: cover do projeto "{name}" — substituir por screenshot real (1200x630) */}
                <div className="relative h-40 overflow-hidden border-b border-border">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, var(--primary) 25%, transparent), color-mix(in oklab, var(--secondary) 18%, transparent))",
                    }}
                  />
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <Icon className="size-12 text-foreground/70 drop-shadow-[0_2px_24px_rgba(167,139,250,0.45)]" />
                  </div>
                  <Badge
                    variant="outline"
                    className="absolute top-3 left-3 border-border bg-background/70 backdrop-blur"
                  >
                    {tag}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{name}</CardTitle>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {chips.map((chip) => (
                      <Badge key={chip} variant="outline" className="text-[10px]">
                        {chip}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
