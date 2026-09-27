"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { specs } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Specs() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".spec-col", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="specs" ref={root} className="bg-black text-chalk border-t border-white/10">
      <div className="mx-auto max-w-edge px-6 py-24 sm:px-10 md:py-32">
        <div className="mb-14">
          <span className="eyebrow text-accent">Technical Specifications</span>
          <h2 className="display mt-3 text-4xl sm:text-6xl text-chalk">
            Built to be <span className="display-italic text-accent">Understood</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {specs.map((col, i) => (
            <div key={col.name} className="spec-col elev rounded-3xl border border-white/10 bg-inkCard p-6">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="display text-2xl text-chalk">{col.name}</h3>
                <span className="mono text-xs uppercase tracking-widest text-accent">0{i + 1}</span>
              </div>

              <dl className="mb-6 divide-y divide-white/10">
                {col.rows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3 font-sans text-sm">
                    <dt className="text-slate">{k}</dt>
                    <dd className="font-semibold text-chalk">{v}</dd>
                  </div>
                ))}
              </dl>

              <div
                className="floaty elev relative aspect-square w-full overflow-hidden rounded-2xl bg-black border border-white/10"
                style={{ animationDelay: `${i * -2.1}s` }}
              >
                <img
                  src={col.image}
                  alt={col.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
