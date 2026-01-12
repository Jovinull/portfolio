import type { ArticleItem } from '@/types/assets/articles'

function fmtDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: '2-digit' })
}

function doiToUrl(doi?: string) {
  if (!doi) return null

  const clean = String(doi)
    .trim()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
    .trim()

  if (!clean) return null

  return {
    label: clean,
    href: `https://doi.org/${clean}`,
  }
}

export default function ArticleHeader({ item }: Readonly<{ item: ArticleItem }>) {
  const date = fmtDate(item.dateISO)
  const doi = doiToUrl(item.doi)

  return (
    <header className="rounded-2xl border border-theme bg-theme p-6 shadow-sm backdrop-blur-md md:p-10">
      <div className="flex flex-wrap items-center gap-2 text-xs text-theme-secondary">
        {item.frequency ? (
          <span className="rounded-full border border-theme px-3 py-1 font-semibold">
            {item.frequency}
          </span>
        ) : null}

        {date ? <span>{date}</span> : null}
        {date && item.readTime ? <span>•</span> : null}
        {item.readTime ? <span>{item.readTime}</span> : null}
      </div>

      <h1 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{item.title}</h1>

      <p className="mt-4 max-w-prose text-sm leading-relaxed text-theme-secondary">
        {item.summary}
      </p>

      {(item.publicationLocation || doi) ? (
        <div className="mt-4 space-y-1">
          {item.publicationLocation ? (
            <p className="text-sm text-theme-secondary">
              <span className="font-semibold">Local de publicação:</span> {item.publicationLocation}
            </p>
          ) : null}

          {doi ? (
            <p className="text-sm text-theme-secondary">
              <span className="font-semibold">DOI:</span>{' '}
              <a
                href={doi.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition hover:text-theme"
              >
                {doi.label}
              </a>
            </p>
          ) : null}
        </div>
      ) : null}

      {item.tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </header>
  )
}
