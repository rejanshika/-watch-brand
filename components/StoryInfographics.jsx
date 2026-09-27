"use client";

import { useState, useEffect, useRef } from "react";

export default function StoryInfographics() {
  const [selectedPrahar, setSelectedPrahar] = useState(2); // 0 to 7
  const [isAutoSun, setIsAutoSun] = useState(true);
  const [sunAngle, setSunAngle] = useState(90);
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
      significance: "The first rays of sunlight illuminate the eastern entrance of Konark. Long golden shadows stretch westward across the temple stone.",
      arkaConnection: "Reflected in the golden warm sunburst tones of 'Golden Hour'.",
      accent: "#c2643a",
    },
    {
      num: "02",
      name: "Dvitiya Prahar",
      time: "09:00 AM – 12:00 PM",
      concept: "The Ascending Light",
      sunAngle: 70,
      shadowSpoke: 5,
      shadowLength: 50,
      significance: "The sun climbs into the high sky. The shadow shortens as it traverses the intermediate carven spokes of the stone wheel.",
      arkaConnection: "Expressed in the crisp clarity and brushed steel of 'Cloud Nine'.",
      accent: "#2c3d8f",
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
      accent: "#c59a3f",
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
      accent: "#7c6ad8",
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
      accent: "#1f2d66",
    },
  ];

  const victories = [
    {
      year: "1983",
      venue: "Lord's Cricket Ground, London",
      opponent: "West Indies (183 vs 140)",
      headline: "The Night We First Learnt to Believe",
      colors: ["#1B365D", "#FFFFFF", "#C59A3F"],
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
      colors: ["#004B87", "#FF671F", "#2C3D8F"],
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
      colors: ["#081225", "#38BDF8", "#7C6AD8"],
      colorLabels: "Obsidian Blue · Sky Cyan · Luminescent Platinum",
      telemetry: "The modern era of cricket supremacy · Precision, fearlessness and generational dominance.",
      horologyNote: "Dual-layer skeleton dial with diamond-cut steel hands and blue sapphire exhibition back.",
    },
  ];

  const [sundialVisible, setSundialVisible] = useState(false);
  const sundialRef = useRef(null);

  // Auto-Orbiting Sun animation loop — strictly pauses when out of view
  useEffect(() => {
    if (!isAutoSun || !sundialVisible) return;
    const interval = setInterval(() => {
      setSunAngle((prev) => (prev + 1.2 > 240 ? 20 : prev + 1.2));
    }, 80);
    return () => clearInterval(interval);
  }, [isAutoSun, sundialVisible]);

  useEffect(() => {
    const el = sundialRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setSundialVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const currentPrahar = prahars[selectedPrahar] || prahars[0];
  const currentVictory = victories[activeVictory];

  const effectiveAngle = isAutoSun ? sunAngle : currentPrahar.sunAngle;
  const effectiveShadowLength = isAutoSun
    ? 25 + Math.abs(effectiveAngle - 90) * 0.75
    : currentPrahar.shadowLength;

  return (
    <div className="bg-ink text-chalk">
      {/* ─── INFOGRAPHIC 01: 01.09.1947 MERIDIAN & TIMEZONE UNIFICATION ─── */}
      <section className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Telemetry & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-white px-3.5 py-1 text-accent shadow-sm">
                <span className="h-2 w-2 rounded-full bg-accent radar-pulse" />
                <span className="mono text-xs uppercase tracking-widest font-bold">Standard Meridian Architecture</span>
              </div>

              <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk leading-tight">
                01.09.1947 <br />
                <span className="display-italic text-accent">One Nation, One Time</span>
              </h2>

              <p className="font-sans text-base leading-relaxed text-graphite sm:text-lg">
                Before September 1, 1947, India operated on disjointed colonial time zones: Bombay Time, Calcutta Time, and Madras Time. A traveller from Gujarat to Assam experienced nearly two hours of solar discrepancy.
              </p>

              <p className="font-sans text-base leading-relaxed text-graphite">
                On the dawn of 1 September 1947, independent India unified the country under <span className="text-chalk font-semibold">Indian Standard Time (IST)</span>, anchored precisely to the <span className="text-accent font-semibold">82°30' E Longitude</span> passing through Mirzapur (Shankargarh Fort), Uttar Pradesh.
              </p>

              {/* Meridian Coordinates & Telemetry Cards */}
              <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate font-medium">Standard Meridian</span>
                  <span className="mono mt-1 block text-xl font-bold text-accent">82.5° E</span>
                  <span className="mono text-[10px] text-graphite">Mirzapur, UP</span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate font-medium">Global Offset</span>
                  <span className="mono mt-1 block text-xl font-bold text-chalk">UTC +5:30</span>
                  <span className="mono text-[10px] text-graphite">Exact 5.5 Hrs Ahead</span>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm col-span-2 sm:col-span-1">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate font-medium">Solar Span</span>
                  <span className="mono mt-1 block text-xl font-bold text-arkaWarm">116 Mins</span>
                  <span className="mono text-[10px] text-graphite">Gujarat to Assam</span>
                </div>
              </div>
            </div>

            {/* Right: Map & Meridian Visual Schematic */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-[#f9f7f2] to-[#ede7db] p-6 sm:p-8">
                <div className="relative flex h-full w-full items-center justify-center">
                  <svg viewBox="0 0 400 400" className="h-full w-full max-h-[380px] max-w-[380px]">
                    <defs>
                      <linearGradient id="meridianGlowWarm" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2c3d8f" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#2c3d8f" stopOpacity="1" />
                        <stop offset="100%" stopColor="#2c3d8f" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>

                    {/* Graticule Latitude & Longitude grid lines */}
                    {[80, 140, 200, 260, 320].map((y) => (
                      <line key={`lat-${y}`} x1="30" y1={y} x2="370" y2={y} stroke="rgba(44,61,143,0.12)" strokeDasharray="3 3" />
                    ))}
                    {[90, 150, 210, 270, 330].map((x) => (
                      <line key={`lon-${x}`} x1={x} y1="30" x2={x} y2="370" stroke="rgba(44,61,143,0.12)" strokeDasharray="3 3" />
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
                      fill="rgba(44,61,143,0.06)"
                      stroke="rgba(44,61,143,0.45)"
                      strokeWidth="2"
                    />

                    {/* Live Radar wave from Mirzapur */}
                    <circle cx="220" cy="175" r="30" fill="none" stroke="#2c3d8f" strokeWidth="1" className="radar-pulse opacity-60" />
                    <circle cx="220" cy="175" r="60" fill="none" stroke="#c2643a" strokeWidth="0.8" className="radar-pulse opacity-40" />

                    {/* West Limit (Gujarat) */}
                    <circle cx="110" cy="180" r="5" fill="#c2643a" />
                    <text x="65" y="175" fill="#7a422b" fontSize="8" fontWeight="bold" fontFamily="var(--font-mono)">GUJARAT (-58m)</text>

                    {/* East Limit (Arunachal) */}
                    <circle cx="330" cy="160" r="5" fill="#1f7a52" />
                    <text x="270" y="150" fill="#145237" fontSize="8" fontWeight="bold" fontFamily="var(--font-mono)">ARUNACHAL (+58m)</text>

                    {/* THE CENTRAL 82.5° E MERIDIAN LINE */}
                    <line
                      x1="220"
                      y1="25"
                      x2="220"
                      y2="375"
                      stroke="url(#meridianGlowWarm)"
                      strokeWidth="3"
                      strokeDasharray="6 3"
                    />

                    {/* Mirzapur Pin */}
                    <circle cx="220" cy="175" r="8" fill="#2c3d8f" />
                    <circle cx="220" cy="175" r="3" fill="#ffffff" />
                    <text x="232" y="172" fill="#2c3d8f" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">
                      MIRZAPUR (82°30'E)
                    </text>
                    <text x="232" y="184" fill="#555" fontSize="7" fontFamily="var(--font-mono)">
                      IST 1947 ZERO MERIDIAN
                    </text>

                    {/* Konark Pin */}
                    <circle cx="265" cy="205" r="5" fill="#c2643a" />
                    <text x="275" y="208" fill="#c2643a" fontSize="8" fontWeight="bold" fontFamily="var(--font-mono)">KONARK (Arka)</text>

                    {/* Compass Rose */}
                    <g transform="translate(50, 60)">
                      <circle cx="0" cy="0" r="16" fill="white" stroke="rgba(44,61,143,0.3)" strokeWidth="1" />
                      <line x1="0" y1="-14" x2="0" y2="14" stroke="#2c3d8f" strokeWidth="1.5" />
                      <line x1="-14" y1="0" x2="14" y2="0" stroke="#2c3d8f" strokeWidth="1.5" />
                      <text x="0" y="-18" fill="#2c3d8f" fontSize="9" fontWeight="bold" textAnchor="middle">N</text>
                    </g>
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-black/10 bg-white/90 px-4 py-2.5 backdrop-blur-md shadow-sm">
                  <span className="mono text-xs font-semibold text-slate">Indian Standard Time Act</span>
                  <span className="mono text-xs font-bold text-accent">Established 01.09.1947</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOGRAPHIC 02: KONARK SUNDIAL 24-SPOKE GEOMETRY (ARKA) ─── */}
      <section ref={sundialRef} className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="eyebrow text-accent">Astronomical Horology & Geometry</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Konark Sundial <span className="display-italic text-accent">Shadow Geometry</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              The 13th-century Konark Sun Temple features 24 stone wheels acting as high-precision sundials. 8 Major spokes signify the 8 Prahars (3-hour periods) of day and night, while 16 minor spokes measure Ghatikas and Vinadikas.
            </p>
          </div>

          {/* Interactive Prahar Simulator */}
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Interactive 24-Spoke Sundial SVG */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-[#f9f7f2] to-[#ede5d8] p-6 sm:p-8">
                {/* Auto Orbit toggle */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between rounded-xl border border-black/10 bg-white/85 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${isAutoSun ? "bg-emerald animate-ping" : "bg-accent"}`} />
                    <span className="mono text-xs font-semibold text-chalk">
                      {isAutoSun ? "Live Celestial Sun Orbit" : "Manual Prahar Selected"}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsAutoSun(!isAutoSun)}
                    className="mono text-[11px] font-bold uppercase rounded-lg border border-accent/30 bg-accent/10 px-2.5 py-1 text-accent hover:bg-accent hover:text-white transition-all"
                  >
                    {isAutoSun ? "Pause Orbit" : "Auto Orbit"}
                  </button>
                </div>

                <div className="relative flex h-full w-full items-center justify-center pt-6">
                  <svg viewBox="0 0 400 400" className="h-full w-full max-h-[380px] max-w-[380px]">
                    <defs>
                      <radialGradient id="sunWheelWarmGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#c59a3f" stopOpacity="0.2" />
                        <stop offset="60%" stopColor="#2c3d8f" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Background glow */}
                    <circle cx="200" cy="200" r="170" fill="url(#sunWheelWarmGlow)" />

                    {/* Outer Wheel Rim with Carved Beads */}
                    <circle cx="200" cy="200" r="155" fill="none" stroke="#2c3d8f" strokeWidth="3" />
                    <circle cx="200" cy="200" r="145" fill="none" stroke="rgba(44,61,143,0.3)" strokeWidth="1" strokeDasharray="3 4" />
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#2c3d8f" strokeWidth="2" />
                    <circle cx="200" cy="200" r="28" fill="#ede5d8" stroke="#2c3d8f" strokeWidth="2" />

                    {/* 24 Radial Spokes */}
                    {[...Array(24)].map((_, i) => {
                      const angle = (i * 15 * Math.PI) / 180;
                      const isMajor = i % 3 === 0; // 8 Major Spokes (45 degrees)
                      const x1 = 200 + 60 * Math.cos(angle);
                      const y1 = 200 + 60 * Math.sin(angle);
                      const x2 = 200 + 145 * Math.cos(angle);
                      const y2 = 200 + 145 * Math.sin(angle);

                      return (
                        <g key={`spoke-${i}`}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke={isMajor ? "#2c3d8f" : "rgba(44,61,143,0.35)"}
                            strokeWidth={isMajor ? 2.5 : 1}
                          />
                          {isMajor && (
                            <circle
                              cx={200 + 105 * Math.cos(angle)}
                              cy={200 + 105 * Math.sin(angle)}
                              r="5"
                              fill="#f9f7f2"
                              stroke="#2c3d8f"
                              strokeWidth="1.5"
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Solar Shadow Vector */}
                    {(() => {
                      const shadowAngleRad = ((effectiveAngle + 90) * Math.PI) / 180;
                      const shadowEndX = 200 + effectiveShadowLength * Math.cos(shadowAngleRad);
                      const shadowEndY = 200 + effectiveShadowLength * Math.sin(shadowAngleRad);
                      return (
                        <g>
                          <line
                            x1="200"
                            y1="200"
                            x2={shadowEndX}
                            y2={shadowEndY}
                            stroke="#e0452f"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                          />
                          <circle cx={shadowEndX} cy={shadowEndY} r="4" fill="#e0452f" />
                        </g>
                      );
                    })()}

                    {/* Central Gnomon (Sun Axle) */}
                    <circle cx="200" cy="200" r="14" fill="#2c3d8f" />
                    <circle cx="200" cy="200" r="5" fill="#f9f7f2" />

                    {/* Center Label */}
                    <text x="200" y="240" fill="#7a746c" fontSize="7" textAnchor="middle" fontFamily="var(--font-mono)">
                      24-SPOKE CHRONOMETER
                    </text>
                  </svg>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-black/10 bg-white/90 px-4 py-2.5 backdrop-blur-md shadow-sm">
                  <span className="mono text-xs text-graphite">Shadow Coordinate</span>
                  <span className="mono text-xs font-semibold text-vermilion">
                    Angle: {Math.round(effectiveAngle)}° (Spoke #{currentPrahar.shadowSpoke})
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
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {prahars.map((p, idx) => (
                  <button
                    key={p.num}
                    onClick={() => {
                      setSelectedPrahar(idx);
                      setIsAutoSun(false);
                    }}
                    className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                      selectedPrahar === idx && !isAutoSun
                        ? "border-accent bg-white shadow-md"
                        : "border-black/10 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <span className="mono block text-[10px] font-bold text-accent">Prahar {p.num}</span>
                    <span className="mt-1 block font-sans text-xs font-semibold text-chalk line-clamp-1">{p.concept}</span>
                    <span className="mono mt-1 block text-[10px] text-slate">{p.time.split("–")[0]}</span>
                  </button>
                ))}
              </div>

              {/* Selected Prahar Explanation */}
              <div className="elev rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                  <div>
                    <span className="eyebrow text-accent">{currentPrahar.time}</span>
                    <h3 className="display mt-1 text-2xl text-chalk sm:text-3xl">{currentPrahar.name}</h3>
                  </div>
                  <span className="mono rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent">
                    {currentPrahar.concept}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {currentPrahar.significance}
                </p>

                {/* Arka Design Bridge */}
                <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/[0.04] p-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-accent font-semibold block">Arka Watch Connection</span>
                  <p className="mt-1 font-sans text-xs italic text-chalk">
                    {currentPrahar.arkaConnection}
                  </p>
                </div>

                {/* Ancient Indian Time Units Breakdown */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-black/10 pt-4 text-center">
                  <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                    <span className="mono text-[10px] text-slate block">1 Prahar</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">3 Hours</span>
                  </div>
                  <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                    <span className="mono text-[10px] text-slate block">1 Ghatika</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">24 Minutes</span>
                  </div>
                  <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
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
      <section className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl space-y-2">
            <span className="eyebrow text-accent">Vijay Collection Lineage</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Five Times, <span className="display-italic text-accent">Time Stopped</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
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
                    ? "border-accent bg-white shadow-md min-w-[200px]"
                    : "border-black/10 bg-white/60 hover:bg-white min-w-[180px]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="display text-3xl text-chalk group-hover:text-accent font-bold">{v.year}</span>
                  <div className="flex gap-1">
                    {v.colors.map((c, i) => (
                      <span key={i} className="h-3.5 w-3.5 rounded-full border border-black/20" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <span className="mono mt-2 block text-xs text-slate truncate">{v.venue.split(",")[0]}</span>
              </button>
            ))}
          </div>

          {/* Victory Detail Showcase Card */}
          <div className="mt-8 elev rounded-3xl border border-black/10 bg-white p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="mono rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">{currentVictory.year}</span>
                  <span className="mono text-xs text-slate font-medium">{currentVictory.venue}</span>
                </div>

                <h3 className="display text-3xl sm:text-4xl text-chalk">
                  {currentVictory.headline}
                </h3>

                <p className="font-sans text-sm leading-relaxed text-graphite">
                  {currentVictory.telemetry}
                </p>

                <div className="rounded-xl border border-black/10 bg-inkSoft p-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-accent font-semibold">Match Scoreline</span>
                  <p className="font-mono text-sm font-bold text-chalk mt-0.5">{currentVictory.opponent}</p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-black/10 bg-inkSoft p-6">
                <span className="eyebrow text-accent">Horological Translation</span>
                <h4 className="display mt-2 text-xl text-chalk">Dial & Colorway Architecture</h4>
                <p className="mt-3 font-sans text-xs leading-relaxed text-graphite">
                  {currentVictory.horologyNote}
                </p>

                <div className="mt-6 border-t border-black/10 pt-4">
                  <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold">Jersey Palette Matrix</span>
                  <div className="mt-3 flex items-center gap-3">
                    {currentVictory.colors.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="h-6 w-6 rounded-full border border-black/15 shadow-sm" style={{ backgroundColor: c }} />
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
