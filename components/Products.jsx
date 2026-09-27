"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { products } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Products() {
  const root = useRef(null);

  useGSAP(
    () => {
      // reveal
      gsap.from(".prod-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });

      // 3D tilt on hover (desktop / fine pointer only)
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (!fine) return;

      const cards = gsap.utils.toArray(".prod-card");
      const cleanups = cards.map((card) => {
        const rotX = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3" });
        const rotY = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3" });
        const img = card.querySelector("img");

        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          rotY(px * 10);
          rotX(-py * 10);
        };
        const onEnter = () => gsap.to(img, { scale: 1.06, duration: 0.5, ease: "power2.out" });
        const onLeave = () => {
          rotX(0);
          rotY(0);
          gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);
        return () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        };
      });
      return () => cleanups.forEach((fn) => fn());
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-ink text-chalk">
      <div className="mx-auto max-w-edge px-6 py-24 sm:px-10 md:py-32">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <span className="eyebrow text-accent">{products.eyebrow}</span>
            <h2 className="display mt-2 text-4xl sm:text-5xl lg:text-6xl text-chalk">
              Pieces People <span className="display-italic text-accent">Reach For</span>
            </h2>
          </div>
          <Link
            href="/collections"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-graphite transition-colors hover:text-chalk"
          >
            <span>Explore All Pieces</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3" style={{ perspective: "1000px" }}>
          {products.items.map((p) => (
            <Link
              key={p.name}
              href="/collections"
              className="prod-card elev group cursor-pointer rounded-3xl border border-black/10 bg-inkCard p-4 [transform-style:preserve-3d] transition-colors hover:border-accent/40"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-inkSoft">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute right-3 top-3 rounded-full border border-black/10 bg-black/70 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                  {p.price}
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="display text-xl text-chalk group-hover:text-accent transition-colors">{p.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate mt-0.5">{p.collection} Edition</p>
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-inkSoft text-accent transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
