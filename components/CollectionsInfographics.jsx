"use client";

import { useState } from "react";

export default function CollectionsInfographics() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [depthMeters, setDepthMeters] = useState(50); // 0 to 100m for depth gauge
  const [activeBiome, setActiveBiome] = useState(0);

  const movementComponents = [
    {
      id: "rotor",
      name: "Custom Ashoka-Chakra Rotor",
      metric: "21,600 VPH",
      subhead: "Bidirectional Self-Winding Weight",
      desc: "Inspired by the 24-spoke wheel of time, the skeletonized oscillating weight winds the mainspring with the wearer's natural wrist movement, delivering effortless kinetic power.",
      specs: [
        { label: "Winding Direction", val: "Bidirectional Kinetic" },
        { label: "Spoke Architecture", val: "24-Spoke Radial Wheel" },
        { label: "Finish", val: "Cotes de Geneve & Sunray" },
        { label: "Efficiency", val: "High-Inertia Heavy Alloy" },
      ],
      diagramHighlight: "outer-rotor",
    },
    {
      id: "balance",
      name: "Parashock Balance Wheel & Escapement",
      metric: "3.0 Hz (21,600 A/h)",
      subhead: "High-Frequency Regulating Organ",
      desc: "The heartbeat of the watch. Oscillating at 6 beats per second, protected by proprietary Parashock shock-absorbing jewels to maintain chronometric stability through sudden impacts.",
      specs: [
        { label: "Beat Frequency", val: "21,600 vibrations/hr" },
        { label: "Shock Resistance", val: "Parashock Spring System" },
        { label: "Hairspring", val: "Nivarox Anti-Magnetic Alloy" },
        { label: "Rate Accuracy", val: "-20 to +40 sec / day" },
      ],
      diagramHighlight: "balance-spring",
    },
    {
      id: "power",
      name: "Mainspring Barrel Assembly",
      metric: "42+ Hours",
      subhead: "Extended Autonomous Power Reserve",
      desc: "A high-tensile alloy spring coiled within a micro-toothed barrel stores energy steadily, delivering smooth, uninterrupted torque throughout its 42-hour reserve cycle.",
      specs: [
        { label: "Power Reserve", val: "42 Hours Continuous" },
        { label: "Spring Material", val: "Nivaflex Elastic Alloy" },
        { label: "Torque Delivery", val: "Linear Isochronal Curve" },
        { label: "Winding Options", val: "Automatic + Hand-Winding" },
      ],
      diagramHighlight: "barrel-gear",
    },
    {
      id: "jewels",
      name: "21 Synthetic Ruby Bearings",
      metric: "21 Jewels",
      subhead: "Frictionless Pivot Architecture",
      desc: "Precision-machined corundum sapphire jewel bearings positioned at every high-wear rotational axis ensure virtually frictionless gear rotation and decades of operational longevity.",
      specs: [
        { label: "Bearing Count", val: "21 Synthetic Rubies" },
        { label: "Hardness", val: "9 on Mohs Mineral Scale" },
        { label: "Lubrication", val: "Synthetic Swiss Moebius Oil" },
        { label: "Friction Coeff.", val: "< 0.04 µ Dry Static" },
      ],
      diagramHighlight: "jewel-pivots",
    },
    {
      id: "subseconds",
      name: "Ashoka 24-Spoke Small Seconds",
      metric: "60-Sec Orbit",
      subhead: "Decoupled Offset Dial Complication",
      desc: "Located precisely at the 4:30 position, this custom-toothed wheel spins in continuous harmony, serving as a live visual pulse of Indian Standard Time.",
      specs: [
        { label: "Subdial Position", val: "4:30 Offset Layout" },
        { label: "Gear Decoupling", val: "Direct-Drive Pinion" },
        { label: "Sweep Motion", val: "Smooth 6-Tick Sweep/sec" },
        { label: "Hand Finish", val: "Heat-Blued or Gold Plated" },
      ],
      diagramHighlight: "sub-dial",
    },
  ];

  const dialLayers = [
    {
      level: "Layer 01",
      name: "Domed Sapphire Crystal",
      thickness: "2.10 mm",
      hardness: "9 Mohs Hardness",
      details: "Scratch-proof synthetic corundum dome coated with a double-sided internal anti-reflective blue hue for glare-free readability in direct sunlight.",
      tag: "Optic Shield",
    },
    {
      level: "Layer 02",
      name: "Devanagari Indices & Guilloché Base",
      thickness: "0.65 mm",
      hardness: "Precision Stamped",
      details: "Multi-depth fluted sunray Guilloché texture radiating from the center, complemented by individually applied polished Bregnagari numerals.",
      tag: "Horological Dial",
    },
    {
      level: "Layer 03",
      name: "Ashoka 24-Spoke Small Seconds Subdial",
      thickness: "0.35 mm",
      hardness: "Micro-Etched",
      details: "Recessed circular grained chapter ring with a laser-cut 24-spoke wheel replicating India's national chakra in miniature horological scale.",
      tag: "Complication Ring",
    },
    {
      level: "Layer 04",
      name: "316L Marine Stainless Steel Chassis",
      thickness: "11.8 mm Total",
      hardness: "High-Corrosion Grade",
      details: "Satin-brushed case flanks paired with mirror-polished bevelled lugs and an exhibition caseback engraved with the individual numbered edition (#001–#100).",
      tag: "Enclosure",
    },
  ];

  const biomes = [
    {
      name: "Ranthambore Bagh",
      state: "Rajasthan",
      terrain: "Dry Deciduous Ravines & Dhok Forests",
      fauna: "Royal Bengal Tiger (Panthera tigris)",
      dialDetail: "Sun-dappled amber and deep black Guilloché evoking the tiger roaming ancient fortress ruins.",
      color: "#f59e0b",
      elevation: "350m Elevation",
    },
    {
      name: "Gir Sinh",
      state: "Gujarat",
      terrain: "Dry Teak & Thorny Scrub Savanna",
      fauna: "Asiatic Lion (Panthera leo persica)",
      dialDetail: "Golden savannah grain textured dial with brushed warm champagne steel bezel accents.",
      color: "#eab308",
      elevation: "420m Elevation",
    },
    {
      name: "Jawai Tendua",
      state: "Rajasthan",
      terrain: "Prehistoric Granite Rock Formations",
      fauna: "Indian Leopard (Panthera pardus fusca)",
      dialDetail: "Speckled mineral stone finishing echoing leopards basking on centuries-old granite monoliths.",
      color: "#94a3b8",
      elevation: "580m Elevation",
    },
    {
      name: "Kaziranga Gorh",
      state: "Assam",
      terrain: "Brahmaputra Floodplains & Elephant Grass",
      fauna: "Great Indian One-Horned Rhinoceros",
      dialDetail: "Deep wetlands olive-green enamel dial reflecting the misty marshes of the eastern valley.",
      color: "#10b981",
      elevation: "80m Elevation",
    },
  ];

  const collectionMatrix = [
    {
      name: "Arka",
      theme: "Konark Sun Temple & Astronomical Time",
      price: "₹9,999",
      variants: "5 Editions",
      dimensions: "40mm Case · 11.8mm Depth · 47mm Lug-to-Lug",
      glass: "Domed Sapphire with Anti-Reflective Coating",
      dialFinish: "Radial Sunburst Guilloché & Devanagari Hours",
      waterproof: "5 ATM (50 Metres / 165 Feet)",
      strap: "Full-Grain Italian Leather with Quick-Release",
      movement: "Miyota 82S7 Automatic · 21 Jewels · 42h Reserve",
      scarcity: "Limited Batch Production",
    },
    {
      name: "Vanya",
      theme: "India's Wild Sanctuaries (Ranthambore, Gir, Jawai, Kaziranga)",
      price: "₹9,999",
      variants: "4 Editions",
      dimensions: "41mm Case · 12.0mm Depth · 48mm Lug-to-Lug",
      glass: "Domed Sapphire with Anti-Reflective Coating",
      dialFinish: "Textured Terrain Guilloché & Dual-Tone Markers",
      waterproof: "10 ATM (100 Metres / 330 Feet)",
      strap: "Reinforced Tactical Canvas & Saddle Leather Lining",
      movement: "Miyota 82S7 Automatic · 21 Jewels · 42h Reserve",
      scarcity: "Limited Batch Production",
    },
    {
      name: "Vijay",
      theme: "Five Landmark Cricket Victories (1983, 2007, 2011, 2024, 2026)",
      price: "₹19,470",
      variants: "5 Individually Numbered Editions",
      dimensions: "42mm Case · 12.2mm Depth · 49mm Lug-to-Lug",
      glass: "Domed Sapphire with Triple Anti-Reflective Coating",
      dialFinish: "Carbon & Enamel Sunburst with Historic Jersey Tones",
      waterproof: "10 ATM (100 Metres / 330 Feet)",
      strap: "Custom Perforated Racing Leather & Solid Steel Deployant",
      movement: "Miyota 82S7 Automatic · Gold-Plated Rotor · 42h Reserve",
      scarcity: "Strictly Limited to 100 Pieces Worldwide",
    },
  ];

  const currentComp = movementComponents[activeComponent];
  const currentBiome = biomes[activeBiome];

  // Calculated depth metrics
  const barPressure = (1 + depthMeters / 10).toFixed(1);
  const depthRatingLabel =
    depthMeters <= 50
      ? "5 ATM / 50m — Arka Collection Standard (Rain, Handwashing, Splashes)"
      : "10 ATM / 100m — Vanya & Vijay Standard (Swimming, Marine Adventure, Water Sports)";

  return (
    <section className="bg-ink text-chalk">
      {/* ─── INFOGRAPHIC 01: MOVEMENT ARCHITECTURE & TELEMETRY ─── */}
      <div className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Interactive Calibre Anatomy</span>
            <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              The Engineering of <span className="display-italic text-accent">IST Mechanicals</span>
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-graphite">
              Every IST 1947 timepiece is driven by a self-winding automatic calibre beating at 21,600 vibrations per hour. Explore the five foundational micro-engineering subsystems below.
            </p>
          </div>

          {/* Interactive movement schematic container */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Interactive Graphic & Technical Visualization */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-[radial-gradient(ellipse_at_50%_50%,#eff2f9,#ffffff_80%)] p-6 sm:p-8">
                {/* SVG Horological Movement Vector Schematic */}
                <div className="relative flex h-full w-full items-center justify-center">
                  <svg viewBox="0 0 400 400" className="h-full w-full max-h-[380px] max-w-[380px]">
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c6ad8" />
                        <stop offset="50%" stopColor="#2c3d8f" />
                        <stop offset="100%" stopColor="#1d2a66" />
                      </linearGradient>
                      <radialGradient id="jewelGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ff4d4d" stopOpacity="1" />
                        <stop offset="70%" stopColor="#c7153b" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#66001a" stopOpacity="0.4" />
                      </radialGradient>
                    </defs>

                    {/* Outer Case & Calibre Ring */}
                    <circle cx="200" cy="200" r="185" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    <circle cx="200" cy="200" r="175" fill="none" stroke="#2c3d8f" strokeWidth="1" strokeDasharray="4 8" className="spin-slow" />

                    {/* Main Baseplate Bridge Details */}
                    <path
                      d="M 60 200 C 60 120 120 60 200 60 C 260 60 310 95 330 145 L 250 200 L 220 280 Z"
                      fill="rgba(255,255,255,0.03)"
                      stroke="rgba(44,61,143,0.3)"
                      strokeWidth="1.5"
                    />

                    {/* Mainspring Barrel Gear (Top Right) */}
                    <g
                      className={`transition-opacity duration-500 ${
                        activeComponent === 2 ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <circle cx="270" cy="140" r="48" fill="#15120e" stroke="url(#goldGrad)" strokeWidth="2.5" />
                      <circle cx="270" cy="140" r="38" fill="none" stroke="#2c3d8f" strokeWidth="1" strokeDasharray="3 3" />
                      <circle cx="270" cy="140" r="10" fill="url(#goldGrad)" />
                      <text x="270" y="144" fill="#0c0b0a" fontSize="8" fontWeight="bold" textAnchor="middle">42H</text>
                    </g>

                    {/* Balance Wheel & Hairspring (Bottom Left) */}
                    <g
                      className={`transition-opacity duration-500 ${
                        activeComponent === 1 ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <circle cx="130" cy="260" r="46" fill="none" stroke="#2c3d8f" strokeWidth="2.5" />
                      <line x1="130" y1="214" x2="130" y2="306" stroke="#2c3d8f" strokeWidth="1.5" />
                      <line x1="84" y1="260" x2="176" y2="260" stroke="#2c3d8f" strokeWidth="1.5" />
                      <circle cx="130" cy="260" r="28" fill="none" stroke="#7c6ad8" strokeWidth="1" strokeDasharray="2 4" className="spin-sweep" />
                      <circle cx="130" cy="260" r="14" fill="url(#jewelGlow)" stroke="#ff8585" strokeWidth="1" />
                    </g>

                    {/* 21 Synthetic Jewels Pivots */}
                    <g
                      className={`transition-opacity duration-500 ${
                        activeComponent === 3 ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <circle cx="200" cy="200" r="9" fill="url(#jewelGlow)" stroke="#ff9999" strokeWidth="1" />
                      <circle cx="270" cy="140" r="6" fill="url(#jewelGlow)" />
                      <circle cx="130" cy="260" r="7" fill="url(#jewelGlow)" />
                      <circle cx="200" cy="290" r="6" fill="url(#jewelGlow)" />
                      <circle cx="285" cy="245" r="5" fill="url(#jewelGlow)" />
                      <circle cx="145" cy="140" r="5" fill="url(#jewelGlow)" />
                      <circle cx="110" cy="185" r="5" fill="url(#jewelGlow)" />
                    </g>

                    {/* Ashoka 24-Spoke Small Seconds Wheel (Bottom Right ~ 4:30) */}
                    <g
                      className={`transition-opacity duration-500 ${
                        activeComponent === 4 ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <circle cx="270" cy="260" r="36" fill="rgba(14,26,45,0.6)" stroke="#3a6096" strokeWidth="1.5" />
                      {[...Array(24)].map((_, i) => (
                        <line
                          key={i}
                          x1="270"
                          y1="260"
                          x2={270 + 32 * Math.cos((i * 15 * Math.PI) / 180)}
                          y2={260 + 32 * Math.sin((i * 15 * Math.PI) / 180)}
                          stroke="#729cd6"
                          strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
                        />
                      ))}
                      <circle cx="270" cy="260" r="6" fill="url(#goldGrad)" />
                    </g>

                    {/* Ashoka Chakra Rotor (Semicircle Weight) */}
                    <g
                      className={`transition-opacity duration-500 ${
                        activeComponent === 0 ? "opacity-100" : "opacity-45"
                      }`}
                    >
                      <path
                        d="M 60 200 A 140 140 0 0 1 340 200 L 200 200 Z"
                        fill="rgba(44,61,143,0.18)"
                        stroke="url(#goldGrad)"
                        strokeWidth="2"
                        className="spin-rev"
                      />
                      <circle cx="200" cy="200" r="22" fill="#14110d" stroke="url(#goldGrad)" strokeWidth="2" />
                      <text x="200" y="196" fill="#2c3d8f" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                        IST 1947
                      </text>
                      <text x="200" y="206" fill="#ffffff" fontSize="5.5" textAnchor="middle" letterSpacing="1">
                        21 JEWELS
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Live Telemetry Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-black/10 bg-black/80 px-4 py-2.5 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 radar-pulse" />
                    <span className="font-mono text-xs text-white/70 uppercase tracking-wider">Calibre Miyota 82S7</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#b9c8f2]">{currentComp.metric}</span>
                </div>
              </div>
            </div>

            {/* Right: Component Selector & Deep Dive Metrics */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {movementComponents.map((comp, idx) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveComponent(idx)}
                    className={`rounded-xl border p-3.5 text-left transition-all duration-300 ${
                      activeComponent === idx
                        ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(44,61,143,0.2)]"
                        : "border-black/10 bg-inkSoft hover:border-black/15 hover:bg-black/[0.04]"
                    }`}
                  >
                    <span className="mono block text-[10px] uppercase tracking-wider text-slate">0{idx + 1}</span>
                    <span className="mt-1 block font-sans text-xs font-semibold text-chalk line-clamp-1">{comp.name.split(" ")[0]}</span>
                    <span className="mono mt-1 block text-[11px] text-accent">{comp.metric}</span>
                  </button>
                ))}
              </div>

              {/* Active Component Detail Card */}
              <div className="elev rounded-2xl border border-black/10 bg-inkCard p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                  <div>
                    <span className="eyebrow text-accent">{currentComp.subhead}</span>
                    <h3 className="display mt-1 text-2xl text-chalk sm:text-3xl">{currentComp.name}</h3>
                  </div>
                  <span className="mono rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {currentComp.metric}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {currentComp.desc}
                </p>

                {/* Subsystem Specifications Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/10 pt-4">
                  {currentComp.specs.map((spec) => (
                    <div key={spec.label} className="rounded-lg bg-black/[0.03] p-3">
                      <span className="mono block text-[10px] uppercase tracking-wider text-slate">{spec.label}</span>
                      <span className="mt-1 block font-sans text-xs font-semibold text-chalk">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── NEW INFOGRAPHIC: INTERACTIVE HYDROSTATIC DEPTH GAUGE (5 ATM vs 10 ATM) ─── */}
      <div className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent">Hydrostatic Pressure Simulation</span>
            <h2 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Water Resistance & <span className="display-italic text-accent">Atmospheric Depth</span>
            </h2>
            <p className="mt-3 font-sans text-base text-graphite">
              Every IST 1947 case is hermetically sealed with synthetic O-ring gaskets and dry-chamber tested. Drag the depth slider to inspect pressure resistance.
            </p>
          </div>

          <div className="mt-12 elev rounded-3xl border border-black/10 bg-inkCard p-8 sm:p-12">
            {/* Slider Control */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="mono text-xs uppercase tracking-widest text-slate">Simulated Immersion Depth</span>
                <span className="mono text-2xl font-bold text-accent">{depthMeters} Metres ({depthMeters * 3.3} Ft)</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={depthMeters}
                onChange={(e) => setDepthMeters(Number(e.target.value))}
                className="h-2.5 w-full cursor-pointer appearance-none rounded-full bg-black/10 accent-accent"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate pt-1">
                <span>0m (Surface 1.0 Bar)</span>
                <span>50m (Arka 5 ATM · 6.0 Bar)</span>
                <span>100m (Vanya & Vijay 10 ATM · 11.0 Bar)</span>
              </div>
            </div>

            {/* Depth Telemetry Metrics */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-black/10 pt-8">
              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-[10px] uppercase tracking-wider text-slate">Hydrostatic Pressure</span>
                <h4 className="mono mt-2 text-3xl font-bold text-chalk">{barPressure} Bar</h4>
                <p className="mt-1 font-sans text-xs text-graphite">Total dynamic water load on sapphire crystal</p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-[10px] uppercase tracking-wider text-slate">Gasket Integrity</span>
                <h4 className="mono mt-2 text-3xl font-bold text-emerald-400">100% Sealed</h4>
                <p className="mt-1 font-sans text-xs text-graphite">Dual synthetic nitrile rubber crown barrier</p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-[10px] uppercase tracking-wider text-slate">Collection Rating</span>
                <h4 className="display mt-2 text-2xl font-bold text-accent">
                  {depthMeters <= 50 ? "5 ATM Rated" : "10 ATM Rated"}
                </h4>
                <p className="mt-1 font-sans text-xs text-graphite">
                  {depthMeters <= 50 ? "Arka Collection" : "Vanya & Vijay Collections"}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-accent/20 bg-accent/[0.03] p-4 text-xs font-mono text-chalk">
              <span className="text-accent font-semibold">Activity Guidance:</span> {depthRatingLabel}
            </div>
          </div>
        </div>
      </div>

      {/* ─── NEW INFOGRAPHIC: VANYA BIOME ELEVATION & TOPOGRAPHY ─── */}
      <div className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow text-accent">Vanya Geographical Inspiration</span>
            <h2 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Wilderness Biomes & <span className="display-italic text-accent">Dial Textures</span>
            </h2>
            <p className="mt-3 font-sans text-base text-graphite">
              Every Vanya watch dial is sculpted with geometric terrain micro-patterns drawn directly from India’s greatest national sanctuaries.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: 4 Sanctuary Selector */}
            <div className="lg:col-span-5 space-y-3">
              {biomes.map((b, idx) => (
                <button
                  key={b.name}
                  onClick={() => setActiveBiome(idx)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    activeBiome === idx
                      ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(44,61,143,0.2)]"
                      : "border-black/10 bg-inkSoft hover:border-black/15"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs uppercase tracking-wider text-accent">{b.state}</span>
                    <span className="mono text-[10px] text-slate">{b.elevation}</span>
                  </div>
                  <h4 className="display mt-1 text-xl text-chalk">{b.name}</h4>
                  <p className="font-sans text-xs text-graphite mt-1">{b.fauna}</p>
                </button>
              ))}
            </div>

            {/* Right: Detailed Biome Showcase */}
            <div className="lg:col-span-7">
              <div className="elev rounded-3xl border border-black/10 bg-inkCard p-8 sm:p-10">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="eyebrow text-accent">{currentBiome.state} Sanctuary</span>
                  <span className="mono text-xs text-chalk font-semibold">{currentBiome.elevation}</span>
                </div>

                <h3 className="display mt-4 text-3xl sm:text-4xl text-chalk">
                  {currentBiome.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-black/5 bg-inkSoft p-4">
                    <span className="mono text-[10px] uppercase tracking-wider text-slate block">Ecosystem & Habitat</span>
                    <p className="font-sans text-sm font-semibold text-chalk mt-0.5">{currentBiome.terrain}</p>
                  </div>

                  <div className="rounded-xl border border-black/5 bg-inkSoft p-4">
                    <span className="mono text-[10px] uppercase tracking-wider text-slate block">Protected Wildlife Species</span>
                    <p className="font-sans text-sm font-semibold text-accent mt-0.5">{currentBiome.fauna}</p>
                  </div>

                  <div className="rounded-xl border border-accent/20 bg-accent/[0.04] p-4">
                    <span className="mono text-[10px] uppercase tracking-wider text-accent font-semibold block">Horological Dial Translation</span>
                    <p className="font-sans text-xs italic text-chalk mt-1">{currentBiome.dialDetail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── INFOGRAPHIC 04: COLLECTION COMPARATIVE MATRIX ─── */}
      <div className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-accent">Collector's Specification Guide</span>
              <h2 className="display mt-3 text-4xl sm:text-5xl text-chalk">
                Collection Matrix & Scarcity
              </h2>
            </div>
            <div className="flex gap-2">
              {["all", "Arka", "Vanya", "Vijay"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCollection(tab)}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                    selectedCollection === tab
                      ? "bg-accent text-white font-semibold"
                      : "border border-black/10 bg-inkSoft text-graphite hover:text-chalk"
                  }`}
                >
                  {tab === "all" ? "All Collections" : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Matrix Cards */}
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {collectionMatrix
              .filter((c) => selectedCollection === "all" || c.name === selectedCollection)
              .map((col) => (
                <div
                  key={col.name}
                  className={`elev flex flex-col justify-between rounded-3xl border p-8 transition-all duration-300 ${
                    col.name === "Vijay"
                      ? "border-accent/40 bg-[radial-gradient(ellipse_at_top,#f1f3f9,#ffffff)]"
                      : "border-black/10 bg-inkCard"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <div>
                        <span className="eyebrow text-accent">{col.variants}</span>
                        <h3 className="display text-3xl text-chalk">{col.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="mono block text-xl font-bold text-accent">{col.price}</span>
                        <span className="mono text-[10px] text-slate">MSRP Incl. Taxes</span>
                      </div>
                    </div>

                    <p className="mt-4 font-sans text-xs italic text-graphite">
                      "{col.theme}"
                    </p>

                    {/* Spec List */}
                    <div className="mt-6 space-y-3">
                      <div className="rounded-xl bg-inkSoft p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Case Architecture</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.dimensions}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Dial Artistry</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.dialFinish}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Water Resistance</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-accent">{col.waterproof}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Horological Calibre</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.movement}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Strap Execution</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.strap}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-black/10 pt-4 flex items-center justify-between">
                    <span className="mono text-xs text-slate">Allocation Scarcity</span>
                    <span className="mono text-xs font-semibold text-accent">{col.scarcity}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
