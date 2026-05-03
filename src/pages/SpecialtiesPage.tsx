import { useRef, useEffect, useState } from 'react';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

function useInView(threshold = 0.15) {
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

const specialties = [
  {
    icon: 'cardiology',
    label: 'Cardiology',
    description: 'Complex interventional and diagnostic cardiology billing with precise ICD-10/CPT coding. We handle pacemakers, cath lab procedures, echocardiography, and stress testing.',
    details: ['Interventional Cardiology', 'Echocardiography', 'Stress Testing', 'EP Studies'],
  },
  {
    icon: 'orthopedics',
    label: 'Orthopedics',
    description: 'Full-scope orthopedic billing for surgical and office visit services across hospital, ASC, and clinic settings. Specialized in modifier application and global period management.',
    details: ['Surgical Billing', 'ASC Services', 'Office Visits', 'Physical Therapy'],
  },
  {
    icon: 'neurology',
    label: 'Neurology',
    description: 'Specialized coding for EMG/NCS, EEG, sleep studies, and complex evaluation & management for neurology and neurosurgery practices.',
    details: ['EMG / NCS', 'EEG Studies', 'Sleep Medicine', 'Neurosurgery'],
  },
  {
    icon: 'psychology',
    label: 'Behavioral Health',
    description: 'Mental health and substance use disorder billing with full mental health parity compliance expertise and telehealth coding support.',
    details: ['Psychotherapy', 'MAT Services', 'Telehealth', 'Crisis Services'],
  },
  {
    icon: 'local_pharmacy',
    label: 'Oncology',
    description: 'Chemotherapy drug administration billing, infusion center coding, and complex oncology E&M with complete documentation support.',
    details: ['Chemotherapy', 'Infusion Centers', 'Radiation Therapy', 'Clinical Trials'],
  },
  {
    icon: 'pediatrics',
    label: 'Pediatrics',
    description: 'Well-child visit, developmental screening, vaccine administration, and complex pediatric condition coding with payer-specific expertise.',
    details: ['Well-Child Visits', 'Vaccines', 'Developmental Screening', 'EPSDT'],
  },
  {
    icon: 'radiology',
    label: 'Radiology',
    description: 'Professional and technical component billing for diagnostic imaging and interventional radiology, including MRI, CT, X-ray, and ultrasound.',
    details: ['Diagnostic Imaging', 'Interventional', 'Nuclear Medicine', 'Teleradiology'],
  },
  {
    icon: 'emergency',
    label: 'Emergency Medicine',
    description: 'High-volume ED billing with rapid-cycle RCM designed for the pace of emergency medicine. Expert E&M level assignment and critical care coding.',
    details: ['E&M Level Assignment', 'Critical Care', 'Observation Billing', 'Trauma'],
  },
  {
    icon: 'spa',
    label: 'Dermatology',
    description: 'Medical and cosmetic dermatology billing with Mohs surgery coding expertise, pathology billing, and phototherapy documentation support.',
    details: ['Mohs Surgery', 'Pathology', 'Phototherapy', 'Cosmetic Procedures'],
  },
  {
    icon: 'pregnant_woman',
    label: 'OB/GYN',
    description: 'Comprehensive obstetrics and gynecology billing including global OB packages, high-risk maternity, and gynecologic surgery coding.',
    details: ['Global OB', 'High-Risk Maternity', 'Gynecologic Surgery', 'Infertility'],
  },
  {
    icon: 'visibility',
    label: 'Ophthalmology',
    description: 'Surgical and medical ophthalmology coding including cataract surgery, retinal procedures, and optometry billing with proper modifier usage.',
    details: ['Cataract Surgery', 'Retinal Procedures', 'Glaucoma', 'Optometry'],
  },
  {
    icon: 'hearing',
    label: 'ENT / Audiology',
    description: 'Otolaryngology and audiology billing for surgical, in-office, and audiometric procedures with expertise in hearing aid coding.',
    details: ['Sinus Surgery', 'Audiometry', 'Laryngoscopy', 'Hearing Aids'],
  },
];

export default function SpecialtiesPage() {
  const { ref, inView } = useInView();
  const [activeSpecialty, setActiveSpecialty] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Medical Specialties | Proxima Care Partners"
        description="Proxima Care Partners provides expert billing for 12+ medical specialties including Cardiology, Orthopedics, Neurology, Behavioral Health, Oncology, Pediatrics, Radiology, and more."
        keywords="medical specialty billing, cardiology billing, orthopedics billing, neurology billing, behavioral health billing, oncology billing, specialty RCM"
        canonical="https://www.proximacarepartners.com/specialties"
      />

      {/* Page Hero */}
      <section className="pt-36 pb-20 bg-[#030d1a] grid-texture glow-teal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-700/5 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="pill-teal mb-6 inline-flex">
            <span className="material-symbols-outlined text-[15px]">local_hospital</span>
            Specialties We Serve
          </div>
          <h1
            className="font-bold text-white mb-6 max-w-3xl leading-tight"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(38px, 5vw, 56px)', letterSpacing: '-0.02em' }}
          >
            Deep Expertise Across All Specialties
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
            Our certified coders hold specialty-specific credentials and bring years of hands-on experience in every clinical domain we serve.
          </p>
        </div>
      </section>

      {/* Specialties Interactive Grid */}
      <section className="py-24 bg-[#051125] section-divider" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {specialties.map((s, i) => (
              <div
                key={i}
                className={`group relative rounded-xl cursor-pointer transition-all duration-500 overflow-hidden ${
                  activeSpecialty === i
                    ? 'bg-teal-600/15 border border-teal-500/30 shadow-2xl shadow-teal-900/30'
                    : 'glass-card hover:border-teal-500/25'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 50 + 100}ms` }}
                onClick={() => setActiveSpecialty(activeSpecialty === i ? null : i)}
              >
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    activeSpecialty === i ? 'bg-teal-500/25 border border-teal-500/30' : 'bg-white/6 border border-white/10 group-hover:bg-teal-500/15 group-hover:border-teal-500/20'
                  }`}>
                    <span className={`material-symbols-outlined text-[22px] transition-colors duration-300 ${activeSpecialty === i ? 'text-teal-300' : 'text-slate-400 group-hover:text-teal-400'}`}>
                      {s.icon}
                    </span>
                  </div>
                  <h3
                    className={`font-bold mb-2 transition-colors duration-300 ${activeSpecialty === i ? 'text-teal-300' : 'text-white'}`}
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px' }}
                  >
                    {s.label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 text-slate-400"
                    style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
                  >
                    {s.description}
                  </p>
                  <div className={`overflow-hidden transition-all duration-500 ${activeSpecialty === i ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/8">
                      {s.details.map((d, j) => (
                        <span key={j} className="text-xs font-semibold px-2.5 py-1 bg-teal-500/10 border border-teal-500/15 text-teal-300 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-semibold mt-3 transition-colors duration-300 text-teal-400`}>
                    <span>{activeSpecialty === i ? 'Click to collapse' : 'Click for details'}</span>
                    <span className="material-symbols-outlined text-[14px] transition-transform duration-300" style={{ transform: activeSpecialty === i ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
