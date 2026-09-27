"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function OverlapScroll() {
  const containerRef = useRef(null);

  const cards = [
    {
      id: "reveal",
      eyebrow: "01 · The Horological Reveal",
      title: "Turned by Light",
      subtitle: "Sunray Guilloché & Sapphire Dome",
      description:
        "Every curve catches the light. Hand-finished 316L stainless steel, blued Devanagari numerals, and the continuous heartbeat of a 21,600 VPH automatic movement.",
      video: "/watch-reveal.mp4",
      poster: "/images/golden-hour_2.jpg",
      badge: "Calibre Miyota 82S7 · Automatic",
      specs: [
        { k: "Movement", v: "Automatic Self-Winding" },
        { k: "Frequency", v: "21,600 VPH (3Hz)" },
        { k: "Crystal", v: "Domed AR Sapphire" },
        { k: "Dial", v: "Sunray Guilloché" },
      ],
      linkText: "Explore Craftsmanship",
      linkHref: "/collections",
      bgGradient: "from-[#eef2fa] via-[#f6f8fd] to-[#ffffff]",
      accentColor: "#2c3d8f",
      tagline: "India's First Horological Automatic",
    },
    {
      id: "arka",
      eyebrow: "02 · Collection Arka",
      title: "The Konark Sundial",
      subtitle: "Shaped by Light, Shadow & Time",
      description:
        "Inspired by the 13th-century Konark Sun Temple in Odisha. Five timepieces translating the changing moods of the day from Golden Hour to Twilight.",
      video: "/arka-motion.mp4",
      poster: "/images/golden-hour_1.jpg",
      badge: "Launching 30 September · ₹9,999",
      specs: [
        { k: "Inspiration", v: "Konark Sun Temple" },
        { k: "Editions", v: "5 Unique Moods" },
        { k: "Subdial", v: "24-Spoke Small Seconds" },
        { k: "Water Resist", v: "5 ATM (50 Metres)" },
      ],
      linkText: "Explore Arka Collection",
      linkHref: "/collections",
      bgGradient: "from-[#fdf3ec] via-[#fbeade] to-[#ffffff]",
      accentColor: "#2c3d8f",
      tagline: "Solar Chronometry Reimagined",
    },
    {
      id: "vanya",
      eyebrow: "03 · Collection Vanya",
      title: "India's Wild Heart",
      subtitle: "Ranthambore, Gir, Jawai & Kaziranga",
      description:
        "An ode to India's most untamed wilderness. Bold, adventure-ready mechanical watches celebrating the tiger, Asiatic lion, leopard, and one-horned rhino.",
      video: "/vanya-motion.mp4",
      poster: "/images/ranthambore-bagh_1.jpg",
      badge: "Launching 15 October · ₹9,999",
      specs: [
        { k: "Sanctuaries", v: "4 Wild Ecosystems" },
        { k: "Chassis", v: "41mm Tactical 316L" },
        { k: "Water Resist", v: "10 ATM (100 Metres)" },
        { k: "Strap", v: "Reinforced Italian Leather" },
      ],
      linkText: "Explore Vanya Collection",
      linkHref: "/collections",
      bgGradient: "from-[#eef8f2] via-[#e4f3ea] to-[#ffffff]",
      accentColor: "#1f7a52",
      tagline: "Wilderness Built to Keep",
    },
    {
      id: "vijay",
      eyebrow: "04 · Collection Vijay",
      title: "Five Times, Time Stopped",
      subtitle: "Immortal Nights in Indian Cricket",
      description:
        "Built around five historic World Championship victories: 1983, 2007, 2011, 2024, and 2026. Strictly limited to 100 individually numbered pieces worldwide.",
      video: "/vijay-motion.mp4",
      poster: "/images/2026_1.jpg",
      badge: "Launching 30 October · ₹19,470",
      specs: [
        { k: "Allocation", v: "Strictly 100 Pieces (#001–#100)" },
        { k: "Dial Art", v: "Carbon & Jersey Enamel" },
        { k: "Rotor", v: "Gold-Plated Skeleton" },
        { k: "Clasp", v: "Solid Steel Deployant" },
      ],
      linkText: "Explore Vijay Collection",
      linkHref: "/collections",
      bgGradient: "from-[#eaf3fd] via-[#dbe9fb] to-[#ffffff]",
      accentColor: "#1878d4",
      tagline: "Limited Numbered Collector's Edition",
    },
    {
      id: "difference",
      eyebrow: "05 · The IST Difference",
      title: "Why an IST 1947",
      subtitle: "Four Pillars of Provenance",
      description:
        "Built from the ground up to redefine Indian horology. Every watch comes individually numbered, covered by a 2-Year Digital Warranty, and delivered via 100% insured transit.",
      video: null,
      poster: "/images/golden-hour_2.jpg",
      badge: "The Benchmark of Indian Horology",
      specs: [
        { k: "01 Inspired", v: "Rooted in Culture & History" },
        { k: "02 Numbered", v: "Individually Serial Stamped" },
        { k: "03 Warranty", v: "2-Year Full Digital Care" },
        { k: "04 Shipping", v: "100% Insured Nationwide" },
      ],
      linkText: "Read Our Full Story",
      linkHref: "/story",
      bgGradient: "from-[#f4f5f8] via-[#ecEFF5] to-[#ffffff]",
      accentColor: "#2c3d8f",
      tagline: "The India We Know, Made Worth Keeping",
    },
  ];

  useGSAP(
    () => {
      const cardElements = gsap.utils.toArray(".overlap-panel");

      cardElements.forEach((card, index) => {
        if (index === 0) return; // First card is base

        const prevCard = cardElements[index - 1];

        // Hardware-accelerated GPU opacity and transform scrub
        if (prevCard) {
          gsap.to(prevCard.querySelector(".overlap-inner"), {
            scale: 0.94,
            opacity: 0.45,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="experience" ref={containerRef} className="relative bg-ink">
      {/* Section Header */}
      <div className="relative z-10 border-t border-black/10 bg-inkSoft px-6 py-16 text-center sm:px-10">
        <span className="eyebrow text-accent">The Stacking Experience</span>
        <h2 className="display mt-2 text-3xl sm:text-4xl lg:text-5xl text-chalk">
          Precision Engineering & <span className="display-italic text-accent">Collections</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-graphite">
          Scroll down to explore the horological craftsmanship, iconic narratives, and limited editions.
        </p>
      </div>

      {/* Stacking Sticky Overlap Deck */}
      <div className="relative pb-24">
        {cards.map((card, idx) => (
          <div
            key={card.id}
            className="overlap-panel sticky flex min-h-[92vh] w-full items-center justify-center"
            style={{
              top: `${Math.min(60 + idx * 16, 120)}px`,
              zIndex: idx + 10,
              transform: "translate3d(0, 0, 0)",
            }}
          >
            {/* The Overlapping Card Sheet */}
            <div
              className={`overlap-inner overlap-card relative mx-auto flex min-h-[85vh] w-full max-w-edge flex-col justify-between rounded-t-[2.5rem] sm:rounded-t-[3.5rem] border-t border-black/15 bg-gradient-to-b ${card.bgGradient} p-6 sm:p-10 lg:p-14 shadow-2xl transition-transform duration-200`}
              style={{
                transform: "translate3d(0, 0, 0)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Top Bar of the Card */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white shadow-md"
                    style={{ backgroundColor: card.accentColor }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="eyebrow text-chalk">{card.eyebrow}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-xs text-graphite">{card.tagline}</span>
                  <span
                    className="rounded-full border px-3.5 py-1 font-mono text-xs font-semibold"
                    style={{
                      borderColor: `${card.accentColor}40`,
                      backgroundColor: `${card.accentColor}15`,
                      color: card.accentColor,
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Main Content: Left Details + Right Media */}
              <div className="my-auto grid gap-8 py-6 lg:grid-cols-12 lg:items-center lg:gap-14">
                {/* Left Column: Typography & Specs */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <span className="mono text-xs uppercase tracking-widest text-slate">{card.subtitle}</span>
                    <h3 className="display mt-2 text-3xl sm:text-5xl lg:text-6xl text-chalk leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="font-sans text-base leading-relaxed text-graphite sm:text-lg">
                    {card.description}
                  </p>

                  {/* 4-Spec Grid */}
                  <div className="grid grid-cols-2 gap-3 border-t border-black/10 pt-4">
                    {card.specs.map((s) => (
                      <div key={s.k} className="rounded-xl border border-black/5 bg-black/[0.03] p-3">
                        <span className="mono block text-[10px] uppercase tracking-wider text-slate">{s.k}</span>
                        <span className="mt-0.5 block font-sans text-xs font-semibold text-chalk">{s.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      href={card.linkHref}
                      className="group inline-flex items-center gap-3 rounded-full border border-black/15 bg-black/[0.03] px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-chalk transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black"
                    >
                      <span>{card.linkText}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </Link>
                  </div>
                </div>

                {/* Right Column: High-Resolution Video or Artwork */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="elev relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-3xl border border-black/10 bg-black/60">
                    {card.video ? (
                      <LazyVideo
                        src={card.video}
                        poster={card.poster}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <img
                        src={card.poster}
                        alt={card.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                      <span className="mono text-xs text-white/90">{card.title}</span>
                      <span className="mono text-[10px] uppercase tracking-wider text-accent">IST 1947 Atelier</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="flex items-center justify-between border-t border-black/10 pt-4 text-xs font-mono">
                <span className="text-slate">Scroll to reveal next chapter</span>
                <span className="text-accent font-semibold">0{idx + 1} / 05</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
