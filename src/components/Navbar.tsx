import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Products', route: 'products' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="site-header"
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
            id="nav-brand-button"
            aria-label="YADDE TECHNOLOGIES Home"
          >
            <BrandLogo size="md" variant="dark" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  id={`nav-link-${item.route}`}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-blue-600 font-semibold bg-blue-50/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Contact Us button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              id="desktop-header-contact-btn"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-2xs transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleNavClick('contact')}
              id="mobile-header-contact-quick-btn"
              className="text-xs font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-md"
            >
              Contact Us
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-40 md:hidden bg-slate-900/50 backdrop-blur-xs flex flex-col pt-16"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-mono">
                Menu
              </span>
              <span className="text-xs font-mono text-slate-400">yaddetechnologies.in</span>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentRoute === item.route;
                return (
                  <button
                    key={item.route}
                    id={`mobile-nav-${item.route}`}
                    onClick={() => handleNavClick(item.route)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-slate-400 font-mono">→</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => handleNavClick('contact')}
                id="mobile-drawer-contact-cta"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 rounded-lg text-sm shadow-sm"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
