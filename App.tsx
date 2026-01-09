
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ChampionsShowcase from './components/ChampionsShowcase';
import Activities from './components/Activities';
import Vision2026 from './components/Vision2026';
import PartnerSection from './components/PartnerSection';
import NominationCTA from './components/NominationCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <ChampionsShowcase />
        <Activities />
        <Vision2026 />
        <PartnerSection />
        <NominationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
