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
      gsap.from(".story-text > *", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
      gsap.from(".story-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".story-timeline", start: "top 80%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="story" ref={root} className="relative bg-ink text-chalk border-t border-white/10">
      {/* Editorial intro */}
      <div className="relative flex min-h-[48vh] w-full items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#131722,#07080b_80%)]">
        <div className="story-text relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="eyebrow text-accent">{story.eyebrow}</span>
          <h2 className="display mt-4 text-4xl text-chalk sm:text-6xl lg:text-7xl">{story.title}</h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-graphite sm:text-lg">
            {story.body}
          </p>
        </div>
      </div>

      {/* Vijay — five landmark nights */}
      <div className="mx-auto max-w-edge px-6 py-20 sm:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="eyebrow text-accent">Dynasty Lineage</span>
            <h3 className="display mt-1 text-3xl sm:text-4xl text-chalk">Five Landmark Victories</h3>
          </div>
          <Link
            href="/story"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite hover:text-chalk"
          >
            <span>Explore 1947 & Konark History</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="story-timeline no-scrollbar flex gap-5 overflow-x-auto pb-4">
          {story.timeline.map((t) => (
            <article
              key={t.year}
              className="story-card elev group w-[80vw] shrink-0 rounded-2xl border border-white/10 bg-inkCard p-6 transition-all duration-300 hover:border-accent/40 sm:w-[300px]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="display text-3xl text-chalk group-hover:text-accent transition-colors">{t.year}</span>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <h4 className="font-sans text-base font-semibold text-chalk">{t.title}</h4>
              <p className="mt-3 font-sans text-xs leading-relaxed text-graphite">{t.body}</p>
            </article>
          ))}
        </div>
        <p className="eyebrow mt-6 flex items-center gap-2 text-slate">
          <span className="text-accent">⟷</span> Swipe to explore all five editions
        </p>
      </div>
    </section>
  );
}
