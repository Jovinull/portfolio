"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stackChips = [
  "Next.js",
  "AdonisJS v6",
  "Rust",
  "Python · ML",
  "Java · Spring",
  "PostgreSQL",
  "Docker · Azure",
  "ESP32 · IoT",
];

const stats = [
  { value: "4+", label: "Patentes INPI" },
  { value: "10+", label: "Anos em código" },
  { value: "1º", label: "Lugar — Mestrado UFS" },
  { value: "∞", label: "Soluções em produção" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 16, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <section
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden pt-16"
      style={
        {
          "--mx": "50%",
          "--my": "30%",
        } as React.CSSProperties
      }
    >
      {/* Grid base layer */}
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
      />

      {/* Spotlight following cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 400px at var(--mx) var(--my), color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
          transition: "background 0.15s ease-out",
        }}
      />

      {/* Floating brand orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 size-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 size-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        animate={{ y: [0, -28, 0], x: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Top fade to navbar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={itemVariants} className="relative mb-8">
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-3xl opacity-70 blur-2xl sm:-inset-5"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--primary) 60%, transparent), color-mix(in oklab, var(--secondary) 50%, transparent))",
            }}
          />
          <div className="relative size-28 overflow-hidden rounded-2xl border border-border/80 ring-2 ring-primary/30 shadow-2xl sm:size-32 md:size-36">
            <Image
              src="/images/hero-jovino.jpg"
              alt="Felipe Jovino"
              fill
              sizes="(min-width: 768px) 144px, (min-width: 640px) 128px, 112px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Badge
            variant="outline"
            className="gap-2 border-primary/40 bg-card/60 px-3 py-1 backdrop-blur"
          >
            <span className="relative inline-flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium">Disponível para conversas</span>
            <Sparkles className="size-3 text-primary" />
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          <span className="block">Coordenador de TI.</span>
          <span className="text-gradient block">CTO & Pesquisador AI.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Comecei queimando placas e hoje construo soluções escaláveis que
          impactam vidas. De interfaces fluidas com Next.js a arquiteturas
          robustas em Rust, IA e sistemas embarcados — unindo engenharia de
          ponta, pesquisa acadêmica e liderança de times.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            render={
              <Link href="/projetos" className="group h-12 gap-2 px-6 text-sm font-semibold" />
            }
          >
            Ver projetos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <Link href="/contato" className="h-12 px-6 text-sm font-semibold" />
            }
          >
            Falar comigo
          </Button>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-2"
        >
          {stackChips.map((chip) => (
            <li key={chip}>
              <span className="inline-flex items-center rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-foreground backdrop-blur transition-colors hover:border-primary/50 hover:text-foreground">
                {chip}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.dl
          variants={itemVariants}
          className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-xl border border-border bg-card/40 p-4 text-left backdrop-blur transition-colors hover:border-primary/40"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">
                <span className="text-gradient">{stat.value}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}
