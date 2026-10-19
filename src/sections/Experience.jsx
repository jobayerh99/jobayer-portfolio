import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { FaLaptopCode, FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Development and Learning Journey"
      className="py-20 lg:py-28 bg-[#080c14] border-t border-slate-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// GROWTH TRAJECTORY"
          title="Professional Development &"
          highlight="Learning Journey"
          subtitle="A transparent roadmap of my technical progression, practical project development, and engineering milestones."
        />

        {/* Opportunity Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10 border border-pink-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
              <FaRocket className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Ready for Professional Contributions
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Prepared with modern React, Tailwind CSS, and MERN stack capabilities for internship and junior developer openings.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-pink-500 hover:bg-pink-600 transition-colors whitespace-nowrap shadow-md shadow-pink-500/20"
          >
            Hire or Connect →
          </a>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080c14] border-2 border-pink-500 group-hover:bg-pink-500 transition-colors shadow-sm shadow-pink-500/50" />

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0d1321]/80 border border-slate-800/80 hover:border-pink-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5">
                
                {/* Header: Role + Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-pink-400 flex items-center gap-2 mt-0.5">
                      <span>{item.organization}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3 text-slate-500" />
                        {item.location}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-sky-300 flex items-center gap-1.5">
                      <FaCalendarAlt className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-pink-500/10 text-pink-300 border border-pink-500/20">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-400">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheckCircle className="w-3.5 h-3.5 text-pink-400/80 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300/90">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Updates */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <span>* Timeline highlights verified milestones. Easily updateable via `src/data/experience.js` as new roles or internships are secured.</span>
        </div>
      </div>
    </section>
  );
}
