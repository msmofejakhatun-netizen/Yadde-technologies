import React from 'react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (route: PageRoute) => {
    onNavigate(route);
  };

  return (
    <footer id="main-company-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-6 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none"
              id="footer-brand-button"
            >
              <BrandLogo variant="light" size="lg" />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Yadde Technologies is a software and technology company focused on developing and publishing its own digital products and applications.
            </p>

            <div className="text-xs text-slate-400 font-mono space-y-1">
              <div>
                Official Website:{' '}
                <a
                  href={COMPANY_INFO.url}
                  className="text-cyan-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {COMPANY_INFO.url}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  id="footer-nav-home"
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  id="footer-nav-about"
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  id="footer-nav-products"
                  className="hover:text-white transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  id="footer-nav-contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('privacy-policy')}
                  id="footer-nav-privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  id="footer-nav-terms"
                  className="hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="footer-copyright-statement">
            {COMPANY_INFO.copyright}
          </p>

          <p className="text-slate-400 font-mono text-[11px]">
            {COMPANY_INFO.name} • {COMPANY_INFO.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};
