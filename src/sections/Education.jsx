import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { FaGraduationCap, FaLaptopCode, FaCheckCircle, FaBookOpen } from 'react-icons/fa';

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education and Academic Background"
      className="py-20 lg:py-28 bg-[#060a12] border-t border-slate-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// ACADEMIC FOUNDATION"
          title="Education &"
          highlight="Formal Training"
          subtitle="Combining an academic background in Physics with rigorous full-stack web development training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {educationData.map((edu) => {
            const isAcademic = edu.type === 'Academic';
            const Icon = isAcademic ? FaGraduationCap : FaLaptopCode;

            return (
              <div
                key={edu.id}
                className="relative rounded-2xl bg-[#0d1321]/80 border border-slate-800/80 hover:border-pink-500/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5 group"
              >
                <div>
                  {/* Top Bar: Icon, Period, and Type Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400">
                          {edu.period}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${edu.badgeColor}`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  {/* Degree & Field */}
                  <div className="mb-4">
                    <p className="text-base font-semibold text-slate-200">
                      {edu.degree} — <span className="text-pink-400">{edu.field}</span>
                    </p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Coursework & Modules */}
                  <div className="mb-6 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FaBookOpen className="w-3.5 h-3.5 text-pink-400" />
                      <span>Key Curriculum & Modules</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlights / Outcomes */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500">
                    Key Takeaways:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Academic Authenticity */}
        <div className="mt-8 text-center text-xs text-slate-500 font-mono">
          <span>* Academic timeline reflects honors study at Rangpur Govt. College. Details and coursework remain fully editable.</span>
        </div>
      </div>
    </section>
  );
}
