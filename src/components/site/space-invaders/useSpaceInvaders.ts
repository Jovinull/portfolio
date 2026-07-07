'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Status = 'idle' | 'running' | 'paused' | 'gameover'

type Snapshot = Readonly<{
  status: Status
  score: number
  lives: number
  level: number
  highScore: number
}>

type Vec = { x: number; y: number }

type Player = {
  pos: Vec
  w: number
  h: number
  speed: number
  cooldown: number
}

type Bullet = {
  pos: Vec
  v: Vec
  w: number
  h: number
  from: 'player' | 'alien'
  alive: boolean
}

type Alien = {
  pos: Vec
  w: number
  h: number
  row: number
  col: number
  alive: boolean
}

type ShieldCell = 0 | 1

type Shield = {
  origin: Vec
  cell: number
  cols: number
  rows: number
  grid: ShieldCell[]
}

type GameState = {
  status: Status
  score: number
  lives: number
  level: number

  worldW: number
  worldH: number

  player: Player
  bullets: Bullet[]
  aliens: Alien[]
  alienDir: 1 | -1
  alienSpeed: number
  alienStepDown: number

  alienShootTimer: number
  alienNextShot: number

  shields: Shield[]

  stars: Array<{ x: number; y: number; r: number; a: number; s: number }>
  flash: number

  lastTs: number
}

type InputState = {
  left: boolean
  right: boolean
  shoot: boolean
}

type Params = Readonly<{
  containerRef: React.RefObject<HTMLDivElement | null>
  canvasRef: React.RefObject<HTMLCanvasElement | null>
}>

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

function rnd(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function aabb(ax: number, ay: number, aw: number, ah: number, bx: number, by: number, bw: number, bh: number) {
  return ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by
}

function readHighScore() {
  try {
    const raw = localStorage.getItem('si_highscore_v1')
    const n = raw ? Number(raw) : 0
    return Number.isFinite(n) ? n : 0
  } catch {
    return 0
  }
}

function writeHighScore(v: number) {
  try {
    localStorage.setItem('si_highscore_v1', String(v))
  } catch {
    // ignore
  }
}

function makeShieldPattern(cols: number, rows: number) {
  // shape simples (meio vazado), fica “space invaders vibe”
  const g: ShieldCell[] = new Array(cols * rows).fill(1)

  const hole = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= cols || y >= rows) return
    g[y * cols + x] = 0
  }

  // recortes no topo e no meio
  for (let x = 0; x < cols; x++) {
    hole(x, 0)
    if (x <= 1 || x >= cols - 2) hole(x, 1)
  }

  // “boca” central
  const mid = Math.floor(cols / 2)
  hole(mid - 1, rows - 2)
  hole(mid, rows - 2)
  hole(mid + 1, rows - 2)

  // laterais inferiores
  for (let y = rows - 2; y < rows; y++) {
    hole(0, y)
    hole(1, y)
    hole(cols - 1, y)
    hole(cols - 2, y)
  }

  return g
}

function createState(level: number): GameState {
  const worldW = 560
  const worldH = 420

  const player: Player = {
    pos: { x: worldW / 2 - 18, y: worldH - 38 },
    w: 36,
    h: 14,
    speed: 320,
    cooldown: 0,
  }

  const rows = 5
  const cols = 11
  const alienW = 26
  const alienH = 18
  const startX = 72
  const startY = 64
  const gapX = 16
  const gapY = 14

  const aliens: Alien[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      aliens.push({
        row: r,
        col: c,
        alive: true,
        w: alienW,
        h: alienH,
        pos: {
          x: startX + c * (alienW + gapX),
          y: startY + r * (alienH + gapY),
        },
      })
    }
  }

  const shieldCell = 6
  const shieldCols = 12
  const shieldRows = 8

  const shields: Shield[] = []
  const shieldY = worldH - 110
  const shieldXs = [110, worldW / 2 - (shieldCols * shieldCell) / 2, worldW - 110 - shieldCols * shieldCell]

  for (const x of shieldXs) {
    shields.push({
      origin: { x, y: shieldY },
      cell: shieldCell,
      cols: shieldCols,
      rows: shieldRows,
      grid: makeShieldPattern(shieldCols, shieldRows),
    })
  }

  const stars = new Array(70).fill(0).map(() => ({
    x: rnd(0, worldW),
    y: rnd(0, worldH),
    r: rnd(0.6, 1.6),
    a: rnd(0.18, 0.75),
    s: rnd(6, 22),
  }))

  return {
    status: 'idle',
    score: 0,
    lives: 3,
    level,

    worldW,
    worldH,

    player,
    bullets: [],
    aliens,
    alienDir: 1,
    alienSpeed: 46 + (level - 1) * 6,
    alienStepDown: 14,

    alienShootTimer: 0,
    alienNextShot: rnd(0.45, 0.95),

    shields,

    stars,
    flash: 0,

    lastTs: 0,
  }
}

