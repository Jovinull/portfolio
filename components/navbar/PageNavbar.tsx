import Link from 'next/link'
import { FiHome, FiGrid, FiFileText } from 'react-icons/fi'

import Logo from './header/Logo'
import ThemeToggle from '@/components/buttons/ThemeToggle'

type PageNavbarProps = {
  active?: 'projects' | 'home' | 'articles'
}

export default function PageNavbar({ active = 'projects' }: PageNavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-theme bg-theme/80 supports-backdrop-filter:bg-theme/70 mx-auto flex max-w-7xl items-center justify-between border-b px-6 py-4 shadow-sm backdrop-blur-md md:px-8">
        {/* Esquerda */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Centro (links de página) */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            aria-current={active === 'home' ? 'page' : undefined}
            className={[
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
              active === 'home'
                ? 'border-theme bg-theme text-theme shadow-sm'
                : 'text-theme-secondary hover:text-theme',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
            ].join(' ')}
          >
            <FiHome aria-hidden="true" className="h-4 w-4" />
            Início
          </Link>

          <Link
            href="/projects"
            aria-current={active === 'projects' ? 'page' : undefined}
            className={[
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
              active === 'projects'
                ? 'border-theme bg-theme text-theme shadow-sm'
                : 'text-theme-secondary hover:text-theme',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
            ].join(' ')}
          >
            <FiGrid aria-hidden="true" className="h-4 w-4" />
            Projetos
          </Link>

          <Link
            href="/articles"
            aria-current={active === 'articles' ? 'page' : undefined}
            className={[
              'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
              active === 'articles'
                ? 'border-theme bg-theme text-theme shadow-sm'
                : 'text-theme-secondary hover:text-theme',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30',
            ].join(' ')}
          >
            <FiFileText aria-hidden="true" className="h-4 w-4" />
            Artigos
          </Link>
        </div>

        {/* Direita */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="border-theme bg-theme hover:bg-theme/80 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/30"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}
