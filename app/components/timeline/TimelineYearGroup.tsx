'use client';

import type { TimelineEntry } from '@/app/types/assets';
import TimelineItem from './TimelineItem';

export default function TimelineYearGroup({ group }: { group: { year: number; items: TimelineEntry[] } }) {
  return (
    <li className="relative pb-10 md:pb-14">
      <div className="md:grid md:grid-cols-[140px_1fr] md:gap-8">
        <div className="mb-4 md:mb-0">
          <div className="md:sticky md:top-[calc(var(--navbar-height)+16px)]">
            <span className="inline-flex items-center rounded-full border border-theme bg-theme px-4 py-2 text-sm font-semibold tracking-wide shadow-sm backdrop-blur-md">
              {group.year}
            </span>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {group.items.map(item => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </li>
  );
}
