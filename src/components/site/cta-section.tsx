"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pb-32 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card/40 px-8 py-16 text-center backdrop-blur sm:px-12 sm:py-20"
      >
        <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 100% at 50% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Próximo passo
          </span>
          <h2 className="mx-auto mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Construindo o próximo? <span className="text-gradient">Vamos falar.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
            Aberto a oportunidades em Big Techs, parcerias deeptech, mentorias e
            palestras. Resposta rápida.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              render={
                <Link href="/contato" className="group h-12 gap-2 px-6 text-sm font-semibold" />
              }
            >
              Iniciar conversa
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              render={
                <a
                  href="https://www.linkedin.com/in/felipe-jovino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 text-sm font-semibold"
                />
              }
            >
              Conectar no LinkedIn
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
