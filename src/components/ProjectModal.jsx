import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Terminal, 
  Lightbulb, 
  Layers
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0E131F] border border-slate-700/80 shadow-2xl text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0E131F]/95 backdrop-blur-md px-6 py-5 border-b border-slate-800 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              {project.badges?.map((badge, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 border border-slate-700 text-cyan-300"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-400 hover:text-white transition-colors ml-4"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm">
          
          {/* Overview */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
              Overview & Role
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {project.description}
            </p>
            {project.myRole && (
              <div className="mt-3 pt-3 border-t border-slate-800 text-xs">
                <span className="text-slate-400 font-mono block">MY RESPONSIBILITY:</span>
                <span className="text-teal-300 font-medium">{project.myRole}</span>
              </div>
            )}
          </div>

          {/* Technical Architecture */}
          {project.specs && project.specs.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Key Technical Aspects
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.specs.map((spec, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800"
                  >
                    <h5 className="font-semibold text-white text-xs sm:text-sm mb-2 text-cyan-300">
                      {spec.area}
                    </h5>
                    <ul className="space-y-1.5">
                      {spec.details.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learnings */}
          {project.learnings && (
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-emerald-400" /> Key Learnings & Skills Gained
              </h4>
              <ul className="space-y-1.5">
                {project.learnings.map((learning, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0E131F] px-6 py-3.5 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
