import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillsData, skillCategories } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Tools"
      className="py-20 lg:py-28 bg-[#080c14] border-t border-slate-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// TECH STACK"
          title="Technical Skills &"
          highlight="Tool Arsenal"
          subtitle="A transparent overview of the technologies I build with daily, have working proficiency in, or am currently expanding into."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {skillCategories.map((cat) => {
            const count = cat.id === 'all'
              ? skillsData.length
              : skillsData.filter((s) => s.category === cat.id).length;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 font-semibold'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Legend */}
        <div className="max-w-2xl mx-auto mb-10 p-3 rounded-xl bg-slate-950/60 border border-slate-900 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
          <span className="text-slate-500 font-semibold uppercase">Proficiency Levels:</span>
          <div className="flex items-center gap-1.5 text-pink-400">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span>Core Daily</span>
          </div>
          <div className="flex items-center gap-1.5 text-sky-400">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Active Learning</span>
          </div>
          <div className="flex items-center gap-1.5 text-purple-400">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Exploring</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Note on Transparency */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <span>* No arbitrary percentage meters. Skills reflect practical project implementations and verified study milestones.</span>
        </div>
      </div>
    </section>
  );
}
