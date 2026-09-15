import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleCopy = () => {
    const fullText = `From: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Website Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs" id="contact-form-container">
      {submitted ? (
        <div className="space-y-5 text-left" id="contact-submission-feedback">
          <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-950">Inquiry Details Validated</h4>
              <p className="text-xs text-blue-800 mt-1 leading-relaxed">
                Thank you, <span className="font-semibold">{formData.name}</span>. To ensure your message reaches our official team promptly without risk of webform delivery failure, you can send it directly via your email client or copy the formatted inquiry below.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1.5 font-mono text-slate-700">
            <div><span className="font-semibold text-slate-900 font-sans">To:</span> {COMPANY_INFO.email}</div>
            <div><span className="font-semibold text-slate-900 font-sans">Subject:</span> {formData.subject}</div>
            <div className="pt-2 border-t border-slate-200 whitespace-pre-wrap font-sans text-slate-800">
              {formData.message}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href={mailtoLink}
              id="open-email-client-btn"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Email Client</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              id="copy-inquiry-text-btn"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Inquiry Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>Copy Message Details</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="text-xs text-slate-500 hover:text-slate-800 px-3 py-2 text-center"
            >
              Compose New Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4" id="official-contact-form">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="Your full name"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                errors.name
                  ? 'border-red-300 focus:ring-red-200 text-red-950'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100 text-slate-900'
              }`}
            />
            {errors.name && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="name@example.com"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                errors.email
                  ? 'border-red-300 focus:ring-red-200 text-red-950'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100 text-slate-900'
              }`}
            />
            {errors.email && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData({ ...formData, subject: e.target.value });
                if (errors.subject) setErrors({ ...errors, subject: undefined });
              }}
              placeholder="Topic or product inquiry"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                errors.subject
                  ? 'border-red-300 focus:ring-red-200 text-red-950'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100 text-slate-900'
              }`}
            />
            {errors.subject && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Please provide details regarding your inquiry..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-colors ${
                errors.message
                  ? 'border-red-300 focus:ring-red-200 text-red-950'
                  : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100 text-slate-900'
              }`}
            />
            {errors.message && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              id="send-message-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-2xs transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>Send Message</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
