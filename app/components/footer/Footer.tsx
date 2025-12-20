'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

import { assets } from '@/assets/assets';
import { fadeUp, staggerContainer } from '@/app/components/motion/variants';

type SocialLink = {
  label: string;
  href: string;
};

type FooterProps = {
  email?: string;
  brandName?: string;
  socials?: SocialLink[];
};

export default function Footer({
  email = 'felipejovinogamerplay@gmail.com',
  brandName = 'Felipe Jovino',
  socials = [
    { label: 'GitHub', href: 'https://github.com/Jovinull' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jobas/' },
  ],
}: FooterProps) {
  const reduced = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-black/10 bg-theme text-theme dark:border-white/10">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 py-10"
        variants={staggerContainer(!!reduced, 0.08, 0.04)}
        initial={reduced ? false : 'hidden'}
        whileInView={reduced ? undefined : 'show'}
        viewport={{ once: true, amount: 0.22 }}
      >
        {/* Top */}
        <motion.div variants={fadeUp(!!reduced, { delay: 0 })} className="text-center">
          <motion.div
            className="mx-auto w-max"
            whileHover={reduced ? undefined : { y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Image
              src={assets.logo}
              alt={`${brandName} — logo`}
              priority
              sizes="144px"
              className="block h-auto w-36 dark:hidden"
            />
            <Image
              src={assets.logo_dark}
              alt={`${brandName} — logo`}
              priority
              sizes="144px"
              className="hidden h-auto w-36 dark:block"
            />
          </motion.div>

          <motion.div
            className="mx-auto mt-4 flex w-max items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-black/80 dark:border-white/10 dark:text-white/80"
            whileHover={reduced ? undefined : { y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <Image
              src={assets.mail_icon}
              alt=""
              aria-hidden="true"
              sizes="24px"
              className="block h-auto w-6 dark:hidden"
            />
            <Image
              src={assets.mail_icon_dark}
              alt=""
              aria-hidden="true"
              sizes="24px"
              className="hidden h-auto w-6 dark:block"
            />

            <a
              href={`mailto:${email}`}
              className="underline-offset-4 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
            >
              {email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp(!!reduced, { delay: 0.04, distance: 16 })}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/70 dark:border-white/10 dark:text-white/70 sm:flex-row"
        >
          <p className="text-center sm:text-left">
            © {year} {brandName}. All rights reserved.
          </p>

          <nav aria-label="Social links">
            <motion.ul
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
              variants={staggerContainer(!!reduced, 0.05, 0.02)}
              initial={false}
              animate={reduced ? undefined : 'show'}
            >
              {socials.map((item) => (
                <motion.li key={item.label} variants={fadeUp(!!reduced, { distance: 10 })}>
                  <motion.div
                    whileHover={reduced ? undefined : { y: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-80 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </motion.div>
      </motion.div>
    </footer>
  );
}
