import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import {
  FaAtom,
  FaCode,
  FaServer,
  FaBrain,
  FaCheckCircle,
  FaCompass,
} from 'react-icons/fa';

export default function About() {
  const { about } = profileData;

  const highlightIcons = [
    FaAtom,
    FaCode,
    FaServer,
    FaBrain,
  ];

  return (
    <section
      id="about"
      aria-label="About Jobayer Hosen"
      className="py-20 lg:py-28 bg-[#060a12] border-t border-slate-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// ABOUT ME"
          title="From Analytical Foundations to"
          highlight="Full-Stack Engineering"
          subtitle="How an academic background in Physics and an obsession with modern web technologies shape my journey as a developer."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Introduction */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {about.introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90">
                {paragraph}
              </p>
            ))}

            {/* Outside coding interests */}
            <div className="pt-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="text-sm font-mono font-semibold text-pink-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <FaCompass className="w-4 h-4" />
                <span>Interests Beyond Coding</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                {about.personalInterests.map((interest, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              Core Principles & Highlights
            </h3>

            {about.highlights.map((item, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#0d1321]/90 border border-slate-800/80 hover:border-pink-500/30 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-pink-400 group-hover:text-pink-300 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Status Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10 border border-pink-500/20 text-xs text-slate-300 flex items-center justify-between">
              <span className="font-mono text-slate-400">Current Status:</span>
              <span className="font-semibold text-pink-300">Open for Internships & Junior Roles</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
