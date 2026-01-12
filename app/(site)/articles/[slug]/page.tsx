import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/footer/Footer'
import SectionReveal from '@/components/motion/SectionReveal'
import PageNavbar from '@/components/navbar/PageNavbar'

import { articlesData } from '@/assets/assets'
import ArticleHeader from '@/components/articles/ArticleHeader'
import ArticleRenderer from '@/components/articles/ArticleRenderer'

type Props = Readonly<{
  params: Promise<{ slug: string }>
}>

function getArticle(slug: string) {
  return articlesData.find((a) => a.slug === slug) ?? null
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Artigo | Jovino' }

  return {
    title: `${article.title} | Jovino`,
    description: article.summary,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) notFound()

  return (
    <>
      <PageNavbar active="articles" />

      <main className="bg-theme text-theme">
        <div className="w-full px-[12%] py-10">
          <div className="mx-auto max-w-6xl">
            <SectionReveal>
              <ArticleHeader item={article} />
            </SectionReveal>

            <SectionReveal>
              {article.content?.length ? (
                <ArticleRenderer blocks={article.content} />
              ) : (
                <div className="mt-8 rounded-2xl border border-theme bg-theme p-6 shadow-sm md:p-10">
                  <p className="text-sm leading-relaxed text-theme-secondary">
                    A área de conteúdo deste artigo está vazia por enquanto.
                    Depois você preenche em <code className="font-semibold">assets/articles.ts</code>{' '}
                    usando o campo <code className="font-semibold">content</code> (com blocos de texto,
                    imagens e código).
                  </p>
                </div>
              )}
            </SectionReveal>
          </div>
        </div>

        <SectionReveal>
          <Footer />
        </SectionReveal>
      </main>
    </>
  )
}
