import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/header/Header'
import About from '@/components/about/About'
import Services from '@/components/services/Services'
import Work from '@/components/work/Work'
import Contact from '@/components/contact/Contact'
import Footer from '../../components/footer/Footer'
import SectionReveal from '../../components/motion/SectionReveal'
import TimelineSection from '../../components/timeline/TimelineSection'
import AwardsSection from '../../components/awards/AwardsSection'
import ArticlesSection from '@/components/articles/ArticlesSection'
import SpaceInvadersEasterEgg from '@/components/spaceInvaders/SpaceInvadersEasterEgg'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--navbar-height)]">
        <Header />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Services />
        </SectionReveal>

        <SectionReveal>
          <TimelineSection />
        </SectionReveal>

        <SectionReveal>
          <AwardsSection />
        </SectionReveal>

        <SectionReveal>
          <ArticlesSection />
        </SectionReveal>

        <SectionReveal>
          <Work />
        </SectionReveal>

        <SectionReveal>
          <SpaceInvadersEasterEgg />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>

        <SectionReveal>
          <Footer />
        </SectionReveal>
      </main>
    </>
  )
}
