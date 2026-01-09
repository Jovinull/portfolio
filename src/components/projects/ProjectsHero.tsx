'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/src/components/motion/variants';

export default function ProjectsHero({
  total,
  featured,
}: Readonly<{ total: number; featured: number }>) {
  const reduced = useReducedMotion();

  return (
    <motion.header
      variants={staggerContainer(!!reduced, 0.08, 0.02)}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once: true, amount: 0.35 }}
      className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/40 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_10%,#000_60%,transparent)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-accent)_18%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-accent)_12%,transparent)_1px,transparent_1px)] bg-[size:22px_22px]" />
      </div>

      <motion.div variants={fadeUp(!!reduced, { delay: 0 })} className="relative">
        <nav className="text-theme-secondary text-sm">
          <Link href="/" className="hover:text-theme transition-colors">
            Início
          </Link>
          <span className="mx-2 opacity-60">/</span>
          <span className="text-theme">Projetos</span>
        </nav>

        <h1 className="font-display mt-4 text-balance text-4xl leading-tight sm:text-5xl">
          Uma vitrine dedicada aos meus projetos{' '}
          <span className="text-theme-secondary">— com foco no que entrega impacto.</span>
        </h1>

        <p className="text-theme-secondary mt-4 max-w-2xl text-balance">
          No topo você navega pelos principais com setas (sem arrastar). Abaixo, uma lista dos demais
          projetos (quando você adicionar), com busca e micro-interações.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            Total: <span className="ml-1 font-semibold">{total}</span>
          </span>
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            Principais: <span className="ml-1 font-semibold">{featured}</span>
          </span>
        </div>
      </motion.div>
    </motion.header>
  );
}
