"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { catalog } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CollectionCatalog() {
  const [filter, setFilter] = useState("all");
  const root = useRef(null);

  const filterOptions = [
    { id: "all", label: "All Masterpieces (14)" },
    { id: "Arka", label: "Arka · Solar (5)" },
    { id: "Vanya", label: "Vanya · Wildlife (4)" },
    { id: "Vijay", label: "Vijay · Dynasty (5)" },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        ".cat-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        }
      );
    },
    { scope: root, dependencies: [filter] }
  );

  const filteredGroups =
    filter === "all"
      ? catalog.groups
      : catalog.groups.filter((g) => g.name.toLowerCase() === filter.toLowerCase());

  return (
    <div ref={root} className="bg-ink text-chalk border-t border-black/10">
      <div className="mx-auto max-w-edge px-6 py-20 sm:px-10 sm:py-28">
        {/* Filter Navigation Bar */}
        <div className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  filter === opt.id
                    ? "border border-accent bg-accent text-white font-bold shadow-sm"
                    : "border border-black/10 bg-white/70 text-graphite hover:border-black/20 hover:bg-white hover:text-chalk"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <span className="mono text-xs text-slate">
            Miyota 82S7 Automatic Calibre · Individually Numbered
          </span>
        </div>

        {/* Collections Groups */}
        {filteredGroups.map((g) => (
          <section key={g.name} className="cat-group mb-24 last:mb-0">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
              <div>
                <span className="eyebrow text-accent font-semibold">{g.launch}</span>
                <h2 className="display mt-1 text-4xl sm:text-5xl lg:text-6xl text-chalk">
                  {g.name} <span className="display-italic text-accent">Collection</span>
                </h2>
                <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-graphite sm:text-base">
                  {g.tagline}
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-right shadow-sm">
                <span className="mono text-[10px] uppercase tracking-widest text-slate block">Starting Price</span>
                <p className="mt-0.5 font-mono text-lg font-bold text-accent">{g.price}</p>
                <span className="mono text-[10px] text-graphite block">Miyota 82S7 Automatic</span>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {g.items.map((item, idx) => (
                <article
                  key={item.name}
                  className="cat-card group elev rounded-3xl border border-black/10 bg-white p-4 transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-inkSoft">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/80 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Automatic · {g.price}
                    </span>

                    <span className="absolute top-3 right-3 rounded-full border border-black/10 bg-white/90 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent shadow-sm">
                      {g.name}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="display text-lg text-chalk group-hover:text-accent transition-colors font-bold">
                        {item.name}
                      </h3>
                      <p className="mono text-[11px] text-slate uppercase tracking-wider mt-0.5">
                        21 Jewels · Domed Sapphire
                      </p>
                    </div>
                    <span className="mono text-sm font-bold text-chalk">{g.price}</span>
                  </div>

                  <div className="mt-4 border-t border-black/10 pt-3 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="mono text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                    >
                      <span>Reserve</span>
                      <span>→</span>
                    </Link>
                    <span className="mono text-[10px] text-slate">Serial #001–#100</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
