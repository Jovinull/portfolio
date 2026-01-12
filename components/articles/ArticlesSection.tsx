'use client'

import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { articlesData } from '@/assets/assets'
import ArticlesSignalDial from './ArticlesSignalDial'

export default function ArticlesSection({ className }: Readonly<{ className?: string }>) {
  const items = articlesData.slice(0, 6)

  return (
    <section id="articles" className={['bg-theme py-16 md:py-20', className ?? ''].join(' ')}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-subtitle text-sm font-semibold tracking-wide">Artigos</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
              Sinais de Ideias (sintonize e leia)
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-theme-secondary">
              Cada artigo é uma frequência. Gire o dial, “trave” no sinal e abra a leitura completa.
            </p>
          </div>

          <Link
            href="/articles"
            className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:bg-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
          >
            Ver todos
            <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10">
          <ArticlesSignalDial items={items} />
        </div>
      </div>
    </section>
  )
}
