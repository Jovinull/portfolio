import type { ArticleBlock } from '@/types/assets/articles'

export default function ArticleRenderer({ blocks }: Readonly<{ blocks: readonly ArticleBlock[] }>) {
  return (
    <div className="mt-8 rounded-2xl border border-theme bg-theme p-6 shadow-sm md:p-10">
      <div className="space-y-5">
        {blocks.map((b, idx) => {
          if (b.type === 'divider') {
            return <hr key={idx} className="border-theme my-6" />
          }

          if (b.type === 'h2') {
            return (
              <h2 key={idx} className="text-2xl font-bold leading-tight">
                {b.text}
              </h2>
            )
          }

          if (b.type === 'p') {
            return (
              <p key={idx} className="max-w-prose text-sm leading-relaxed text-theme-secondary">
                {b.text}
              </p>
            )
          }

          if (b.type === 'quote') {
            return (
              <figure
                key={idx}
                className="rounded-2xl border border-theme bg-theme p-5"
                style={{
                  background:
                    'linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 10%, var(--color-bg)), var(--color-bg))',
                }}
              >
                <blockquote className="text-sm leading-relaxed text-theme-secondary">
                  “{b.text}”
                </blockquote>
                {b.cite ? (
                  <figcaption className="mt-3 text-xs font-semibold text-theme-secondary">
                    — {b.cite}
                  </figcaption>
                ) : null}
              </figure>
            )
          }

          if (b.type === 'code') {
            return (
              <pre
                key={idx}
                className="overflow-x-auto rounded-2xl border border-theme bg-theme p-5 text-xs leading-relaxed shadow-sm"
              >
                <code>{b.code}</code>
              </pre>
            )
          }

          if (b.type === 'image') {
            return (
              <figure key={idx} className="overflow-hidden rounded-2xl border border-theme">
                {/* Por enquanto sem next/image (você pode trocar depois). */}
                <img src={b.src} alt={b.alt} className="h-auto w-full" />
                {b.caption ? (
                  <figcaption className="border-theme border-t p-3 text-xs text-theme-secondary">
                    {b.caption}
                  </figcaption>
                ) : null}
              </figure>
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
