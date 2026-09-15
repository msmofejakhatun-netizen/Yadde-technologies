import React from 'react';
import { Shield, Mail, Globe, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10" id="privacy-policy-container">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
          <Shield className="w-3.5 h-3.5" />
          <span>Legal &amp; Privacy Notice</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          Effective Date: January 1, 2026 • Official Website: {COMPANY_INFO.url}
        </p>
      </div>

      {/* Main Content Body */}
      <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        {/* 1. Overview */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            1. Overview
          </h2>
          <p>
            This Privacy Policy describes the privacy practices of <strong>{COMPANY_INFO.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) regarding our official website located at <strong>{COMPANY_INFO.url}</strong>.
          </p>
          <p>
            Yadde Technologies develops and publishes its own software products and digital applications. We are committed to straightforward, transparent handling of personal information.
          </p>
        </section>

        {/* 2. Information Collected */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            2. Information We Collect
          </h2>
          <p>
            This website is primarily an informational corporate presence. We do not require account registration to browse this website.
          </p>
          <p>
            <strong>Personal Information Submitted via Contact Form:</strong> The only personal information actively collected by this website is the information you voluntarily provide if you submit our contact form or send us an email directly. This typically includes:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>The Subject of your inquiry</li>
            <li>Any message content you provide</li>
          </ul>
          <p>
            If you do not contact us through the form or email, we do not collect your personal contact information.
          </p>
        </section>

        {/* 3. Server Logging & Technical Data */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            3. Technical &amp; Server Data
          </h2>
          <p>
            Like standard web servers worldwide, the web server hosting this website automatically receives basic technical transmission data required to deliver pages to your browser (such as IP address, browser user-agent, operating system, and request timestamps). This data is processed transiently for standard network transmission, security monitoring, and server diagnostics, and is not used to create personal profiling records.
          </p>
        </section>

        {/* 4. Use of Information */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            4. How We Use Information
          </h2>
          <p>
            Information submitted via inquiries is used solely to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600">
            <li>Review and respond to your direct question, product inquiry, or business communication.</li>
            <li>Maintain standard records of business correspondence.</li>
            <li>Ensure the technical stability and security of our web infrastructure.</li>
          </ul>
          <p>
            We do not sell, rent, trade, or monetize your contact information or personal inquiries to third-party data brokers or marketing networks.
          </p>
        </section>

        {/* 5. Software Products & Mobile Apps */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            5. Software Products &amp; Applications
          </h2>
          <p>
            Individual software applications developed and published by Yadde Technologies (such as Android apps published on the Google Play Store) have specific privacy notices tailored to their operational data needs and platform permissions. Please refer to each app&apos;s store listing or in-app privacy policy for product-specific details.
          </p>
        </section>

        {/* 6. Contact for Privacy Inquiries */}
        <section className="space-y-3 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-lg font-bold text-slate-950">
            6. Contact for Privacy Inquiries
          </h2>
          <p className="text-xs text-slate-600">
            If you have questions regarding this Privacy Policy or wish to request information regarding your correspondence, please reach out to:
          </p>
          <div className="text-xs font-mono space-y-1 text-slate-700 pt-1">
            <div><strong>Company:</strong> {COMPANY_INFO.name}</div>
            <div><strong>Email:</strong> {COMPANY_INFO.email}</div>
            <div><strong>Address:</strong> {COMPANY_INFO.registeredAddress}</div>
            <div><strong>Official Website:</strong> {COMPANY_INFO.url}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
