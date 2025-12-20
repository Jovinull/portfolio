'use client';

import { motion, useReducedMotion } from 'framer-motion';
import ContactHeader from './ContactHeader';
import ContactForm from './ContactForm';
import ContactBackground from './ContactBackground';
import { fadeUp, staggerContainer } from '@/app/components/motion/variants';

export default function Contact() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="bg-theme text-theme relative isolate w-full scroll-mt-20 overflow-hidden px-[12%] py-10"
    >
      <ContactBackground />

      <motion.div
        className="relative z-10"
        variants={staggerContainer(!!reduced, 0.08, 0.04)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.div variants={fadeUp(!!reduced, { delay: 0 })}>
          <ContactHeader />
        </motion.div>

        <motion.div variants={fadeUp(!!reduced, { delay: 0.04, distance: 18 })}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
