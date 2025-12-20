// app/components/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'

import { assets } from '@/assets/assets'

type SocialLink = {
  label: string
  href: string
}

type FooterProps = {
  email?: string
  brandName?: string
  socials?: SocialLink[]
}

export default function Footer({
  email = 'felipejovinogamerplay@gmail.com',
  brandName = 'Felipe Jovino',
  socials = [
    { label: 'GitHub', href: 'https://github.com/Jovinull' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jobas/' },
  ],
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-black/10 bg-theme text-theme dark:border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        {/* Top */}
        <div className="text-center">
          <div className="mx-auto w-max">
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
          </div>

          <div className="mx-auto mt-4 flex w-max items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-black/80 dark:border-white/10 dark:text-white/80">
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
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-sm text-black/70 dark:border-white/10 dark:text-white/70 sm:flex-row">
          <p className="text-center sm:text-left">
            © {year} {brandName}. All rights reserved.
          </p>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-80 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
