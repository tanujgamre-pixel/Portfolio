import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[#080B11] border-t border-slate-800 text-slate-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="text-white font-bold">Tanuj Gamare</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 text-[11px]">Atharva College of Engineering (CMPN)</span>
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors text-[11px]"
              title="Scroll to top"
            >
              <ArrowUp className="w-3 h-3 text-cyan-400" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-slate-900/80 text-center text-slate-500 text-[11px]">
          © {new Date().getFullYear()} Tanuj Gamare
        </div>
      </div>
    </footer>
  );
}
