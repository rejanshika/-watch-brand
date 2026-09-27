"use client";

import { useState } from "react";
import Link from "next/link";

export default function AtelierConfigurator() {
  const [selectedWatch, setSelectedWatch] = useState("arka");
  const [selectedStrap, setSelectedStrap] = useState("tan");
  const [customInitials, setCustomInitials] = useState("IST");
  const [customSerial, setCustomSerial] = useState("047");
  const [activeTab, setActiveTab] = useState("strap"); // 'strap' or 'engrave'

  const watches = {
    arka: {
      name: "Arka · Golden Hour",
      collection: "Arka Collection",
      price: "₹9,999",
      image: "/images/golden-hour_1.jpg",
      caseBack: "/images/golden-hour_2.jpg",
      color: "#dfb15b",
      theme: "Sunray Copper Guilloché with 24-Spoke Small Seconds",
    },
    vanya: {
      name: "Vanya · Ranthambore",
      collection: "Vanya Collection",
      price: "₹9,999",
      image: "/images/ranthambore-bagh_1.jpg",
      caseBack: "/images/ranthambore-bagh_2.jpg",
      color: "#34d399",
      theme: "Deciduous Forest Terrain Texture with 10 ATM Tactical Chassis",
    },
    vijay: {
      name: "Vijay · 2026 Legacy",
      collection: "Vijay Collection",
      price: "₹19,470",
      image: "/images/2026_1.jpg",
      caseBack: "/images/2026_2.jpg",
      color: "#60a5fa",
      theme: "Midnight Sapphire Carbon with Gold-Plated Skeleton Rotor",
    },
  };

  const straps = [
    {
      id: "tan",
      name: "Saddle Tan Full-Grain",
      material: "Italian Tuscan Vegetable-Tanned Leather",
      tone: "#925e34",
      tag: "Heritage Classic",
    },
    {
      id: "black",
      name: "Midnight Obsidian Calfskin",
      material: "Satin-Polished Matte Black Leather",
      tone: "#171717",
      tag: "Formal Dress",
    },
    {
      id: "canvas",
      name: "Tactical Mil-Spec Canvas",
      material: "High-Tensile Cordura with Leather Backing",
      tone: "#44503e",
      tag: "Adventure Grade",
    },
    {
      id: "mesh",
      name: "316L Marine Mesh Bracelet",
      material: "Solid Stainless Steel with Butterfly Deployant",
      tone: "#94a3b8",
      tag: "Waterproof Steel",
    },
  ];

  const currentWatch = watches[selectedWatch];
  const currentStrap = straps.find((s) => s.id === selectedStrap);

  return (
    <section className="border-t border-white/10 bg-black py-24 sm:py-32 text-chalk">
      <div className="mx-auto max-w-edge px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-white/10 pb-8">
          <div>
            <span className="eyebrow text-accent">Interactive Atelier Studio</span>
            <h2 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Bespoke Configuration <span className="display-italic text-accent">& Engraving</span>
            </h2>
            <p className="mt-3 font-sans text-base text-graphite max-w-xl">
              Preview your timepiece with tailored straps and custom caseback laser-engraving (#001–#100).
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("strap")}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeTab === "strap"
                  ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]"
                  : "border border-white/10 bg-white/5 text-graphite hover:text-chalk"
              }`}
            >
              Strap Studio
            </button>
            <button
              onClick={() => setActiveTab("engrave")}
              className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeTab === "engrave"
                  ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(223,177,91,0.3)]"
                  : "border border-white/10 bg-white/5 text-graphite hover:text-chalk"
              }`}
            >
              Laser Engraving
            </button>
          </div>
        </div>

        {/* Configurator Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Visual Preview Card */}
          <div className="lg:col-span-6">
            <div className="elev relative aspect-square w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#131622] to-[#08090d] p-8 flex items-center justify-center">
              {activeTab === "strap" ? (
                <div className="relative flex flex-col items-center">
                  <div className="floaty relative aspect-square w-[300px] sm:w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                    <img
                      src={currentWatch.image}
                      alt={currentWatch.name}
                      className="h-full w-full object-cover transition-all duration-500"
                    />
                    {/* Strap Color Tint Indicator Ring */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-4 border-t border-black/40"
                      style={{ backgroundColor: currentStrap.tone }}
                    />
                  </div>

                  {/* Live Spec Overlay */}
                  <div className="mt-4 flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full border border-black"
                      style={{ backgroundColor: currentStrap.tone }}
                    />
                    <span className="mono text-xs text-chalk font-semibold">{currentStrap.name}</span>
                  </div>
                </div>
              ) : (
                /* Laser Engraved Caseback Interactive Vector Simulation */
                <div className="relative flex flex-col items-center justify-center">
                  <div className="elev relative flex h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] items-center justify-center rounded-full border-4 border-white/20 bg-[radial-gradient(circle_at_50%_50%,#2a3040,#0d1017_85%)] p-6 shadow-2xl">
                    {/* Concentric Horological Caseback Rings */}
                    <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
                      <circle cx="150" cy="150" r="140" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                      <circle cx="150" cy="150" r="130" fill="none" stroke="#dfb15b" strokeWidth="1" strokeDasharray="4 6" className="spin-slow" />
                      <circle cx="150" cy="150" r="85" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    </svg>

                    {/* Laser Engraved Text Fields */}
                    <div className="relative z-10 text-center space-y-1.5">
                      <span className="eyebrow text-accent text-[10px] tracking-[0.3em] block">
                        INDIAN STANDARD TIME
                      </span>
                      <h4 className="display text-3xl font-bold text-chalk tracking-widest uppercase">
                        {customInitials || "IST"}
                      </h4>
                      <div className="my-2 flex items-center justify-center gap-2">
                        <span className="h-px w-8 bg-accent/40" />
                        <span className="mono text-xs font-bold text-accent">EDITION #{customSerial || "001"} / 100</span>
                        <span className="h-px w-8 bg-accent/40" />
                      </div>
                      <span className="mono text-[9px] uppercase tracking-widest text-slate block">
                        316L STEEL · 21 JEWELS · SAPPHIRE
                      </span>
                      <span className="mono text-[8px] uppercase tracking-wider text-graphite/60 block pt-1">
                        MADE IN INDIA · EST. 1947
                      </span>
                    </div>
                  </div>
                  <span className="mono mt-4 text-xs text-accent">Live Laser-Etched Caseback Simulation</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Pick Base Model */}
            <div>
              <span className="mono text-xs uppercase tracking-widest text-slate">Step 01 · Select Timepiece Model</span>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                {Object.entries(watches).map(([key, w]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedWatch(key)}
                    className={`rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                      selectedWatch === key
                        ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(223,177,91,0.2)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <span className="mono block text-[10px] text-slate uppercase">{w.collection.split(" ")[0]}</span>
                    <span className="mt-1 block font-sans text-xs font-bold text-chalk truncate">{w.name.split("·")[1]}</span>
                    <span className="mono mt-1 block text-[11px] text-accent font-semibold">{w.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "strap" ? (
              /* Strap Selection */
              <div>
                <span className="mono text-xs uppercase tracking-widest text-slate">Step 02 · Select Atelier Strap</span>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {straps.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedStrap(s.id)}
                      className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                        selectedStrap === s.id
                          ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(223,177,91,0.2)]"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="h-4 w-4 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: s.tone }}
                        />
                        <span className="mono text-[9px] uppercase tracking-wider text-accent">{s.tag}</span>
                      </div>
                      <h4 className="mt-2 font-sans text-xs font-bold text-chalk">{s.name}</h4>
                      <p className="mt-1 font-sans text-[11px] text-graphite line-clamp-1">{s.material}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Caseback Engraving Inputs */
              <div className="space-y-4">
                <span className="mono text-xs uppercase tracking-widest text-slate">Step 02 · Personalize Laser Inscription</span>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mono text-[11px] uppercase tracking-wider text-graphite block mb-1.5">
                      Collector Initials (Max 6 Chars)
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={customInitials}
                      onChange={(e) => setCustomInitials(e.target.value.toUpperCase())}
                      placeholder="e.g. A.R."
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-base uppercase text-chalk focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mono text-[11px] uppercase tracking-wider text-graphite block mb-1.5">
                      Preferred Serial Number (#001–#100)
                    </label>
                    <input
                      type="text"
                      maxLength={3}
                      value={customSerial}
                      onChange={(e) => setCustomSerial(e.target.value)}
                      placeholder="047"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 font-mono text-base text-accent font-bold focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>
                <p className="font-sans text-xs text-slate">
                  * Complimentary laser serialization executed by our master horologist upon reservation.
                </p>
              </div>
            )}

            {/* Config Summary & Enquiry Link */}
            <div className="rounded-2xl border border-white/10 bg-inkCard p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="mono text-[10px] uppercase tracking-wider text-slate">Configured Timepiece</span>
                <h4 className="display text-lg text-chalk mt-0.5">{currentWatch.name}</h4>
                <p className="mono text-xs text-accent mt-0.5">
                  {currentStrap.name} · Serial #{customSerial}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 shadow-md"
              >
                <span>Reserve Custom Piece</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
