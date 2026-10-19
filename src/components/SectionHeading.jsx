import React from 'react';

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider mb-4 border border-pink-500/20 bg-pink-500/10 text-pink-400 ${isCentered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{' '}
        {highlight && (
          <span className="gradient-text-pink-blue inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
