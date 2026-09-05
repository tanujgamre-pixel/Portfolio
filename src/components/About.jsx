import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  HeartHandshake, 
  Code2,
  Cpu,
  BrainCircuit,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const focusAreas = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />,
      title: "AI/ML & Digital Twins",
      desc: "Building time-series and anomaly detection pipelines using Python, PyTorch, and NumPy. Currently modeling an aero engine digital twin for the DRDO SIH problem statement."
    },
    {
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      title: "Distributed Simulation & VCAN",
      desc: "Developing physics-based simulations in Python and streaming telemetry over Virtual CAN (VCAN) to decouple simulation from model training."
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      title: "Computer Vision & Spatial Mapping",
      desc: "Exploring 3D Gaussian Splatting, photogrammetry, and 2D LiDAR data capture on Raspberry Pi 4 to achieve cost-effective 3D environment mapping."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-emerald-400" />,
      title: "Community & Volunteering",
      desc: "Active volunteer with the National Service Scheme (NSS) at Atharva College of Engineering, participating in social welfare and campus initiatives."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#0B0F17]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
            // BACKGROUND
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio text */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Engineering (CMPN) student in my <strong className="text-white">Second Year (3rd Semester) at Atharva College of Engineering</strong>, Mumbai.
            </p>
            <p className="text-slate-400">
              In my first semester, our 4-student group developed an agricultural hexacopter with multispectral NDVI imaging that grew to become the highest-funded first-year project at our college and was showcased at national expos. 
            </p>
            <p className="text-slate-400">
              That experience gave me a solid, practical understanding of sensors, embedded Linux (Raspberry Pi 4/Zero), and physical systems. Today, my core focus is firmly on <strong className="text-cyan-300">Artificial Intelligence, Machine Learning, and Software Systems</strong>. I enjoy writing physics simulations in Python, training neural networks with PyTorch, and building distributed data pipelines.
            </p>

            {/* Quick Metadata */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>B.E. CMPN (3rd Sem)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Born: {personal.dob}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>NSS Volunteer</span>
              </div>
            </div>
          </div>

          {/* Core Areas */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <div className="p-2 rounded-lg bg-slate-800/80 w-fit mb-3">
                  {area.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {area.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
