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

const team = [
  {
    name: 'David Chen, M.D.',
    title: 'Chief Executive Officer',
    bio: 'Bridging clinical medicine with financial strategy to create sustainable healthcare operations. 20+ years in hospital administration.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-oLMmAo5GtjYqrTV_XAW17f50obVOmhGg2q2wcvbrHZe5FiYU_IJzuBnZDUsH5BrJGZhPXL5m7vUfxn2uPKTabyDIDxF4KWpmGN_AvHA_e1Wc4xayKEp6hNkklkAV2UiEQx2kSMtRa0uHywOMh2EC-pnHqSrHOLVbGb77yKk2GGZJL7YZILN1H82FioLXT5vKIMoq2MT0R_38peyc2i3R7l2rOBr22Gk8i-_Pn1cZKtDFX7jJ06h8JJymkDmIXVR4GCGH82f-810',
  },
  {
    name: 'Sarah Miller, CPA',
    title: 'Chief Financial Officer',
    bio: 'Expert in revenue cycle management and high-stakes financial auditing for multi-state healthcare providers and hospital networks.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWujwdVg6QKarknaxtAzz3kNSgJnUnmQNFNIAysJMsHrKz5_GTNTG8HJ4uykjttUZPYRJI23WF0cQt1soI0IR_PSKfPKHt8TkNtpIsW0Ngtit-E93LRQ2IXzdIOiFGrQmTnVowSLYYmycSCRnudIO8euHBGlJybKK1UveDLz4eVeT-kmJh4gDIvEyN-yJStL5i9P5WjnLZ5aUKQwGE8Uo3jwya6uNUI_H0842TMg2oxwov4Ui12ks7de6K8EdnVLXBzD3svm-tLi4',
  },
  {
    name: 'James Thornton',
    title: 'Chief Operations Officer',
    bio: 'Over 15 years of experience in hospital administration and operational streamlining for large integrated health systems.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoycZIVIDxsLbzpvAXjLPWR27zXbAm1GK1pmfpMBql-LoV8qL1xHWOXhz03iig6Xs0tNWTc5I9O30nUjROJJFIOQYAAZeHMPpMdCPf00oQboIysqUb4Fk65_sDNVPisVkvtbMzTTd8shH9pbXYJdSrIlYp3D73j7I4IJzgxCSemzLeERPf_c1tyMk93WnXoa4wT8SMOYG55WGlhXDUBIdNHra3Wjn_U-75MqHcXF6ChsR9CJ5jTukgdb1YZBTF4azS47xLySuhdgw',
  },
];

const values = [
  {
    icon: 'shield',
    title: 'The Precision Standard',
    description: 'We apply clinical rigor to financial data. Every audit is a surgical examination of your revenue cycle, identifying inefficiencies with scientific accuracy.',
    dark: true,
    large: true,
  },
  {
    icon: 'groups',
    title: 'Collaborative Partners',
    description: "We don't just provide reports — we work alongside your administrative team to implement lasting, meaningful change.",
    dark: false,
    large: false,
  },
  {
    icon: 'visibility',
    title: 'Transparency',
    description: 'No hidden fees. No opaque processes. Just clear, actionable financial truth delivered in plain language.',
    dark: false,
    large: false,
  },
  {
    icon: 'lock',
    title: 'Security First',
    description: 'Enterprise-grade HIPAA compliance is the baseline of our entire technical and operational stack.',
    teal: true,
    large: false,
  },
];

const stats = [
  { end: 10, prefix: '',  suffix: '+',  label: 'Years of Experience' },
  { end: 20, prefix: '',  suffix: '+',  label: 'Active Clients'       },
  { end: 10, prefix: '$', suffix: 'M+', label: 'Revenue Optimized'    },
];

