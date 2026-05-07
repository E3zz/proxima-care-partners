import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'account_balance_wallet',
    title: 'End-to-End Revenue Cycle Management',
    description:
      'Comprehensive oversight of your entire financial ecosystem - from patient registration and eligibility verification through charge capture, claims submission, payment posting, and final reconciliation. Our dedicated RCM specialists become an extension of your team, delivering measurable results from day one.',
    features: ['Eligibility Verification', 'Charge Capture', 'Payment Posting', 'AR Follow-Up'],
    span: 'md:col-span-2',
    accent: true,
    learnMore: 'Learn more about RCM',
  },
  {
    icon: 'fact_check',
    title: 'Claims Scrubbing & Clean Claims',
    description:
      'Our AI-assisted pre-submission audits catch errors before they become denials. We achieve a 99% clean claim rate on first submission, dramatically reducing your payer turnaround time and accelerating cash flow.',
    features: ['99% Clean Claim Rate', 'Pre-Submission Audits', 'Real-Time Error Flags'],
    span: '',
    accent: false,
    learnMore: '',
  },
  {
    icon: 'gavel',
    title: 'Denial Management & Appeals',
    description:
      'Our specialized appeals team aggressively fights for every dollar owed. We analyze denial patterns, build targeted appeal strategies, and submit compelling medical necessity arguments to overturn unjust decisions.',
    features: ['Root Cause Analysis', 'Complex Appeals', 'Payer Negotiations'],
    span: '',
    accent: false,
    learnMore: '',
  },
  {
    icon: 'monitoring',
    title: 'Advanced Analytics & Real-Time Reporting',
    description:
      'Gain instant, actionable insights into your practice\'s financial health. Custom KPI dashboards, payer performance benchmarking, and trend analysis give you the data to make confident strategic decisions.',
    features: ['Custom KPI Dashboards', 'Payer Benchmarking', 'Revenue Forecasting', 'Weekly Reports'],
    span: 'md:col-span-2',
    accent: false,
    dark: true,
    learnMore: 'View Demo Report',
  },
  {
    icon: 'local_hospital',
    title: 'Credentialing & Enrollment',
    description:
      'Streamlined provider enrollment and payer credentialing services to ensure your physicians are always in-network and billing-ready. We handle the complexity so your staff can focus on clinical care.',
    features: ['Provider Enrollment', 'CAQH Maintenance', 'In-Network Setup'],
    span: '',
    accent: false,
    learnMore: '',
  },
];

function useInView(threshold = 0.02) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold, rootMargin: '50px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ServicesBento() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-28 bg-[#051125] grid-texture relative section-divider" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-teal-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="pill-teal mb-5">
            <span className="material-symbols-outlined text-[15px]">medical_services</span>
            What We Offer
          </div>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}
          >
            Services at a Glance
          </h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
            Tailored revenue cycle solutions engineered to integrate seamlessly with your clinical workflow, reduce administrative burden, and maximize financial performance across every payer type.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bento-card rounded-xl ${service.span || ''} bg-white/4 border border-white/8 hover:bg-white/8 hover:border-teal-500/30 p-8 flex flex-col transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 90 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-6 bg-white/8 border border-white/10"
                style={{ width: '52px', height: '52px' }}
              >
                <span className="material-symbols-outlined text-[26px] text-teal-400">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-3 text-white"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '19px', lineHeight: '1.4' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6 leading-relaxed flex-1 text-slate-400"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: '1.8' }}
              >
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.features.map((f, j) => (
                  <span
                    key={j}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/15"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              {service.learnMore && (
                <div className="flex items-center gap-1.5 text-sm font-semibold group cursor-pointer text-teal-400 hover:text-teal-300 transition-colors">
                  <span>{service.learnMore}</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`mt-14 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '700ms' }}
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-4 py-3 sm:px-10 sm:py-4 font-bold hover:bg-white/10 hover:border-teal-500/30 transition-all duration-300 rounded-lg text-[13px] sm:text-sm group"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View All Services
            <span className="material-symbols-outlined text-[16px] sm:text-[18px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
