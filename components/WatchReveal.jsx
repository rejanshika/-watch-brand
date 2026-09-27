"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const points = [
  "Automatic movement",
  "Sunray guilloché dial",
  "Ashoka-chakra small-seconds",
  "Sapphire crystal",
];

export default function WatchReveal() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".wr-media", {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.from(".wr-text > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 74%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="watch" ref={root} className="bg-concrete text-black">
      <div className="mx-auto grid max-w-edge items-center gap-12 px-6 py-24 sm:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
        {/* copy */}
        <div className="wr-text order-2 lg:order-1">
          <p className="eyebrow text-accent">The Watch</p>
          <h2 className="display mt-3 text-5xl sm:text-7xl">
            Turned by <span className="display-italic text-accent">light</span>
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-slate">
            A closer look at the piece — sunray guilloché catching the light,
            blued numerals, and a polished case finished by hand.
          </p>
          <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-2 border-t border-black/15 pt-3 text-sm text-black"
              >
                <span className="text-accent">—</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* the reveal film (blue dial, white ground) */}
        <div className="wr-media order-1 mx-auto w-full max-w-[380px] lg:order-2">
          <div className="floaty elev-light overflow-hidden rounded-[2rem]">
            <LazyVideo src="/watch-reveal.mp4" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
