"use client";

import { useState } from "react";

export default function StoryInfographics() {
  const [selectedPrahar, setSelectedPrahar] = useState(2); // 0 to 7 (8 Prahars of the day)
  const [activeVictory, setActiveVictory] = useState(0);

  const prahars = [
    {
      num: "01",
      name: "Brahma / Prathama Prahar",
      time: "06:00 AM – 09:00 AM",
      concept: "The Awakening Sun",
      sunAngle: 30,
      shadowSpoke: 2,
      shadowLength: 85,
      significance: "The first rays of sunlight illuminate the eastern entrance of Konark. Shadows are elongated towards the west.",
      arkaConnection: "Reflected in the golden warm sunburst tones of 'Golden Hour'.",
    },
    {
      num: "02",
      name: "Dvitiya Prahar",
      time: "09:00 AM – 12:00 PM",
      concept: "The Ascending Light",
      sunAngle: 70,
      shadowSpoke: 5,
      shadowLength: 50,
      significance: "The sun climbs into the high sky. The shadow shortens as it traverses the intermediate carven spokes.",
      arkaConnection: "Expressed in the crisp clarity and brushed steel of 'Cloud Nine'.",
    },
    {
      num: "03",
      name: "Tritiya Prahar (Madhyahna)",
      time: "12:00 PM – 03:00 PM",
      concept: "The Zenith Meridian",
      sunAngle: 90,
      shadowSpoke: 6,
      shadowLength: 20,
      significance: "Solar Noon. The central gnomon casts the shortest shadow directly onto the upper axial spoke of the 24-spoke wheel.",
      arkaConnection: "Captures the high-contrast brilliance of 'White Noise'.",
    },
    {
      num: "04",
      name: "Chaturtha Prahar (Aparahna)",
      time: "03:00 PM – 06:00 PM",
      concept: "The Amber Descent",
      sunAngle: 140,
      shadowSpoke: 9,
      shadowLength: 75,
      significance: "The sun shifts westward; long amber shadows stretch across the temple stone towards the eastern ocean.",
      arkaConnection: "The deep twilight and mood of 'After Hours'.",
    },
    {
      num: "05",
      name: "Sayahna / Sandhya Prahar",
      time: "06:00 PM – 09:00 PM",
      concept: "The Twilight Transition",
      sunAngle: 190,
      shadowSpoke: 13,
      shadowLength: 95,
      significance: "The transition from day to night. Shadows dissolve into the cooling coastal air of Odisha.",
      arkaConnection: "The moody, reflective atmosphere of 'Rain Check'.",
    },
  ];

  const victories = [
    {
      year: "1983",
      venue: "Lord's Cricket Ground, London",
      opponent: "West Indies (183 vs 140)",
      headline: "The Night We First Learnt to Believe",
      colors: ["#1B365D", "#FFFFFF", "#C5A880"],
      colorLabels: "Prudential Navy · Heritage White · Gold Crest",
      telemetry: "Captained by Kapil Dev · 43-run historic triumph that altered world sport forever.",
      horologyNote: "Deep navy dial with pure white hour indices and a champagne-gold second hand.",
    },
    {
      year: "2007",
      venue: "Wanderers Stadium, Johannesburg",
      opponent: "Pakistan (157/5 vs 152)",
      headline: "A New Kind of Swagger",
      colors: ["#0085CA", "#FFD100", "#FFFFFF"],
      colorLabels: "Electric Cerulean · Bold Yellow · Silver Track",
      telemetry: "Joginder Sharma to Misbah-ul-Haq · Final over scoop caught by Sreesanth at short fine-leg.",
      horologyNote: "Cerulean blue textured dial with striking yellow accents at the 5-minute indicators.",
    },
    {
      year: "2011",
      venue: "Wankhede Stadium, Mumbai",
      opponent: "Sri Lanka (277/4 vs 274/6)",
      headline: "The Night the Wait Finally Ended",
      colors: ["#004B87", "#FF671F", "#D4AF37"],
      colorLabels: "Wankhede Royal Blue · Saffron Flame · World Champion Gold",
      telemetry: "MS Dhoni hits a massive 6 into the Mumbai night sky · 28 years of longing fulfilled.",
      horologyNote: "Midnight blue sunray dial crowned with flame-orange small-seconds and gold chapter ring.",
    },
    {
      year: "2024",
      venue: "Kensington Oval, Bridgetown, Barbados",
      opponent: "South Africa (176/7 vs 169/8)",
      headline: "The Night India Exhaled",
      colors: ["#0D2040", "#FF6B00", "#10B981"],
      colorLabels: "Caribbean Deep Blue · Solar Orange · Victory Emerald",
      telemetry: "Suryakumar Yadav boundary catch · Bumrah 2/18 spell · 7-run thriller in Barbados.",
      horologyNote: "Matte navy carbon-fiber dial with vivid orange bezel accents and luminescent markers.",
    },
    {
      year: "2026",
      venue: "Home Soil Champions Arena",
      opponent: "The World Stage",
      headline: "The Night Victory Became Legacy",
      colors: ["#081225", "#38BDF8", "#E6CA92"],
      colorLabels: "Obsidian Blue · Sky Cyan · Luminescent Platinum",
      telemetry: "The modern era of cricket supremacy · Precision, fearlessness and generational dominance.",
      horologyNote: "Dual-layer skeleton dial with diamond-cut steel hands and blue sapphire exhibition back.",
    },
  ];

  const currentPrahar = prahars[selectedPrahar] || prahars[0];
  const currentVictory = victories[activeVictory];

  return (
    <div className="bg-ink text-chalk">
      {/* ─── INFOGRAPHIC 01: 01.09.1947 MERIDIAN & TIMEZONE UNIFICATION ─── */}
      <section className="border-t border-white/10 bg-black/70 py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Telemetry & Narrative */}
            <div className="lg:col-span-6">
              <span className="eyebrow text-accent">The 82.5° East Meridian</span>
              <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl text-chalk">
                01.09.1947 <br />
                <span className="display-italic text-accent">One Nation, One Time</span>
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-graphite">
                Before September 1, 1947, India operated on disjointed colonial time zones: Bombay Time, Calcutta Time, and Madras Time. A traveller from Gujarat to Assam experienced nearly two hours of solar discrepancy.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-graphite">
                On the dawn of 1 September 1947, independent India unified the country under <span className="text-chalk font-semibold">Indian Standard Time (IST)</span>, anchored precisely to the <span className="text-accent font-semibold">82°30' E Longitude</span> passing through Mirzapur (Shankargarh Fort), Uttar Pradesh.
              </p>

              {/* Meridian Coordinates & Telemetry */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate">Standard Meridian</span>
                  <span className="mono mt-1 block text-lg font-bold text-accent">82.5° E</span>
                  <span className="mono text-[10px] text-graphite">Mirzapur, UP</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate">Global Offset</span>
                  <span className="mono mt-1 block text-lg font-bold text-chalk">UTC +5:30</span>
                  <span className="mono text-[10px] text-graphite">Exact 5.5 Hrs Ahead</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 col-span-2 sm:col-span-1">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate">Solar Span</span>
                  <span className="mono mt-1 block text-lg font-bold text-accent">116 Mins</span>
                  <span className="mono text-[10px] text-graphite">East-to-West Span</span>
                </div>
              </div>
            </div>

            {/* Right: Map & Meridian Visual Schematic */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_50%_50%,#1a1510,#080706_85%)] p-6 sm:p-8">
                {/* SVG Meridian Map Infographic */}
                <div className="relative flex h-full w-full items-center justify-center">
                  <svg viewBox="0 0 400 400" className="h-full w-full max-h-[380px] max-w-[380px]">
                    <defs>
                      <linearGradient id="meridianGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                        <stop offset="40%" stopColor="#d4af37" stopOpacity="1" />
                        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Graticule Latitude & Longitude grid lines */}
                    {[80, 140, 200, 260, 320].map((y) => (
                      <line key={`lat-${y}`} x1="30" y1={y} x2="370" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    ))}
                    {[90, 150, 210, 270, 330].map((x) => (
                      <line key={`lon-${x}`} x1={x} y1="30" x2={x} y2="370" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
                    ))}

                    {/* Simplified Geometric India Outline */}
                    <path
                      d="M 180 50 
                         L 205 70 
                         L 225 110 
                         L 260 130 
                         L 310 135 
                         L 330 160 
                         L 290 185 
                         L 270 210 
                         L 250 260 
                         L 210 340 
                         L 180 300 
                         L 140 230 
                         L 110 180 
                         L 130 130 
                         L 165 95 Z"
                      fill="rgba(212,175,55,0.04)"
                      stroke="rgba(212,175,55,0.25)"
                      strokeWidth="1.5"
                    />

                    {/* West Limit (Guhar Moti - Gujarat: 68.7° E) */}
                    <circle cx="110" cy="180" r="4" fill="#a09887" />
                    <text x="75" y="175" fill="#a09887" fontSize="7" fontFamily="var(--font-mono)">GUJARAT (-58m)</text>

                    {/* East Limit (Kibithu - Arunachal: 97.4° E) */}
                    <circle cx="330" cy="160" r="4" fill="#a09887" />
                    <text x="280" y="150" fill="#a09887" fontSize="7" fontFamily="var(--font-mono)">ARUNACHAL (+58m)</text>

                    {/* THE CENTRAL 82.5° E MERIDIAN LINE */}
                    <line
                      x1="220"
                      y1="25"
                      x2="220"
                      y2="375"
                      stroke="url(#meridianGlow)"
                      strokeWidth="2.5"
                      strokeDasharray="6 3"
                      filter="url(#glow)"
                    />

                    {/* Mirzapur Shankargarh Fort Pin */}
                    <circle cx="220" cy="175" r="7" fill="#d4af37" className="radar-pulse" />
                    <circle cx="220" cy="175" r="3" fill="#0c0b0a" />
                    <text x="232" y="172" fill="#d4af37" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">
                      MIRZAPUR (82°30'E)
                    </text>
                    <text x="232" y="184" fill="#fcfaf7" fontSize="7" fontFamily="var(--font-mono)">
                      IST 1947 ZERO MERIDIAN
                    </text>

                    {/* Konark Odisha Pin (Arka Inspiration) */}
                    <circle cx="265" cy="205" r="4" fill="#e0532d" />
                    <text x="275" y="208" fill="#f27552" fontSize="7" fontFamily="var(--font-mono)">KONARK (Arka)</text>

                    {/* Compass Rose */}
                    <g transform="translate(50, 60)">
                      <circle cx="0" cy="0" r="16" fill="none" stroke="rgba(255,255,255,0.15)" />
                      <line x1="0" y1="-14" x2="0" y2="14" stroke="#d4af37" strokeWidth="1" />
                      <line x1="-14" y1="0" x2="14" y2="0" stroke="#d4af37" strokeWidth="1" />
                      <text x="0" y="-18" fill="#d4af37" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>
                    </g>
                  </svg>
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/80 px-4 py-2 backdrop-blur-md">
                  <span className="mono text-xs text-graphite">Indian Standard Time Act</span>
                  <span className="mono text-xs font-semibold text-accent">Established 01.09.1947</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 02: KONARK SUNDIAL 24-SPOKE GEOMETRY (ARKA) ─── */}
      <section className="border-t border-white/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center">
            <span className="eyebrow text-accent">Astronomical Horology</span>
            <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Konark Sundial <span className="display-italic text-accent">Shadow Geometry</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-relaxed text-graphite">
              The 13th-century Konark Sun Temple features 24 stone wheels acting as high-precision sundials. 8 Major spokes signify the 8 Prahars (3-hour periods) of day and night, while 16 minor spokes measure Ghatikas and Vinadikas.
            </p>
          </div>

          {/* Interactive Prahar Simulator */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Interactive 24-Spoke Sundial SVG */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_50%,#18140f,#0a0807_85%)] p-6 sm:p-8">
                <div className="relative flex h-full w-full items-center justify-center">
                  <svg viewBox="0 0 400 400" className="h-full w-full max-h-[380px] max-w-[380px]">
                    <defs>
                      <radialGradient id="sunWheelGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#d4af37" stopOpacity="0.25" />
                        <stop offset="70%" stopColor="#d4af37" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Background glow circle */}
                    <circle cx="200" cy="200" r="170" fill="url(#sunWheelGlow)" />

                    {/* Outer Wheel Rim with Carved Beads */}
                    <circle cx="200" cy="200" r="160" fill="none" stroke="#d4af37" strokeWidth="3" />
                    <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#d4af37" strokeWidth="2" />
                    <circle cx="200" cy="200" r="28" fill="#14110d" stroke="#d4af37" strokeWidth="2" />

                    {/* 24 Radial Spokes */}
                    {[...Array(24)].map((_, i) => {
                      const angle = (i * 15 * Math.PI) / 180;
                      const isMajor = i % 3 === 0; // 8 Major Spokes (45 degrees)
                      const x1 = 200 + 60 * Math.cos(angle);
                      const y1 = 200 + 60 * Math.sin(angle);
                      const x2 = 200 + 150 * Math.cos(angle);
                      const y2 = 200 + 150 * Math.sin(angle);

                      return (
                        <g key={`spoke-${i}`}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={isMajor ? "#d4af37" : "rgba(212,175,55,0.4)"}
                            strokeWidth={isMajor ? 2.5 : 1}
                          />
                          {isMajor && (
                            <circle
                              cx={200 + 105 * Math.cos(angle)}
                              cy={200 + 105 * Math.sin(angle)}
                              r="5"
                              fill="#14110d"
                              stroke="#d4af37"
                              strokeWidth="1.5"
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Solar Shadow Vector (Dynamic according to selected Prahar) */}
                    <line
                      x1="200"
                      y1="200"
                      x2={
                        200 +
                        currentPrahar.shadowLength *
                          Math.cos((currentPrahar.sunAngle * Math.PI) / 180)
                      }
                      y2={
                        200 +
                        currentPrahar.shadowLength *
                          Math.sin((currentPrahar.sunAngle * Math.PI) / 180)
                      }
                      stroke="#f27552"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={
                        200 +
                        currentPrahar.shadowLength *
                          Math.cos((currentPrahar.sunAngle * Math.PI) / 180)
                      }
                      cy={
                        200 +
                        currentPrahar.shadowLength *
                          Math.sin((currentPrahar.sunAngle * Math.PI) / 180)
                      }
                      r="4"
                      fill="#f27552"
                    />

                    {/* Central Gnomon (Sun Axle) */}
                    <circle cx="200" cy="200" r="14" fill="#d4af37" />
                    <circle cx="200" cy="200" r="6" fill="#0c0b0a" />

                    {/* Center Label */}
                    <text x="200" y="240" fill="#a09887" fontSize="7" textAnchor="middle" fontFamily="var(--font-mono)">
                      24-SPOKE CHRONOMETER
                    </text>
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/80 px-4 py-2.5 backdrop-blur-md">
                  <span className="mono text-xs text-graphite">Shadow Coordinate</span>
                  <span className="mono text-xs font-semibold text-vermilionSoft">
                    Spoke #{currentPrahar.shadowSpoke} ({currentPrahar.sunAngle}°)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Prahar Timeline Controls & Ancient Vedic Units */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-accent">Select Day Prahar (3-Hr Cycle)</span>
                <span className="mono text-xs text-slate">8 Prahars / 24 Hours</span>
              </div>

              {/* Prahar Buttons */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {prahars.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => setSelectedPrahar(idx)}
                    className={`rounded-xl border p-3.5 text-left transition-all duration-300 ${
                      selectedPrahar === idx
                        ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <span className="mono block text-[10px] text-accent">Prahar {p.num}</span>
                    <span className="mt-1 block font-sans text-xs font-semibold text-chalk line-clamp-1">{p.concept}</span>
                    <span className="mono mt-1 block text-[10px] text-slate">{p.time.split("–")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Selected Prahar Explanation */}
              <div className="elev rounded-2xl border border-white/10 bg-inkCard p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="eyebrow text-accent">{currentPrahar.time}</span>
                    <h3 className="display mt-1 text-2xl text-chalk sm:text-3xl">{currentPrahar.name}</h3>
                  </div>
                  <span className="mono rounded-full border border-vermilion/40 bg-vermilion/10 px-3 py-1 text-xs text-vermilionSoft">
                    {currentPrahar.concept}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {currentPrahar.significance}
                </p>

                {/* Arka Design Bridge */}
                <div className="mt-6 rounded-xl border border-accent/20 bg-accent/[0.04] p-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-accent font-semibold">Arka Watch Connection</span>
                  <p className="mt-1 font-sans text-xs italic text-chalk">
                    {currentPrahar.arkaConnection}
                  </p>
                </div>

                {/* Ancient Indian Time Units Breakdown */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                  <div className="rounded-lg bg-white/[0.02] p-2">
                    <span className="mono text-[10px] text-slate block">1 Prahar</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">3 Hours</span>
                  </div>
                  <div className="rounded-lg bg-white/[0.02] p-2">
                    <span className="mono text-[10px] text-slate block">1 Ghatika</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">24 Minutes</span>
                  </div>
                  <div className="rounded-lg bg-white/[0.02] p-2">
                    <span className="mono text-[10px] text-slate block">1 Pal</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">24 Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 03: 1983–2026 CRICKET VICTORY DYNASTY LINEAGE ─── */}
      <section className="border-t border-white/10 bg-black/80 py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Vijay Collection Lineage</span>
            <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Five Times, <span className="display-italic text-accent">Time Stopped</span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-graphite">
              The Vijay Collection captures India's five immortal world cricket triumphs, transmuting historic jersey palettes, stadium emotions, and boundary moments into limited-edition mechanical watches.
            </p>
          </div>

          {/* Lineage Timeline selector */}
          <div className="mt-14 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {victories.map((v, idx) => (
              <button
                key={v.year}
                onClick={() => setActiveVictory(idx)}
                className={`group shrink-0 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  activeVictory === idx
                    ? "border-accent bg-accent/10 min-w-[200px]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 min-w-[180px]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="display text-3xl text-chalk group-hover:text-accent">{v.year}</span>
                  <div className="flex gap-1">
                    {v.colors.map((c, i) => (
                      <span key={i} className="h-3 w-3 rounded-full border border-black/40" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <span className="mono mt-2 block text-xs text-slate truncate">{v.venue.split(",")[0]}</span>
              </button>
            ))}
          </div>

          {/* Victory Detail Showcase Card */}
          <div className="mt-8 elev rounded-3xl border border-white/10 bg-inkCard p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="mono rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">{currentVictory.year}</span>
                  <span className="mono text-xs text-slate">{currentVictory.venue}</span>
                </div>

                <h3 className="display mt-4 text-3xl sm:text-4xl text-chalk">
                  {currentVictory.headline}
                </h3>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {currentVictory.telemetry}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-accent">Match Scoreline</span>
                  <p className="font-mono text-sm font-semibold text-chalk mt-0.5">{currentVictory.opponent}</p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-black/50 p-6">
                <span className="eyebrow text-accent">Horological Translation</span>
                <h4 className="display mt-2 text-xl text-chalk">Dial & Colorway Architecture</h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-graphite">
                  {currentVictory.horologyNote}
                </p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate">Jersey Palette Matrix</span>
                  <div className="mt-3 flex items-center gap-3">
                    {currentVictory.colors.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full border border-white/20 shadow-md" style={{ backgroundColor: c }} />
                      </div>
                    ))}
                  </div>
                  <span className="mono mt-2 block text-[11px] text-graphite">{currentVictory.colorLabels}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
