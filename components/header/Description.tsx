'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp } from '@/components/motion/variants'

export default function Description() {
  const reduced = useReducedMotion()

  return (
    <motion.p
      variants={fadeUp(!!reduced, { delay: 0.08 })}
      className="text-theme-secondary mx-auto mt-4 max-w-2xl text-lg text-balance"
    >
      Sou <strong>Desenvolvedor Full Stack</strong> e <strong>Pesquisador Acadêmico</strong>{' '}
      apaixonado por tecnologia, sistemas embarcados, automação e IA. Bacharel em{' '}
      <strong>Sistemas de Informação no Instituto Federal de Sergipe (IFS)</strong>, atuo na
      construção de soluções escaláveis para web, IoT e inteligência artificial. Possuo experiência
      sólida com <strong>Next.js, Node.js, AdonisJS, PostgreSQL, ESP32 e Python</strong>, além de
      vivência em <strong>pesquisa aplicada, ensino e capacitação tecnológica</strong>.
    </motion.p>
  )
}
