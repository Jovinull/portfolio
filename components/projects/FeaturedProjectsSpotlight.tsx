'use client';

import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useCallback, useId, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { WorkItem } from '@/types/assets';
import { fadeUp, staggerContainer } from '@/components/motion/variants';

function clampIndex(next: number, total: number) {
  if (total <= 0) return 0;
  return (next + total) % total;
}

type FeaturedProjectsSpotlightProps = Readonly<{
  projects: readonly WorkItem[];
}>;

export default function FeaturedProjectsSpotlight({ projects }: FeaturedProjectsSpotlightProps) {
  const reduced = useReducedMotion();
  const titleId = useId();

  const total = projects.length;
  const [active, setActive] = useState(0);

  const current = useMemo(() => projects[active] ?? projects[0], [projects, active]);

  const go = useCallback(
    (nextIndex: number) => {
      setActive(() => clampIndex(nextIndex, total));
    },
    [total]
  );

  const prev = useCallback(() => setActive((i) => clampIndex(i - 1, total)), [total]);
  const next = useCallback(() => setActive((i) => clampIndex(i + 1, total)), [total]);

  const handleArrowKeys = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  if (!current) return null;

  return (
    <section aria-labelledby={titleId} className="mt-10">
      <motion.div
        variants={staggerContainer(!!reduced, 0.08, 0.02)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={fadeUp(!!reduced, { delay: 0 })}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 id={titleId} className="font-display text-3xl">
              Principais projetos
            </h2>
            <p className="text-theme-secondary mt-2 max-w-2xl text-balance">
              Navegue com setas (ou teclado: ← →). Miniaturas ao lado pra pular direto.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-theme-secondary hidden text-sm md:inline">
              {active + 1} / {total}
            </span>

            <button
              type="button"
              onClick={prev}
              onKeyDown={handleArrowKeys}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-visible:ring-white/30"
              aria-label="Projeto anterior"
            >
              <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={next}
              onKeyDown={handleArrowKeys}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:focus-visible:ring-white/30"
              aria-label="Próximo projeto"
            >
              <FiChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <section
          className="mt-6 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start"
          aria-label="Carrossel de projetos"
          aria-roledescription="carrossel"
        >
          {/* Spotlight */}
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 lg:h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.title}-${active}`}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
                className="relative h-full"
              >
                {/* backdrop (preenche sem cortar “o principal”) */}
                <div className="absolute inset-0">
                  <Image
                    src={current.bgImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover scale-[1.12] blur-2xl opacity-30"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/25 to-black/15" />
                </div>

                {/* imagem real (sem corte) */}
                <Image
                  src={current.bgImage}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-contain p-6 sm:p-10"
                  priority
                />

                {/* contraste suave pro texto */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-6 backdrop-blur-md dark:bg-zinc-950/60">
                  <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-50">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Lista */}
          <div className="rounded-3xl border border-black/10 bg-white/40 p-4 backdrop-blur-md dark:border-white/10 dark:bg-white/5 lg:h-[520px] lg:overflow-y-auto lg:pr-2 [scrollbar-width:thin]">
            <p className="text-theme-secondary text-xs font-semibold tracking-wide uppercase">
              Pular para
            </p>

            <ul className="mt-3 space-y-3">
              {projects.map((p, idx) => {
                const isActive = idx === active;

                return (
                  <li key={`${p.title}-${idx}`}>
                    <button
                      type="button"
                      onClick={() => go(idx)}
                      onKeyDown={handleArrowKeys}
                      aria-current={isActive ? 'true' : undefined}
                      className={[
                        'group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition',
                        isActive
                          ? 'border-black/15 bg-white/75 shadow-sm dark:border-white/15 dark:bg-white/10'
                          : 'border-black/10 bg-white/45 hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
                      ].join(' ')}
                    >
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-white/10">
                        <Image
                          src={p.bgImage}
                          alt=""
                          aria-hidden="true"
                          fill
                          sizes="64px"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="line-clamp-1 text-sm font-semibold">{p.title}</p>
                        <p className="text-theme-secondary line-clamp-1 text-xs">{p.description}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </motion.div>
    </section>
  );
}
