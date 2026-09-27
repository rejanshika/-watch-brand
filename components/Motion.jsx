"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Motion() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".mo-text > *", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
      gsap.from(".mo-media", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 76%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-black">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-edge items-center gap-12 px-6 py-24 sm:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* video */}
        <div className="mo-media order-1 mx-auto w-full max-w-[380px] lg:order-1">
          <div className="floaty elev overflow-hidden rounded-[2rem] border border-white/10">
            <LazyVideo src="/showcase-splash.mp4" className="block h-auto w-full" />
          </div>
        </div>

        {/* copy */}
        <div className="mo-text order-2 lg:order-2">
          <p className="eyebrow text-accent">In Motion</p>
          <h2 className="display mt-3 text-5xl text-chalk sm:text-7xl">
            Poured, not <span className="display-italic text-accent">printed</span>
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-graphite">
            Precision you can feel — every case machined, finished and tested by
            hand, then run through hundreds of hours of quality checks.
          </p>
          <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3">
            {["316L steel", "Sapphire crystal", "5 ATM water-resistant", "Hand-assembled"].map(
              (p) => (
                <li
                  key={p}
                  className="flex items-center gap-2 border-t border-white/10 pt-3 text-sm text-chalk"
                >
                  <span className="text-accent">—</span>
                  {p}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
