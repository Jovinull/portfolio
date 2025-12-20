'use client'

import { motion, useReducedMotion } from 'framer-motion'
import ProfileImage from './ProfileImage'
import Greeting from './Greeting'
import Title from './Title'
import Subtitle from './Subtitle'
import Description from './Description'
import ActionButtons from '@/app/components/buttons/ActionButtons'
import { staggerContainer, fadeUp } from '@/app/components/motion/variants'

export default function HeaderMotion() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="relative z-10 flex flex-col items-center text-center"
      variants={staggerContainer(!!reduced, 0.09, 0.06)}
      initial={reduced ? false : 'hidden'}
      animate={reduced ? undefined : 'show'}
    >
      <ProfileImage />
      <Greeting />
      <Title />
      <Subtitle />
      <Description />

      <motion.div variants={fadeUp(!!reduced, { delay: 0.08 })}>
        <ActionButtons />
      </motion.div>
    </motion.div>
  )
}
