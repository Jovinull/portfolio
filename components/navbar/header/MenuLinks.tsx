'use client'

import Link from 'next/link'
import type { MenuLinksProps } from '@/types/components/menuLinks'

const LINKS = [
  { label: 'Início', href: '#top' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Linha do tempo', href: '#timeline' },
  { label: 'Artigos', href: '#articles' },
  { label: 'Projetos', href: '#work' },
  { label: 'Contato', href: '#contact' },
] as const

export default function MenuLinks({ variant = 'desktop' }: Readonly<MenuLinksProps>) {
  const base = 'text-theme flex gap-6 transition-colors hover:text-[var(--color-accent)]'

  const wrapper =
    variant === 'desktop'
      ? 'md:bg-theme border-theme flex flex-col items-start gap-6 md:flex-row md:items-center md:rounded-full md:border md:px-8 md:py-3 md:shadow-sm md:backdrop-blur-md lg:gap-8'
      : 'flex flex-col items-start gap-6'

  return (
    <ul className={wrapper}>
      {LINKS.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={base}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
