'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { FiPause, FiPlay, FiRotateCcw, FiX } from 'react-icons/fi'
import { motion, useReducedMotion } from 'framer-motion'
import { useSpaceInvaders } from './useSpaceInvaders'

type Props = Readonly<{
  onRequestClose?: () => void
}>

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export default function SpaceInvadersGame({ onRequestClose }: Props) {
  const reduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const { snapshot, actions, setInputActive } = useSpaceInvaders({
    containerRef,
    canvasRef,
  })

  const [showHelp, setShowHelp] = useState(false)

  const statusLabel = useMemo(() => {
    if (snapshot.status === 'idle') return 'Pronto'
    if (snapshot.status === 'running') return 'Jogando'
    if (snapshot.status === 'paused') return 'Pausado'
    return 'Fim de jogo'
  }, [snapshot.status])

  useEffect(() => {
    setInputActive(true)
    return () => setInputActive(false)
  }, [setInputActive])

  useEffect(() => {
    // H para ajuda
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'h') setShowHelp((v) => !v)
      if (e.key === 'Escape') onRequestClose?.()
    }
    window.addEventListener('keydown', onKeyDown, { passive: false })
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onRequestClose])

  return (
    <div
      ref={containerRef}
      className={cx(
        'relative overflow-hidden rounded-2xl',
        'border border-black/10 bg-white/70 shadow-lg backdrop-blur-md',
        'dark:border-white/10 dark:bg-zinc-950/40'
      )}
    >
      {/* faixa “arcade” no topo */}
      <div className="relative flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3 dark:border-white/10">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-sm bg-black/70 dark:bg-white/70" aria-hidden="true" />
            <p className="truncate text-sm font-semibold">
              Space Invaders <span className="text-theme-secondary font-normal">• {statusLabel}</span>
            </p>
          </div>

          <p className="mt-1 text-xs text-theme-secondary">
            Score <span className="font-semibold text-theme">{snapshot.score}</span>
            <span className="mx-2 opacity-50">•</span>
            Vidas <span className="font-semibold text-theme">{snapshot.lives}</span>
            <span className="mx-2 opacity-50">•</span>
            Fase <span className="font-semibold text-theme">{snapshot.level}</span>
            <span className="mx-2 opacity-50">•</span>
            High <span className="font-semibold text-theme">{snapshot.highScore}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className={cx(
              'inline-flex h-9 w-9 items-center justify-center rounded-full',
              'border border-black/15 bg-white/60 shadow-sm',
              'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
              'dark:border-white/15 dark:bg-white/5 dark:focus-visible:ring-white/25'
            )}
            aria-label={snapshot.status === 'running' ? 'Pausar' : 'Continuar'}
            onClick={() => actions.togglePause()}
            title={snapshot.status === 'running' ? 'Pausar (P)' : 'Continuar (P)'}
          >
            {snapshot.status === 'running' ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
          </button>

          <button
            type="button"
            className={cx(
              'inline-flex h-9 w-9 items-center justify-center rounded-full',
              'border border-black/15 bg-white/60 shadow-sm',
              'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
              'dark:border-white/15 dark:bg-white/5 dark:focus-visible:ring-white/25'
            )}
            aria-label="Reiniciar"
            onClick={() => actions.restart()}
            title="Reiniciar (R)"
          >
            <FiRotateCcw aria-hidden="true" />
          </button>

          <button
            type="button"
            className={cx(
              'inline-flex h-9 w-9 items-center justify-center rounded-full',
              'border border-black/15 bg-white/60 shadow-sm',
              'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30',
              'dark:border-white/15 dark:bg-white/5 dark:focus-visible:ring-white/25'
            )}
            aria-label="Fechar"
            onClick={() => onRequestClose?.()}
            title="Fechar (ESC)"
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* corpo */}
      <div className="relative px-4 py-4">
        <div className="relative mx-auto w-full max-w-[720px]">
          <div
            className={cx(
              'relative overflow-hidden rounded-2xl',
              'ring-1 ring-black/10 dark:ring-white/10'
            )}
          >
            {/* canvas */}
            <canvas
              ref={canvasRef}
              className="block h-auto w-full select-none bg-black"
              style={{ aspectRatio: '560 / 420' }}
            />

            {/* scanlines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.14]"
              style={{
                background:
                  'repeating-linear-gradient(to bottom, rgba(255,255,255,0.10) 0px, rgba(255,255,255,0.10) 1px, transparent 2px, transparent 6px)',
              }}
            />

            {/* overlay de estado */}
            {snapshot.status !== 'running' ? (
              <div className="absolute inset-0 grid place-items-center p-6">
                <motion.div
                  initial={reduced ? undefined : { opacity: 0, y: 8, scale: 0.98 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className={cx(
                    'w-full max-w-md rounded-2xl',
                    'border border-white/15 bg-black/55 px-5 py-5 text-white backdrop-blur-md'
                  )}
                >
                  <p className="text-sm font-semibold">
                    {snapshot.status === 'idle' && 'Pronto pra decolar?'}
                    {snapshot.status === 'paused' && 'Pausado'}
                    {snapshot.status === 'gameover' && 'Fim de jogo'}
                  </p>

                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Setas/A-D move • Espaço atira • P pausa • R reinicia • ESC fecha
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-solid"
                      onClick={() => actions.start()}
                    >
                      {snapshot.status === 'gameover' ? 'Jogar de novo' : 'Começar'}
                    </button>

                    <button
                      type="button"
                      className="btn btn-theme"
                      onClick={() => setShowHelp((v) => !v)}
                    >
                      {showHelp ? 'Fechar ajuda' : 'Ajuda (H)'}
                    </button>
                  </div>

                  {showHelp ? (
                    <div className="mt-4 rounded-xl bg-white/10 p-4 text-sm text-white/85">
                      <p className="font-semibold text-white">Dicas</p>
                      <p className="mt-2 leading-relaxed">
                        • Tiro tem cooldown: cadencia importa.<br />
                        • Quanto menos aliens vivos, mais rápido eles ficam.<br />
                        • Shield segura um pouco, mas vai quebrando com o tempo.
                      </p>
                    </div>
                  ) : null}
                </motion.div>
              </div>
            ) : null}
          </div>

          {/* rodapé discreto */}
          <p className="mt-3 text-center text-xs text-theme-secondary">
            (P) pausa • (R) reinicia • (H) ajuda • (ESC) fecha
          </p>
        </div>
      </div>
    </div>
  )
}
