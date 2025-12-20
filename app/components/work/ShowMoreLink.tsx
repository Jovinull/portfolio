'use client';

import { motion, useReducedMotion } from 'framer-motion';
import BaseButton from '@/app/components/buttons/BaseButton';
import { fadeUp } from '@/app/components/motion/variants';

export default function ShowMoreLink() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp(!!reduced, { delay: 0.06 })}
      className="my-20 flex justify-center"
    >
      <BaseButton href="#work" variant="theme" className="px-10 py-3">
        Mostrar Mais
      </BaseButton>
    </motion.div>
  );
}
