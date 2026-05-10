import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function EmergencyContactPage() {
  return (
    <div className="pt-24 pb-20 relative min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Emergency Support | Proxima Care Partners</title>
        <meta name="description" content="24/7 Emergency support for critical revenue cycle and compliance issues." />
      </Helmet>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[800px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card bento-card rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Accent stripes top */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600" />
          
          <div className="w-24 h-24 bg-teal-500/10 border border-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <span className="material-symbols-outlined text-teal-400 text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              support_agent
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Rapid <span className="text-teal-400">Support Desk</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our specialized rapid-response team is available to handle urgent compliance reviews, denial surges, and priority revenue cycle inquiries.
          </p>

          <div className="inline-block bg-[#030d1a] border border-white/10 rounded-2xl p-8 mb-10 w-full max-w-md shadow-xl">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
              Direct Priority Line
            </p>
            <a 
              href="tel:+18005559111" 
              className="text-4xl md:text-5xl font-bold text-white tracking-wider hover:text-teal-400 transition-colors block mb-2"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              +1 (800) 555-9111
            </a>
            <p className="text-sm text-slate-400 mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Average wait time: <span className="text-emerald-400 font-bold">&lt; 2 minutes</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+18005559111" 
              className="bg-teal-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-teal-500 active:scale-[0.99] transition-all shadow-lg flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              Call Now
            </a>
            <Link 
              to="/contact" 
              className="bg-white/5 text-white border border-white/10 font-bold py-4 px-8 rounded-lg hover:bg-white/10 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Return to Standard Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
