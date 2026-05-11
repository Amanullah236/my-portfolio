import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundCircles from './components/BackgroundCircles';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Smooth scroll for internal links
    const handleScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#D4AF37]/30 selection:text-white cursor-none overflow-x-hidden">
      <CustomCursor />
      <BackgroundCircles />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;