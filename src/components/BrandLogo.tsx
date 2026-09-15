import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-11 sm:h-11',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
  };

  return (
    <div className="flex items-center gap-2.5 select-none" id="brand-logo-container">
      {/* Geometric Clean Technology Monogram Icon */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg border shadow-2xs shrink-0 ${
          isLight
            ? 'bg-slate-900/80 border-slate-700/80 text-cyan-400'
            : 'bg-slate-950 border-slate-800 text-cyan-400'
        }`}
      >
        <svg
          viewBox="0 0 36 36"
          className="w-5/6 h-5/6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Stylized Y Monogram with Clean Vertex Terminals */}
          <path
            d="M9 9L18 20L27 9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 20V27"
            stroke={isLight ? '#38bdf8' : '#2563eb'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="2" fill="currentColor" />
          <circle cx="27" cy="9" r="2" fill="currentColor" />
          <circle cx="18" cy="27" r="2" fill={isLight ? '#38bdf8' : '#2563eb'} />
        </svg>
      </div>

      {/* Brand Name & Subtitle Typography */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-extrabold tracking-tight font-sans ${textSizes[size]} ${
            isLight ? 'text-white' : 'text-slate-950'
          }`}
        >
          YADDE{' '}
          <span className={isLight ? 'text-cyan-400' : 'text-blue-600'}>
            TECHNOLOGIES
          </span>
        </span>
        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold font-mono ${
              isLight ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            SOFTWARE &amp; DIGITAL SOLUTIONS
          </span>
        )}
      </div>
    </div>
  );
};
