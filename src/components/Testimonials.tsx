import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Medical Director, Apex Cardiology Group',
    avatar: 'SM',
    quote:
      'Proxima Care Partners transformed our billing operations. Within 6 months, our collection rate went from 84% to 97%. Their team is responsive, knowledgeable, and truly invested in our success.',
    rating: 5,
    stat: '+13% Collections',
  },
  {
    name: 'James Thornton',
    title: 'CFO, Regional Orthopedic Network',
    avatar: 'JT',
    quote:
      'We reduced our denial rate by 35% in the first quarter alone. The real-time analytics dashboard gives us visibility we never had before. I recommend Proxima to every healthcare executive I meet.',
    rating: 5,
    stat: '-35% Denials',
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Owner, Holistic Pediatric Care',
    avatar: 'PS',
    quote:
      'As a small practice, I was skeptical. But Proxima\'s team learned every nuance of pediatric billing and recovered over $180K in previously denied claims in year one. It was life-changing.',
    rating: 5,
    stat: '$180K Recovered',
  },
];


export default function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 bg-[#030d1a] section-divider relative" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="pill-teal mb-5 inline-flex">
            <span className="material-symbols-outlined text-[15px]">reviews</span>
            Client Success Stories
          </div>
          <h2
            className="font-bold text-white mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(30px, 4vw, 42px)', letterSpacing: '-0.02em' }}
          >
            Trusted by Leading Healthcare Providers
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
            Real results from real clients. See how Proxima Care Partners has transformed practices across the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card bento-card rounded-2xl p-8 flex flex-col relative overflow-hidden group transition-all duration-500 hover:border-teal-500/30 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-teal-500/20 transition-colors" />
              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="material-symbols-outlined text-amber-400 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-slate-300 leading-relaxed mb-6 flex-1 italic relative z-10"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', lineHeight: '1.8' }}
              >
                "{t.quote}"
              </blockquote>

              {/* Stat Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-500/10 border border-teal-500/15 text-teal-300 rounded-full text-xs font-bold mb-6 self-start relative z-10">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                {t.stat}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-teal-900/40">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>{t.name}</div>
                  <div className="text-slate-500 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
