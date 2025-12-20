'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { assets, serviceData } from '@/assets/assets';
import type { ServiceItem } from '@/app/types/assets';
import { fadeUp, staggerContainer } from '@/app/components/motion/variants';

export default function Services() {
  const reduced = useReducedMotion();

  return (
    <section id="servicos" className="bg-theme text-theme w-full scroll-mt-20 px-[12%] py-10">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={staggerContainer(!!reduced, 0.08, 0.04)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.22 }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <motion.h4
            variants={fadeUp(!!reduced, { delay: 0 })}
            className="font-display text-subtitle mb-2 text-lg"
          >
            O que ofereço
          </motion.h4>

          <motion.h2 variants={fadeUp(!!reduced, { delay: 0.02 })} className="font-display text-5xl">
            Meus Serviços
          </motion.h2>

          <motion.p
            variants={fadeUp(!!reduced, { delay: 0.04 })}
            className="text-theme-secondary mt-5 mb-12 font-sans text-balance"
          >
            Sou desenvolvedor com experiência em diversos projetos, criando interfaces responsivas,
            performáticas e acessíveis.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer(!!reduced, 0.06, 0.02)}
        >
          {serviceData.map(({ icon, title, description, link }: ServiceItem, idx) => (
            <motion.article
              key={`${title}-${idx}`}
              variants={fadeUp(!!reduced, { distance: 18 })}
              whileHover={reduced ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="border-theme hover-card rounded-lg border px-8 py-12"
            >
              <div className="flex justify-center">
                <Image src={icon} alt="" aria-hidden="true" width={40} height={40} />
              </div>

              <h3 className="mt-4 text-center text-lg font-semibold">{title}</h3>

              <p className="text-theme-secondary mt-2 text-center text-sm leading-6">
                {description}
              </p>

              <div className="mt-5 flex justify-center">
                <a href={link} className="text-accent flex items-center gap-2 text-sm hover:underline">
                  Saiba mais
                  <Image
                    src={assets.right_arrow_bold}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
