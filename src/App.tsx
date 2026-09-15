import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PageRoute } from './types';
import { COMPANY_INFO } from './data/companyData';

const SEO_CONFIG: Record<PageRoute, { title: string; description: string }> = {
  home: {
    title: 'Yadde Technologies | Software & Digital Solutions',
    description:
      'Yadde Technologies is a software and technology company developing and publishing its own digital products and applications.',
  },
  about: {
    title: 'About Yadde Technologies | Software & Digital Solutions',
    description:
      'Yadde Technologies is a software and technology company focused on developing and publishing its own digital products and applications.',
  },
  products: {
    title: 'Our Products | Yadde Technologies',
    description:
      'Explore software products and applications developed and published by Yadde Technologies.',
  },
  contact: {
    title: 'Contact Yadde Technologies | Software & Digital Solutions',
    description:
      'For business enquiries, product-related questions or general information, please contact Yadde Technologies.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Yadde Technologies',
    description:
      'Official privacy policy of Yadde Technologies explaining data handling and communication practices.',
  },
  terms: {
    title: 'Terms & Conditions | Yadde Technologies',
    description:
      'Terms and conditions governing the use of Yadde Technologies official website and published software.',
  },
  '404': {
    title: 'Page Not Found | Yadde Technologies',
    description: 'The requested page could not be found on yaddetechnologies.in.',
  },
};

export default function App() {
  const getRouteFromHash = (): PageRoute => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validRoutes: PageRoute[] = [
      'home',
      'about',
      'products',
      'contact',
      'privacy-policy',
      'terms',
    ];
    if (hash && validRoutes.includes(hash as PageRoute)) {
      return hash as PageRoute;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(getRouteFromHash);

  // Synchronize route changes with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(getRouteFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    if (route === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.location.hash = `#${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize document title and meta description dynamically
  useEffect(() => {
    const config = SEO_CONFIG[currentRoute] || SEO_CONFIG.home;
    document.title = config.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', config.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', config.description);
    }
  }, [currentRoute]);

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case '404':
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Official Identity Strip */}
      <div
        id="official-announcement-strip"
        className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-semibold text-white">{COMPANY_INFO.name}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-mono text-[11px]">{COMPANY_INFO.tagline}</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px] font-mono">
            <span>Official Domain:</span>
            <a
              href={COMPANY_INFO.url}
              className="text-cyan-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {COMPANY_INFO.domain}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Breadcrumbs for inner pages */}
      <Breadcrumbs currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content-region">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
