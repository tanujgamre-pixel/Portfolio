import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronRight,
  Terminal,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Systems', 'Computer Vision', 'Embedded & Systems'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              // WORK & RESEARCH
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Simulations, machine learning pipelines, and embedded software systems.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/80'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-slate-800/80 bg-slate-950/30">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.badges?.slice(0, 2).map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack?.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trigger Button */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all border border-slate-700/60 group/btn"
                  >
                    <span>View Architecture & Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
