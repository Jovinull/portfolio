'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { awardsHighlightsData } from '@/assets/assets'
import type { AwardsHighlightItem } from '@/app/types/assets/awards'
import type { AwardsMode, AwardsSectionProps } from '@/app/types/components/awards'
import AwardsModeToggle from '@/app/components/awards/AwardsModeToggle'
import AwardsShelf from './AwardsShelf'
import AwardDetails from '@/app/components/awards/AwardDetails'

function sortAwards(items: ReadonlyArray<AwardsHighlightItem>) {
  return [...items].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year
    const sa = a.sort ?? 0
    const sb = b.sort ?? 0
    if (sa !== sb) return sb - sa
    return a.title.localeCompare(b.title, 'pt-BR')
  })
}

export default function AwardsSection({ className }: Readonly<AwardsSectionProps>) {
  const reduced = useReducedMotion()
  const [mode, setMode] = useState<AwardsMode>('highlights')

  const counts = useMemo(() => {
    const all = awardsHighlightsData.length
    const highlights = awardsHighlightsData.filter((i) => i.highlight).length
    return { all, highlights }
  }, [])

  const items = useMemo(() => {
    const base =
      mode === 'highlights'
        ? awardsHighlightsData.filter((i) => i.highlight)
        : awardsHighlightsData

    return sortAwards(base)
  }, [mode])

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setActiveIndex(0)
  }, [mode])

  useEffect(() => {
    if (!items.length) return
    setActiveIndex((i) => Math.max(0, Math.min(items.length - 1, i)))
  }, [items.length])

  const active = items[activeIndex]
  const detailsId = 'awards-details-panel'

  return (
    <section id="awards" className={['bg-theme py-16 md:py-20', className ?? ''].join(' ')}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-subtitle text-sm font-semibold tracking-wide">Prêmios & Destaques</p>

            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">Museu de Conquistas</h2>

            <p className="mt-3 text-sm leading-relaxed text-theme-secondary">
              Use as setas (na tela ou no teclado) para alternar o destaque. Você também pode clicar
              em qualquer item.
            </p>
          </div>

          <AwardsModeToggle mode={mode} onChange={setMode} counts={counts} />
        </div>

        <div className="mt-10">
          <AwardsShelf
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            detailsId={detailsId}
          />

          <div className="mt-4 flex items-center justify-between text-xs text-theme-secondary">
            <span>
              {items.length ? (
                <>
                  <span className="font-semibold">{activeIndex + 1}</span> / {items.length}
                </>
              ) : (
                'Sem itens'
              )}
            </span>

            <motion.span
              aria-hidden="true"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-theme px-3 py-1"
              initial={false}
              animate={{ opacity: items.length ? 1 : 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.15 }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: 'var(--color-accent)' }} />
              <span>em foco</span>
            </motion.span>
          </div>

          {active ? <AwardDetails item={active} detailsId={detailsId} /> : null}
        </div>
      </div>
    </section>
  )
}
