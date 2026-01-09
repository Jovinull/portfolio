'use client';

import { motion } from 'framer-motion';
import type { TimelineRailProps } from '@/src/types/components/timeline';

export default function TimelineRail({ progress }: TimelineRailProps) {
  return (
    <div className="pointer-events-none absolute left-6 top-0 h-full w-10">
      {/* trilho base */}
      <div className="absolute left-0 top-0 h-full w-px bg-black/15 dark:bg-white/15" />

      {/* progresso */}
      <motion.div
        className="absolute left-0 top-0 h-full w-[2px]"
        style={{
          scaleY: progress,
          transformOrigin: 'top',
          background: 'var(--color-accent)',
          boxShadow: '0 0 18px color-mix(in srgb, var(--color-accent) 45%, transparent)',
        }}
      />

      {/* glow suave (uau sem exagero) */}
      <motion.div
        className="absolute left-0 top-0 h-full w-6 -translate-x-1/2 blur-2xl"
        style={{
          scaleY: progress,
          transformOrigin: 'top',
          background: 'var(--color-accent)',
          opacity: 0.15,
        }}
      />
    </div>
  );
}
