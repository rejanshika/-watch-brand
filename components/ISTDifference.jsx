"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { difference } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "The IST Difference" — four brand promises, each with the brand's own
 * line-art icon. Centred and airy, the way the flagship site runs it.
 */
export default function ISTDifference() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".diff-col", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-ink text-chalk">
      <div className="mx-auto max-w-edge px-6 py-24 sm:px-10 md:py-28">
        <h2 className="display text-center text-4xl sm:text-5xl md:text-6xl">
          {difference.eyebrow}
        </h2>

        {/* Hairline rule with a centre dot */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-black/20" />
          <span className="h-1 w-1 rounded-full bg-black/40" />
          <span className="h-px w-20 bg-black/20" />
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {difference.items.map((it) => (
            <div key={it.n} className="diff-col flex flex-col items-center text-center">
              <img
                src={it.icon}
                alt=""
                aria-hidden="true"
                className="h-16 w-16 object-contain"
              />
              <h3 className="display mt-6 text-lg text-chalk">{it.title}</h3>
              <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-graphite">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
