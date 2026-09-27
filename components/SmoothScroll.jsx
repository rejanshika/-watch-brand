"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Ultra-smooth Lenis Scroll synchronized directly with GSAP Ticker
 * to deliver locked 60-120fps buttery smooth scrolling with zero stutter.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      // Frame-rate independent smoothing. `duration` easing restarts a timed
      // tween per wheel event, which trails continuous input and reads as lag;
      // lerp converges toward the target every frame and tracks the wheel.
      lerp: 0.12,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });
    lenisRef.current = lenis;

    // Synchronize ScrollTrigger updates with Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from the GSAP ticker so scroll and tweens share one RAF.
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    // Lag smoothing must be off: when a frame runs long it rewrites the delta
    // Lenis integrates against, which reads as a stutter mid-scroll.
    gsap.ticker.lagSmoothing(0);

    // Smooth-scroll anchor links to their sections
    const handleAnchor = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: 0, duration: 1.0 });
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      document.removeEventListener("click", handleAnchor);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll to top on route change & refresh ScrollTrigger
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return children;
}
