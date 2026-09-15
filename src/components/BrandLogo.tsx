import React from 'react';

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col select-none cursor-pointer group ${className}`}
      id="brand-logo"
    >
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-none">
        YADDE
      </span>
      <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-slate-400 uppercase leading-none mt-1 group-hover:text-cyan-400 transition-colors">
        TECHNOLOGIES
      </span>
    </div>
  );
};
