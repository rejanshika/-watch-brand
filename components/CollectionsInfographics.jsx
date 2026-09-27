"use client";

import { useState } from "react";

export default function CollectionsInfographics() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [depthMeters, setDepthMeters] = useState(50); // 0 to 100m for depth gauge
  const [activeBiome, setActiveBiome] = useState(0);
  const [movementPhotoIdx, setMovementPhotoIdx] = useState(0);

  // Full watch images (less close-up, showing full case, bezel, lugs and dial)
  const movementPhotos = [
    { name: "Arka · Golden Hour", src: "/images/golden-hour_1.jpg", label: "Arka · Golden Hour" },
    { name: "Vanya · Ranthambore", src: "/images/ranthambore-bagh_1.jpg", label: "Vanya · Ranthambore" },
    { name: "Vijay · 2026 Legacy", src: "/images/2026_1.jpg", label: "Vijay · 2026 Legacy" },
  ];

  const movementComponents = [
    {
      id: "balance",
      name: "Parashock Balance Wheel & Escapement",
      metric: "21,600 VPH (3.0 Hz)",
      subhead: "Oscillating Regulating Heartbeat",
      desc: "The chronometric heartbeat of the timepiece. Oscillating at precisely 6 beats per second (3.0 Hz), cushioned by dual Parashock spring-mounted synthetic ruby bearings to withstand sudden shocks and physical impacts.",
      specs: [
        { label: "Beat Frequency", val: "21,600 vibrations / hr" },
        { label: "Shock Protection", val: "Parashock Spring System" },
        { label: "Hairspring Material", val: "Anti-Magnetic Nivarox" },
        { label: "Chronometric Rate", val: "-20 to +40 sec / day" },
      ],
      pin: { x: "46%", y: "48%", label: "Calibre 82S7 Heartbeat" },
    },
    {
      id: "subseconds",
      name: "24-Spoke Small Seconds Complication",
      metric: "60-Sec Orbit",
      subhead: "Decoupled Offset Dial Pulse",
      desc: "Positioned at 4:30 on the dial, a laser-skeletonized 24-spoke wheel spins continuously, serving as a live visual heartbeat of Indian Standard Time.",
      specs: [
        { label: "Dial Placement", val: "4:30 Offset Position" },
        { label: "Drive Mechanism", val: "Direct-Drive Pinion" },
        { label: "Motion Profile", val: "Smooth 6-Tick Sweep / sec" },
        { label: "Finishing", val: "Heat-Blued / Gold PVD" },
      ],
      pin: { x: "57%", y: "58%", label: "24-Spoke Small Seconds" },
    },
    {
      id: "power",
      name: "Mainspring Barrel Assembly",
      metric: "42+ Hours Reserve",
      subhead: "Isochronal Power Reservoir",
      desc: "A high-tensile Nivaflex elastic alloy spring coiled inside a micro-toothed gear barrel delivers steady torque across the entire 42-hour autonomous power cycle without loss of amplitude.",
      specs: [
        { label: "Autonomous Reserve", val: "42 Hours Continuous" },
        { label: "Spring Alloy", val: "Nivaflex Elastic Metal" },
        { label: "Torque Delivery", val: "Linear Isochronal Curve" },
        { label: "Winding Modes", val: "Automatic + Hand-Winding" },
      ],
      pin: { x: "50%", y: "36%", label: "42-Hour Mainspring" },
    },
    {
      id: "jewels",
      name: "21 Synthetic Ruby Bearings",
      metric: "21 Rubies",
      subhead: "Frictionless Pivot Architecture",
      desc: "Synthetic corundum ruby bearings machined to 9 Mohs mineral hardness eliminate rotational friction at high-wear axle points, guaranteeing decades of mechanical accuracy.",
      specs: [
        { label: "Bearing Count", val: "21 Synthetic Rubies" },
        { label: "Mineral Hardness", val: "9 on Mohs Scale" },
        { label: "Lubricant", val: "Swiss Moebius Synthetic Oil" },
        { label: "Wear Resistance", val: "Zero Metal-on-Metal Friction" },
      ],
      pin: { x: "50%", y: "48%", label: "21 Synthetic Rubies" },
    },
    {
      id: "rotor",
      name: "Custom Ashoka-Chakra Rotor",
      metric: "Kinetic Auto-Wind",
      subhead: "24-Spoke Radial Oscillating Weight",
      desc: "Inspired by India's wheel of time, this skeletonized heavy-alloy oscillating weight rotates bidirectionally to wind the mainspring effortlessly with the wearer's natural wrist motion.",
      specs: [
        { label: "Winding Action", val: "Bidirectional Kinetic" },
        { label: "Architecture", val: "24-Spoke National Chakra" },
        { label: "Finishing", val: "Côtes de Genève & Sunray" },
        { label: "Efficiency", val: "Heavy Tungsten Perimeter" },
      ],
      pin: { x: "50%", y: "50%", label: "Kinetic Auto-Rotor" },
    },
  ];

  const dialLayers = [
    {
      level: "Layer 01",
      name: "Domed AR Sapphire Crystal",
      thickness: "2.10 mm",
      hardness: "9 Mohs (Diamond Hard)",
      details: "Scratch-proof synthetic corundum dome treated with internal anti-reflective coating for glare-free readability in direct sunlight.",
      tag: "Optic Shield",
    },
    {
      level: "Layer 02",
      name: "Devanagari Sunray Guilloché",
      thickness: "0.65 mm",
      hardness: "Stamped & Fluted",
      details: "Multi-depth radiating fluted Guilloché base paired with hand-applied polished Devanagari numerals catching multi-directional light.",
      tag: "Artisan Dial",
    },
    {
      level: "Layer 03",
      name: "Ashoka 24-Spoke Small Seconds",
      thickness: "0.35 mm",
      hardness: "Laser Skeletonized",
      details: "Recessed circular grained chapter ring framing the rotating 24-spoke national chakra miniature seconds complication.",
      tag: "Complication Ring",
    },
    {
      level: "Layer 04",
      name: "316L Marine Stainless Steel Chassis",
      thickness: "11.8 mm",
      hardness: "Medical / Marine Grade",
      details: "Satin-brushed case flanks, mirror-polished bevelled lugs, and screw-down exhibition caseback revealing the rotor.",
      tag: "Chassis Foundation",
    },
  ];

  const biomes = [
    {
      name: "Ranthambore Tiger Reserve",
      state: "Rajasthan",
      terrain: "Dry Deciduous Forest & Ancient Banyan Ravines",
      elevation: "215m – 505m ASL",
      dialDetail: "Sunburst copper Guilloché evoking the golden coat of the Royal Bengal Tiger.",
      fauna: "Royal Bengal Tiger (Panthera tigris)",
    },
    {
      name: "Gir National Park",
      state: "Gujarat",
      terrain: "Teak Canopy, Scrubland & Rocky Hillocks",
      elevation: "150m – 530m ASL",
      dialDetail: "Deep desert tan dial with raw graining inspired by the Asiatic Lion's savannah domain.",
      fauna: "Asiatic Lion (Panthera leo persica)",
    },
    {
      name: "Jawai Leopard Hills",
      state: "Rajasthan",
      terrain: "Granite Monoliths & Sandy Riverbeds",
      elevation: "320m – 680m ASL",
      dialDetail: "Granite slate textured dial mirroring the monolithic boulders of Jawai.",
      fauna: "Indian Leopard (Panthera pardus fusca)",
    },
    {
      name: "Kaziranga Wetland Sanctuary",
      state: "Assam",
      terrain: "Brahmaputra Floodplains & Elephant Grass",
      elevation: "40m – 80m ASL",
      dialDetail: "Deep forest emerald dial capturing the mist of the Brahmaputra wetlands.",
      fauna: "Great Indian One-Horned Rhinoceros",
    },
  ];

  const collectionMatrix = [
    {
      name: "Arka",
      theme: "Solar Chronometry & Konark Temple",
      variants: "5 Editions",
      price: "₹9,999",
      movement: "Miyota 82S7 Automatic",
      waterproof: "5 ATM (50 Metres)",
      dimensions: "40mm Ø · 11.8mm Depth",
      dialFinish: "Sunray Guilloché & Devanagari",
      strap: "Tuscan Leather · 20mm Lug",
      scarcity: "Numbered General Release",
    },
    {
      name: "Vanya",
      theme: "Wilderness Sanctuaries of India",
      variants: "4 Editions",
      price: "₹9,999",
      movement: "Miyota 82S7 Automatic",
      waterproof: "10 ATM (100 Metres)",
      dimensions: "41mm Ø · 12.2mm Depth",
      dialFinish: "Deciduous Terrain Grain",
      strap: "Mil-Spec Canvas + Leather",
      scarcity: "Numbered General Release",
    },
    {
      name: "Vijay",
      theme: "Five World Championship Cricket Triumphs",
      variants: "5 Editions",
      price: "₹19,470",
      movement: "Miyota 82S7 + Gold Rotor",
      waterproof: "10 ATM (100 Metres)",
      dimensions: "41mm Ø · 11.9mm Depth",
      dialFinish: "Carbon Fibre & Jersey Enamel",
      strap: "Bespoke Italian Deployant",
      scarcity: "Strictly 100 Pieces Worldwide",
    },
  ];

  const currentComp = movementComponents[activeComponent];
  const currentBiome = biomes[activeBiome];

  const barPressure = (1 + depthMeters / 10).toFixed(1);
  const depthRatingLabel =
    depthMeters <= 50
      ? "5 ATM / 50m — Arka Collection Standard (Rain, Handwashing, Splashes)"
      : "10 ATM / 100m — Vanya & Vijay Standard (Swimming, Marine Adventure, Water Sports)";

  return (
    <section className="bg-ink text-chalk">
      {/* ─── INFOGRAPHIC 01: FULL TIMEPIECE & CALIBRE INSPECTION ─── */}
      <div className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl space-y-3">
            <span className="eyebrow text-accent">Haute Horlogerie Architecture</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              The Engineering of <span className="display-italic text-accent">IST Mechanicals</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              Every IST 1947 timepiece is driven by a self-winding automatic calibre beating at 21,600 vibrations per hour (3.0 Hz). Inspect the full timepiece architecture and components below.
            </p>
          </div>

          {/* Full Watch Photographic Showcase with Interactive Telemetry Hotspots */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Full Watch Inspection Stage */}
            <div className="lg:col-span-6">
              <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-white p-4 sm:p-6 shadow-sm">
                {/* Photo Selector Switcher */}
                <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between rounded-xl border border-black/10 bg-white/90 p-1.5 backdrop-blur-md shadow-sm">
                  {movementPhotos.map((p, idx) => (
                    <button
                      key={p.label}
                      onClick={() => setMovementPhotoIdx(idx)}
                      className={`flex-1 rounded-lg py-1.5 font-mono text-[11px] font-semibold transition-all ${
                        movementPhotoIdx === idx
                          ? "bg-accent text-white shadow-sm"
                          : "text-graphite hover:text-chalk"
                      }`}
                    >
                      {p.label.split("·")[0]}
                    </button>
                  ))}
                </div>

                {/* Full Timepiece Photo — Clean full view, not excessively zoomed in */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#f9f7f2] flex items-center justify-center p-4">
                  <img
                    src={movementPhotos[movementPhotoIdx].src}
                    alt={movementPhotos[movementPhotoIdx].name}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Interactive Hotspot Pin for Active Component */}
                  <div
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                    style={{
                      left: currentComp.pin.x,
                      top: currentComp.pin.y,
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="absolute h-10 w-10 rounded-full bg-accent/40 animate-ping" />
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-lg border-2 border-white text-[10px] font-bold">
                        ✓
                      </span>
                    </div>
                    <div className="mt-2 whitespace-nowrap rounded-lg border border-black/10 bg-black/85 px-3 py-1 font-mono text-[10px] font-bold text-white shadow-lg backdrop-blur-md">
                      {currentComp.pin.label}
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-black/10 bg-white/95 px-4 py-2.5 backdrop-blur-md shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent radar-pulse" />
                      <span className="mono text-xs text-chalk uppercase tracking-wider font-bold">
                        {movementPhotos[movementPhotoIdx].label}
                      </span>
                    </div>
                    <span className="mono text-xs font-bold text-accent">{currentComp.metric}</span>
                  </div>
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
                    className={`rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                      activeComponent === idx
                        ? "border-accent bg-white shadow-md"
                        : "border-black/10 bg-white/60 hover:bg-white"
                    }`}
                  >
                    <span className="mono block text-[10px] uppercase tracking-wider text-slate font-semibold">0{idx + 1}</span>
                    <span className="mt-1 block font-sans text-xs font-semibold text-chalk line-clamp-1">{comp.name.split(" ")[0]}</span>
                    <span className="mono mt-1 block text-[11px] font-bold text-accent">{comp.metric}</span>
                  </button>
                ))}
              </div>

              {/* Active Component Detail Card */}
              <div className="elev rounded-3xl border border-black/10 bg-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-4">
                  <div>
                    <span className="eyebrow text-accent">{currentComp.subhead}</span>
                    <h3 className="display mt-1 text-2xl text-chalk sm:text-3xl">{currentComp.name}</h3>
                  </div>
                  <span className="mono rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent">
                    {currentComp.metric}
                  </span>
                </div>

                <p className="mt-4 font-sans text-sm leading-relaxed text-graphite">
                  {currentComp.desc}
                </p>

                {/* Subsystem Specifications Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-black/10 pt-4">
                  {currentComp.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl bg-inkSoft p-3 border border-black/5">
                      <span className="mono block text-[10px] uppercase tracking-wider text-slate">{spec.label}</span>
                      <span className="mt-1 block font-sans text-xs font-bold text-chalk">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── INFOGRAPHIC 02: 4-LAYER ISOMETRIC DIAL ARCHITECTURE ─── */}
      <div className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="eyebrow text-accent">Optical Depth & Tolerance</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Four-Layer <span className="display-italic text-accent">Dial Anatomy</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              Every IST 1947 watch is assembled across four high-tolerance structural planes, from the 9 Mohs domed sapphire crystal to the marine-grade chassis.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dialLayers.map((layer) => (
              <div
                key={layer.level}
                className="elev rounded-3xl border border-black/10 bg-white p-7 flex flex-col justify-between shadow-sm transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="mono text-xs font-bold text-accent">{layer.level}</span>
                    <span className="mono rounded-full border border-black/10 bg-inkSoft px-3 py-0.5 text-[10px] text-slate font-medium">
                      {layer.tag}
                    </span>
                  </div>

                  <h3 className="display mt-4 text-xl text-chalk font-semibold">{layer.name}</h3>
                  <p className="mt-3 font-sans text-xs leading-relaxed text-graphite">{layer.details}</p>
                </div>

                <div className="mt-8 border-t border-black/10 pt-4 grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-inkSoft p-2 border border-black/5">
                    <span className="mono text-[9px] text-slate block uppercase">Thickness</span>
                    <span className="mono text-xs font-bold text-chalk mt-0.5 block">{layer.thickness}</span>
                  </div>
                  <div className="rounded-xl bg-inkSoft p-2 border border-black/5">
                    <span className="mono text-[9px] text-slate block uppercase">Hardness</span>
                    <span className="mono text-xs font-bold text-accent mt-0.5 block">{layer.hardness.split(" ")[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── INFOGRAPHIC 03: INTERACTIVE HYDROSTATIC DEPTH GAUGE (5 ATM vs 10 ATM) ─── */}
      <div className="border-t border-black/10 bg-inkSoft py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="max-w-3xl space-y-3">
            <span className="eyebrow text-accent">Hydrostatic Pressure Chamber</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Water Resistance & <span className="display-italic text-accent">Atmospheric Depth</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
              Every IST 1947 case is hermetically sealed with synthetic O-ring gaskets and dry-chamber tested. Drag the depth slider to inspect simulated pressure resistance.
            </p>
          </div>

          <div className="mt-12 elev rounded-3xl border border-black/10 bg-white p-8 sm:p-12 shadow-sm">
            {/* Slider Control */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="mono text-xs uppercase tracking-widest text-slate font-semibold">Simulated Immersion Depth</span>
                <span className="mono text-2xl font-bold text-accent">{depthMeters} Metres ({Math.round(depthMeters * 3.28)} Ft)</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={depthMeters}
                onChange={(e) => setDepthMeters(Number(e.target.value))}
                className="h-3 w-full cursor-pointer appearance-none rounded-full bg-inkSoft accent-accent"
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
                <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold">Hydrostatic Pressure</span>
                <h4 className="mono mt-2 text-3xl font-bold text-chalk">{barPressure} Bar</h4>
                <p className="mt-1 font-sans text-xs text-graphite">Total dynamic water load on sapphire crystal</p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold">Gasket Integrity</span>
                <h4 className="mono mt-2 text-3xl font-bold text-emerald">100% Hermetic</h4>
                <p className="mt-1 font-sans text-xs text-graphite">Dual synthetic nitrile rubber crown barrier</p>
              </div>

              <div className="rounded-2xl border border-black/5 bg-inkSoft p-5">
                <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold">Collection Rating</span>
                <h4 className="display mt-2 text-2xl font-bold text-accent">
                  {depthMeters <= 50 ? "5 ATM Rated" : "10 ATM Rated"}
                </h4>
                <p className="mt-1 font-sans text-xs text-graphite">
                  {depthMeters <= 50 ? "Arka Collection" : "Vanya & Vijay Collections"}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-accent/20 bg-accent/[0.04] p-4 text-xs font-mono text-chalk">
              <span className="text-accent font-semibold">Activity Guidance:</span> {depthRatingLabel}
            </div>
          </div>
        </div>
      </div>

      {/* ─── INFOGRAPHIC 04: VANYA BIOME ELEVATION & TOPOGRAPHY ─── */}
      <div className="border-t border-black/10 bg-ink py-24 sm:py-32">
        <div className="mx-auto max-w-edge px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="eyebrow text-accent">Vanya Geographical Provenance</span>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Wilderness Biomes & <span className="display-italic text-accent">Dial Textures</span>
            </h2>
            <p className="font-sans text-base leading-relaxed text-graphite">
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
                      ? "border-accent bg-white shadow-md"
                      : "border-black/10 bg-white/60 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono text-xs uppercase tracking-wider text-accent font-semibold">{b.state}</span>
                    <span className="mono text-[10px] text-slate">{b.elevation}</span>
                  </div>
                  <h4 className="display mt-1 text-xl text-chalk font-semibold">{b.name}</h4>
                  <p className="font-sans text-xs text-graphite mt-1">{b.fauna}</p>
                </button>
              ))}
            </div>

            {/* Right: Detailed Biome Showcase */}
            <div className="lg:col-span-7">
              <div className="elev rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="eyebrow text-accent font-semibold">{currentBiome.state} Sanctuary</span>
                  <span className="mono text-xs text-chalk font-bold">{currentBiome.elevation}</span>
                </div>

                <h3 className="display mt-4 text-3xl text-chalk">
                  {currentBiome.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-black/5 bg-inkSoft p-4">
                    <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold block">Ecosystem & Habitat</span>
                    <p className="font-sans text-sm font-semibold text-chalk mt-0.5">{currentBiome.terrain}</p>
                  </div>

                  <div className="rounded-xl border border-black/5 bg-inkSoft p-4">
                    <span className="mono text-[10px] uppercase tracking-wider text-slate font-semibold block">Protected Wildlife Species</span>
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

      {/* ─── INFOGRAPHIC 05: COLLECTION COMPARATIVE MATRIX ─── */}
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
                      ? "bg-accent text-white font-semibold shadow-sm"
                      : "border border-black/10 bg-white/70 text-graphite hover:text-chalk"
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
                  className={`elev flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-4">
                      <div>
                        <span className="eyebrow text-accent">{col.variants}</span>
                        <h3 className="display text-3xl text-chalk font-semibold">{col.name}</h3>
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
                      <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Case Architecture</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.dimensions}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Dial Artistry</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.dialFinish}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Water Resistance</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-accent">{col.waterproof}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">Horological Calibre</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{col.movement}</span>
                      </div>
                      <div className="rounded-xl bg-inkSoft p-3 border border-black/5">
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
