import type { Variants } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1] as const

type FadeUpOpts = {
  delay?: number
  distance?: number
  duration?: number
}

export function staggerContainer(reduced: boolean, stagger = 0.08, delayChildren = 0.05): Variants {
  if (reduced) {
    return {
      hidden: {},
      show: {},
    }
  }

  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }
}

export function fadeUp(reduced: boolean, opts: FadeUpOpts = {}): Variants {
  const { delay = 0, distance = 16, duration = 0.55 } = opts

  if (reduced) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0 },
    }
  }

  return {
    hidden: { opacity: 0, y: distance, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration, delay, ease: easeOut },
    },
  }
}

export function popIn(reduced: boolean, delay = 0): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 1, scale: 1 },
      show: { opacity: 1, scale: 1 },
    }
  }

  return {
    hidden: { opacity: 0, scale: 0.92, y: 10, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, delay, ease: [0.2, 1, 0.2, 1] },
    },
  }
}
