"use client";

import { motion, type Variants } from "motion/react";
import { Globe, Cpu, Zap, Layers, BookOpen, Microscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Criação de aplicações modernas, responsivas e escaláveis usando frameworks como Next.js, AdonisJS e ecossistemas TypeScript.",
  },
  {
    icon: Cpu,
    title: "Sistemas Embarcados & IoT",
    description: "Desenvolvimento com ESP32, sensores e arquiteturas MQTT para automação, robótica e monitoramento remoto de ponta a ponta.",
  },
  {
    icon: Zap,
    title: "Inteligência Artificial Aplicada",
    description: "Implementação de IA com Python, redes neurais, machine learning e processamento de linguagem natural (NLP) para resolver problemas reais.",
  },
  {
    icon: Layers,
    title: "Soluções Full Stack",
    description: "Integração do frontend ao backend com design patterns robustos, bancos de dados, RBAC e APIs RESTful seguras e eficientes.",
  },
  {
    icon: BookOpen,
    title: "Mentoria & Educação",
    description: "Criação de conteúdo educacional, monitoria técnica e liderança de squads focado na formação contínua em engenharia de software.",
  },
  {
    icon: Microscope,
    title: "Projetos de Pesquisa",
    description: "Desenvolvimento de soluções acadêmicas e open-source na fronteira do deeptech e inovação social, gerando publicações e patentes.",
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

export function ServicesSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Especialidades"
        title="O que eu construo."
        description="Domínio ponta-a-ponta: do baixo nível dos embarcados à escalabilidade de aplicações full-stack e modelos de inteligência artificial."
      />

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map(({ icon: Icon, title, description }) => (
          <motion.li key={title} variants={cardVariants}>
            <Card className="group relative h-full overflow-hidden border-border bg-card/40 backdrop-blur transition-colors hover:border-primary/40">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-32 -right-32 size-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
              />
              <CardHeader className="relative pb-4">
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-background/50 text-cyan-500 shadow-sm">
                  <Icon className="size-6" />
                </span>
                <CardTitle className="mt-5 text-xl tracking-tight">{title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
