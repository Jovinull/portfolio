'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { assets, infoList, toolsData } from '@/assets/assets';
import { fadeUp, popIn, staggerContainer } from '@/app/components/motion/variants';

export default function About() {
  const reduced = useReducedMotion();

  return (
    <section id="sobre" className="bg-theme text-theme w-full scroll-mt-20 px-[12%] py-10">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={staggerContainer(!!reduced, 0.08, 0.04)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.22 }}
      >
        <motion.h4
          variants={fadeUp(!!reduced, { delay: 0 })}
          className="font-display text-subtitle mb-2 text-center text-lg"
        >
          Introdução
        </motion.h4>

        <motion.h2
          variants={fadeUp(!!reduced, { delay: 0.02, distance: 18 })}
          className="font-display mb-10 text-center text-5xl"
        >
          Sobre mim
        </motion.h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Imagem */}
          <motion.div variants={popIn(!!reduced, 0)} className="flex flex-1 justify-center">
            <motion.div
              className="relative"
              animate={reduced ? undefined : { y: [0, -6, 0] }}
              transition={
                reduced
                  ? undefined
                  : { duration: 5.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
              }
            >
              <div className="absolute -inset-6 rounded-[28px] bg-linear-to-r from-indigo-500/10 via-sky-500/10 to-emerald-500/10 blur-2xl" />
              <Image
                src={assets.user_image}
                alt="Foto de Jovino"
                width={350}
                height={350}
                priority
                className="relative w-62.5 rounded-3xl ring-1 ring-black/10 shadow-xl sm:w-75 md:w-87.5 dark:ring-white/10"
              />
            </motion.div>
          </motion.div>

          {/* Texto + cards */}
          <div className="flex flex-1 flex-col">
            <motion.p
              variants={fadeUp(!!reduced, { delay: 0.04 })}
              className="mb-10 max-w-2xl font-sans text-balance"
            >
              Desenvolvedor Full Stack com paixão por criar soluções digitais inovadoras. Com
              experiência sólida em desenvolvimento web, APIs, IoT e IA, atuo desde o design até a
              implementação final. Já colaborei em projetos educacionais, pesquisa aplicada, sistemas
              embarcados e plataformas de gestão pública.
            </motion.p>

            <motion.ul
              className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3"
              variants={staggerContainer(!!reduced, 0.06, 0.02)}
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={`${title}-${index}`}
                  variants={fadeUp(!!reduced, { distance: 18 })}
                  whileHover={reduced ? undefined : { y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="border-theme hover-card rounded-xl border-[0.5px] p-6"
                >
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="mb-3 w-7 transition-all duration-300 dark:hidden"
                  />
                  <Image
                    src={iconDark}
                    alt=""
                    aria-hidden="true"
                    className="mb-3 hidden w-7 transition-all duration-300 dark:block"
                  />

                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                  <p className="text-theme-secondary text-sm">{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
              variants={fadeUp(!!reduced, { delay: 0.06 })}
              className="font-display text-theme mt-10 mb-4"
            >
              Ferramentas que utilizo
            </motion.h4>

            <motion.ul
              className="flex flex-wrap items-center gap-4"
              variants={staggerContainer(!!reduced, 0.04, 0.02)}
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={`tool-${index}`}
                  variants={fadeUp(!!reduced, { distance: 12 })}
                  whileHover={reduced ? undefined : { y: -3, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                  className="border-theme hover-card flex aspect-square w-12 items-center justify-center rounded-lg border sm:w-14"
                >
                  <Image src={tool} alt="Ferramenta" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
