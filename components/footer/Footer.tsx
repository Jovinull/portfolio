'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

import { assets } from '@/assets/assets';
import { fadeUp, staggerContainer } from '../motion/variants';
import { useThemeStore } from '@/store/useThemeStore';
import type { FooterProps } from '@/types/components/footer';

export default function Footer({
  email = 'felipejovinogamerplay@gmail.com',
  brandName = 'Felipe Jovino',
  socials = [
    { label: 'GitHub', href: 'https://github.com/Jovinull' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jobas/' },
  ],
}: FooterProps) {
  const reduced = useReducedMotion();
  const isDark = useThemeStore((s) => s.isDark);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const year = new Date().getFullYear();

  const logoSrc = mounted && isDark ? assets.logo_dark : assets.logo;

  const ringClass = isDark ? 'focus-visible:ring-white/30' : 'focus-visible:ring-black/30';

  return (
    <footer className="mt-20 border-t border-theme bg-theme text-theme">
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
              src={logoSrc}
              alt={`${brandName} — logo`}
              priority
              sizes="144px"
              className="h-auto w-36"
            />
          </motion.div>

          <motion.div
            className="text-theme-secondary border-theme mx-auto mt-4 flex w-max items-center gap-2 rounded-full border px-4 py-2 text-sm"
            whileHover={reduced ? undefined : { y: -2 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <FiMail aria-hidden="true" className="h-6 w-6" />

            <a
              href={`mailto:${email}`}
              className={`underline-offset-4 hover:underline focus:outline-none focus-visible:rounded focus-visible:ring-2 ${ringClass}`}
            >
              {email}
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={fadeUp(!!reduced, { delay: 0.04, distance: 16 })}
          className="text-theme-secondary border-theme mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm sm:flex-row"
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
                      className={`transition-opacity hover:opacity-80 focus:outline-none focus-visible:rounded focus-visible:ring-2 ${ringClass}`}
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