function CountUpStat({ end, prefix = '', suffix = '', inView }: { end: number; prefix?: string; suffix?: string; inView: boolean }) {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const duration = 2400;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-in-out quart
      const eased = progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;
      const current = eased * end;

      if (progress < 1) {
        setDisplay(current < 10 ? current.toFixed(1) : Math.floor(current).toString());
        requestAnimationFrame(tick);
      } else {
        setDisplay(end.toString());
      }
    };
    requestAnimationFrame(tick);
  }, [inView, end]);
  return <span className="tabular-nums">{prefix}{display}{suffix}</span>;
}

export default function AboutPage() {
  const teamRef = useInView();
  const valuesRef = useInView();
  const statsRef = useInView(0.3);

  return (
    <>
      <SEO
        title="About Us | Proxima Care Partners"
        description="Learn about Proxima Care Partners — our mission, leadership team, core values, and commitment to elevating healthcare finance with clinical precision and unwavering integrity."
        keywords="about Proxima Care Partners, healthcare billing company, medical billing team, RCM experts, HIPAA compliance company"
        canonical="https://www.proximacarepartners.com/about"
      />

      {/* Page Hero */}
      <section className="pt-36 pb-20 bg-[#030d1a] grid-texture glow-teal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-700/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="pill-teal mb-6 inline-flex">
                <span className="material-symbols-outlined text-[15px]">info</span>
                Our Mission
              </div>
              <h1
                className="font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(38px, 5vw, 56px)', letterSpacing: '-0.02em' }}
              >
                Elevating Healthcare Finance with Clinical Precision
              </h1>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-lg" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}>
                Proxima Care Partners bridges the gap between medical excellence and financial integrity, ensuring healthcare providers can focus on patient care while we optimize their revenue ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 font-bold hover:bg-teal-500 transition-all rounded-sm text-sm shadow-lg shadow-teal-900/50">
                  Request Free Audit
                </a>
                <a href="/services" className="inline-flex items-center gap-2 border border-white/10 bg-white/5 text-white px-8 py-4 font-bold hover:bg-white/10 hover:border-teal-500/30 transition-all rounded-sm text-sm">
                  Our Process
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 glass-card">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="High-tech financial analytics dashboard displaying revenue data"
                  className="w-full object-cover aspect-[4/3] opacity-90"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#051125] border border-teal-500/20 shadow-xl shadow-black/40 rounded-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-500/15 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-teal-400">verified</span>
                </div>
                <div>
                  <p className="font-bold text-white text-xl leading-none" style={{ fontFamily: 'Manrope, sans-serif' }}>100%</p>
                  <p className="text-slate-400 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>HIPAA Compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-14 bg-[#051125] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" ref={statsRef.ref}>
            {stats.map((s, i) => (
              <div key={i} className={`${i < stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}>
                <div
                  className={`font-bold text-teal-400 mb-2 tabular-nums transition-all duration-700 ${
                    statsRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '48px', letterSpacing: '-0.02em', transitionDelay: `${i * 120}ms` }}
                >
                  <CountUpStat end={s.end} prefix={s.prefix} suffix={s.suffix} inView={statsRef.inView} />
                </div>
                <p
                  className={`text-slate-400 text-sm font-semibold uppercase tracking-widest transition-all duration-700 ${
                    statsRef.inView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', transitionDelay: `${i * 120 + 200}ms` }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#030d1a] section-divider relative overflow-hidden" ref={teamRef.ref}>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${teamRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="pill-teal mb-5 inline-flex">
              <span className="material-symbols-outlined text-[15px]">groups</span>
              Our Team
            </div>
            <h2 className="font-bold text-white mb-4" style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(28px, 4vw, 36px)', letterSpacing: '-0.01em' }}>
              Strategic Leadership
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
              Guided by experts in both clinical administration and corporate finance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className={`group glass-card rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-500 ${
                  teamRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120 + 200}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#051125]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                </div>
                <div className="p-6 border-t border-white/5">
                  <h3 className="font-bold text-white mb-1" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px' }}>{member.name}</h3>
                  <p className="text-teal-400 font-bold text-xs uppercase tracking-wider mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>{member.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Enhanced */}
      <section className="py-28 bg-[#030d1a] relative overflow-hidden" ref={valuesRef.ref}>
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-600/5 rounded-full blur-3xl" />
          {/* Subtle grid lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${valuesRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/15 text-teal-400 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-teal-500/20">
              <span className="material-symbols-outlined text-[15px]">star</span>
              What We Stand For
            </div>
            <h2
              className="font-bold text-white mb-5"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}
            >
              Principles That Drive Every Decision
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}>
              Our values aren't wall art — they're the operating system behind every claim we file, every audit we run, and every dollar we recover for your practice.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: 'shield',
                title: 'Clinical Precision',
                desc: 'We apply the same rigor a surgeon uses in an OR to every revenue cycle audit — methodical, evidence-based, and zero-tolerance for error.',
                accent: 'teal',
                tag: '99% clean claim rate',
                delay: 100,
                large: false,
              },
              {
                icon: 'groups',
                title: 'True Partnership',
                desc: "We embed with your team, not just deliver reports. Our specialists work alongside your staff, transferring knowledge and building lasting operational improvements.",
                accent: 'blue',
                tag: 'Dedicated account team',
                delay: 180,
                large: false,
              },
              {
                icon: 'visibility',
                title: 'Radical Transparency',
                desc: 'No hidden fees. No black-box algorithms. Every recommendation, every adjustment, every dollar recovered is documented and explained in plain language.',
                accent: 'teal',
                tag: 'Real-time dashboards',
                delay: 260,
                large: false,
              },
              {
                icon: 'verified_user',
                title: 'Security by Design',
                desc: 'HIPAA compliance is not a checkbox for us — it is baked into every workflow, every tool, and every communication channel we operate.',
                accent: 'navy',
                tag: 'HIPAA · SOC 2 · AES-256',
                delay: 340,
                large: false,
                dark: true,
              },
              {
                icon: 'trending_up',
                title: 'Results Accountability',
                desc: "We tie our success to yours. Our KPIs are your KPIs — collection rate, days in AR, denial rate. If you don't grow, neither do we.",
                accent: 'teal',
                tag: '+15–25% avg. revenue lift',
                delay: 420,
                large: false,
              },
              {
                icon: 'autorenew',
                title: 'Continuous Improvement',
                desc: 'Healthcare billing rules change constantly. Our team trains weekly on payer updates, coding changes, and regulatory shifts so your practice is always ahead.',
                accent: 'blue',
                tag: 'Weekly payer updates',
                delay: 500,
                large: false,
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl p-7 border transition-all duration-700 cursor-default overflow-hidden
                  ${v.dark
                    ? 'bg-[#1b263b] border-white/10 hover:border-teal-500/40'
                    : 'bg-white/5 border-white/8 hover:bg-white/8 hover:border-teal-500/30'}
                  hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/30
                  ${valuesRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${v.delay}ms` }}
              >
                {/* Glow blob on hover */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-600/25 group-hover:border-teal-400/40 transition-all duration-300">
                  <span className="material-symbols-outlined text-[24px] text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                    {v.icon}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-white mb-3 group-hover:text-teal-50 transition-colors duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '19px' }}
                >
                  {v.title}
                </h3>

                {/* Description */}
                <p
                  className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}
                >
                  {v.desc}
                </p>

                {/* Tag / stat chip */}
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span
                    className="text-xs font-bold text-teal-400 uppercase tracking-widest"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {v.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom accent bar */}
          <div
            className={`mt-16 border border-white/8 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/4 transition-all duration-700 ${valuesRef.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="text-center md:text-left">
              <p className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Ready to experience these values firsthand?
              </p>
              <p className="text-slate-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Schedule a no-obligation 30-minute discovery call with our team.
              </p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3.5 font-bold text-sm hover:bg-teal-500 transition-all duration-200 rounded-xl shadow-lg hover:shadow-teal-900/50 group"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Schedule a Meeting
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
