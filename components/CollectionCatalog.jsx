"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { catalog } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CollectionCatalog() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".cat-group").forEach((group) => {
        gsap.from(group.querySelectorAll(".cat-card"), {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: group, start: "top 80%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="bg-concrete text-black">
      <div className="mx-auto max-w-edge px-6 py-24 sm:px-10">
        {catalog.groups.map((g) => (
          <section key={g.name} className="cat-group mb-28 last:mb-0">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/15 pb-6">
              <div>
                <span className="eyebrow text-accentMuted">{g.launch}</span>
                <h2 className="display mt-1 text-5xl sm:text-6xl text-black">{g.name}</h2>
                <p className="mt-2 max-w-lg font-sans text-sm text-black/70">{g.tagline}</p>
              </div>
              <div className="text-right">
                <span className="mono text-xs uppercase tracking-widest text-black/50">MSRP Pricing</span>
                <p className="mt-1 font-mono text-base font-bold text-black">from {g.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
              {g.items.map((item, idx) => (
                <article key={item.name} className="cat-card group">
                  <div
                    className="floaty elev-light relative aspect-square w-full overflow-hidden rounded-2xl bg-paper border border-black/5"
                    style={{ animationDelay: `${idx * -1.7}s` }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-2.5 py-0.5 font-mono text-[10px] text-white backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Automatic · {g.price}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-black group-hover:text-accentMuted transition-colors">{item.name}</h3>
                      <p className="mono text-[11px] text-black/60 uppercase tracking-wider">{g.name} Edition</p>
                    </div>
                    <span className="mono text-xs font-bold text-black">{g.price}</span>
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
