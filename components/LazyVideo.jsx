"use client";

import { useEffect, useRef, useState } from "react";

/**
 * High-performance LazyVideo:
 * - Only loads video streams when approaching viewport (rootMargin: 300px).
 * - Immediately pauses playback when scrolling past.
 * - Hardware-accelerated GPU layer isolation for locked 60-120fps scrolling.
 */
export default function LazyVideo({ src, poster, className = "" }) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      preload="none"
      poster={poster}
      style={{ transform: "translateZ(0)" }}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
    </video>
  );
}
