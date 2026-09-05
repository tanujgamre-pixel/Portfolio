import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight,
  Phone
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0B0F17]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
            // CONNECT
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Open to discussing AI/ML projects, collaborations, or internships.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-base">
                    LinkedIn
                  </h3>
                  <span className="text-xs text-slate-400">Primary networking profile</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with me on LinkedIn to follow my project updates and academic progress.
              </p>

              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all"
              >
                <span>Visit Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3.5 text-xs">
              {/* Email */}
              <div className="flex items-center justify-between">
                <a 
                  href={`mailto:${personal.links.email}`} 
                  className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>{personal.links.email}</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] flex items-center gap-1 transition-colors"
                  title="Copy email"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-800">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a 
                  href={`tel:${personal.links.phone}`}
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  {personal.links.phone}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-slate-800 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base font-semibold text-white mb-4">
                Send a Message
              </h3>

              {submitSuccess && (
                <div className="p-3 mb-4 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Message sent! Thank you for reaching out.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-mono uppercase text-[10px]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-slate-200 placeholder-slate-400 text-xs outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-mono uppercase text-[10px]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-slate-200 placeholder-slate-400 text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-mono uppercase text-[10px]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 text-slate-200 placeholder-slate-400 text-xs outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
