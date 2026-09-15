import React from 'react';
import { ExternalLink, CheckCircle, Smartphone, Monitor, Info, ArrowRight } from 'lucide-react';
import { PRODUCTS_LIST, COMPANY_INFO } from '../data/companyData';
import { PageRoute } from '../types';

interface ProductsPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="products-page-container">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">
            <span>First-Party Digital Software</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Products
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Explore software products and applications developed and published by Yadde Technologies.
          </p>
        </div>
      </section>

      {/* Products Directory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS_LIST.map((product) => (
              <div
                key={product.id}
                id={`product-item-${product.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-8 shadow-2xs flex flex-col justify-between transition-all hover:border-slate-300"
              >
                <div className="space-y-5">
                  {/* Status & Platform Header */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-mono">
                      {product.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{product.platform}</span>
                    </span>
                  </div>

                  {/* Product Title & Short Description */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-extrabold text-slate-950">
                      {product.name}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Key Features List (if defined) */}
                  {product.features && product.features.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 space-y-2.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                        Product Features
                      </span>
                      <ul className="space-y-2">
                        {product.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Google Play Console Status / Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  {product.playStoreUrl ? (
                    <a
                      href={product.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-3 rounded-lg shadow-2xs transition-colors"
                    >
                      <span>View on Google Play</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-200">
                        <span className="text-slate-500">Google Play Availability</span>
                        <span className="font-semibold text-slate-800 font-mono">Coming Soon</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Official release link will appear here once published on Google Play.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Publishing & Ecosystem Transparency Notice */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex items-start gap-3.5 text-xs text-slate-600">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="space-y-1 leading-relaxed">
              <p className="font-bold text-slate-900">
                Software Publishing &amp; Distribution Notice
              </p>
              <p>
                Yadde Technologies publishes and distributes its applications exclusively through official app stores (such as Google Play) and direct verified channels. We do not distribute unverified APK files or third-party clones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <h3 className="text-lg font-bold text-slate-950">
              Have questions about our applications?
            </h3>
            <p className="text-sm text-slate-600">
              Reach out to our product and general inquiries desk.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shrink-0"
          >
            <span>Contact Yadde Technologies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
