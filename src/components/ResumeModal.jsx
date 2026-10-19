import React, { useEffect } from 'react';
import { FaDownload, FaTimes, FaFilePdf, FaEnvelope, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { resume, contact } = profileData;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0b1120] border border-pink-500/20 shadow-2xl shadow-pink-500/10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400">
            <FaFilePdf className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white">
              Developer Resume
            </h3>
            <p className="text-xs font-mono text-slate-400">
              {profileData.name} — {profileData.role}
            </p>
          </div>
        </div>

        {/* Status Box */}
        {resume.isAvailable ? (
          <div className="space-y-4">
            <p className="text-sm text-slate-300 leading-relaxed">
              Click below to view or download my complete developer resume in PDF format.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={resume.filePath}
                download={resume.fileName}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all shadow-lg shadow-pink-500/25"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <a
                href={resume.filePath}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex gap-3">
              <FaInfoCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400" />
              <div>
                <p className="font-semibold mb-1 text-white">Resume File Status: Configurable Placeholder</p>
                <p className="text-slate-300 leading-relaxed">
                  My formal resume is currently being tailored for upcoming junior developer & internship opportunities.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#080d1a] border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <p className="text-pink-400 font-bold">// HOW TO ACTIVATE RESUME DOWNLOAD:</p>
              <p className="text-slate-400">1. Place your PDF as <span className="text-sky-300">`public/resume.pdf`</span>.</p>
              <p className="text-slate-400">2. In <span className="text-sky-300">`src/data/profile.js`</span>, set <span className="text-emerald-300">`isAvailable: true`</span>.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={resume.filePath}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                <span>Attempt Opening /resume.pdf</span>
              </a>
              <a
                href={`mailto:${contact.email}?subject=Resume Request - Jobayer Hosen`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 transition-colors"
              >
                <FaEnvelope className="w-3.5 h-3.5" />
                <span>Request via Email</span>
              </a>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>Format: Standard PDF</span>
          <button
            onClick={onClose}
            className="text-pink-400 hover:underline focus:outline-none"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
