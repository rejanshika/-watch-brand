"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { collections } from "@/lib/content";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function Collections() {
  const root = useRef(null);

  useGSAP(
    () => {
      const splits = [];
      gsap.utils.toArray(".coll-panel").forEach((panel) => {
        const media = panel.querySelector(".coll-media");
        const copy = panel.querySelector(".coll-copy");
        const name = panel.querySelector(".coll-name");
        const img = panel.querySelector(".coll-img");
        const reversed = panel.classList.contains("coll-reversed");

        gsap.from(media, {
          x: reversed ? 60 : -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 70%" },
        });
        gsap.from(copy, {
          x: reversed ? -60 : 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: panel, start: "top 70%" },
        });

        // big collection name — char reveal
        const split = SplitText.create(name, { type: "chars", aria: "auto" });
        splits.push(split);
        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          stagger: 0.03,
          duration: 0.7,
          ease: "power4.out",
          scrollTrigger: { trigger: panel, start: "top 68%" },
        });

        // slow image parallax within its frame
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });
      return () => splits.forEach((s) => s.revert());
    },
    { scope: root }
  );

  return (
    <div id="collections" ref={root}>
      {collections.map((c, i) => {
        const dark = c.theme === "dark";
        const reversed = i % 2 === 1;
        return (
          <section
            key={c.id}
            id={c.id}
            className={`coll-panel ${reversed ? "coll-reversed" : ""} ${
              dark ? "bg-ink text-chalk" : "bg-concrete text-black"
            }`}
          >
            <div className="mx-auto flex max-w-edge flex-col items-center gap-10 px-6 py-24 sm:px-10 md:py-32 lg:flex-row lg:gap-20">
              {/* Media */}
              <div className={`coll-media w-full lg:w-1/2 ${reversed ? "lg:order-2" : ""}`}>
                <div
                  className={`floaty relative aspect-[4/5] w-full overflow-hidden rounded-2xl ${
                    dark ? "elev" : "elev-light"
                  }`}
                  style={{ animationDelay: `${i * -2.3}s` }}
                >
                  <LazyVideo
                    src={c.video}
                    poster={c.poster}
                    className="coll-img absolute inset-0 h-full w-full scale-110 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-white/80">
                    {c.launch}
                  </span>
                </div>
              </div>

              {/* Copy */}
              <div className="coll-copy w-full lg:w-1/2">
                <p className={`eyebrow ${dark ? "text-accent" : "text-accent"}`}>{c.eyebrow}</p>
                <h2 className="coll-name display mt-3 overflow-hidden pb-1 text-6xl sm:text-7xl">{c.name}</h2>
                <p className={`mt-6 max-w-md text-sm leading-relaxed ${dark ? "text-graphite" : "text-slate"}`}>
                  {c.body}
                </p>
                <a
                  href="/collections"
                  className={`mt-8 inline-flex items-center gap-2 border-b pb-1 font-mono text-sm uppercase tracking-[0.16em] transition-colors ${
                    dark ? "border-black/15 text-chalk hover:border-accent" : "border-black/20 text-black hover:border-accent"
                  }`}
                >
                  Explore {c.name} <span className="text-accent">→</span>
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
