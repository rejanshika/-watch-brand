"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { whoWeAre } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * "Who we are" — the brand's editorial moment: copy on the left, the
 * stadium photograph on the right.
 */
export default function WhoWeAre() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".wwa-copy > *", {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
      gsap.from(".wwa-plate", {
        scale: 1.06,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-ink text-chalk">
      <div className="mx-auto grid max-w-edge items-center gap-12 px-6 py-24 sm:px-10 md:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="wwa-copy">
          <p className="eyebrow text-slate">{whoWeAre.eyebrow}</p>
          <h2 className="display mt-5 text-4xl leading-[1.08] sm:text-5xl md:text-6xl">
            {whoWeAre.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite">
            {whoWeAre.body}
          </p>
          <Link
            href={whoWeAre.cta.href}
            className="eyebrow mt-9 inline-block border-b-2 border-chalk pb-1.5 text-[11px] text-chalk transition-colors hover:border-accent hover:text-accent"
          >
            {whoWeAre.cta.label}
          </Link>
        </div>

        <div className="wwa-plate overflow-hidden rounded-2xl">
          <img
            src={whoWeAre.image}
            alt={whoWeAre.imageAlt}
            loading="lazy"
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
