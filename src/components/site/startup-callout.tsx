"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Rocket, Building2, Banknote, ShieldCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Banknote,
    title: "+R$ 193.900 captados",
    subtitle: "Fomento total (Lucro de incentivo)",
  },
  {
    icon: ShieldCheck,
    title: "Centelha Sergipe (17º)",
    subtitle: "R$ 130.000 em subvenção",
  },
  {
    icon: Rocket,
    title: "Sebrae Catalisa ICT (42º)",
    subtitle: "R$ 63.900 em bolsas",
  },
  {
    icon: GraduationCap,
    title: "Mentoria Cepedi",
    subtitle: "Bolsa Futuro Digital (2025)",
  },
  {
    icon: Building2,
    title: "De Inova Simples a ME",
    subtitle: "Startup tracionada e consolidada",
  },
];

export function StartupCallout() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-12 sm:pb-32 sm:pt-16">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 backdrop-blur sm:p-12">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent 70%)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-32 size-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #ef4444, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Empreendedorismo & Deeptech
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Fundador de Deeptech. <span className="text-gradient">AccessSim: IA e Acessibilidade.</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Não atuo apenas como desenvolvedor, mas como sócio e CTO de uma iniciativa gigante: a <strong>AccessSim</strong>. Uma startup (nascida Inova Simples e agora transicionando para Microempresa - ME) que construí do zero. Em <strong>2025</strong>, fomos aprovados e selecionados em dois dos maiores programas de fomento do país: o <strong>Programa Centelha (Fase 3, 17º lugar)</strong>, captando R$ 130.000, e o <strong>Sebrae Catalisa ICT (Fase 2, 42º lugar)</strong>. No Catalisa, garantimos 9 meses de bolsas (totalizando R$ 63.900) para uma equipe de 4 pesquisadores (1 mestre, 2 graduados e 1 graduando). Para tracionar o desenvolvimento focado em acessibilidade (NBR 9050), contratamos 2 desenvolvedores que atuam sob minha liderança e orientação direta. Adicionalmente, fomos empresa convidada no <strong>Programa Bolsa Futuro Digital (Cepedi)</strong>, atuando como Product Owners na mentoria de duas equipes de 5 estudantes (Maio a Agosto) para o desenvolvimento do nosso MVP Institucional.
          </p>
          <Button
            variant="outline"
            className="mt-8 h-10 gap-2 px-4"
            render={<Link href="/experiencia" />}
          >
            Ver mais sobre minha experiência
          </Button>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          transition={{ staggerChildren: 0.08 }}
          className="relative mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
