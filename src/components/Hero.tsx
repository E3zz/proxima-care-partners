import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function CountUp({ end, suffix = '', prefix = '', duration = 2400 }: CountUpProps) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress < 0.5
        ? 8 * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 4) / 2;
      const current = eased * end;

      if (progress < 1) {
        setDisplay(current < 10 ? current.toFixed(1) : Math.floor(current).toString());
        requestAnimationFrame(step);
      } else {
        setDisplay(end.toString());
      }
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { value: 98, suffix: '%', label: 'Collection\nRate' },
  { value: 30, suffix: '%', label: 'Reduction in\nDenials' },
  { value: 20, suffix: '+', label: 'Clients\nServed' },
  { value: 15, suffix: '%', label: 'Avg. Revenue\nGrowth' },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-32 lg:pb-24 bg-[#030d1a] grid-texture glow-teal overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-700/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-600/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="z-10">
            {/* Badge */}
            <div className="animate-fade-in-up pill-teal mb-6">
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              HIPAA Compliant Partner
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up delay-100 font-bold text-white mb-6 leading-[1.1]"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(32px, 8vw, 58px)',
                letterSpacing: '-0.03em',
              }}
            >
              Maximizing Revenue,{' '}
              <br />
              <span className="text-shimmer">Minimizing Denials</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up delay-200 text-slate-400 mb-10 max-w-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', lineHeight: '1.7' }}
            >
              Empowering healthcare providers through precision billing and strategic revenue cycle management. We turn financial complexity into operational clarity, so you can focus on patient care.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-300 flex flex-col min-[400px]:flex-row gap-3 sm:gap-4 mb-14">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-4 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[15px] font-bold hover:bg-teal-500 active:scale-95 transition-all duration-200 shadow-xl shadow-teal-900/50 rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">phone</span>
                Give Us a Call
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-3 sm:px-8 sm:py-4 text-[13px] sm:text-[15px] font-bold hover:bg-white/10 hover:border-teal-500/30 transition-all duration-200 rounded-lg"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[16px] sm:text-[18px]">calendar_today</span>
                Schedule a Meeting
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-400 grid grid-cols-2 gap-6 md:flex md:flex-wrap md:gap-8 items-center">
              {stats.map((stat, i) => (
                <div key={i} className={`flex items-center gap-3 ${i > 0 ? 'md:pl-8 md:border-l md:border-white/10' : ''}`}>
                  <div>
                    <div
                      className="font-bold text-white leading-none"
                      style={{ fontFamily: 'Manrope, sans-serif', fontSize: '30px' }}
                    >
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div
                      className="text-teal-400 text-xs font-semibold uppercase tracking-wider mt-1"
                      style={{ fontFamily: 'Inter, sans-serif', whiteSpace: 'pre-line' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="animate-slide-in-right relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-700/8 rounded-full blur-3xl" />

            {/* Main image card */}
            <div className="relative border border-white/10 bg-white/4 backdrop-blur-sm p-3 shadow-2xl shadow-black/60 rounded-xl animate-float">
              <img
                className="w-full aspect-[4/3] object-cover rounded-lg opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwuTLaLDXgA6LzS2A86dPvf0lRVHB4pur2RNWgZPP--uJzuwisc_Mr_VpMG0AYdAWDzmV9LefVeB85zaUhYY9as-KZqDllBLELmKm8nOchTSHX-k7f5gzN04NwnBTN2PzXeIZDXmSOxOXFnlyQ0OHB84V-juHRDv7J-T_yhCl1y9zjs7gvL04R-6NVEoG_RfG4CJCK5AKP8ZE5bUXwFkH_-FErRzZJ9kkLmYiUBigbknNaCrHzOo4RJPnYDVYlAxMDovqU7Tv07so"
                alt="Professional hospital administrator working in a modern clinical office environment"
              />
              {/* Floating revenue badge */}
              <div className="absolute -bottom-5 -left-7 glass-card rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-xl shadow-black/40">
                <div className="w-11 h-11 bg-teal-500/15 border border-teal-500/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-teal-400 text-[22px]">trending_up</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>+$2.4M</div>
                  <div className="text-xs text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>Revenue recovered</div>
                </div>
              </div>
              {/* Certification badge */}
              <div className="absolute -top-4 -right-4 bg-[#051125] border border-teal-500/20 text-white rounded-xl px-4 py-2 text-center shadow-xl shadow-black/50">
                <div className="text-teal-400 font-bold text-xs uppercase tracking-widest">HIPAA</div>
                <div className="text-white font-bold text-sm leading-none">Certified</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
