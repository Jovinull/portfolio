'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { assets } from '@/assets/assets'
import { popIn } from '@/app/components/motion/variants'

export default function ProfileImage() {
  const reduced = useReducedMotion()

  return (
    <motion.div variants={popIn(!!reduced, 0)}>
      <div className="mb-3">
        <div className="relative inline-flex">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/25 via-sky-500/25 to-emerald-500/25 blur-xl" />
          <Image
            src={assets.profile_img}
            alt="Foto de perfil de Felipe Jovino"
            width={128}
            height={128}
            priority
            className="relative w-32 rounded-full ring-1 ring-white/10 shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  )
}
