import React from 'react';
import { FaChevronUp, FaHeart } from 'react-icons/fa';
import { profileData } from '../data/profile';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-[#05080f] border-t border-slate-800/80 text-slate-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500 to-sky-500 p-[1.5px]">
                <div className="w-full h-full bg-[#0b1120] rounded-[6px] flex items-center justify-center font-mono font-bold text-xs text-white">
                  &lt;JH/&gt;
                </div>
              </div>
              <span className="font-bold text-lg text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {profileData.role} — {profileData.shortHeadline} Dedicated to clean code, component architecture, and continuous technical growth.
            </p>
            <div className="pt-2">
              <SocialLinks iconSize="w-4 h-4" />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-pink-400 transition-colors focus:outline-none focus:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Career Aspirations */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
              Future Trajectory
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Advancing from strong MERN stack full-stack engineering toward modern cloud architectures, data science, and AI-assisted engineering systems.
            </p>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-slate-300">
              <span className="text-pink-400 font-bold">Status:</span> Open to junior frontend/MERN roles, internships & freelance projects.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {profileData.name}. Crafted with React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-pink-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <span>Back to Top</span>
            <FaChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform text-pink-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
