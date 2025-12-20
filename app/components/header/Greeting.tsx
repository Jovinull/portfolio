'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { assets } from '@/assets/assets'
import { fadeUp } from '@/app/components/motion/variants'

export default function Greeting() {
  const reduced = useReducedMotion()

  return (
    <motion.h3
      variants={fadeUp(!!reduced, { delay: 0.02 })}
      className="font-display mb-3 flex items-end justify-center gap-2 text-xl md:text-2xl"
    >
      Olá! Eu sou Felipe Jovino
      <motion.span
        aria-hidden="true"
        className="inline-flex"
        animate={
          reduced
            ? undefined
            : {
                rotate: [0, 12, -6, 12, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: 'easeInOut',
              }
        }
      >
        <Image src={assets.hand_icon} alt="" aria-hidden="true" className="w-6" />
      </motion.span>
    </motion.h3>
  )
}
