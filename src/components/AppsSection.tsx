import React from 'react';
import { Receipt, Train, Clock } from 'lucide-react';
import { APPS_LIST } from '../data/companyData';

export const AppsSection: React.FC = () => {
  return (
    <section id="apps" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Apps
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            New applications from YADDE TECHNOLOGIES are currently in development.
          </p>
        </div>

        {/* 2 Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {APPS_LIST.map((app) => (
            <div
              key={app.id}
              id={`app-card-${app.id}`}
              className="rounded-2xl bg-[#0a0f1d] border border-slate-800/90 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-200"
            >
              <div className="space-y-5">
                {/* Header with App Icon and Coming Soon badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    {app.iconType === 'billing' ? (
                      <Receipt className="w-7 h-7" />
                    ) : (
                      <Train className="w-7 h-7" />
                    )}
                  </div>

                  {/* Clean COMING SOON Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-cyan-400 tracking-wider">
                    <Clock className="w-3 h-3" />
                    <span>{app.status}</span>
                  </span>
                </div>

                {/* App Name and Category */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {app.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    {app.category}
                  </div>
                </div>

                {/* Exact Required Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {app.description}
                </p>
              </div>

              {/* Disabled / Non-clickable button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 bg-slate-900/80 border border-slate-800 cursor-not-allowed opacity-85 select-none"
                >
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>Coming Soon</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
