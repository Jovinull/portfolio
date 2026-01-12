import { FiFileText } from 'react-icons/fi'

export default function ArticlesHero({
  total,
}: Readonly<{
  total: number
}>) {
  return (
    <header className="rounded-2xl border border-theme bg-theme p-6 shadow-sm backdrop-blur-md md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-subtitle text-sm font-semibold tracking-wide">Artigos</p>

          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
            Biblioteca de artigos e notas técnicas
          </h1>

          <p className="mt-3 max-w-prose text-sm leading-relaxed text-theme-secondary">
            Aqui ficam os artigos completos, com capa, resumo e uma página dedicada por tema.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-theme bg-theme px-4 py-2 text-sm font-semibold text-theme-secondary shadow-sm">
          <FiFileText aria-hidden="true" className="h-4 w-4" />
          <span>{total} publicados</span>
        </div>
      </div>
    </header>
  )
}
