import React from 'react';
import { COMPANY_INFO } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden bg-[#050811]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0a0f1d] border border-slate-800/90 p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About YADDE TECHNOLOGIES
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {COMPANY_INFO.aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};
