import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden bg-[#050811]/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0a0f1d] border border-slate-800/90 p-8 sm:p-12 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 mx-auto">
            <Mail className="w-6 h-6" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Contact Support
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
              {COMPANY_INFO.supportText}
            </p>
          </div>

          {/* Official Email Block */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Official Support Email
            </div>
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              id="official-support-email-link"
              className="inline-block text-lg sm:text-xl font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors break-all"
            >
              {COMPANY_INFO.supportEmail}
            </a>
          </div>

          {/* Email Support Button */}
          <div className="pt-4">
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              id="email-support-main-btn"
              className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95 shadow-sm shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>Email Support</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
