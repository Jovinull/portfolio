import type { Metadata } from 'next'

import Footer from '@/components/footer/Footer'
import SectionReveal from '@/components/motion/SectionReveal'
import PageNavbar from '@/components/navbar/PageNavbar'

import { articlesData } from '@/assets/assets'
import ArticlesHero from '@/components/articles/ArticlesHero'
import ArticlesList from '@/components/articles/ArticlesList'

export const metadata: Metadata = {
  title: 'Artigos | Jovino',
  description: 'Página dedicada aos artigos do Jovino, com resumos e leitura completa por tema.',
}

export default function ArticlesPage() {
  return (
    <>
      <PageNavbar active="articles" />

      <main className="bg-theme text-theme">
        <div className="w-full px-[12%] py-10">
          <div className="mx-auto max-w-6xl">
            <SectionReveal>
              <ArticlesHero total={articlesData.length} />
            </SectionReveal>

            <SectionReveal>
              <ArticlesList items={articlesData} />
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
