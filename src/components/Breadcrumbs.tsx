import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface BreadcrumbsProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentRoute, onNavigate }) => {
  if (currentRoute === 'home') return null;

  const routeTitles: Record<PageRoute, string> = {
    home: 'Home',
    about: 'About Yadde Technologies',
    products: 'Our Products',
    contact: 'Contact Us',
    'privacy-policy': 'Privacy Policy',
    terms: 'Terms & Conditions',
    '404': 'Page Not Found',
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-xs text-slate-500 flex items-center gap-1.5"
      id="site-breadcrumbs"
    >
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-blue-600 transition-colors"
        id="breadcrumb-home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-slate-300" />

      <span className="font-semibold text-slate-800" aria-current="page">
        {routeTitles[currentRoute] || 'Page'}
      </span>
    </nav>
  );
};