export function useSpaceInvaders({ containerRef, canvasRef }: Params) {
  const inputRef = useRef<InputState>({ left: false, right: false, shoot: false })
  const activeInputRef = useRef<boolean>(false)

  const stateRef = useRef<GameState>(createState(1))
  const rafRef = useRef<number | null>(null)
  const uiTickRef = useRef<number>(0)

  const [snapshot, setSnapshot] = useState<Snapshot>(() => ({
    status: 'idle',
    score: 0,
    lives: 3,
    level: 1,
    highScore: 0,
  }))

  const highScoreRef = useRef<number>(0)

  const syncSnapshot = useCallback(() => {
    const s = stateRef.current
    const hs = highScoreRef.current
    setSnapshot({
      status: s.status,
      score: s.score,
      lives: s.lives,
      level: s.level,
      highScore: hs,
    })
  }, [])

  const ensureCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const dpr = Math.max(1, Math.min(2.25, window.devicePixelRatio || 1))
    const worldW = stateRef.current.worldW
    const worldH = stateRef.current.worldH

    canvas.width = Math.floor(worldW * dpr)
    canvas.height = Math.floor(worldH * dpr)

    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.imageSmoothingEnabled = false
    return ctx
  }, [canvasRef])

  const stopLoop = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = null
  }, [])

  const resetLevel = useCallback((level: number, keepScore: boolean) => {
    const prev = stateRef.current
    const next = createState(level)
    next.status = 'running'
    next.score = keepScore ? prev.score : 0
    next.lives = keepScore ? prev.lives : 3

    // mantém estrelas consistentes
    next.stars = prev.stars

    stateRef.current = next
    syncSnapshot()
  }, [syncSnapshot])

  const endGame = useCallback(() => {
    const s = stateRef.current
    s.status = 'gameover'

    if (s.score > highScoreRef.current) {
      highScoreRef.current = s.score
      writeHighScore(highScoreRef.current)
    }

    syncSnapshot()
  }, [syncSnapshot])

  const spawnPlayerBullet = useCallback(() => {
    const s = stateRef.current
    const p = s.player
    if (p.cooldown > 0) return

    s.bullets.push({
      from: 'player',
      alive: true,
      w: 4,
      h: 10,
      pos: { x: p.pos.x + p.w / 2 - 2, y: p.pos.y - 10 },
      v: { x: 0, y: -520 },
    })

    p.cooldown = 0.22
  }, [])

  const pickAlienShooter = (aliens: Alien[]) => {
    // escolhe um alien “de baixo” por coluna (clássico)
    const byCol = new Map<number, Alien>()
    for (const a of aliens) {
      if (!a.alive) continue
      const cur = byCol.get(a.col)
      if (!cur || a.pos.y > cur.pos.y) byCol.set(a.col, a)
    }
    const list = Array.from(byCol.values())
    if (!list.length) return null
    return list[Math.floor(Math.random() * list.length)]
  }

  const spawnAlienBullet = useCallback(() => {
    const s = stateRef.current
    const shooter = pickAlienShooter(s.aliens)
    if (!shooter) return

    const speed = 260 + (s.level - 1) * 12

    s.bullets.push({
      from: 'alien',
      alive: true,
      w: 4,
      h: 10,
      pos: { x: shooter.pos.x + shooter.w / 2 - 2, y: shooter.pos.y + shooter.h + 2 },
      v: { x: 0, y: speed },
    })
  }, [])

  const damageShieldAt = (shield: Shield, px: number, py: number) => {
    const { origin, cell, cols, rows, grid } = shield
    const lx = px - origin.x
    const ly = py - origin.y
    const cx = Math.floor(lx / cell)
    const cy = Math.floor(ly / cell)

    const smash = (x: number, y: number) => {
      if (x < 0 || y < 0 || x >= cols || y >= rows) return
      const idx = y * cols + x
      grid[idx] = 0
    }

    // “estilhaça” uma pequena área
    for (let oy = -1; oy <= 1; oy++) {
      for (let ox = -1; ox <= 1; ox++) {
        if (Math.random() < 0.8) smash(cx + ox, cy + oy)
      }
    }
  }

  const update = useCallback((dt: number) => {
    const s = stateRef.current
    if (s.status !== 'running') return

    const input = inputRef.current
    const p = s.player

    // cooldown do player
    p.cooldown = Math.max(0, p.cooldown - dt)

    // movimento
    const move = (input.left ? -1 : 0) + (input.right ? 1 : 0)
    p.pos.x += move * p.speed * dt
    p.pos.x = clamp(p.pos.x, 14, s.worldW - p.w - 14)

    // tiro
    if (input.shoot) spawnPlayerBullet()

    // aliens movimentam em bloco (simples)
    const aliveAliens = s.aliens.filter((a) => a.alive)
    const aliveCount = aliveAliens.length

    if (!aliveCount) {
      // próxima fase
      resetLevel(s.level + 1, true)
      return
    }

    // quanto menos, mais rápido
    const speedBoost = clamp(1 + (1 - aliveCount / s.aliens.length) * 1.4, 1, 2.4)
    const step = s.alienSpeed * speedBoost * dt * s.alienDir

    // bounds
    let minX = Infinity
    let maxX = -Infinity
    for (const a of aliveAliens) {
      minX = Math.min(minX, a.pos.x)
      maxX = Math.max(maxX, a.pos.x + a.w)
    }

    // “beiradas”
    const leftBound = 18
    const rightBound = s.worldW - 18

    const willHitRight = maxX + step >= rightBound
    const willHitLeft = minX + step <= leftBound

    if (willHitRight || willHitLeft) {
      s.alienDir = (s.alienDir === 1 ? -1 : 1) as 1 | -1
      for (const a of aliveAliens) a.pos.y += s.alienStepDown

      // se chegou muito embaixo, acabou
      const lowest = Math.max(...aliveAliens.map((a) => a.pos.y + a.h))
      if (lowest >= p.pos.y - 8) {
        endGame()
        return
      }
    } else {
      for (const a of aliveAliens) a.pos.x += step
    }

    // tiro dos aliens
    s.alienShootTimer += dt
    const rate = clamp(1 + (s.level - 1) * 0.08, 1, 1.9)
    const chaos = clamp(1 + (1 - aliveCount / s.aliens.length) * 0.9, 1, 1.8)
    if (s.alienShootTimer >= s.alienNextShot / (rate * chaos)) {
      s.alienShootTimer = 0
      s.alienNextShot = rnd(0.45, 0.95)
      spawnAlienBullet()
    }

    // bullets
    for (const b of s.bullets) {
      if (!b.alive) continue
      b.pos.x += b.v.x * dt
      b.pos.y += b.v.y * dt

      if (b.pos.y < -40 || b.pos.y > s.worldH + 40) b.alive = false
    }

    // colisões: bullet vs aliens / player / shields
    for (const b of s.bullets) {
      if (!b.alive) continue

      // shields primeiro
      for (const sh of s.shields) {
        const shW = sh.cols * sh.cell
        const shH = sh.rows * sh.cell
        if (!aabb(b.pos.x, b.pos.y, b.w, b.h, sh.origin.x, sh.origin.y, shW, shH)) continue

        // checa célula sólida
        const lx = b.pos.x + b.w / 2 - sh.origin.x
        const ly = b.pos.y + b.h / 2 - sh.origin.y
        const cx = Math.floor(lx / sh.cell)
        const cy = Math.floor(ly / sh.cell)
        if (cx < 0 || cy < 0 || cx >= sh.cols || cy >= sh.rows) continue

        const idx = cy * sh.cols + cx
        if (sh.grid[idx] === 1) {
          damageShieldAt(sh, b.pos.x + b.w / 2, b.pos.y + b.h / 2)
          b.alive = false
          break
        }
      }
      if (!b.alive) continue

      if (b.from === 'player') {
        for (const a of s.aliens) {
          if (!a.alive) continue
          if (aabb(b.pos.x, b.pos.y, b.w, b.h, a.pos.x, a.pos.y, a.w, a.h)) {
            a.alive = false
            b.alive = false

            const rowScore = [40, 30, 20, 10, 10][a.row] ?? 10
            s.score += rowScore
            s.flash = 1

            if (s.score > highScoreRef.current) {
              highScoreRef.current = s.score
              writeHighScore(highScoreRef.current)
            }
            break
          }
        }
      } else {
        // alien bullet vs player
        if (aabb(b.pos.x, b.pos.y, b.w, b.h, p.pos.x, p.pos.y, p.w, p.h)) {
          b.alive = false
          s.lives -= 1
          s.flash = 1

          if (s.lives <= 0) {
            endGame()
            return
          }

          // pequeno “respawn” reposiciona levemente
          p.pos.x = clamp(p.pos.x, 14, s.worldW - p.w - 14)
        }
      }
    }

    // limpa bullets mortas
    s.bullets = s.bullets.filter((b) => b.alive)

    // flash decai
    s.flash = Math.max(0, s.flash - dt * 2.2)
  }, [endGame, resetLevel, spawnAlienBullet, spawnPlayerBullet])

  const draw = useCallback((ctx: CanvasRenderingContext2D, dt: number) => {
    const s = stateRef.current
    const { worldW, worldH } = s

    // fundo
    ctx.clearRect(0, 0, worldW, worldH)
    ctx.fillStyle = '#070A12'
    ctx.fillRect(0, 0, worldW, worldH)

    // estrelas animadas
    for (const st of s.stars) {
      st.y += (dt * st.s)
      if (st.y > worldH + 4) st.y = -4
      ctx.globalAlpha = st.a
      ctx.fillStyle = '#B7C5FF'
      ctx.fillRect(st.x, st.y, st.r, st.r)
    }
    ctx.globalAlpha = 1

    // brilho de flash (hit)
    if (s.flash > 0) {
      ctx.globalAlpha = 0.10 * s.flash
      ctx.fillStyle = '#7C5CFF'
      ctx.fillRect(0, 0, worldW, worldH)
      ctx.globalAlpha = 1
    }

    // HUD minimal dentro do canvas (bem discreto)
    ctx.globalAlpha = 0.9
    ctx.fillStyle = 'rgba(255,255,255,0.10)'
    ctx.fillRect(12, 10, 130, 22)
    ctx.globalAlpha = 1
    ctx.fillStyle = 'rgba(255,255,255,0.85)'
    ctx.font = '12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    ctx.fillText(`SCORE ${String(s.score).padStart(4, '0')}`, 18, 26)

    // shields
    for (const sh of s.shields) {
      const { origin, cell, cols, rows, grid } = sh
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const v = grid[y * cols + x]
          if (!v) continue
          // degradê sutil
          ctx.fillStyle = 'rgba(140, 255, 200, 0.85)'
          ctx.fillRect(origin.x + x * cell, origin.y + y * cell, cell - 1, cell - 1)
        }
      }
    }

    // player
    const p = s.player
    ctx.fillStyle = 'rgba(255, 255, 255, 0.90)'
    ctx.fillRect(p.pos.x, p.pos.y, p.w, p.h)
    ctx.fillRect(p.pos.x + 6, p.pos.y - 6, p.w - 12, 6)

    // aliens
    for (const a of s.aliens) {
      if (!a.alive) continue
      const tint =
        a.row <= 1 ? 'rgba(255, 170, 255, 0.92)' :
        a.row === 2 ? 'rgba(170, 220, 255, 0.92)' :
        'rgba(255, 255, 180, 0.92)'

      ctx.fillStyle = tint
      ctx.fillRect(a.pos.x, a.pos.y, a.w, a.h)

      // “olhos” simples pra ficar vivo
      ctx.fillStyle = 'rgba(0,0,0,0.35)'
      ctx.fillRect(a.pos.x + 6, a.pos.y + 6, 4, 4)
      ctx.fillRect(a.pos.x + a.w - 10, a.pos.y + 6, 4, 4)
    }

    // bullets
    for (const b of s.bullets) {
      ctx.fillStyle = b.from === 'player' ? 'rgba(124, 92, 255, 0.95)' : 'rgba(255, 120, 120, 0.95)'
      ctx.fillRect(b.pos.x, b.pos.y, b.w, b.h)
    }

    // borda leve
    ctx.strokeStyle = 'rgba(255,255,255,0.10)'
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, worldW - 2, worldH - 2)
  }, [])

  const loop = useCallback((ts: number) => {
    const s = stateRef.current
    const ctx = ensureCanvas()
    if (!ctx) return

    if (!s.lastTs) s.lastTs = ts
    const dt = clamp((ts - s.lastTs) / 1000, 0, 0.033)
    s.lastTs = ts

    if (s.status === 'running') update(dt)
    draw(ctx, dt)

    // atualiza UI “mais devagar” (não precisa re-render a cada frame)
    uiTickRef.current += dt
    if (uiTickRef.current >= 0.12) {
      uiTickRef.current = 0
      syncSnapshot()
    }

    rafRef.current = requestAnimationFrame(loop)
  }, [draw, ensureCanvas, syncSnapshot, update])

  const startLoop = useCallback(() => {
    stopLoop()
    rafRef.current = requestAnimationFrame(loop)
  }, [loop, stopLoop])

  const setInputActive = useCallback((active: boolean) => {
    activeInputRef.current = active
  }, [])

  useEffect(() => {
    // highscore
    highScoreRef.current = readHighScore()
    syncSnapshot()
  }, [syncSnapshot])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!activeInputRef.current) return

      const key = e.key.toLowerCase()
      const prevent = ['arrowleft', 'arrowright', ' ', 'spacebar'].includes(key) || key === ' ' || key === 'space'
      if (prevent) e.preventDefault()

      if (key === 'arrowleft' || key === 'a') inputRef.current.left = true
      if (key === 'arrowright' || key === 'd') inputRef.current.right = true
      if (key === ' ' || key === 'spacebar') inputRef.current.shoot = true

      if (key === 'p') togglePause()
      if (key === 'r') restart()
      if (key === 'enter') start()
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (!activeInputRef.current) return
      const key = e.key.toLowerCase()

      if (key === 'arrowleft' || key === 'a') inputRef.current.left = false
      if (key === 'arrowright' || key === 'd') inputRef.current.right = false
      if (key === ' ' || key === 'spacebar') inputRef.current.shoot = false
    }

    window.addEventListener('keydown', onKeyDown, { passive: false })
    window.addEventListener('keyup', onKeyUp, { passive: false })

    return () => {
      window.removeEventListener('keydown', onKeyDown as any)
      window.removeEventListener('keyup', onKeyUp as any)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const start = useCallback(() => {
    const s = stateRef.current
    if (s.status === 'running') return

    if (s.status === 'idle') {
      s.status = 'running'
    } else if (s.status === 'paused') {
      s.status = 'running'
    } else if (s.status === 'gameover') {
      stateRef.current = createState(1)
      stateRef.current.status = 'running'
    } else {
      s.status = 'running'
    }

    syncSnapshot()
    startLoop()
  }, [startLoop, syncSnapshot])

  const togglePause = useCallback(() => {
    const s = stateRef.current
    if (s.status === 'idle') {
      start()
      return
    }
    if (s.status === 'gameover') return

    s.status = s.status === 'running' ? 'paused' : 'running'
    syncSnapshot()
    startLoop()
  }, [start, startLoop, syncSnapshot])

  const restart = useCallback(() => {
    const prev = stateRef.current
    const level = prev.level || 1
    stateRef.current = createState(level)
    stateRef.current.status = 'running'
    syncSnapshot()
    startLoop()
  }, [startLoop, syncSnapshot])

  useEffect(() => {
    // inicia loop sempre que o canvas existir (desenha até no idle)
    startLoop()
    return () => stopLoop()
  }, [startLoop, stopLoop])

  const actions = useMemo(
    () => ({
      start,
      togglePause,
      restart,
    }),
    [restart, start, togglePause]
  )

  return { snapshot, actions, setInputActive }
}
