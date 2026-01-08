'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { workData } from '@/assets/assets';
import WorkCard from './WorkCard';
import { fadeUp, staggerContainer } from '@/app/components/motion/variants';

export default function WorkGrid() {
  const reduced = useReducedMotion();

  const featured = workData.filter((p) => p.featured);
  const items = featured.length > 0 ? featured : workData;

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer(!!reduced, 0.06, 0.02)}
    >
      {items.map((project, index) => (
        <motion.div key={`${project.title}-${index}`} variants={fadeUp(!!reduced, { distance: 18 })}>
          <WorkCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}