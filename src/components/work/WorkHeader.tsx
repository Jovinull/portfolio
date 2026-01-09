'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../motion/variants';

export default function WorkHeader() {
  const reduced = useReducedMotion();

  return (
    <motion.div variants={staggerContainer(!!reduced, 0.08, 0.02)}>
      <motion.h4
        variants={fadeUp(!!reduced, { delay: 0 })}
        className="font-display mb-2 text-center text-lg"
      >
        Meu portfólio
      </motion.h4>

      <motion.h2
        variants={fadeUp(!!reduced, { delay: 0.02 })}
        className="font-display text-center text-5xl"
      >
        Projetos em destaque
      </motion.h2>

      <motion.p
        variants={fadeUp(!!reduced, { delay: 0.04 })}
        className="text-theme-secondary mx-auto mt-5 mb-12 max-w-2xl text-center font-sans text-balance"
      >
        Aqui você encontra uma seleção dos meus principais trabalhos e iniciativas — do
        desenvolvimento full-stack (AdonisJS/Next.js/PostgreSQL) e governança de TI, até projetos
        com IA/ML, mobile e pesquisa aplicada, além da produção de conteúdo educacional.
      </motion.p>
    </motion.div>
  );
}
