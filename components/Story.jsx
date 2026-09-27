"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { story } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Story() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".story-lead > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".story-col", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".story-cols-grid", start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="story" ref={root} className="relative bg-ink text-chalk border-t border-black/10">
      {/* Editorial Hero Statement */}
      <div className="relative flex min-h-[44vh] w-full items-center overflow-hidden bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,#f3eee4,#faf8f5_80%)]">
        <div className="story-lead relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <span className="eyebrow text-accent">{story.eyebrow}</span>
          <h2 className="display mt-4 text-4xl text-chalk sm:text-6xl lg:text-7xl leading-[1.06]">
            {story.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-graphite sm:text-lg">
            {story.body}
          </p>
        </div>
      </div>

      {/* Dual Editorial Chronicle */}
      <div className="mx-auto max-w-edge px-6 py-20 sm:px-10">
        <div className="story-cols-grid grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Column 01: The Philosophy of Indian Time */}
          <article className="story-col rounded-3xl border border-black/10 bg-inkCard p-8 sm:p-10 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <span className="mono text-xs uppercase tracking-widest text-accent font-semibold">
                Chronicle 01 · Vedic & Solar
              </span>
              <span className="mono text-xs text-slate">Ancient Horology</span>
            </div>

            <h3 className="display mt-6 text-3xl sm:text-4xl text-chalk">
              Time as a <span className="display-italic text-accent">Celestial Cycle</span>
            </h3>

            <p className="mt-4 font-sans text-sm leading-relaxed text-graphite sm:text-base">
              Long before European mechanical escapements, India measured time not as a cold linear tick, but as the cosmic dance of the sun across the 24 stone-carved spokes of the 13th-century Konark Sun Temple in Odisha.
            </p>

            <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
              Each day was divided into eight distinct <span className="font-semibold text-chalk">Prahars</span> (3-hour periods), marking the subtle shifting transitions of dawn, solar zenith, twilight, and midnight. This solar rhythm is the living soul inside our <span className="text-accent font-semibold">Arka Collection</span>.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
              <span className="mono text-xs text-slate">Konark Sundial Architecture</span>
              <span className="mono text-xs font-bold text-accent">8 Prahars · 24 Spokes</span>
            </div>
          </article>

          {/* Column 02: 01.09.1947 Standard Meridian */}
          <article className="story-col rounded-3xl border border-black/10 bg-inkCard p-8 sm:p-10 shadow-sm">
            <div className="flex items-center justify-between border-b border-black/10 pb-5">
              <span className="mono text-xs uppercase tracking-widest text-accent font-semibold">
                Chronicle 02 · Unification
              </span>
              <span className="mono text-xs text-slate">01.09.1947</span>
            </div>

            <h3 className="display mt-6 text-3xl sm:text-4xl text-chalk">
              One Nation, <span className="display-italic text-accent">One Time</span>
            </h3>

            <p className="mt-4 font-sans text-sm leading-relaxed text-graphite sm:text-base">
              On 1 September 1947, independent India united the entire sub-continent under a single standard time, retiring fragmented colonial zones (Bombay Time, Calcutta Time, Madras Time) and anchoring our nation to the <span className="font-semibold text-chalk">82°30' E Longitude</span> in Mirzapur, Uttar Pradesh.
            </p>

            <p className="mt-3 font-sans text-sm leading-relaxed text-graphite">
              Every IST 1947 timepiece is built to commemorate that historic declaration of unity — turning our country's triumphs, wildlife reserves, and shared rituals into mechanical masterpieces made to last generations.
            </p>

            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5">
              <span className="mono text-xs text-slate">Shankargarh Fort, Mirzapur</span>
              <span className="mono text-xs font-bold text-accent">UTC +5:30 (82.5° E)</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
