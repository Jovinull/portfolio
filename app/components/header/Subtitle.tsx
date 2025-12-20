'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/app/components/motion/variants'

export default function Subtitle() {
  const reduced = useReducedMotion()

  return (
    <motion.p variants={fadeUp(!!reduced, { delay: 0.06 })} className="text-subtitle mt-3 text-xl">
      Microeletrônica | IA | Desenvolvimento Web | IoT | Ensino e Pesquisa
    </motion.p>
  )
}
