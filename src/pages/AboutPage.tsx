import React from 'react';
import { ArrowRight, ShieldCheck, Building2, Globe, Mail, Phone, MapPin, Sparkles, Layers } from 'lucide-react';
import { COMPANY_INFO, APPROACH_CARDS } from '../data/companyData';
import { PageRoute } from '../types';

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="about-page-container">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">
            <span>Corporate Identity &amp; Purpose</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {COMPANY_INFO.aboutTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            Developing and publishing modern first-party software products and mobile applications.
          </p>
        </div>
      </section>

      {/* Main Core Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-2xs space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-950">
              Company Overview
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                {COMPANY_INFO.aboutParagraph1}
              </p>
              <p>
                {COMPANY_INFO.aboutParagraph2}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Independent Software Publisher
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yadde Technologies operates as a software publisher. We identify operational challenges faced by users and businesses, design dedicated software applications, and publish and maintain them across platform ecosystems including Android and modern desktop environments.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                Focus on Practical Everyday Utility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our development focuses on practical utility, clean user interfaces, and dependable data handling. We prioritize long-term software maintainability and direct user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Approach Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Operational Standards
            </span>
            <h2 className="text-2xl font-bold text-slate-950">
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {card.title === 'Innovation' && <Sparkles className="w-5 h-5" />}
                  {card.title === 'Simplicity' && <Layers className="w-5 h-5" />}
                  {card.title === 'Reliability' && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registered Company Identification Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Official Identification Details
            </span>
            <h2 className="text-2xl font-bold text-white">
              {COMPANY_INFO.name}
            </h2>
            <p className="text-xs text-slate-400 font-mono max-w-2xl">
              Official company information for customers, business partners, and verification purposes (including Google Play Console organization verification).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Legal Company Name:</span>
              </div>
              <div className="text-sm font-bold text-white font-mono pl-6">
                {COMPANY_INFO.legalName}
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Website:</span>
              </div>
              <div className="text-sm font-bold text-cyan-400 font-mono pl-6">
                <a href={COMPANY_INFO.url} className="hover:underline">
                  {COMPANY_INFO.url}
                </a>
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Company Email:</span>
              </div>
              <div className="text-sm font-bold text-white font-mono pl-6">
                {COMPANY_INFO.email}
              </div>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Company Phone:</span>
              </div>
              <div className="text-sm font-bold text-white font-mono pl-6">
                {COMPANY_INFO.phone}
              </div>
            </div>

            <div className="sm:col-span-2 p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Registered / Business Address:</span>
              </div>
              <div className="text-sm font-medium text-slate-200 font-mono pl-6 leading-relaxed">
                {COMPANY_INFO.registeredAddress}
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-slate-800 text-xs text-slate-400">
            <span>Consistent with Google Payments profile &amp; Dun &amp; Bradstreet organization record.</span>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>Contact Yadde Technologies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
