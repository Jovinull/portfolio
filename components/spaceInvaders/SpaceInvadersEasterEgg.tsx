'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SpaceInvadersGame from './SpaceInvadersGame'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function SpaceInvadersEasterEgg() {
  const reduced = useReducedMotion()
  const [open, setOpen] = useState(false)
  const hostRef = useRef<HTMLDivElement | null>(null)

  // fecha com ESC mesmo se o foco estiver no botão/div
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const hint = useMemo(() => {
    return open
      ? 'ESC fecha • Setas/A-D move • Espaço atira • P pausa'
      : '…'
  }, [open])

  return (
    <section
      aria-label="Easter egg"
      className="bg-theme text-theme w-full px-[12%]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Divider “inocente” (não vira um buraco grande quando fechado) */}
        <div className="relative py-4">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />

            {/* O “pixel” do meio é o gatilho */}
            <motion.button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar Space Invaders' : 'Abrir Space Invaders'}
              className={cx(
                'group relative flex items-center justify-center',
                'h-9 min-w-[56px] rounded-full px-3',
                'border border-black/15 bg-white/70 shadow-sm backdrop-blur-md',
                'transition-all duration-200',
                'hover:shadow-md hover:border-black/25',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
                'dark:border-white/15 dark:bg-zinc-950/40 dark:hover:border-white/25 dark:focus-visible:ring-white/25'
              )}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              {/* brilho “arcade”, bem discreto */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(79,70,229,0.35), transparent 60%)',
                }}
              />

              {/* três “estrelas/pixels” */}
              <span className="relative flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className={cx(
                    'h-1.5 w-1.5 rounded-full',
                    open ? 'bg-black/35 dark:bg-white/35' : 'bg-black/25 dark:bg-white/25'
                  )}
                />
                <motion.span
                  aria-hidden="true"
                  className={cx(
                    'h-2 w-2 rounded-sm',
                    'bg-black/60 dark:bg-white/60',
                    'shadow-[0_0_0_2px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_2px_rgba(255,255,255,0.10)]'
                  )}
                  animate={
                    reduced
                      ? undefined
                      : open
                        ? { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }
                        : { scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }
                  }
                  transition={{ duration: open ? 1.1 : 1.6, repeat: Infinity }}
                />
                <span
                  aria-hidden="true"
                  className={cx(
                    'h-1.5 w-1.5 rounded-full',
                    open ? 'bg-black/35 dark:bg-white/35' : 'bg-black/25 dark:bg-white/25'
                  )}
                />
              </span>

              <span className="sr-only">{hint}</span>
            </motion.button>

            <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
          </div>

          {/* hint visual pequeno (não denuncia, mas ajuda quem abriu) */}
          <div className="mt-2 flex justify-center">
            <p className="text-xs text-theme-secondary select-none">
              {open ? 'ESC fecha • Setas/A-D move • Espaço atira • P pausa' : ' '}
            </p>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              ref={hostRef}
              key="si-panel"
              initial={reduced ? { opacity: 1 } : { opacity: 0, height: 0, y: -8 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, height: 'auto', y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="overflow-hidden pb-8"
            >
              <SpaceInvadersGame onRequestClose={() => setOpen(false)} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  )
}
