import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const specialties = [
  { icon: 'cardiology', label: 'Cardiology', description: 'Complex cardiology billing with ICD-10/CPT precision for interventional and diagnostic services.' },
  { icon: 'orthopedics', label: 'Orthopedics', description: 'Surgical and office visit billing for orthopedic practices, including ASC and hospital settings.' },
  { icon: 'neurology', label: 'Neurology', description: 'Specialized coding for neurology, including EMG, EEG, and sleep studies.' },
  { icon: 'psychology', label: 'Behavioral Health', description: 'Mental health and substance use disorder billing with parity compliance expertise.' },
  { icon: 'local_pharmacy', label: 'Oncology', description: 'Chemotherapy drug administration billing and oncology E&M with full documentation support.' },
  { icon: 'pediatrics', label: 'Pediatrics', description: 'Well-child visit, developmental screening, and vaccine administration coding.' },
  { icon: 'radiology', label: 'Radiology', description: 'Professional and technical component billing for diagnostic imaging and interventional radiology.' },
  { icon: 'emergency', label: 'Emergency Medicine', description: 'High-volume ED billing with rapid-cycle RCM for acute and critical care levels.' },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Specialties() {
  const { ref, inView } = useInView();

  return (
    <section id="specialties" className="py-28 bg-[#051125] grid-texture section-divider relative" ref={ref}>
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="pill-teal mb-5 inline-flex">
            <span className="material-symbols-outlined text-[15px]">local_hospital</span>
            Specialties We Serve
          </div>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}
          >
            Deep Expertise Across All Specialties
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
            From primary care to complex surgical subspecialties, our certified coders bring specialty-specific knowledge to every claim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialties.map((s, i) => (
            <div
              key={i}
              className={`group glass-card rounded-xl p-6 hover:border-teal-500/30 transition-all duration-500 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 60 + 200}ms` }}
            >
              <div className="w-12 h-12 bg-white/6 border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/15 group-hover:border-teal-500/25 transition-all duration-300">
                <span className="material-symbols-outlined text-[22px] text-slate-400 group-hover:text-teal-400 transition-colors duration-300">
                  {s.icon}
                </span>
              </div>
              <h3
                className="font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}
              >
                {s.label}
              </h3>
              <p
                className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
              >
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`mt-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <Link
            to="/specialties"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-10 py-4 font-bold hover:bg-teal-500 transition-all duration-300 rounded-sm text-sm shadow-lg shadow-teal-900/50 group"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View All Specialties
            <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
