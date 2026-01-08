'use client';

import { useMemo, useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'framer-motion';
import type { TimelineEntry } from '@/app/types/assets';
import TimelineRail from './TimelineRail';
import TimelineYearGroup from './TimelineYearGroup';

type Group = { year: number; items: TimelineEntry[] };

type TimelineProps = Readonly<{
  groups: Group[];
}>;

export default function Timeline({ groups }: TimelineProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const years = useMemo(() => groups.map((g) => g.year), [groups]);

  return (
    <div ref={ref} className="relative">
      <TimelineRail progress={scrollYProgress} years={years} />

      <motion.ol
        className="pl-14"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={reduced ? undefined : { opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {groups.map((group) => (
          <TimelineYearGroup key={group.year} group={group} />
        ))}
      </motion.ol>
    </div>
  );
}
