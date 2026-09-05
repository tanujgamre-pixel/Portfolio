import React from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Layers, 
  Terminal, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-4 h-4 text-cyan-400" />,
      tag: "AI / ML",
      items: skills.aiAndMl
    },
    {
      title: "Core Programming",
      icon: <Code2 className="w-4 h-4 text-teal-400" />,
      tag: "Languages",
      items: skills.programming
    },
    {
      title: "Systems & Simulation",
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      tag: "Simulation",
      items: skills.systemsAndProtocols
    },
    {
      title: "Embedded & Prototyping Tools",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      tag: "Embedded & Lab",
      items: skills.embeddedAndTools
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-[#0B0F17]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
            // CAPABILITIES
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Languages, machine learning frameworks, distributed simulation, and lab tools.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800"
            >
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base">
                    {group.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {group.tag}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {group.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-950/50 border border-slate-850 hover:border-slate-750 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-xs text-slate-200">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        skill.level === 'Learning'
                          ? 'bg-amber-950/40 text-amber-300 border border-amber-800/40'
                          : 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/40'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
