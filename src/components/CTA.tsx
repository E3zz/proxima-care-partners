import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
interface CTAProps {
  pillText?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function CTA({ 
  pillText = "Don't Know Where To Start?",
  title = <>Give Us a Call or <br /><span className="text-shimmer">Schedule a Meeting</span></>,
  description = "Not sure where to start? Our billing specialists will assess your current workflow, identify revenue gaps, and walk you through a tailored plan - at no cost and no commitment."
}: CTAProps) {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-24 bg-[#030d1a] section-divider" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div
          className={`relative bg-gradient-to-br from-[#0d1f3c] via-[#051125] to-[#030d1a] border border-teal-500/15 rounded-2xl overflow-hidden p-8 lg:p-20 text-center transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-400/8 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-600/4 rounded-full blur-[80px]" />
            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="pill-teal mb-8 inline-flex">
              <span className="material-symbols-outlined text-[15px]">calendar_today</span>
              {pillText}
            </div>

            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(32px, 5vw, 54px)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              {title}
            </h2>

            <p
              className="text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}
            >
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col min-[400px]:flex-row justify-center gap-3 sm:gap-4 mb-14">
              <a
                href="tel:+18005551234"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-3 sm:px-10 sm:py-5 text-[13px] sm:text-base font-bold hover:bg-teal-500 active:scale-95 transition-all duration-200 shadow-2xl shadow-teal-900/60 rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[20px]">phone</span>
                Give Us a Call
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/6 backdrop-blur-sm border border-white/12 text-white px-4 py-3 sm:px-10 sm:py-5 text-[13px] sm:text-base font-bold hover:bg-white/12 hover:border-teal-500/30 active:scale-95 transition-all duration-200 rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[20px]">calendar_today</span>
                Schedule a Meeting
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500">
              {[
                { icon: 'verified_user', label: 'HIPAA Compliant' },
                { icon: 'lock', label: 'SOC 2 Certified' },
                { icon: 'schedule', label: 'Response in 24h' },
                { icon: 'attach_money', label: 'No Setup Fees' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="material-symbols-outlined text-[18px] text-teal-500">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
