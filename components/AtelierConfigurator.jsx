"use client";

import { useState } from "react";
import Link from "next/link";

export default function AtelierConfigurator() {
  const [selectedWatch, setSelectedWatch] = useState("arka");
  const [selectedStrap, setSelectedStrap] = useState("tan");
  const [customInitials, setCustomInitials] = useState("IST");
  const [customSerial, setCustomSerial] = useState("1947");
  const [viewMode, setViewMode] = useState("watch"); // 'watch' or 'caseback'

  const watches = {
    arka: {
      name: "Arka · Golden Hour",
      collection: "Arka Collection",
      price: "₹9,999",
      image: "/images/golden-hour_1.jpg",
      casebackImage: "/images/golden-hour_2.jpg",
      accentColor: "#2c3d8f",
      description: "Radial sunburst Guilloché dial inspired by the Konark Sun Temple with 24-spoke small seconds.",
      calibre: "Miyota 82S7 Automatic · 21 Jewels",
      waterproof: "5 ATM (50 Metres)",
    },
    vanya: {
      name: "Vanya · Ranthambore Bagh",
      collection: "Vanya Collection",
      price: "₹9,999",
      image: "/images/ranthambore-bagh_1.jpg",
      casebackImage: "/images/ranthambore-bagh_2.jpg",
      accentColor: "#34d399",
      description: "Tactical deciduous terrain dial celebrating India's wild sanctuaries with high-durability 316L steel.",
      calibre: "Miyota 82S7 Automatic · 21 Jewels",
      waterproof: "10 ATM (100 Metres)",
    },
    vijay: {
      name: "Vijay · 2026 Legacy",
      collection: "Vijay Collection",
      price: "₹19,470",
      image: "/images/2026_1.jpg",
      casebackImage: "/images/2026_2.jpg",
      accentColor: "#60a5fa",
      description: "Midnight carbon sapphire dial commemorating India's landmark world cricket championships.",
      calibre: "Miyota 82S7 Automatic · Gold Skeleton Rotor",
      waterproof: "10 ATM (100 Metres)",
    },
  };

  const straps = [
    {
      id: "tan",
      name: "Saddle Tan Full-Grain",
      material: "Tuscan Vegetable-Tanned Italian Leather",
      tone: "#9d6537",
      tag: "Heritage Craft",
    },
    {
      id: "black",
      name: "Midnight Obsidian Calfskin",
      material: "Satin-Polished Italian Calfskin Leather",
      tone: "#f7f6f3",
      tag: "Formal Dress",
    },
    {
      id: "canvas",
      name: "Tactical Mil-Spec Canvas",
      material: "High-Tensile Cordura with Leather Backing",
      tone: "#3f4c39",
      tag: "Adventure Grade",
    },
    {
      id: "mesh",
      name: "316L Marine Mesh Bracelet",
      material: "Solid Stainless Steel with Butterfly Deployant",
      tone: "#8da0b6",
      tag: "Waterproof Steel",
    },
  ];

  const currentWatch = watches[selectedWatch];
  const currentStrap = straps.find((s) => s.id === selectedStrap);

  return (
    <section className="border-t border-black/10 bg-ink py-24 sm:py-32 text-chalk">
      <div className="mx-auto max-w-edge px-6 sm:px-10">
        {/* Header with Mode Switcher */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-black/10 pb-8">
          <div>
            <span className="eyebrow text-accent">Interactive Atelier Studio</span>
            <h2 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Bespoke Configuration <span className="display-italic text-accent">& Personalization</span>
            </h2>
            <p className="mt-3 font-sans text-base text-graphite max-w-xl">
              Customize your timepiece with curated straps and personal laser-engraved caseback typography.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-inkSoft p-1 backdrop-blur-md">
            <button
              onClick={() => setViewMode("watch")}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                viewMode === "watch"
                  ? "bg-accent text-white font-bold shadow-[0_0_15px_rgba(44,61,143,0.3)]"
                  : "text-graphite hover:text-chalk"
              }`}
            >
              Dial & Strap View
            </button>
            <button
              onClick={() => setViewMode("caseback")}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                viewMode === "caseback"
                  ? "bg-accent text-white font-bold shadow-[0_0_15px_rgba(44,61,143,0.3)]"
                  : "text-graphite hover:text-chalk"
              }`}
            >
              Caseback Engraving
            </button>
          </div>
        </div>

        {/* Configurator 2-Column Showcase */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Showcase Card */}
          <div className="lg:col-span-6">
            <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-b from-[#eef1f8] to-[#ffffff] p-6 sm:p-10 flex items-center justify-center">
              {viewMode === "watch" ? (
                /* Dial & Strap Showcase */
                <div className="relative flex flex-col items-center">
                  <div className="floaty relative aspect-square w-[280px] sm:w-[340px] overflow-hidden rounded-3xl border border-black/10 bg-black shadow-2xl">
                    <img
                      src={currentWatch.image}
                      alt={currentWatch.name}
                      className="h-full w-full object-cover transition-all duration-500"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Strap Material Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-black/10 bg-black/80 px-3.5 py-2 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-3 w-3 rounded-full border border-black"
                          style={{ backgroundColor: currentStrap.tone }}
                        />
                        <span className="mono text-[11px] text-white font-semibold">{currentStrap.name}</span>
                      </div>
                      <span className="mono text-[10px] uppercase tracking-wider text-[#b9c8f2]">{currentStrap.tag}</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Laser Engraved Caseback Simulation */
                <div className="relative flex flex-col items-center justify-center">
                  <div className="elev relative flex h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] items-center justify-center rounded-full border-4 border-black/15 bg-[radial-gradient(circle_at_50%_50%,#f1f3f9,#ffffff_85%)] p-6 shadow-2xl">
                    {/* Concentric Horological Rings */}
                    <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                      <circle cx="150" cy="150" r="142" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                      <circle cx="150" cy="150" r="132" fill="none" stroke="#2c3d8f" strokeWidth="1" strokeDasharray="4 6" className="spin-slow" />
                      <circle cx="150" cy="150" r="88" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    </svg>

                    {/* Laser Engraved Inscription */}
                    <div className="relative z-10 text-center space-y-1.5 px-4">
                      <span className="eyebrow text-accent text-[10px] tracking-[0.28em] block">
                        INDIAN STANDARD TIME
                      </span>
                      <h4 className="display text-3xl font-bold text-chalk tracking-widest uppercase mt-1">
                        {customInitials || "IST"}
                      </h4>
                      <div className="my-2 flex items-center justify-center gap-2">
                        <span className="h-px w-6 bg-accent/40" />
                        <span className="mono text-xs font-bold text-accent">SERIAL NO. #{customSerial || "1947"}</span>
                        <span className="h-px w-6 bg-accent/40" />
                      </div>
                      <span className="mono text-[9px] uppercase tracking-widest text-slate block">
                        316L STEEL · 21 JEWELS · SAPPHIRE
                      </span>
                      <span className="mono text-[8px] uppercase tracking-wider text-graphite/60 block pt-1">
                        MADE IN INDIA · EST. 1947
                      </span>
                    </div>
                  </div>
                  <span className="mono mt-4 text-xs text-accent">Personalized Laser-Etched Caseback Preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Select Model */}
            <div>
              <span className="mono text-xs uppercase tracking-widest text-slate">01 · Choose Timepiece Base</span>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {Object.entries(watches).map(([key, w]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedWatch(key)}
                    className={`rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                      selectedWatch === key
                        ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(44,61,143,0.2)]"
                        : "border-black/10 bg-inkSoft hover:border-black/15"
                    }`}
                  >
                    <span className="mono block text-[10px] text-slate uppercase">{w.collection.split(" ")[0]}</span>
                    <h4 className="mt-1 font-sans text-xs font-bold text-chalk truncate">{w.name.split("·")[1]}</h4>
                    <span className="mono mt-1 block text-[11px] text-accent font-semibold">{w.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Strap */}
            <div>
              <span className="mono text-xs uppercase tracking-widest text-slate">02 · Choose Hand-Finished Strap</span>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {straps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedStrap(s.id)}
                    className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                      selectedStrap === s.id
                        ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(44,61,143,0.2)]"
                        : "border-black/10 bg-inkSoft hover:border-black/15"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="h-3.5 w-3.5 rounded-full border border-black/40 shadow-sm"
                        style={{ backgroundColor: s.tone }}
                      />
                      <span className="mono text-[9px] uppercase tracking-wider text-accent">{s.tag}</span>
                    </div>
                    <h5 className="mt-2 font-sans text-xs font-bold text-chalk">{s.name}</h5>
                    <p className="mt-0.5 font-sans text-[11px] text-graphite line-clamp-1">{s.material}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Laser Engraving Inputs */}
            <div>
              <span className="mono text-xs uppercase tracking-widest text-slate">03 · Complimentary Laser Inscription</span>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="mono text-[10px] uppercase tracking-wider text-graphite block mb-1">
                    Your Initials (Max 6 Chars)
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={customInitials}
                    onChange={(e) => setCustomInitials(e.target.value.toUpperCase())}
                    placeholder="e.g. A.R."
                    className="w-full rounded-xl border border-black/10 bg-inkSoft px-4 py-2.5 font-mono text-sm uppercase text-chalk focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mono text-[10px] uppercase tracking-wider text-graphite block mb-1">
                    Serial / Year Inscription
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={customSerial}
                    onChange={(e) => setCustomSerial(e.target.value)}
                    placeholder="1947"
                    className="w-full rounded-xl border border-black/10 bg-inkSoft px-4 py-2.5 font-mono text-sm text-accent font-bold focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Config Summary & Enquiry CTA */}
            <div className="rounded-2xl border border-black/10 bg-inkCard p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="mono text-[10px] uppercase tracking-wider text-slate">Configured Timepiece</span>
                <h4 className="display text-lg text-chalk mt-0.5">{currentWatch.name}</h4>
                <p className="mono text-xs text-accent mt-0.5">
                  {currentStrap.name} · Serial #{customSerial}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white transition-transform hover:scale-105 shadow-md"
              >
                <span>Reserve Piece</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
