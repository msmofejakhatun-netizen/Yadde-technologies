import React from 'react';
import { Mail, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ComingSoonSection: React.FC = () => {
  return (
    <section id="coming-soon" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-b from-[#0c1326] to-[#080d1a] border border-slate-800 p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Development in Progress</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {COMPANY_INFO.comingSoonHeading}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
            {COMPANY_INFO.comingSoonText}
          </p>

          <div className="pt-2">
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              id="coming-soon-contact-btn"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm px-6 py-3 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
