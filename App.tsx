
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceFocus from './components/ServiceFocus';
import Positioning from './components/Positioning';
import FullWidthShowcase from './components/FullWidthShowcase';
import Team from './components/Team';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SEO from './components/SEO';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-brand selection:text-dark overflow-x-hidden">
      <SEO />
      <Navbar />
      
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>

        <section id="focus-section">
          <ServiceFocus />
        </section>

      

        <section id="showcase-section">
          <FullWidthShowcase />
        </section>

        <section id="team-section">
          <Team />
        </section>

        <section id="process-section">
          <Process />
        </section>

        <section id="testimonials-section">
          <Testimonials />
        </section>

        <section id="cta-section">
          <CTA />
        </section>
      </main>

      <Footer />

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[150px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand/5 blur-[120px] rounded-full animate-pulse-slow delay-1000"></div>
      </div>
    </div>
  );
};

export default App;
