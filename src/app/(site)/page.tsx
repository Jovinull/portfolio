import Navbar from '@/src/components/navbar/Navbar'
import Header from '@/src/components/header/Header'
import About from '@/src/components/about/About'
import Services from '@/src/components/services/Services'
import Work from '@/src/components/work/Work'
import Contact from '@/src/components/contact/Contact'
import Footer from '../../components/footer/Footer'
import SectionReveal from '../../components/motion/SectionReveal'
import TimelineSection from '../../components/timeline/TimelineSection'
import AwardsSection from '../../components/awards/AwardsSection'

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
          <Work />
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
