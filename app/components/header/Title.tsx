'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/app/components/motion/variants'

export default function Title() {
  const reduced = useReducedMotion()

  return (
    <motion.h1
      variants={fadeUp(!!reduced, { delay: 0.04, distance: 20 })}
      className="font-display text-3xl leading-tight text-balance sm:text-6xl lg:text-[66px]"
    >
      <span className="bg-linear-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
        Full Stack Developer
      </span>
      , <span className="text-blue-500">Maker</span> <br className="hidden sm:block" /> e{' '}
      <span className="text-emerald-500">Pesquisador Acadêmico</span>.
    </motion.h1>
  )
}
