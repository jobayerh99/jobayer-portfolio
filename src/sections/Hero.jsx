import React, { useState } from 'react';
import { FaArrowRight, FaDownload, FaCode, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { profileData } from '../data/profile';
import SocialLinks from '../components/SocialLinks';
import ResumeModal from '../components/ResumeModal';

export default function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction and Hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 lg:py-24 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Calls to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            
            {/* Introductory Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-pink-500/30 shadow-sm shadow-pink-500/10 text-xs font-mono text-pink-300">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
              <span className="font-semibold tracking-wider">HELLO, I'M</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">Open for Opportunities</span>
            </div>

            {/* Name & Designation Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name}
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text-pink-blue">
                {profileData.role}
              </p>
            </div>

            {/* Short Description & Learning Journey */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
                {profileData.shortHeadline}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Passionate about learning full-stack technologies, clean component architecture, and systematic problem-solving. Bridging an academic background in Physics with modern web engineering, with long-term aspirations in data science and AI engineering.
              </p>
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 hover:opacity-95 shadow-xl shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <span>View My Projects</span>
                <FaArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-pink-500/40 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <FaDownload className="w-4 h-4 text-pink-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Proof & Profiles */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <SocialLinks iconSize="w-4 h-4" />
            </div>

          </div>

          {/* Right Column: Visual Portrait & Developer Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Glowing Backdrop Circle */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-pink-500/30 via-purple-500/20 to-sky-500/30 p-[2px] shadow-2xl shadow-pink-500/10">
                <div className="w-full h-full rounded-3xl bg-[#090d16] overflow-hidden relative flex flex-col items-center justify-center border border-slate-800">
                  
                  {/* Portrait Image or Developer Graphic */}
                  {!avatarError ? (
                    <img
                      src="/portrait.svg"
                      alt="Jobayer Hosen developer portrait placeholder"
                      onError={() => setAvatarError(true)}
                      className="w-full h-full object-cover object-center p-2"
                    />
                  ) : (
                    /* High-tech SVG developer avatar fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#0e1628] to-[#080d17]">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-sky-500/20 border border-pink-500/40 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/10">
                        <FaLaptopCode className="w-12 h-12 text-pink-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-mono font-bold text-lg text-white">Jobayer Hosen</p>
                        <p className="text-xs font-mono text-sky-400">MERN Stack Engineer</p>
                      </div>
                      <div className="mt-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
                        Drop photo into <span className="text-pink-300">public/portrait.jpg</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom terminal code banner */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-[#080c14]/90 backdrop-blur-md border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Ready to code</span>
                    </div>
                    <span className="text-pink-400 font-semibold">&lt;React /&gt;</span>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1: Top-Right (React & Next.js) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0e172a]/95 backdrop-blur-md border border-pink-500/40 text-xs font-mono font-semibold text-white shadow-xl shadow-pink-500/10 flex items-center gap-2">
                <span className="text-pink-400 font-bold">⚡</span>
                <span>React & Next.js</span>
              </div>

              {/* Floating Badge 2: Bottom-Left (MERN Stack) */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0e172a]/95 backdrop-blur-md border border-sky-500/40 text-xs font-mono font-semibold text-white shadow-xl shadow-sky-500/10 flex items-center gap-2">
                <span className="text-sky-400 font-bold">🚀</span>
                <span>MERN Full-Stack</span>
              </div>

              {/* Floating Badge 3: Top-Left (Physics Mindset) */}
              <div className="absolute top-1/2 -left-6 sm:-left-8 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0e172a]/95 backdrop-blur-md border border-purple-500/30 text-[11px] font-mono font-medium text-purple-300 shadow-lg hidden sm:flex items-center gap-2">
                <span>💡</span>
                <span>Analytical Mind</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Resume Download / Instruction Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
