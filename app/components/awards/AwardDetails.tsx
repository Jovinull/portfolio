'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { AwardsHighlightItem } from '@/app/types/assets/awards'
import { FiExternalLink } from 'react-icons/fi'

type AwardDetailsProps = {
  item: AwardsHighlightItem
  detailsId: string
}

export default function AwardDetails({ item, detailsId }: AwardDetailsProps) {
  const reduced = useReducedMotion()

  return (
    <div
      id={detailsId}
      role="region"
      aria-label="Detalhes do item selecionado"
      className="mt-6 rounded-2xl border border-theme bg-theme p-6 shadow-sm backdrop-blur-md"
      style={{
        background:
          'linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 8%, var(--color-bg)), var(--color-bg))',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={reduced ? { duration: 0 } : { duration: 0.18, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <h3 className="text-lg font-bold leading-snug">{item.title}</h3>

              <p className="mt-1 text-sm text-theme-secondary">
                {item.subtitle ? <span className="font-semibold">{item.subtitle}</span> : null}
                {item.subtitle && (item.org || item.dateLabel) ? <span> • </span> : null}
                {item.org ? <span>{item.org}</span> : null}
                {item.org && item.dateLabel ? <span> • </span> : null}
                {item.dateLabel ? <span>{item.dateLabel}</span> : null}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
                {item.year}
              </span>

              {item.proofLink?.href ? (
                <Link
                  href={item.proofLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-sm font-semibold text-theme-secondary transition hover:bg-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
                >
                  <span>{item.proofLink.label ?? 'Comprovação'}</span>
                  <FiExternalLink aria-hidden="true" className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>

          <p className="mt-4 max-w-prose text-sm leading-relaxed text-theme-secondary">
            {item.description}
          </p>

          {item.rank || item.score ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.rank ? (
                <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold">
                  {item.rank}
                </span>
              ) : null}
              {item.score ? (
                <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold">
                  {item.score}
                </span>
              ) : null}
            </div>
          ) : null}

          {item.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}