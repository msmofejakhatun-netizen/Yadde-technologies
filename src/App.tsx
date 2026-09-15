import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', window.location.pathname);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
    }
  };

  useEffect(() => {
    // Handle initial hash in URL if present
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#070b14] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Single-Page Content: Home, Apps, About, Coming Soon, Contact */}
      <HomePage onScrollTo={scrollToSection} />

      {/* Clean Official Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
