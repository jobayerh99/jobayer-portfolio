import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCopy,
  FaCheck,
  FaInfoCircle,
} from 'react-icons/fa';

export default function Contact() {
  const { contact, location } = profileData;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate validation and processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      setSubmittedPayload({ ...formData });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-20 lg:py-28 bg-[#080c14] border-t border-slate-900 scroll-mt-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// GET IN TOUCH"
          title="Let's Discuss Opportunities &"
          highlight="Collaborations"
          subtitle="Whether you represent a company seeking a motivated junior developer, have an internship opportunity, need freelance work, or simply want to talk tech — I would love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0d1321]/80 border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Feel free to reach out directly through email, phone, or any of the social platforms below.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 pt-2">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-slate-500">Email Address</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm font-medium text-slate-200 hover:text-pink-400 transition-colors truncate block"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.email, 'email')}
                    title="Copy Email"
                    aria-label="Copy Email Address"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedEmail ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <FaPhone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-slate-500">Phone</p>
                      <span className="text-sm font-medium text-slate-200 truncate block">
                        {contact.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(contact.phone, 'phone')}
                    title="Copy Phone"
                    aria-label="Copy Phone Number"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedPhone ? <FaCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FaCopy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp Item */}
                <a
                  href={contact.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/30 flex items-center justify-between gap-3 group transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <FaWhatsapp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-mono text-slate-500">WhatsApp</p>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                        Direct Chat [{contact.whatsapp}]
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Chat →
                  </span>
                </a>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-500">Location</p>
                    <span className="text-sm font-medium text-slate-200">
                      {location} (Available for Remote Worldwide & Hybrid)
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs font-mono text-slate-400 mb-3">Online Presence:</p>
                <div className="flex gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-mono font-medium bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn [Config]</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Config Instructions Note */}
            <div className="p-4 rounded-xl bg-[#090e1a] border border-slate-800/80 text-xs text-slate-400 flex items-start gap-2.5">
              <FaInfoCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Editable Placeholders:</strong> Update your actual phone, email, and social handles in <code className="text-pink-300">src/data/profile.js</code>.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Real Validation & Mailto Fallback */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1321]/90 border border-slate-800 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill in the details below. Required fields are validated before submission.
              </p>

              {/* Success Notification Banner */}
              {submissionSuccess && submittedPayload && (
                <div className="mb-6 p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-sm space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2.5 font-bold text-emerald-300">
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Form Validated Successfully!</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{submittedPayload.name}</strong>. Because this is a client-side portfolio without an active backend service, click the button below to launch your default mail app with your message pre-loaded:
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${contact.email}?subject=${encodeURIComponent(
                        submittedPayload.subject
                      )}&body=${encodeURIComponent(
                        `Hi Jobayer,\n\n${submittedPayload.message}\n\nFrom: ${submittedPayload.name} (${submittedPayload.email})`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                    >
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      <span>Send via Default Email App (mailto)</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmissionSuccess(false)}
                      className="px-3 py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:text-white transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500'
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <FaExclamationTriangle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-pink-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-slate-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <FaExclamationTriangle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300">
                    Subject <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior Web Developer Opportunity / Project Inquiry"
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500'
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <FaExclamationTriangle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here... tell me about your project, team, or opportunity."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                        : 'border-slate-800 focus:border-pink-500 focus:ring-1 focus:ring-pink-500'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <FaExclamationTriangle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 hover:opacity-95 shadow-lg shadow-pink-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Validating & Submitting...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Honest integration note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 text-center">
                <span>* Form includes client-side validation. Seamlessly integrate with Formspree, EmailJS, or Resend in production.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
