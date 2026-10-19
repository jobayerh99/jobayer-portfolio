import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaLightbulb,
  FaTools,
  FaExclamationCircle,
  FaRocket,
  FaLayerGroup,
} from 'react-icons/fa';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  // Match by slug or id
  const project = projectsData.find(
    (p) => p.slug === projectId || p.id === projectId
  );

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setImgError(false);
  }, [projectId]);

  // Gracefully handle invalid project slugs
  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 mb-6">
          <FaExclamationCircle className="w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Project Not Found</h1>
        <p className="text-slate-400 max-w-md mb-8">
          The requested project <code className="text-pink-300">"{projectId}"</code> could not be found. Please check the project URL or explore the available projects below.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {projectsData.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white hover:border-pink-500/40 transition-colors"
            >
              {p.title.split('—')[0]}
            </Link>
          ))}
        </div>

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span>Return to All Projects</span>
        </Link>
      </div>
    );
  }

  // Related projects (excluding current)
  const otherProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <article className="py-12 sm:py-16 lg:py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-pink-400 transition-colors group focus:outline-none"
          >
            <FaArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <header className="space-y-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-pink-500/30 bg-pink-500/10 text-pink-400">
            <span>{project.badge || 'Featured Case Study'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
            {project.longDescription}
          </p>

          {/* Action Links (Live Demo + GitHub) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-sky-500 hover:opacity-95 shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <span>Live Project Demo</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-pink-500/40 hover:text-white transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <FaGithub className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Placeholder notice if demo URL is unconfirmed */}
          {project.isLiveUrlPlaceholder && (
            <p className="text-xs font-mono text-amber-400/90 flex items-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{project.placeholderNotice}</span>
            </p>
          )}
        </header>

        {/* Featured Screenshot / Visual Showcase */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/40">
          {!imgError && project.image ? (
            <img
              src={project.image}
              alt={`${project.title} detailed visual preview`}
              onError={() => setImgError(true)}
              className="w-full h-auto object-cover max-h-[550px]"
            />
          ) : (
            <div className="aspect-video w-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0b1120] to-[#131c31]">
              <FaLayerGroup className="w-12 h-12 text-pink-400/60 mb-3" />
              <p className="text-base font-bold text-white">{project.title}</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">{project.fallbackImagePlaceholder}</p>
              <span className="mt-4 px-3 py-1 rounded text-xs font-mono bg-pink-500/10 text-pink-300 border border-pink-500/20">
                Replace with screenshot in public{project.image}
              </span>
            </div>
          )}
        </div>

        {/* Main Tech Stack Badges */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0d1321]/80 border border-slate-800 space-y-4">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-pink-400 flex items-center gap-2">
            <FaTools className="w-4 h-4" />
            <span>Technologies & Libraries Used</span>
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono bg-slate-900 border border-slate-700/80 text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0d1321]/80 border border-slate-800 space-y-3">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
            <FaLightbulb className="w-4 h-4" />
            <span>The Problem It Addresses</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Core Features & Functionality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {project.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#0d1321]/70 border border-slate-800/80 hover:border-pink-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 mt-0.5">
                    <FaCheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Role & Implementation Details */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0d1321]/80 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            My Role & Implementation Details
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-slate-300">
            {project.roleAndImplementation.map((role, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-pink-400 flex-shrink-0 mt-2" />
                <span className="leading-relaxed">{role}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Challenges & Solutions */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Technical Challenges & Approaches
          </h2>
          <div className="space-y-4">
            {project.challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d1321]/90 border border-slate-800 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-pink-500/10 border border-pink-500/30 text-pink-300 font-semibold mt-0.5">
                    Challenge {idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {c.challenge}
                  </h3>
                </div>
                <div className="pl-0 sm:pl-8 text-sm text-slate-300 leading-relaxed">
                  <strong className="text-sky-300 font-medium">How I Solved It: </strong>
                  {c.solution}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Improvements & Roadmap */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-[#0d1321]/80 border border-slate-800 space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FaRocket className="w-5 h-5 text-pink-400" />
            <span>Future Roadmap & Planned Enhancements</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.futureRoadmap.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
              >
                <span className="text-pink-400 font-mono font-bold">0{idx + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Other Projects Navigation */}
        <section className="pt-8 border-t border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              Explore More Projects
            </h3>
            <Link
              to="/#projects"
              className="text-xs font-mono text-pink-400 hover:underline"
            >
              View Grid →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-pink-500/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-sky-400">{p.badge}</span>
                  <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors mt-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {p.shortDescription}
                  </p>
                </div>
                <div className="mt-4 text-xs font-semibold text-pink-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Case Study</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
