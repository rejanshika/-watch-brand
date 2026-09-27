"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CraftFilm() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cf-text > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 74%" },
      });
      gsap.from(".cf-media", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section className="relative overflow-hidden bg-ink text-chalk border-t border-black/10">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[50vh] w-[50vh] -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto grid max-w-edge items-center gap-12 px-6 py-24 sm:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div className="cf-text">
          <span className="eyebrow text-accent">The Brand Film</span>
          <h2 className="display mt-3 text-4xl sm:text-6xl lg:text-7xl text-chalk">
            A Study in <span className="display-italic text-accent">Light & Motion</span>
          </h2>
          <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-graphite">
            Watch the light travel across the Guilloché dial — the exact moment an IST 1947 timepiece comes to life on the wrist. Filmed in-studio, unretouched.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent radar-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-slate">4K Cinema Capture · 60 FPS</span>
          </div>
        </div>

        {/* film */}
        <div className="cf-media">
          <div className="floaty elev overflow-hidden rounded-[2.5rem] border border-black/10 bg-inkCard">
            <LazyVideo
              src="/IST1947_watch_film_1.mp4"
              poster="/frames/frame_120.jpg"
              className="block aspect-video w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
