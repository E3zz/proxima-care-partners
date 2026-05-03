import { useState } from 'react';
import { Link } from 'react-router-dom';


const sideItems = [
  { icon: 'analytics',      label: 'Request Free Audit',    href: '/contact', primary: true },
  { icon: 'calendar_today', label: 'Schedule a Meeting',    href: '/contact', primary: false },
  { icon: 'phone',          label: 'Call Us Now',           href: '/contact', primary: false },
];

export default function SideNav() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col rounded-r-xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out ${
        hovered ? 'w-56' : 'w-14'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Quick actions sidebar"
    >
      {sideItems.map((item, i) => (
        <Link
          key={i}
          to={item.href}
          className={`flex items-center h-14 px-4 transition-all duration-300 group ${
            item.primary
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'bg-[#1b263b] text-slate-300 hover:bg-teal-600 hover:text-white border-t border-slate-700'
          }`}
          aria-label={item.label}
        >
          <span className="material-symbols-outlined shrink-0 text-[22px] transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </span>
          <span
            className={`ml-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-500 ${
              hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </aside>
  );
}
