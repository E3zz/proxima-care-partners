import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

const footerLinks = {
  Solutions: [
    { label: 'Medical Billing & Coding', href: '/services' },
    { label: 'RCM Management', href: '/services' },
    { label: 'Denial Recovery', href: '/services' },
    { label: 'Credentialing', href: '/services' },
    { label: 'Audit Support', href: '/services' },
  ],
  Specialties: [
    { label: 'Cardiology', href: '/specialties' },
    { label: 'Orthopedics', href: '/specialties' },
    { label: 'Neurology', href: '/specialties' },
    { label: 'Behavioral Health', href: '/specialties' },
    { label: 'Oncology', href: '/specialties' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Compliance', href: '/about' },
    { label: 'Security', href: '/security' },
    { label: 'Support', href: '/contact' },
  ],
  Resources: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'HIPAA Policy', href: '/hipaa-policy' },
    { label: 'Billing FAQs', href: '/billing-faqs' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#051125] text-slate-400" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-1.5 group mb-5">
              <LogoIcon className="w-12 h-12 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-300" />
              <div className="flex flex-col">
                <div className="flex overflow-hidden items-center">
                  {"Proxima Care".split("").map((char, i) => {
                    const isCare = i >= 8;
                    return (
                      <span
                        key={i}
                        className={`text-white text-[22px] leading-none tracking-tight block letter-animate ${isCare ? 'font-light opacity-90 text-teal-50' : 'font-extrabold'}`}
                        style={{ 
                          fontFamily: 'var(--font-heading)',
                          animationName: `letter-fly-${(i % 4) + 1}`,
                          animationDelay: `${i * 40}ms`,
                          whiteSpace: char === " " ? "pre" : "normal"
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </div>
                <div className="flex overflow-hidden mt-1 gap-[3px]">
                  {"PARTNERS".split("").map((char, i) => (
                    <span
                      key={i}
                      className="text-teal-400 text-[10px] font-bold uppercase letter-animate"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        animationName: `letter-fly-${((i + 5) % 4) + 1}`,
                        animationDelay: `${(i + 12) * 30}ms`
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Leading the standard in medical billing excellence and revenue cycle integrity. HIPAA compliant, SOC 2 certified, and committed to maximizing your collections.
            </p>
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group/item">
                <span className="material-symbols-outlined text-teal-500 text-[20px] mt-0.5 group-hover/item:scale-110 transition-transform">location_on</span>
                <span className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  1500 N Grant ST STE 5472<br />Denver, CO
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-teal-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-teal-500 text-[18px]">mail</span>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>billing@proximacarepartners.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-teal-400 transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-teal-500 text-[18px]">phone</span>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>1-800-555-1234</span>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  label: 'LinkedIn',
                  href: '#',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                },
                {
                  label: 'Twitter / X',
                  href: '#',
                  path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z',
                },
                {
                  label: 'Facebook',
                  href: '#',
                  path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                },
                {
                  label: 'Instagram',
                  href: '#',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-teal-600/20 hover:border-teal-500/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-1">
              <h5
                className="text-white font-bold text-sm uppercase tracking-wider mb-5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {category}
              </h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors duration-200"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} Proxima Care Partners. All rights reserved. HIPAA Compliant &amp; SOC 2 Certified.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: 'verified_user', label: 'HIPAA' },
              { icon: 'lock', label: 'SOC 2' },
              { icon: 'workspace_premium', label: 'CPC' },
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-1 text-xs text-slate-500">
                <span className="material-symbols-outlined text-[14px] text-teal-600">{cert.icon}</span>
                <span style={{ fontFamily: 'Manrope, sans-serif' }}>{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
