'use client';

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
