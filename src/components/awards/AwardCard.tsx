'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { AwardsHighlightItem } from '@/src/types/assets/awards'
import { FiAward, FiCpu, FiShield, FiStar, FiZap } from 'react-icons/fi'

function Icon({
  iconKey,
}: Readonly<{
  iconKey?: AwardsHighlightItem['iconKey']
}>) {
  if (iconKey === 'cpu') return <FiCpu aria-hidden="true" className="h-4 w-4" />
  if (iconKey === 'shield') return <FiShield aria-hidden="true" className="h-4 w-4" />
  if (iconKey === 'award') return <FiAward aria-hidden="true" className="h-4 w-4" />
  if (iconKey === 'star') return <FiStar aria-hidden="true" className="h-4 w-4" />
  return <FiZap aria-hidden="true" className="h-4 w-4" />
}

type AwardCardProps = Readonly<{
  item: Readonly<AwardsHighlightItem>
  isActive: boolean
  detailsId: string
  onActivate: () => void
  onKeyNav: (e: React.KeyboardEvent<HTMLButtonElement>) => void
  buttonRef: (el: HTMLButtonElement | null) => void
}>

export default function AwardCard({
  item,
  isActive,
  detailsId,
  onActivate,
  onKeyNav,
  buttonRef,
}: AwardCardProps) {
  const reduced = useReducedMotion()

  return (
    <motion.button
      ref={buttonRef}
      type="button"
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={onKeyNav}
      aria-expanded={isActive}
      aria-controls={detailsId}
      className={[
        'group relative w-[280px] shrink-0 snap-center rounded-2xl border border-theme bg-theme p-5 text-left shadow-sm outline-none backdrop-blur-md',
        'focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25',
        'transition-colors',
      ].join(' ')}
      initial={false}
      animate={{
        scale: isActive ? 1 : 0.96,
        opacity: isActive ? 1 : 0.8,
        y: isActive ? -2 : 0,
      }}
      transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 460, damping: 34 }}
      style={{
        boxShadow: isActive
          ? '0 0 0 1px color-mix(in srgb, var(--color-accent) 35%, transparent), 0 10px 30px color-mix(in srgb, var(--color-accent) 18%, transparent)'
          : undefined,
      }}
    >
      {/* topo: ícone + ano */}
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
          <Icon iconKey={item.iconKey} />
          <span className="capitalize">{item.category}</span>
        </span>

        <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
          {item.year}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-bold leading-snug">{item.title}</h3>

        {(item.subtitle || item.org) && (
          <p className="text-sm text-theme-secondary">
            {item.subtitle ? <span className="font-semibold">{item.subtitle}</span> : null}
            {item.subtitle && item.org ? <span> • </span> : null}
            {item.org ? <span>{item.org}</span> : null}
          </p>
        )}
      </div>

      {/* micro spotlight (sem trocar destaque por hover) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent)',
        }}
      />
    </motion.button>
  )
}
