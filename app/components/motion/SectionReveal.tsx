'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/app/components/motion/variants'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={fadeUp(!!reduced, { delay, distance: 18 })}
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'show'}
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.div>
  )
}
