'use client';

import { useMemo, useState } from 'react';
import { timelineData } from '@/assets/assets';
import type { TimelineEntry } from '@/app/types/assets';
import Timeline from './Timeline';

type Group = { year: number; items: TimelineEntry[] };

function groupByYear(items: TimelineEntry[]): Group[] {
  const map = new Map<number, TimelineEntry[]>();

  for (const item of items) {
    const arr = map.get(item.year) ?? [];
    arr.push(item);
    map.set(item.year, arr);
  }

  const entries = Array.from(map.entries()).sort(([a], [b]) => b - a);

  return entries.map(([year, arr]) => {
    const sortedItems = [...arr].sort((a, b) => (b.sort ?? 0) - (a.sort ?? 0));
    return { year, items: sortedItems };
  });
}

export default function TimelineSection() {
  const [mode, setMode] = useState<'highlights' | 'all'>('highlights');

  const items = useMemo(() => {
    const base = [...timelineData];
    return mode === 'highlights' ? base.filter((i) => i.highlight) : base;
  }, [mode]);

  const groups = useMemo(() => groupByYear(items), [items]);

  const isHighlights = mode === 'highlights';
  const isAll = mode === 'all';

  const tabBase =
    'btn relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/25 dark:focus-visible:ring-white/25';

  const tabActive = 'bg-theme text-theme border border-theme shadow-sm';

  const tabInactive = 'btn-theme opacity-90 hover:opacity-100';

  return (
    <section
      id="timeline"
      className="bg-theme-secondary scroll-mt-[var(--navbar-height)] py-16 md:py-20"
      aria-label="Linha do tempo"
    >
      <div className="mx-auto w-full max-w-6xl px-[var(--pad)]">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-theme text-3xl font-semibold tracking-tight md:text-4xl">
              Linha do Tempo
            </h2>
            <p className="text-theme-secondary mt-3">
              Um recorte da minha jornada (trabalho, pesquisa, educação e produtos) — com foco no
              que mais importa: impacto, consistência e evolução.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtro da linha do tempo"
            className="relative inline-flex items-center gap-1 rounded-full border border-theme bg-theme px-1 py-1 shadow-sm backdrop-blur-md"
          >
            <span
              aria-hidden="true"
              className={[
                'pointer-events-none absolute top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-full',
                'transition-transform duration-300 ease-out',
              ].join(' ')}
              style={{
                transform: isAll ? 'translateX(100%)' : 'translateX(0%)',
                background: 'color-mix(in srgb, var(--color-accent) 14%, transparent)',
                boxShadow:
                  '0 0 0 1px color-mix(in srgb, var(--color-accent) 22%, transparent), 0 12px 26px color-mix(in srgb, var(--color-accent) 14%, transparent)',
              }}
            />

            <button
              type="button"
              role="tab"
              aria-selected={isHighlights}
              onClick={() => setMode('highlights')}
              className={[tabBase, 'z-10 w-28', isHighlights ? tabActive : tabInactive].join(' ')}
            >
              Destaques
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={isAll}
              onClick={() => setMode('all')}
              className={[tabBase, 'z-10 w-28', isAll ? tabActive : tabInactive].join(' ')}
            >
              Tudo
            </button>
          </div>
        </div>

        <Timeline groups={groups} />
      </div>
    </section>
  );
}
