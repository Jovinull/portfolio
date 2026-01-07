'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '@/app/components/motion/variants';
import type { SectionRevealProps } from '@/app/types/components/sectionReveal';

export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const reduced = useReducedMotion();

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
  );
}
