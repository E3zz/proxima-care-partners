import { useRef, useEffect, useState } from 'react';

const advantages = [
  {
    icon: 'shield',
    title: 'HIPAA Secure',
    description:
      'We operate under SSAE 18 SOC 2 compliance and exceed federal HIPAA standards. All data is encrypted at rest and in transit, with zero-trust access controls across our infrastructure.',
    stat: 'SOC 2 Type II',
  },
  {
    icon: 'trending_up',
    title: 'Revenue Growth',
    description:
      'Our clients see an average revenue increase of 15–25% within the first year of partnership. We identify billing gaps, optimize coding accuracy, and recover lost reimbursements.',
    stat: 'Avg. +15% Revenue',
  },
  {
    icon: 'groups',
    title: 'Expert Team',
    description:
      'Our certified professional coders (CPCs), dedicated account managers, and payer specialists bring decades of combined experience across all medical specialties and payer types.',
    stat: '200+ Certified Coders',
  },
  {
    icon: 'visibility',
    title: 'Full Transparency',
    description:
      '24/7 access to your billing data through our client portal. Real-time dashboards, weekly performance reports, and a dedicated account manager always a call away.',
    stat: '24/7 Portal Access',
  },
];

const certifications = [
  { icon: 'verified_user', label: 'HIPAA Certified' },
  { icon: 'workspace_premium', label: 'CPC Credentialed' },
  { icon: 'lock', label: 'SOC 2 Type II' },
  { icon: 'local_hospital', label: 'MGMA Member' },
  { icon: 'fact_check', label: 'AAPC Certified' },
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

export default function Advantage() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 bg-[#030d1a] section-divider relative" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="pill-teal mb-5 inline-flex">
            <span className="material-symbols-outlined text-[15px]">star</span>
            Why Choose Us
          </div>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}
          >
            The Proxima Advantage
          </h2>
          <p
            className="text-slate-400 mx-auto max-w-xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px' }}
          >
            We are more than a billing service — we are a strategic financial partner dedicated to the long-term viability and growth of your practice.
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`glass-card rounded-xl p-7 flex flex-col group transition-all duration-500 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-teal-500/12 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                <span className="material-symbols-outlined text-[28px] text-teal-400">
                  {adv.icon}
                </span>
              </div>

              {/* Stat chip */}
              <span
                className="inline-block text-xs font-bold text-teal-300 bg-teal-500/10 border border-teal-500/15 px-2.5 py-1 rounded-full mb-4 self-start"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {adv.stat}
              </span>

              <h3
                className="font-bold text-white mb-3"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '18px' }}
              >
                {adv.title}
              </h3>
              <p
                className="text-slate-400 leading-relaxed text-sm flex-1"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
              >
                {adv.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div
          className={`glass-card rounded-xl p-6 flex flex-wrap justify-center items-center gap-8 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <span
            className="text-xs font-bold text-teal-400 uppercase tracking-widest"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Certifications &amp; Memberships
          </span>
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default">
              <span className="material-symbols-outlined text-[18px] text-teal-500">{cert.icon}</span>
              <span className="font-semibold text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>{cert.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
