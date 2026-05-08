import { Link } from 'react-router-dom';

/**
 * Floating vertical tabs on viewport edges (Hawk Revenue Group style).
 * - LEFT:  "Request Free Audit" tab
 * - RIGHT: "Schedule a Meeting" + "Call Us Now" tabs with gap
 * Responsive scaling for smaller devices.
 */
export default function SideNav() {
  return (
    <>
      {/* ── Left Edge Tab ────────────────────────────────── */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <Link
          to="/contact"
          className="btn-shine block bg-teal-600/90 hover:bg-teal-500 backdrop-blur-md border border-teal-400/30 hover:border-teal-300/60 border-l-0 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-wider px-1.5 md:px-2 py-3 md:py-4 rounded-r-md shadow-[0_0_15px_rgba(13,148,136,0.2)] hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] transition-all duration-300 whitespace-nowrap hover:translate-x-1 hover:scale-[1.02]"
          style={{ writingMode: 'vertical-rl', fontFamily: 'Manrope, sans-serif' }}
          aria-label="Request Free Audit"
        >
          Request Free Audit
        </Link>
      </div>

      {/* ── Right Edge Tabs ──────────────────────────────── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-8">
        <Link
          to="/contact"
          className="btn-shine block bg-teal-600/90 hover:bg-teal-500 backdrop-blur-md border border-teal-400/30 hover:border-teal-300/60 border-r-0 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-wider px-1.5 md:px-2 py-3 md:py-4 rounded-l-md shadow-[0_0_15px_rgba(13,148,136,0.2)] hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] transition-all duration-300 whitespace-nowrap hover:-translate-x-1 hover:scale-[1.02]"
          style={{ writingMode: 'vertical-rl', fontFamily: 'Manrope, sans-serif' }}
          aria-label="Schedule a Meeting"
        >
          Schedule a Meeting
        </Link>
        <Link
          to="/contact"
          className="btn-shine block bg-teal-600/90 hover:bg-teal-500 backdrop-blur-md border border-teal-400/30 hover:border-teal-300/60 border-r-0 text-white font-bold text-[9px] md:text-[10px] uppercase tracking-wider px-1.5 md:px-2 py-3 md:py-4 rounded-l-md shadow-[0_0_15px_rgba(13,148,136,0.2)] hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] transition-all duration-300 whitespace-nowrap hover:-translate-x-1 hover:scale-[1.02]"
          style={{ writingMode: 'vertical-rl', fontFamily: 'Manrope, sans-serif' }}
          aria-label="Call Us Now"
        >
          Call Us Now
        </Link>
      </div>
    </>
  );
}
