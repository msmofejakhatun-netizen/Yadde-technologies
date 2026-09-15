import React from 'react';
import { Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerLinks = [
    { label: 'Home', target: 'home' },
    { label: 'Apps', target: 'apps' },
    { label: 'About', target: 'about' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer id="site-footer" className="border-t border-slate-800/80 bg-[#060912] pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand Info */}
          <div className="space-y-2">
            <BrandLogo onClick={() => onNavigate('home')} />
            <p className="text-sm text-slate-400 font-normal">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-slate-300">
            {footerLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => onNavigate(link.target)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Support Email */}
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <a
              href={`mailto:${COMPANY_INFO.supportEmail}`}
              className="hover:text-white font-mono transition-colors"
            >
              {COMPANY_INFO.supportEmail}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center sm:text-left text-xs text-slate-400 font-mono">
          {COMPANY_INFO.copyright}
        </div>
      </div>
    </footer>
  );
};
