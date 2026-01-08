'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import { FiAward, FiCpu, FiShield, FiStar, FiZap } from 'react-icons/fi';
import type { TimelineBadge } from '@/app/types/assets';

function BadgeIcon({ icon }: { icon?: TimelineBadge['icon'] }) {
  if (icon === 'cpu') return <FiCpu aria-hidden="true" className="h-4 w-4" />;
  if (icon === 'shield') return <FiShield aria-hidden="true" className="h-4 w-4" />;
  if (icon === 'award') return <FiAward aria-hidden="true" className="h-4 w-4" />;
  if (icon === 'star') return <FiStar aria-hidden="true" className="h-4 w-4" />;
  return <FiZap aria-hidden="true" className="h-4 w-4" />; // bolt/default
}

export default function TimelinePopover({
  id,
  open,
  badges,
  children,
}: {
  id: string;
  open: boolean;
  badges?: TimelineBadge[];
  children: ReactNode;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const [shiftX, setShiftX] = useState(0);

  useLayoutEffect(() => {
    if (!open) return;

    setShiftX(0);
    const padding = 12;

    const measure = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;

      let dx = 0;
      if (rect.right > vw - padding) dx = vw - padding - rect.right;
      if (rect.left + dx < padding) dx += padding - (rect.left + dx);

      setShiftX((prev) => (Math.abs(prev - dx) < 0.5 ? prev : dx));
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, [open, children, badges]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          id={id}
          role="tooltip"
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6, scale: 0.98 }}
          animate={
            reduced
              ? { opacity: 1, x: shiftX }
              : { opacity: 1, y: 0, scale: 1, x: shiftX }
          }
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={[
            'absolute z-20',
            'left-0 top-full mt-2 w-full max-w-[calc(100vw-1.5rem)]',
            'md:left-full md:top-1/2 md:mt-0 md:ml-4 md:w-[360px] md:max-w-[calc(100vw-1.5rem)] md:-translate-y-1/2',
          ].join(' ')}
        >
          <div className="relative overflow-hidden rounded-2xl border border-theme bg-theme p-4 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'var(--color-accent)', opacity: 0.12 }}
            />

            <div className="relative">
              {!!badges?.length && (
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {badges.map((b) => {
                    const isAccent = b.tone === 'accent';

                    return (
                      <span
                        key={b.label}
                        className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-semibold"
                        style={{
                          borderColor: isAccent
                            ? 'color-mix(in srgb, var(--color-accent) 55%, var(--color-border))'
                            : 'var(--color-border)',
                          background: isAccent
                            ? 'color-mix(in srgb, var(--color-accent) 16%, transparent)'
                            : 'color-mix(in srgb, var(--color-bg-secondary) 55%, transparent)',
                          color: 'var(--color-text)',
                        }}
                      >
                        <span style={{ color: isAccent ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}>
                          <BadgeIcon icon={b.icon} />
                        </span>
                        <span className="leading-none">{b.label}</span>
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="text-sm leading-relaxed text-theme-secondary">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
