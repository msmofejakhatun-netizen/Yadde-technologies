import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AppsSection } from '../components/AppsSection';
import { AboutSection } from '../components/AboutSection';
import { ComingSoonSection } from '../components/ComingSoonSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onScrollTo: (sectionId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onScrollTo }) => {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection onExploreApps={() => onScrollTo('apps')} />

      {/* 2. Apps Section */}
      <AppsSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Coming Soon Section */}
      <ComingSoonSection />

      {/* 5. Contact Support Section */}
      <ContactSection />
    </main>
  );
};
