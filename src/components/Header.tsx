import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Specialties', to: '/specialties' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030d1a]/95 backdrop-blur-xl shadow-2xl shadow-black/50 border-b border-white/8'
          : 'bg-[#030d1a]/70 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-900/50 group-hover:shadow-teal-500/30 transition-shadow duration-300">
            <span className="text-white font-bold text-lg" style={{ fontFamily: 'Manrope, sans-serif' }}>P</span>
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-none tracking-tight block" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Proxima Care
            </span>
            <div className="text-teal-400 text-xs font-semibold tracking-widest uppercase mt-0.5">Partners</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-tight transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? 'text-teal-400 after:!w-full'
                    : 'text-slate-300 hover:text-white'
                }`
              }
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:border-teal-500/40 hover:text-teal-300 transition-all duration-200 rounded-lg"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Schedule a Meeting
          </Link>
          <Link
            to="/contact"
            className="hidden sm:flex bg-teal-600 text-white px-6 py-2.5 text-sm font-bold hover:bg-teal-500 active:scale-95 transition-all duration-200 shadow-lg shadow-teal-900/50 rounded-lg whitespace-nowrap"
          >
            Contact Us
          </Link>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 -mr-1.5 text-slate-300 hover:text-white transition-colors shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined text-[28px]">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-t border-white/8' : 'max-h-0'
        } bg-[#030d1a]/98 backdrop-blur-xl`}
      >
        <nav className="px-6 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold py-1 transition-colors ${isActive ? 'text-teal-400' : 'text-slate-300 hover:text-teal-300'}`
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 pt-4 border-t border-white/8">
            <Link
              to="/contact"
              className="flex-1 flex items-center justify-center gap-1.5 border border-white/10 bg-white/5 py-2 text-sm font-semibold text-slate-300 rounded-lg hover:border-teal-500/40 hover:text-teal-300 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <span className="material-symbols-outlined text-[15px]">calendar_today</span>
              Schedule
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-teal-600 text-white py-2 text-sm font-bold text-center rounded-lg hover:bg-teal-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
