import React from 'react';
import { Mail, Phone, MapPin, Globe, Building2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16" id="contact-page-container">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300">
            <span>Direct Inquiries &amp; Information</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {COMPANY_INFO.contactTitle}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {COMPANY_INFO.contactDescription}
          </p>
        </div>
      </section>

      {/* Main Content Grid: Official Information + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Official Communication Channels
                </span>
                <h2 className="text-xl font-bold text-white">
                  {COMPANY_INFO.name}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                {/* Email */}
                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Email:</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono pl-6">
                    {COMPANY_INFO.email}
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                    <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Phone:</span>
                  </div>
                  <div className="text-sm font-bold text-white font-mono pl-6">
                    {COMPANY_INFO.phone}
                  </div>
                </div>

                {/* Address */}
                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Address:</span>
                  </div>
                  <div className="text-sm font-medium text-slate-200 font-mono pl-6 leading-relaxed">
                    {COMPANY_INFO.registeredAddress}
                  </div>
                </div>

                {/* Website */}
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
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 font-mono">
                Organization details maintained consistent for developer and payment verification.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-950">
                Send an Inquiry
              </h2>
              <p className="text-xs text-slate-600">
                Please complete the form fields below. All fields are required.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
