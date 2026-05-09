import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Medical Cross & Stethoscope Icon */}
      <div className="relative w-12 h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]">
          <defs>
            <clipPath id="cross-shape">
              <path d="M 40 15 h 20 v 25 h 25 v 20 h -25 v 25 h -20 v -25 h -25 v -20 h 25 z" />
            </clipPath>
            <mask id="swoop-cut">
              <rect width="100" height="100" fill="white" />
              {/* Crescent cuts through the cross */}
              <path d="M 5 85 C 35 85, 45 55, 75 15" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d="M 20 95 C 50 95, 60 65, 90 25" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
            </mask>
          </defs>
          
          {/* Stylish Split Cross */}
          <g mask="url(#swoop-cut)" className="transition-all duration-500 group-hover:opacity-90">
            <rect width="100" height="100" fill="#0f766e" clipPath="url(#cross-shape)" />
            {/* Bottom-right light teal half */}
            <polygon points="100,0 100,100 0,100" fill="#2dd4bf" clipPath="url(#cross-shape)" />
          </g>
          
          {/* Stethoscope Ribbons cutting through */}
          <path d="M 5 85 C 35 85, 45 55, 75 15" stroke="#0f766e" strokeWidth="3" fill="none" strokeLinecap="round" className="opacity-80" />
          <path d="M 20 95 C 50 95, 60 65, 90 25" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Stethoscope Path - Outer loop */}
          <path 
            d="M 20 95 C 30 115, 90 100, 95 60 C 100 15, 60 5, 50 35 C 45 50, 60 60, 70 55" 
            fill="none" 
            stroke="#14b8a6" 
            strokeWidth="3" 
            strokeLinecap="round" 
            className="transition-all duration-500 group-hover:stroke-teal-300"
          />
          {/* Stethoscope Chestpiece */}
          <circle cx="72" cy="53" r="6" stroke="#14b8a6" strokeWidth="2.5" fill="#030d1a" className="group-hover:stroke-teal-300 transition-colors duration-500" />
          <circle cx="72" cy="53" r="2.5" fill="#14b8a6" className="group-hover:fill-teal-300 transition-colors duration-500" />
        </svg>
      </div>

      {/* Text & Hearts */}
      <div className="flex flex-col justify-center pt-[20px]">
        {/* Single Line Text */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-white tracking-widest whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: '1' }}>
            PROXIMA CARE
          </span>
          <span className="text-teal-400 font-bold uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: '1' }}>
            PARTNERS
          </span>
        </div>
        
        {/* Hearts & EKG (Bigger) */}
        <div className="flex items-center gap-1.5 mt-2 pl-0.5 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          {/* Heart 1 */}
          <div className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="#0f766e" className="w-full h-full group-hover:fill-teal-500 transition-colors">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {/* Shine */}
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]"></div>
          </div>
          
          {/* EKG Line */}
          <svg width="34" height="14" viewBox="0 0 40 20" fill="none" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80 group-hover:opacity-100 group-hover:stroke-teal-300 transition-colors">
            <polyline points="0,10 12,10 16,3 22,17 26,10 40,10" className="animate-[dash_3s_linear_infinite]" style={{ strokeDasharray: '100', strokeDashoffset: '0' }} />
          </svg>
          
          {/* Heart 2 */}
          <div className="relative w-4 h-4 group-hover:scale-110 transition-transform duration-300 delay-100">
            <svg viewBox="0 0 24 24" fill="#0f766e" className="w-full h-full group-hover:fill-teal-500 transition-colors">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {/* Shine */}
            <div className="absolute top-0.5 left-1 w-1 h-1 bg-white/40 rounded-full blur-[0.5px]"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
