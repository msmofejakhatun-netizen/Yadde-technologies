import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { PageRoute } from '../types';

interface NotFoundPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div
      id="not-found-page-wrapper"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center space-y-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mx-auto font-mono text-xl font-bold">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={() => onNavigate('home')}
          id="btn-back-to-home"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};
