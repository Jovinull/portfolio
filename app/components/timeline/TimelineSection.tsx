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

  return Array.from(map.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, arr]) => ({
      year,
      items: arr.sort((a, b) => (b.sort ?? 0) - (a.sort ?? 0)),
    }));
}

export default function TimelineSection() {
  const [mode, setMode] = useState<'highlights' | 'all'>('highlights');

  const items = useMemo(() => {
    const base = [...timelineData];
    return mode === 'highlights' ? base.filter(i => i.highlight) : base;
  }, [mode]);

  const groups = useMemo(() => groupByYear(items), [items]);

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
              Um recorte da minha jornada (trabalho, pesquisa, educação e produtos) — com foco no que
              mais importa: impacto, consistência e evolução.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMode('highlights')}
              className={[
                'btn btn-theme',
                mode === 'highlights'
                  ? 'ring-2 ring-black/20 dark:ring-white/20'
                  : 'opacity-90 hover:opacity-100',
              ].join(' ')}
              aria-pressed={mode === 'highlights'}
            >
              Destaques
            </button>

            <button
              type="button"
              onClick={() => setMode('all')}
              className={[
                'btn btn-theme',
                mode === 'all' ? 'ring-2 ring-black/20 dark:ring-white/20' : 'opacity-90 hover:opacity-100',
              ].join(' ')}
              aria-pressed={mode === 'all'}
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
