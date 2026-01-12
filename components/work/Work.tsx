'use client';

import { motion, useReducedMotion } from 'framer-motion';
import WorkHeader from './WorkHeader';
import WorkGrid from './WorkGrid';
import ShowMoreLink from './ShowMoreLink';
import { staggerContainer } from '../motion/variants';

export default function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="work" className="bg-theme text-theme w-full scroll-mt-20 px-[12%] py-10">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={staggerContainer(!!reduced, 0.08, 0.04)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.22 }}
      >
        <WorkHeader />
        <WorkGrid />
        <ShowMoreLink />
      </motion.div>
    </section>
  );
}
