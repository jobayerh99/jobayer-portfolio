import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { FaGithub, FaCode } from 'react-icons/fa';
import { profileData } from '../data/profile';

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects and Case Studies"
      className="py-20 lg:py-28 bg-[#060a12] border-t border-slate-900 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          tag="// FEATURED WORK"
          title="Curated Projects &"
          highlight="Case Studies"
          subtitle="Explore functional applications built with modern React, Next.js, TypeScript, and Tailwind CSS. Each project addresses practical problems with clean UI and structured code."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0b1120] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-pink-400">
              <FaCode className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Interested in reviewing more code repositories?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Check out my GitHub for additional exercises, conceptual tests, and upcoming full-stack applications.
              </p>
            </div>
          </div>

          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 hover:border-pink-500/30 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 whitespace-nowrap"
          >
            <FaGithub className="w-4 h-4" />
            <span>Visit @{profileData.contact.githubUsername}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
