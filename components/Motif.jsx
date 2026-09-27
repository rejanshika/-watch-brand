// Original decorative SVG artwork (no external images) — themed per section.
// Rich gold gradients + gentle motion for a premium, framed look.
export default function Motif({ variant = "sun", className = "" }) {
  if (variant === "rings") {
    return (
      <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="rg-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9c8fe4" />
            <stop offset="0.5" stopColor="#4358bd" />
            <stop offset="1" stopColor="#1d2a66" />
          </linearGradient>
          <radialGradient id="rg-sweep" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#7c6ad8" stopOpacity="0.55" />
            <stop offset="1" stopColor="#7c6ad8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* concentric rings */}
        {[188, 150, 112, 74, 36].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="url(#rg-gold)"
            strokeWidth={i === 1 ? 1.6 : 1}
            strokeOpacity={0.85 - i * 0.12}
          />
        ))}

        {/* rotating radar sweep */}
        <g className="spin-sweep">
          <path d="M200 200 L200 12 A188 188 0 0 1 360 118 Z" fill="url(#rg-sweep)" />
          <line x1="200" y1="200" x2="200" y2="12" stroke="url(#rg-gold)" strokeWidth="1.5" />
        </g>

        {/* fine ticks */}
        {Array.from({ length: 72 }).map((_, i) => {
          const a = (i / 72) * Math.PI * 2;
          const r2 = i % 6 === 0 ? 172 : 182;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 188}
              y1={200 + Math.sin(a) * 188}
              x2={200 + Math.cos(a) * r2}
              y2={200 + Math.sin(a) * r2}
              stroke="url(#rg-gold)"
              strokeWidth="1"
              strokeOpacity="0.7"
            />
          );
        })}

        {/* blips */}
        <circle cx="286" cy="150" r="3.5" fill="#7c6ad8" />
        <circle cx="132" cy="250" r="2.5" fill="#7c6ad8" fillOpacity="0.7" />
        <circle cx="238" cy="286" r="2.5" fill="#7c6ad8" fillOpacity="0.6" />

        <line x1="200" y1="8" x2="200" y2="392" stroke="url(#rg-gold)" strokeWidth="0.5" strokeOpacity="0.25" />
        <line x1="8" y1="200" x2="392" y2="200" stroke="url(#rg-gold)" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="5" fill="url(#rg-gold)" />
      </svg>
    );
  }

  // "sun" — Konark-style radiating burst + guilloché + spoked medallion
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="sn-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9c8fe4" />
          <stop offset="0.5" stopColor="#4358bd" />
          <stop offset="1" stopColor="#1d2a66" />
        </linearGradient>
        <radialGradient id="sn-core" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#9c8fe4" />
          <stop offset="1" stopColor="#4358bd" />
        </radialGradient>
      </defs>

      {/* long/short sunrays (slow spin) */}
      <g className="spin-slow">
        {Array.from({ length: 120 }).map((_, i) => {
          const a = (i / 120) * Math.PI * 2;
          const inner = 70;
          const outer = i % 2 === 0 ? 196 : 158;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * inner}
              y1={200 + Math.sin(a) * inner}
              x2={200 + Math.cos(a) * outer}
              y2={200 + Math.sin(a) * outer}
              stroke="url(#sn-gold)"
              strokeWidth={i % 2 === 0 ? 1.4 : 0.8}
              strokeLinecap="round"
              strokeOpacity={i % 2 === 0 ? 0.8 : 0.4}
            />
          );
        })}
      </g>

      {/* guilloché rings */}
      {[70, 58].map((r) => (
        <circle key={r} cx="200" cy="200" r={r} stroke="url(#sn-gold)" strokeWidth="1.2" strokeOpacity="0.8" />
      ))}

      {/* spoked medallion (reverse spin) */}
      <g className="spin-rev">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 14}
              y1={200 + Math.sin(a) * 14}
              x2={200 + Math.cos(a) * 52}
              y2={200 + Math.sin(a) * 52}
              stroke="url(#sn-gold)"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          );
        })}
        <circle cx="200" cy="200" r="52" stroke="url(#sn-gold)" strokeWidth="1" strokeOpacity="0.5" />
      </g>

      <circle cx="200" cy="200" r="14" fill="url(#sn-core)" />
    </svg>
  );
}
