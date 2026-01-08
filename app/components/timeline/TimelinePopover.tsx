'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';

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
  const ref = useRef<HTMLDivElement | null>(null);

  // deslocamento horizontal pra manter dentro da viewport
  const [shiftX, setShiftX] = useState(0);

  useLayoutEffect(() => {
    if (!open) return;

    // zera primeiro (importante pra medir a posição "real")
    setShiftX(0);

    const padding = 12; // margem mínima da borda da tela

    const measure = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vw = window.innerWidth;

      let dx = 0;

      // se passou do lado direito, puxa pra esquerda
      if (rect.right > vw - padding) {
        dx = (vw - padding) - rect.right; // negativo
      }

      // depois de aplicar dx, garante que não passe do lado esquerdo
      if (rect.left + dx < padding) {
        dx += padding - (rect.left + dx); // positivo
      }

      // evita re-render inútil
      setShiftX(prev => (Math.abs(prev - dx) < 0.5 ? prev : dx));
    };

    // mede depois do render/layout
    const raf = requestAnimationFrame(measure);

    // re-clampa se a viewport mudar (resize/rotate)
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, [open, children]);

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
            // mobile: abaixo
            'left-0 top-full mt-2 w-full max-w-[calc(100vw-1.5rem)]',
            // md+: do lado (mas agora clampado via shiftX)
            'md:left-full md:top-1/2 md:mt-0 md:ml-4 md:w-[360px] md:max-w-[calc(100vw-1.5rem)] md:-translate-y-1/2',
          ].join(' ')}
        >
          <div className="relative overflow-hidden rounded-2xl border border-theme bg-theme p-4 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
              style={{ background: 'var(--color-accent)', opacity: 0.12 }}
            />
            <div className="relative text-sm text-theme-secondary leading-relaxed">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
