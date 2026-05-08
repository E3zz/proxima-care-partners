import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Proxima Care Partners"
        description="The page you are looking for could not be found."
      />
      <section className="min-h-[80vh] flex items-center justify-center bg-[#030d1a] grid-texture glow-teal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="text-center px-6 relative z-10">
          <div className="pill-teal mb-6 inline-flex">
            <span className="material-symbols-outlined text-[15px]">error</span>
            Page Not Found
          </div>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(48px, 10vw, 120px)', letterSpacing: '-0.03em', lineHeight: '1' }}
          >
            404
          </h1>
          <p className="text-slate-400 mb-10 max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', lineHeight: '1.7' }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col min-[400px]:flex-row justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 font-bold hover:bg-teal-500 active:scale-95 transition-all duration-200 shadow-lg shadow-teal-900/50 rounded-lg text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">home</span>
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 text-white px-8 py-4 font-bold hover:bg-white/10 hover:border-teal-500/30 transition-all duration-200 rounded-lg text-sm"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
