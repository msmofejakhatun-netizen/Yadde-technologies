import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroSectionProps {
  onExploreApps: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreApps }) => {
  return (
    <section id="home" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* Subtle background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Developer Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Mobile App Development</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {COMPANY_INFO.heroHeadline}
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          {COMPANY_INFO.heroText}
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onExploreApps}
            id="hero-explore-apps-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-cyan-500/20 cursor-pointer"
          >
            <span>Explore Apps</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href={`mailto:${COMPANY_INFO.supportEmail}`}
            id="hero-contact-support-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};
