'use client';

import { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { TimelineEntry, TimelineEntryType, TimelineBadge } from '@/app/types/assets';
import TimelinePopover from './TimelinePopover';

import type { IconType } from 'react-icons';
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCpu,
  FiHash,
  FiUsers,
  FiZap,
  FiStar,
} from 'react-icons/fi';

const ICON_BY_TYPE: Record<TimelineEntryType, IconType> = {
  work: FiBriefcase,
  startup: FiZap,
  education: FiBookOpen,
  research: FiCpu,
  award: FiAward,
  publication: FiBookOpen,
  patent: FiHash,
  community: FiUsers,
};

const LABEL_BY_TYPE: Record<TimelineEntryType, string> = {
  work: 'Trabalho',
  startup: 'Produto/Startup',
  education: 'Educação',
  research: 'Pesquisa',
  award: 'Prêmio',
  publication: 'Publicação',
  patent: 'Registro',
  community: 'Comunidade',
};

function BadgePill({ badge }: { badge: TimelineBadge }) {
  const isAccent = badge.tone === 'accent';

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold leading-none"
      style={
        isAccent
          ? {
              borderColor: 'color-mix(in srgb, var(--color-accent) 55%, transparent)',
              background: 'color-mix(in srgb, var(--color-accent) 14%, transparent)',
              boxShadow:
                '0 0 0 1px color-mix(in srgb, var(--color-accent) 18%, transparent), 0 10px 30px color-mix(in srgb, var(--color-accent) 16%, transparent)',
            }
          : undefined
      }
    >
      {isAccent ? (
        <FiStar
          aria-hidden="true"
          className="shrink-0"
          style={{ color: 'var(--color-accent)' }}
        />
      ) : null}
      <span className="text-theme">{badge.label}</span>
    </span>
  );
}

export default function TimelineItem({ item }: { item: TimelineEntry }) {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  // ✅ useId retorna string; serve como id do tooltip/popover
  const tooltipId = useId();

  const Icon = ICON_BY_TYPE[item.type];

  return (
    <motion.li
      className="relative"
      initial={reduced ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {/* DOT no trilho */}
      <span className="absolute -left-8 top-6 grid h-4 w-4 place-items-center">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: 'var(--color-accent)' }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full blur-sm"
          style={{ background: 'var(--color-accent)', opacity: 0.25 }}
        />
      </span>

      <motion.article
        tabIndex={0}
        aria-describedby={open ? tooltipId : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpen(false);
        }}
        whileHover={reduced ? undefined : { y: -3 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className={[
          'group relative overflow-visible rounded-2xl border border-theme bg-theme p-4 shadow-sm',
          'outline-none focus-visible:ring-2 focus-visible:ring-black/25 dark:focus-visible:ring-white/25',
        ].join(' ')}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-theme bg-theme-secondary">
                <Icon className="text-theme" />
              </span>

              <div className="min-w-0">
                <h3 className="text-theme truncate text-base font-semibold leading-snug md:text-lg">
                  {item.title}
                </h3>

                <p className="text-theme-secondary mt-0.5 text-sm">
                  {item.org ? item.org : '—'}
                  {item.period ? (
                    <span className="opacity-80"> • {item.period}</span>
                  ) : null}
                </p>

                {item.badges?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.badges.map((b) => (
                      <BadgePill key={b.label} badge={b} />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center rounded-full border border-theme bg-theme-secondary px-3 py-1 text-xs font-medium">
            {LABEL_BY_TYPE[item.type]}
          </span>
        </div>

        {/* sheen sutil no hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(800px 260px at 20% 0%, color-mix(in srgb, var(--color-accent) 18%, transparent), transparent 60%)',
          }}
        />

        <TimelinePopover id={tooltipId} open={open}>
          {item.description}
        </TimelinePopover>
      </motion.article>
    </motion.li>
  );
}
