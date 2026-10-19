import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group relative rounded-2xl bg-[#0d1321]/80 border border-slate-800/80 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-pink-500/10 flex flex-col overflow-hidden">
      {/* Project Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot preview`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#0c1322] to-[#151c2e]">
            <FaLayerGroup className="w-10 h-10 text-pink-400/60 mb-2" />
            <p className="text-sm font-semibold text-slate-200">{project.title}</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">{project.fallbackImagePlaceholder}</p>
            <span className="mt-3 px-2 py-0.5 rounded text-[10px] font-mono bg-pink-500/10 text-pink-300 border border-pink-500/20">
              Project Preview Placeholder
            </span>
          </div>
        )}

        {/* Badge Overlay */}
        {project.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#0b1120]/90 backdrop-blur-md border border-slate-700 text-sky-300">
            {project.badge}
          </div>
        )}

        {/* Subtle Gradient Shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321] via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors mb-2.5">
            <Link to={`/projects/${project.slug}`} className="focus:outline-none focus:underline">
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          {/* View Details Button (Primary) */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors group/link focus:outline-none"
          >
            <span>View Case Study</span>
            <FaArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          {/* Quick External Links (GitHub & Live) */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                title="View GitHub Repository"
                aria-label={`View GitHub repository for ${project.title}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                title={project.isLiveUrlPlaceholder ? `Live Demo (Placeholder URL): ${project.liveUrl}` : `Live Demo: ${project.liveUrl}`}
                aria-label={`Open live demo for ${project.title}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
