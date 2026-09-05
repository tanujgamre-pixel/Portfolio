import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  HeartHandshake
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { education, activities } = portfolioData;

  return (
    <section id="education" className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
            // ACADEMICS & COMMUNITY
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Education & Activities
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Academic Background
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 mb-2 flex items-center gap-2">
                    <span className="font-medium text-slate-200">{edu.institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{edu.location}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Activities */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-400" /> Key Activities & Participation
            </h3>

            <div className="space-y-3.5">
              {activities.map((act, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">
                      {act.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      {act.period}
                    </span>
                  </div>
                  
                  <div className="text-[11px] text-cyan-400/90 font-medium mb-1.5">
                    {act.role} — {act.organization}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
