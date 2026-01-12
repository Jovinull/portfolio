'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { AwardsModeToggleProps } from '@/types/components/awards'

export default function AwardsModeToggle({ mode, onChange, counts }: AwardsModeToggleProps) {
  const reduced = useReducedMotion()

  const items = [
    {
      key: 'highlights' as const,
      label: 'Destaques',
      sub: counts ? String(counts.highlights) : undefined,
    },
    {
      key: 'all' as const,
      label: 'Tudo',
      sub: counts ? String(counts.all) : undefined,
    },
  ]

  return (
    <div
      className="inline-flex items-center rounded-full border border-theme bg-theme px-1 py-1 shadow-sm backdrop-blur-md"
      role="tablist"
      aria-label="Filtro de prêmios e destaques"
    >
      {items.map((it) => {
        const active = mode === it.key

        return (
          <button
            key={it.key}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(it.key)}
            className="relative isolate rounded-full px-4 py-2 text-sm font-semibold tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
          >
            {active && (
              <motion.span
                layoutId="awards-toggle-pill"
                className="absolute inset-0 -z-10 rounded-full border border-theme"
                style={{
                  background:
                    'color-mix(in srgb, var(--color-accent) 14%, var(--color-bg))',
                  boxShadow:
                    '0 0 18px color-mix(in srgb, var(--color-accent) 25%, transparent)',
                }}
                transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38 }}
              />
            )}

            <span className="inline-flex items-center gap-2">
              <span>{it.label}</span>
              {it.sub && (
                <span
                  className="rounded-full border border-theme px-2 py-0.5 text-xs font-semibold text-theme-secondary"
                  aria-label={`${it.sub} itens`}
                >
                  {it.sub}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}