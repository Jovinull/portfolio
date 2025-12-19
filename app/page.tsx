import Navbar from '@/app/components/navbar/Navbar';
import Header from '@/app/components/header/Header';
import About from '@/app/components/about/About';
import Services from '@/app/components/services/Services';
import Work from '@/app/components/work/Work';
import Contact from '@/app/components/contact/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
    </>
  );
}
