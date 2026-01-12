import type { ArticleItem } from '@/types/assets/articles'
import ArticleListItem from '@/components/articles/ArticleListItem'

export default function ArticlesList({ items }: Readonly<{ items: readonly ArticleItem[] }>) {
  return (
    <section aria-label="Lista de artigos" className="mt-8 space-y-4">
      {items.map((it) => (
        <ArticleListItem key={it.slug} item={it} />
      ))}
    </section>
  )
}
