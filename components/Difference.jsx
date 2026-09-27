"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { difference } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Difference() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".diff-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-black text-chalk">
      <div className="mx-auto max-w-edge px-6 py-24 sm:px-10 md:py-28">
        <div className="mb-14">
          <p className="eyebrow text-accent">{difference.eyebrow}</p>
          <h2 className="display mt-3 text-5xl sm:text-6xl">{difference.title}</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {difference.items.map((it) => (
            <div
              key={it.n}
              className="diff-item group relative overflow-hidden bg-ink p-8 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              {/* accent line grows on hover */}
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
              <span className="font-mono text-xs text-accent">{it.n}</span>
              <h3 className="mt-6 text-lg font-medium transition-transform duration-300 group-hover:-translate-y-1">
                {it.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
