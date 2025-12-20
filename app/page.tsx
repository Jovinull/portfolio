import Navbar from '@/app/components/navbar/Navbar'
import Header from '@/app/components/header/Header'
import About from '@/app/components/about/About'
import Services from '@/app/components/services/Services'
import Work from '@/app/components/work/Work'
import Contact from '@/app/components/contact/Contact'
import Footer from './components/footer/Footer'
import SectionReveal from './components/motion/SectionReveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Services />
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
