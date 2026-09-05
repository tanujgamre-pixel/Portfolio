import React from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, keyHighlights } = portfolioData;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-300 mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>ATHARVA COLLEGE OF ENGINEERING // SEMESTER 3</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-2xl font-medium text-slate-300 mb-6 leading-snug max-w-2xl">
          Computer Engineering student focused on{' '}
          <span className="text-cyan-400 font-semibold">AI/ML</span>,{' '}
          <span className="text-teal-300 font-semibold">Digital Twin Systems</span> &{' '}
          <span className="text-blue-400 font-semibold">Applied Computing</span>.
        </p>

        {/* Grounded Bio */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Currently engineering a physics-based 4-stroke aero piston engine simulation streaming real-time sensor data for health monitoring and Remaining Useful Life (RUL) prediction (DRDO SIH problem statement). Background in computer vision, spatial mapping, and embedded hardware.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14 w-full sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-400 hover:text-white font-medium text-sm transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-800/80">
          {keyHighlights.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-left">
              <div className="text-cyan-400 font-mono font-bold text-xs">{item.metric}</div>
              <div className="text-slate-200 text-xs sm:text-sm font-semibold mt-1">{item.label}</div>
              <div className="text-slate-400 text-[11px] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
