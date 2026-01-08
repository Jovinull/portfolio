'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { AwardsHighlightItem } from '@/app/types/assets/awards'
import AwardCard from '@/app/components/awards/AwardCard'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type AwardsShelfProps = {
  items: ReadonlyArray<AwardsHighlightItem>
  activeIndex: number
  setActiveIndex: (index: number) => void
  detailsId: string
}

export default function AwardsShelf({
  items,
  activeIndex,
  setActiveIndex,
  detailsId,
}: AwardsShelfProps) {
  const reduced = useReducedMotion()

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([])

  // evita o “detector do centro” sobrescrever o clique enquanto o scroll programático acontece
  const programmaticRef = useRef(false)
  const programmaticTimerRef = useRef<number | null>(null)

  const clamp = useMemo(
    () => (i: number) => Math.max(0, Math.min(items.length - 1, i)),
    [items.length]
  )

  const compact = items.length <= 3
  const canScroll = !compact

  // padding para permitir 1º e último centralizarem
  const pad = 'clamp(1rem, calc((100% - 280px) / 2), 6rem)'

  const markProgrammatic = () => {
    programmaticRef.current = true
    if (programmaticTimerRef.current) window.clearTimeout(programmaticTimerRef.current)
    programmaticTimerRef.current = window.setTimeout(() => {
      programmaticRef.current = false
      programmaticTimerRef.current = null
    }, 260)
  }

  const centerIndex = (idx: number, opts?: { focus?: boolean }) => {
    const next = clamp(idx)
    const btn = btnRefs.current[next]
    const scroller = scrollerRef.current

    setActiveIndex(next)

    if (opts?.focus) btn?.focus()

    if (!canScroll || !btn || !scroller) return

    // centralização manual (mais confiável que scrollIntoView inline:center no Firefox)
    const scrollerRect = scroller.getBoundingClientRect()
    const btnRect = btn.getBoundingClientRect()

    // posição do centro do botão relativa ao scroller, considerando o scroll atual
    const btnCenterWithinScroller =
      (btnRect.left - scrollerRect.left) + btnRect.width / 2

    const targetLeft =
      scroller.scrollLeft + btnCenterWithinScroller - scroller.clientWidth / 2

    markProgrammatic()
    scroller.scrollTo({
      left: targetLeft,
      behavior: reduced ? 'auto' : 'smooth',
    })
  }

  // Atualiza “ativo” conforme scroll (pega o item mais perto do centro) — apenas no modo carrossel
  useEffect(() => {
    if (!canScroll) return
    const el = scrollerRef.current
    if (!el) return

    let raf = 0

    const computeActive = () => {
      if (programmaticRef.current) return

      const centerX = el.getBoundingClientRect().left + el.clientWidth / 2

      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY

      for (let i = 0; i < btnRefs.current.length; i++) {
        const btn = btnRefs.current[i]
        if (!btn) continue
        const r = btn.getBoundingClientRect()
        const mid = r.left + r.width / 2
        const dist = Math.abs(mid - centerX)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = i
        }
      }

      if (bestIdx !== activeIndex) setActiveIndex(bestIdx)
    }

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(computeActive)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    onScroll()

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [activeIndex, canScroll, setActiveIndex])

  // mantém o item ativo centralizado quando mudar a lista (ex.: alternar Destaques/Tudo)
  useEffect(() => {
    if (!items.length) return
    // pequena “sincronia” pós-render pra garantir refs prontas
    const t = window.setTimeout(() => centerIndex(activeIndex), 0)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  const onKeyNav = (idx: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      centerIndex(idx + 1, { focus: true })
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      centerIndex(idx - 1, { focus: true })
    }
    if (e.key === 'Home') {
      e.preventDefault()
      centerIndex(0, { focus: true })
    }
    if (e.key === 'End') {
      e.preventDefault()
      centerIndex(items.length - 1, { focus: true })
    }
  }

  const hasPrev = activeIndex > 0
  const hasNext = activeIndex < items.length - 1
  const showArrows = items.length > 1

  return (
    <div className="relative">
      {/* setas */}
      {showArrows ? (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between">
          <div className="pointer-events-auto">
            <button
              type="button"
              onClick={() => centerIndex(activeIndex - 1, { focus: true })}
              disabled={!hasPrev}
              aria-label="Anterior"
              className={[
                'inline-flex items-center justify-center rounded-full border border-theme bg-theme p-2 shadow-sm backdrop-blur-md transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25',
                !hasPrev ? 'opacity-40' : 'hover:bg-theme-secondary',
              ].join(' ')}
            >
              <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>

          <div className="pointer-events-auto">
            <button
              type="button"
              onClick={() => centerIndex(activeIndex + 1, { focus: true })}
              disabled={!hasNext}
              aria-label="Próximo"
              className={[
                'inline-flex items-center justify-center rounded-full border border-theme bg-theme p-2 shadow-sm backdrop-blur-md transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25',
                !hasNext ? 'opacity-40' : 'hover:bg-theme-secondary',
              ].join(' ')}
            >
              <FiChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}

      <div
        ref={scrollerRef}
        className={[
          'relative -mx-4 flex gap-4 px-4 py-3',
          compact ? 'justify-center overflow-x-visible' : 'snap-x snap-mandatory overflow-x-auto',
        ].join(' ')}
        style={
          compact
            ? undefined
            : {
                paddingLeft: pad,
                paddingRight: pad,
                scrollPaddingInline: pad,
                scrollbarWidth: 'none',
              }
        }
      >
        {!compact ? (
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        ) : null}

        {items.map((item, idx) => (
          <AwardCard
            key={item.id}
            item={item}
            isActive={idx === activeIndex}
            detailsId={detailsId}
            onActivate={() => centerIndex(idx)}
            onKeyNav={onKeyNav(idx)}
            buttonRef={(el) => {
              btnRefs.current[idx] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}
