import React from 'react';
import TechIcon from './TechIcon';

const statusBadgeStyles = {
  Core: 'border-pink-500/40 bg-pink-500/10 text-pink-400 shadow-sm shadow-pink-500/10',
  Proficient: 'border-sky-500/40 bg-sky-500/10 text-sky-400 shadow-sm shadow-sky-500/10',
  Learning: 'border-amber-500/40 bg-amber-500/10 text-amber-300 shadow-sm shadow-amber-500/10',
  Exploring: 'border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-sm shadow-purple-500/10',
};

export default function SkillCard({ skill }) {
  const badgeStyle = statusBadgeStyles[skill.status] || 'border-slate-700 bg-slate-800 text-slate-300';

  return (
    <div className="group relative p-5 rounded-2xl bg-[#0d1321]/80 border border-slate-800/80 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/5 flex flex-col justify-between">
      {/* Top row: Icon + Status Badge */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border border-slate-800 bg-[#090d16] group-hover:scale-110 group-hover:border-pink-500/30 transition-all duration-300"
            style={{ color: skill.color }}
          >
            <TechIcon name={skill.iconName} className="w-6 h-6" />
          </div>

          <span
            className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${badgeStyle}`}
          >
            {skill.status}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors mb-2">
          {skill.name}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {skill.description}
        </p>
      </div>

      {/* Subtle bottom indicator */}
      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span className="capitalize">{skill.category}</span>
        <span className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity">
          Ready for project use →
        </span>
      </div>
    </div>
  );
}
