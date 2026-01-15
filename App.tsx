
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import About from './components/About';
import Facilities from './components/Facilities';
import Classes from './components/Classes';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Robust local navigation handler for a seamless website experience
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const id = anchor.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          window.history.pushState(null, '', `#${id}`);
        }
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col selection:bg-amber-500 selection:text-black">
      <Header />
      <main className="flex-grow">
        <section id="home" className="scroll-mt-header">
          <Hero />
        </section>
        
        <TrustSignals />

        <section id="about" className="scroll-mt-header">
          <About />
        </section>

        <section id="facilities" className="scroll-mt-header">
          <Facilities />
        </section>

        <section id="classes" className="scroll-mt-header">
          <Classes />
        </section>

        <section id="testimonials" className="scroll-mt-header">
          <Testimonials />
        </section>

        <section id="gallery" className="scroll-mt-header">
          <Gallery />
        </section>

        <section id="contact" className="scroll-mt-header">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
