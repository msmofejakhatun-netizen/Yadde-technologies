import React from 'react';
import { FileText, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10" id="terms-page-container">
      {/* Header */}
      <div className="border-b border-slate-200 pb-8 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-700">
          <FileText className="w-3.5 h-3.5" />
          <span>Terms of Use</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs text-slate-500 font-mono">
          Last Updated: January 1, 2026 • Official Website: {COMPANY_INFO.url}
        </p>
      </div>

      {/* Main Content Body */}
      <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
        {/* 1. Acceptance of Terms */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the official corporate website of <strong>{COMPANY_INFO.name}</strong> (&ldquo;{COMPANY_INFO.shortName}&rdquo;) located at <strong>{COMPANY_INFO.url}</strong>, you agree to be bound by these Terms &amp; Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you should discontinue use of this website.
          </p>
        </section>

        {/* 2. Nature of the Website */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            2. Nature of the Website &amp; Published Content
          </h2>
          <p>
            This website serves as the official corporate online presence of Yadde Technologies, providing information about our company, operational approach, and first-party software products and applications. The materials on this website are provided for general informational purposes.
          </p>
        </section>

        {/* 3. Intellectual Property */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            3. Intellectual Property
          </h2>
          <p>
            All content on this website, including but not limited to brand names, logos, software descriptions, text, design, and graphics, is the property of Yadde Technologies or used with permission, and is protected by applicable copyright, trademark, and intellectual property laws.
          </p>
        </section>

        {/* 4. Software Products & Third-Party Platforms */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            4. Software Products &amp; Store Distribution
          </h2>
          <p>
            Software applications published by Yadde Technologies on third-party application stores (such as Google Play) are governed by their respective End User License Agreements (EULA) and store terms. Links to official store listings or third-party resources are provided for convenience.
          </p>
        </section>

        {/* 5. User Inquiries & Communications */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            5. Inquiries &amp; Electronic Communications
          </h2>
          <p>
            When submitting inquiries through our contact forms or email, you agree to provide truthful, accurate, and non-deceptive contact information. You may not use this website to send unsolicited spam, abusive messages, or harmful code.
          </p>
        </section>

        {/* 6. Disclaimer of Warranties & Limitation of Liability */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            6. Disclaimer of Warranties
          </h2>
          <p>
            The website and its materials are provided &ldquo;as is&rdquo; without warranties of any kind, whether express or implied. While we strive to maintain accurate and up-to-date company information, Yadde Technologies does not warrant that website operation will be uninterrupted or error-free.
          </p>
        </section>

        {/* 7. Modifications */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-950">
            7. Modifications to Terms
          </h2>
          <p>
            Yadde Technologies reserves the right to revise these Terms &amp; Conditions at any time by updating this page. Your continued use of the website following any posted revisions constitutes acceptance of the modified terms.
          </p>
        </section>

        {/* 8. Contact Information */}
        <section className="space-y-3 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <h2 className="text-lg font-bold text-slate-950">
            8. Contact Information
          </h2>
          <p className="text-xs text-slate-600">
            For questions regarding these Terms &amp; Conditions, please contact:
          </p>
          <div className="text-xs font-mono space-y-1 text-slate-700 pt-1">
            <div><strong>Entity:</strong> {COMPANY_INFO.name}</div>
            <div><strong>Email:</strong> {COMPANY_INFO.email}</div>
            <div><strong>Website:</strong> {COMPANY_INFO.url}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
