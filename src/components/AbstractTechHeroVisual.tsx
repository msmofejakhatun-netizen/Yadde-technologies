import React from 'react';

export const AbstractTechHeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-4/3 rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl"
      id="abstract-tech-visual"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#6366f1 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* Top Header Bar inside card */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="text-[11px] font-mono text-slate-400 ml-2">
            yadde.software.runtime
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
          Active Build
        </span>
      </div>

      {/* Central Abstract Software Architecture Diagram */}
      <div className="relative z-10 my-auto py-4">
        <svg
          viewBox="0 0 400 180"
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connection Lines */}
          <path
            d="M 80 90 L 200 45 L 320 90"
            stroke="#334155"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 80 90 L 200 135 L 320 90"
            stroke="#334155"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 200 45 L 200 135"
            stroke="#1e293b"
            strokeWidth="1.5"
          />

          {/* Node 1: Multiplatform Apps */}
          <g transform="translate(40, 65)">
            <rect
              width="80"
              height="50"
              rx="8"
              fill="#0f172a"
              stroke="#2563eb"
              strokeWidth="1.5"
            />
            <text
              x="40"
              y="23"
              fill="#93c5fd"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Apps
            </text>
            <text
              x="40"
              y="38"
              fill="#64748b"
              fontSize="9"
              textAnchor="middle"
              fontFamily="monospace"
            >
              Android / Web
            </text>
          </g>

          {/* Node 2: Core Logic / Products */}
          <g transform="translate(155, 20)">
            <rect
              width="90"
              height="50"
              rx="8"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <text
              x="45"
              y="23"
              fill="#e0f2fe"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Products
            </text>
            <text
              x="45"
              y="38"
              fill="#64748b"
              fontSize="9"
              textAnchor="middle"
              fontFamily="monospace"
            >
              First-Party
            </text>
          </g>

          {/* Node 3: Sync & Storage */}
          <g transform="translate(155, 110)">
            <rect
              width="90"
              height="50"
              rx="8"
              fill="#0f172a"
              stroke="#6366f1"
              strokeWidth="1.5"
            />
            <text
              x="45"
              y="23"
              fill="#c7d2fe"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Sync &amp; Data
            </text>
            <text
              x="45"
              y="38"
              fill="#64748b"
              fontSize="9"
              textAnchor="middle"
              fontFamily="monospace"
            >
              Reliable State
            </text>
          </g>

          {/* Node 4: Users / Business Utility */}
          <g transform="translate(280, 65)">
            <rect
              width="80"
              height="50"
              rx="8"
              fill="#0f172a"
              stroke="#0ea5e9"
              strokeWidth="1.5"
            />
            <text
              x="40"
              y="23"
              fill="#bae6fd"
              fontSize="10"
              fontWeight="600"
              textAnchor="middle"
              fontFamily="sans-serif"
            >
              Utility
            </text>
            <text
              x="40"
              y="38"
              fill="#64748b"
              fontSize="9"
              textAnchor="middle"
              fontFamily="monospace"
            >
              Everyday Use
            </text>
          </g>
        </svg>
      </div>

      {/* Card Bottom Information */}
      <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Yadde Software Architecture
        </span>
        <span className="text-slate-400">First-Party Apps</span>
      </div>
    </div>
  );
};
