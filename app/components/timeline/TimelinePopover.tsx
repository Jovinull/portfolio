'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function TimelinePopover({
  id,
  open,
  children,
}: {
  id: string;
  open: boolean;
  children: ReactNode;
}) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          role="tooltip"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6, scale: 0.98 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={[
            'absolute z-20',
            // mobile: abaixo
            'left-0 top-full mt-2 w-full',
            // md+: do lado
            'md:left-full md:top-1/2 md:mt-0 md:ml-4 md:w-[360px] md:-translate-y-1/2',
          ].join(' ')}
        >
          <div className="relative overflow-hidden rounded-2xl border border-theme bg-theme p-4 shadow-xl">
            {/* highlight interno sutil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'var(--color-accent)', opacity: 0.12 }}
            />
            <div className="relative text-sm text-theme-secondary leading-relaxed">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
