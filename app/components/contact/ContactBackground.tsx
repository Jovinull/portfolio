'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { assets } from '@/assets/assets';

export default function ContactBackground() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden dark:hidden"
      initial={reduced ? false : { opacity: 0, scale: 1.32 }}
      animate={reduced ? undefined : { opacity: 1, scale: 1.25 }}
      transition={reduced ? undefined : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={
          reduced
            ? undefined
            : { duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
        }
      >
        <Image
          src={assets.footer_bg_color}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.25] opacity-100"
        />
      </motion.div>

      {/* Véu para manter leitura boa */}
      <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/20 to-white" />
    </motion.div>
  );
}
