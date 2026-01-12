'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiBookOpen, FiZap } from 'react-icons/fi'
import type { ArticleItem } from '@/types/assets/articles'

type Props = Readonly<{
  items: readonly ArticleItem[]
}>

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0
  const m = i % len
  return m < 0 ? m + len : m
}

function fmtDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: '2-digit' })
}

export default function ArticlesSignalDial({ items }: Props) {
  const reduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  const len = items.length
  const active = items[clampIndex(activeIndex, len)]
  const panelId = useId()

  useEffect(() => {
    setActiveIndex(0)
  }, [len])

  const step = useMemo(() => (len ? 360 / len : 0), [len])

  const containerRef = useRef<HTMLDivElement | null>(null)

  function go(delta: number) {
    setActiveIndex((v) => clampIndex(v + delta, len))
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!len) return
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setActiveIndex(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      setActiveIndex(len - 1)
    }
  }

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={[
        'rounded-2xl border border-theme bg-theme p-5 shadow-sm outline-none backdrop-blur-md md:p-8',
        'focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25',
      ].join(' ')}
      style={{
        background:
          'linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 8%, var(--color-bg)), var(--color-bg))',
      }}
      aria-label="Dial de artigos para sintonizar"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        {/* DIAL */}
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
          <div className="relative aspect-square w-full">
            {/* aura */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-full blur-2xl"
              initial={false}
              animate={{ opacity: 1 }}
              style={{
                background:
                  'radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent)',
              }}
            />

            {/* ring */}
            <motion.div
              className="absolute inset-6 rounded-full border border-theme"
              initial={false}
              animate={{ rotate: -(clampIndex(activeIndex, len) * step) }}
              transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 180, damping: 26 }}
              style={{
                boxShadow:
                  '0 0 0 1px color-mix(in srgb, var(--color-text) 18%, transparent), 0 20px 60px color-mix(in srgb, var(--color-accent) 12%, transparent)',
              }}
            >
              {/* ticks */}
              <div className="absolute inset-0 rounded-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 block h-2 w-[1px] -translate-x-1/2 -translate-y-[150px] opacity-60"
                    style={{
                      transform: `rotate(${i * 7.5}deg) translateY(-150px)`,
                      background:
                        i % 4 === 0
                          ? 'color-mix(in srgb, var(--color-text) 35%, transparent)'
                          : 'color-mix(in srgb, var(--color-text) 18%, transparent)',
                    }}
                  />
                ))}
              </div>

              {/* nodes (articles) */}
              <div className="absolute inset-0">
                {items.map((it, i) => {
                  const isActive = clampIndex(activeIndex, len) === i
                  const angle = i * step
                  return (
                    <button
                      key={it.slug}
                      type="button"
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Sintonizar: ${it.title}`}
                      aria-pressed={isActive}
                      className={[
                        'absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-theme bg-theme shadow-sm transition',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25',
                      ].join(' ')}
                      style={{
                        transform: `rotate(${angle}deg) translateY(-155px) rotate(${-angle}deg)`,
                        boxShadow: isActive
                          ? '0 0 0 1px color-mix(in srgb, var(--color-accent) 35%, transparent), 0 0 24px color-mix(in srgb, var(--color-accent) 22%, transparent)'
                          : undefined,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background: isActive
                            ? 'var(--color-accent)'
                            : 'color-mix(in srgb, var(--color-text) 45%, transparent)',
                        }}
                      />
                    </button>
                  )
                })}
              </div>
            </motion.div>

            {/* center knob */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative grid h-40 w-40 place-items-center rounded-full border border-theme bg-theme shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--color-accent) 14%, transparent), transparent 55%)',
                  }}
                />

                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
                    <FiZap aria-hidden="true" className="h-4 w-4" />
                    <span>{active?.frequency ?? 'Sinal'}</span>
                  </div>

                  <p className="mt-3 px-4 text-sm font-semibold leading-snug">
                    {active?.title ?? 'Sem artigos'}
                  </p>

                  <p className="mt-1 text-xs text-theme-secondary">
                    {fmtDate(active?.dateISO) ? <span>{fmtDate(active?.dateISO)}</span> : null}
                    {fmtDate(active?.dateISO) && active?.readTime ? <span> • </span> : null}
                    {active?.readTime ? <span>{active.readTime}</span> : null}
                  </p>
                </div>
              </div>
            </div>

            {/* controls */}
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
                aria-label="Artigo anterior"
              >
                <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
                aria-label="Próximo artigo"
              >
                <FiArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* PANEL */}
        <section
          id={panelId}
          aria-label="Resumo do artigo sintonizado"
          className="min-w-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active?.slug ?? 'empty'}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={reduced ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }}
              className="rounded-2xl border border-theme bg-theme p-6 shadow-sm"
            >
              <p className="text-xs font-semibold tracking-wide text-theme-secondary">
                Sintonizado
              </p>

              <h3 className="mt-2 text-xl font-bold leading-snug">
                {active?.title ?? 'Sem artigos'}
              </h3>

              <p className="mt-3 max-w-prose text-sm leading-relaxed text-theme-secondary">
                {active?.summary ?? 'Adicione artigos em assets/articles.ts'}
              </p>

              {active?.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {active?.slug ? (
                  <Link
                    href={`/articles/${active.slug}`}
                    className="btn btn-solid"
                  >
                    <FiBookOpen aria-hidden="true" className="h-4 w-4" />
                    Ler agora
                  </Link>
                ) : null}

                <Link
                  href="/articles"
                  className="btn btn-theme"
                >
                  Ver lista completa
                </Link>
              </div>

              <p className="mt-4 text-xs text-theme-secondary">
                Dica: use as setas do teclado (← →) quando o dial estiver em foco.
              </p>
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </div>
  )
}
