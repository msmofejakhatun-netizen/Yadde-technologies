import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle,
} from 'lucide-react';
import { AbstractTechHeroVisual } from '../components/AbstractTechHeroVisual';
import { COMPANY_INFO, APPROACH_CARDS, PRODUCTS_LIST } from '../data/companyData';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16" id="home-page-container">
      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}
      <section
        id="hero-section"
        className="relative pt-10 sm:pt-16 lg:pt-20 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 lg:pb-24">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Domain & Organization Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>yaddetechnologies.in • Official Online Presence</span>
              </div>

              {/* Hero Headline */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {COMPANY_INFO.heroHeadline}
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono tracking-tight">
                  {COMPANY_INFO.heroSubtitle}
                </p>
              </div>

              {/* Hero Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {COMPANY_INFO.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('products')}
                  id="hero-explore-products-btn"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  id="hero-contact-us-btn"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm px-6 py-3.5 rounded-lg border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            {/* Right Subtle Abstract Technology Visual */}
            <div className="lg:col-span-5 w-full">
              <AbstractTechHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ABOUT YADDE TECHNOLOGIES SECTION */}
      {/* ================================================== */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 lg:p-14 shadow-2xs">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
                Company Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                {COMPANY_INFO.aboutTitle}
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>{COMPANY_INFO.aboutParagraph1}</p>
              <p>{COMPANY_INFO.aboutParagraph2}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                id="about-learn-more-btn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>Read more about our company</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* OUR APPROACH SECTION (3 Simple Cards) */}
      {/* ================================================== */}
      <section id="our-approach-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
              Our Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH_CARDS.map((card) => (
              <div
                key={card.title}
                id={`approach-card-${card.title.toLowerCase()}`}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {card.title === 'Innovation' && <Sparkles className="w-5 h-5" />}
                    {card.title === 'Simplicity' && <Layers className="w-5 h-5" />}
                    {card.title === 'Reliability' && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* OUR PRODUCTS SECTION */}
      {/* ================================================== */}
      <section id="our-products-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 font-mono">
                First-Party Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                Our Products
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
                Explore software products and applications developed and published by Yadde Technologies.
              </p>
            </div>

            <button
              onClick={() => onNavigate('products')}
              id="view-all-products-btn"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap self-start sm:self-auto"
            >
              <span>View Product Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_LIST.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-mono">
                      {product.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {product.platform}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {product.features && product.features.length > 0 && (
                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {product.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  {product.playStoreUrl ? (
                    <a
                      href={product.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <span>View on Google Play</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                      <span>Google Play Publication</span>
                      <span className="font-semibold text-slate-700">Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* COMPANY INFORMATION (Official Identification) */}
      {/* ================================================== */}
      <section id="company-info-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 sm:p-10 text-white">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Official Corporate Entity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {COMPANY_INFO.name}
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                The legal company name, address, and organization details must be kept consistent with the information used for the Google Payments profile and Dun &amp; Bradstreet organization record.
              </p>
            </div>

            {/* Editable Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Legal Company Name */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Legal Company Name:</span>
                </div>
                <div className="text-sm font-bold text-white font-mono pl-6">
                  {COMPANY_INFO.legalName}
                </div>
              </div>

              {/* Website */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Official Website:</span>
                </div>
                <div className="text-sm font-bold text-cyan-400 font-mono pl-6">
                  <a href={COMPANY_INFO.url} className="hover:underline">
                    {COMPANY_INFO.url}
                  </a>
                </div>
              </div>

              {/* Company Email */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Company Email:</span>
                </div>
                <div className="text-sm font-bold text-white font-mono pl-6">
                  {COMPANY_INFO.email}
                </div>
              </div>

              {/* Company Phone */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Company Phone:</span>
                </div>
                <div className="text-sm font-bold text-white font-mono pl-6">
                  {COMPANY_INFO.phone}
                </div>
              </div>

              {/* Registered / Business Address (Full width) */}
              <div className="sm:col-span-2 p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Registered / Business Address:</span>
                </div>
                <div className="text-sm font-medium text-slate-200 font-mono pl-6 leading-relaxed">
                  {COMPANY_INFO.registeredAddress}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* CONTACT PREVIEW / CTA SECTION */}
      {/* ================================================== */}
      <section id="contact-cta-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-2xl font-extrabold text-slate-950">
              {COMPANY_INFO.contactTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.contactDescription}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            id="home-contact-cta-btn"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-2xs transition-colors shrink-0"
          >
            <span>Contact Yadde Technologies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
