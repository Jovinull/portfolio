import type { ArticleItem } from '@/types/assets/articles'
import { FiDownload, FiExternalLink } from 'react-icons/fi'

function fmtDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: '2-digit' })
}

function doiToUrl(doi?: string) {
  if (!doi) return null
  const clean = String(doi).trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim()
  if (!clean) return null
  return { label: clean, href: `https://doi.org/${clean}` }
}

function issnLabel(issn?: string) {
  if (!issn) return null
  const clean = String(issn).trim()
  return clean || null
}

function authorsLabel(authors?: readonly string[]) {
  const list = authors?.map((a) => String(a).trim()).filter(Boolean) ?? []
  return list.length ? list.join(', ') : null
}

function isLocalHref(href: string) {
  return href.startsWith('/')
}

function ActionLink({
  href,
  label,
  icon,
  preferDownload,
}: Readonly<{
  href: string
  label: string
  icon: React.ReactNode
  preferDownload?: boolean
}>) {
  const shouldDownload = Boolean(preferDownload && isLocalHref(href))

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      {...(shouldDownload ? { download: '' } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-theme px-4 py-2 text-sm font-semibold text-theme-secondary transition hover:bg-theme-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/25"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

export default function ArticleHeader({ item }: Readonly<{ item: ArticleItem }>) {
  const date = fmtDate(item.dateISO)
  const doi = doiToUrl(item.doi)
  const issn = issnLabel(item.issn)
  const authors = authorsLabel(item.authors)

  const publicationHref = item.publicationLink?.href
  const publicationLabel = item.publicationLink?.label ?? 'Ver na revista'

  const downloadHref = item.downloadLink?.href
  const downloadLabel = item.downloadLink?.label ?? 'Download'

  const hasMeta = Boolean(
    authors || item.publicationLocation || doi || issn || publicationHref || downloadHref
  )

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

      {hasMeta ? (
        <div className="mt-4 space-y-1">
          {authors ? (
            <p className="text-sm text-theme-secondary">
              <span className="font-semibold">Autores:</span> {authors}
            </p>
          ) : null}

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

          {issn ? (
            <p className="text-sm text-theme-secondary">
              <span className="font-semibold">ISSN:</span> {issn}
            </p>
          ) : null}

          {(publicationHref || downloadHref) ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {publicationHref ? (
                <ActionLink
                  href={publicationHref}
                  label={publicationLabel}
                  icon={<FiExternalLink aria-hidden="true" className="h-4 w-4" />}
                />
              ) : null}

              {downloadHref ? (
                <ActionLink
                  href={downloadHref}
                  label={downloadLabel}
                  preferDownload
                  icon={<FiDownload aria-hidden="true" className="h-4 w-4" />}
                />
              ) : null}
            </div>
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
