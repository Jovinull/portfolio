import Link from 'next/link'
import type { ArticleItem } from '@/types/assets/articles'

function fmtDate(iso?: string) {
  if (!iso) return null
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return null
  return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: '2-digit' })
}

function doiLabel(doi?: string) {
  if (!doi) return null
  const clean = String(doi).trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim()
  return clean || null
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

export default function ArticleListItem({ item }: Readonly<{ item: ArticleItem }>) {
  const date = fmtDate(item.dateISO)
  const doi = doiLabel(item.doi)
  const issn = issnLabel(item.issn)
  const authors = authorsLabel(item.authors)

  const hasPublicationLink = Boolean(item.publicationLink?.href)
  const hasDownloadLink = Boolean(item.downloadLink?.href)

  const hasMeta = Boolean(
    authors || item.publicationLocation || doi || issn || hasPublicationLink || hasDownloadLink
  )

  return (
    <article className="group rounded-2xl border border-theme bg-theme p-4 shadow-sm transition hover:bg-theme-secondary md:p-5">
      <Link
        href={`/articles/${item.slug}`}
        className="grid gap-4 md:grid-cols-[120px_1fr] md:items-center"
      >
        {/* “imagem” retangular em pé (placeholder por enquanto) */}
        <div
          className="relative h-[170px] w-full overflow-hidden rounded-xl border border-theme md:h-[160px] md:w-[120px]"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 22%, transparent), transparent 70%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, color-mix(in srgb, var(--color-accent) 24%, transparent), transparent 55%)',
            }}
          />
          <div
            className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(closest-side, color-mix(in srgb, var(--color-text) 14%, transparent), transparent)',
            }}
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-theme-secondary">
            {item.frequency ? (
              <span className="rounded-full border border-theme px-3 py-1 font-semibold">
                {item.frequency}
              </span>
            ) : null}

            {date ? <span>{date}</span> : null}
            {date && item.readTime ? <span>•</span> : null}
            {item.readTime ? <span>{item.readTime}</span> : null}

            {hasPublicationLink ? (
              <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
                Revista
              </span>
            ) : null}

            {hasDownloadLink ? (
              <span className="rounded-full border border-theme px-3 py-1 text-xs font-semibold text-theme-secondary">
                PDF
              </span>
            ) : null}
          </div>

          <h2 className="mt-2 text-lg font-bold leading-snug group-hover:underline">
            {item.title}
          </h2>

          <p className="mt-2 max-w-prose text-sm leading-relaxed text-theme-secondary">
            {item.summary}
          </p>

          {hasMeta ? (
            <div className="mt-2 space-y-1 text-xs text-theme-secondary">
              {authors ? (
                <p>
                  <span className="font-semibold">Autores:</span> {authors}
                </p>
              ) : null}

              {item.publicationLocation || doi || issn ? (
                <p>
                  {item.publicationLocation ? (
                    <>
                      <span className="font-semibold">Local:</span> {item.publicationLocation}
                    </>
                  ) : null}

                  {item.publicationLocation && (doi || issn) ? <span> • </span> : null}

                  {doi ? (
                    <>
                      <span className="font-semibold">DOI:</span> {doi}
                    </>
                  ) : null}

                  {doi && issn ? <span> • </span> : null}

                  {issn ? (
                    <>
                      <span className="font-semibold">ISSN:</span> {issn}
                    </>
                  ) : null}
                </p>
              ) : null}
            </div>
          ) : null}

          {item.tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
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
        </div>
      </Link>
    </article>
  )
}
