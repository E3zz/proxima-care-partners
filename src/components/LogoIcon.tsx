

export default function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={`logo-container ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" /> {/* teal-400 */}
          <stop offset="100%" stopColor="#0f766e" /> {/* teal-700 */}
        </linearGradient>
        <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" /> {/* slate-50 */}
          <stop offset="100%" stopColor="#94a3b8" /> {/* slate-400 */}
        </linearGradient>
      </defs>

      {/* The Letter 'P' - Main Focal Point */}
      <path
        className="draw-p"
        d="M 38 18 L 38 85 M 38 18 L 60 18 C 82 18 82 55 60 55 L 38 55"
        stroke="url(#tealGrad)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
      />

      {/* The Stethoscope - Subtle Secondary Element */}
      <g strokeLinecap="round" strokeLinejoin="round">

        {/* Floating Earpieces - Scaled down and positioned */}
        <g className="hover-float" transform="scale(0.7) translate(25, -2)">
          <circle cx="20" cy="18" r="4" fill="url(#slateGrad)" stroke="none" />
          <circle cx="60" cy="18" r="4" fill="url(#slateGrad)" stroke="none" />
          <path
            d="M 20 22 C 20 40 60 40 60 22"
            stroke="url(#slateGrad)"
            strokeWidth="3"
            className="draw-earpieces"
            pathLength="100"
          />
        </g>

        {/* Y-connector */}
        <circle cx="28" cy="22" r="2" fill="url(#slateGrad)" stroke="none" className="fade-in-delayed" />

        {/* Main Base Tube - Thin and wraps cleanly around */}
        <path
          className="steth-tube"
          d="M 28 22 C 28 35 15 40 15 55 C 15 75 25 94 60 92 C 85 90 92 70 80 58"
          stroke="url(#slateGrad)"
          strokeWidth="2"
          pathLength="100"
          opacity="0.6"
        />

        {/* Glowing Energy Pulse */}
        <path
          className="energy-pulse"
          d="M 28 22 C 28 35 15 40 15 55 C 15 75 25 94 60 92 C 85 90 92 70 80 58"
          stroke="#5eead4" /* bright teal */
          strokeWidth="2"
          pathLength="100"
        />

        {/* Heartbeat Chest Piece */}
        <g className="pulse-heart">
          <circle cx="80" cy="58" r="5" stroke="url(#slateGrad)" strokeWidth="2" fill="#030d1a" />
          <circle cx="80" cy="58" r="1.5" fill="#5eead4" stroke="none" className="pulse-inner-glow" />
        </g>
      </g>
    </svg>
  );
}
