"use client";

import { useState, useEffect } from "react";

export default function LiveISTBadge({ compact = false }) {
  const [time, setTime] = useState("");
  const [prahar, setPrahar] = useState({ name: "Dvitiya Prahar", phase: "Day" });
  const [secondsAngle, setSecondsAngle] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      // Calculate IST (UTC+5:30)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 5.5 * 3600000);

      const hours = istTime.getHours();
      const minutes = String(istTime.getMinutes()).padStart(2, "0");
      const seconds = String(istTime.getSeconds()).padStart(2, "0");
      const formatted = `${String(hours).padStart(2, "0")}:${minutes}:${seconds} IST`;
      setTime(formatted);

      // Smooth small seconds rotation (6Hz mechanical sweep simulation)
      const millis = istTime.getMilliseconds();
      const secAngle = ((istTime.getSeconds() + millis / 1000) / 60) * 360;
      setSecondsAngle(secAngle);

      // 8 Prahars of the day (each 3 hours starting at 6 AM)
      if (hours >= 6 && hours < 9) {
        setPrahar({ name: "Prathama Prahar", phase: "The Awakening Sun" });
      } else if (hours >= 9 && hours < 12) {
        setPrahar({ name: "Dvitiya Prahar", phase: "Ascending Light" });
      } else if (hours >= 12 && hours < 15) {
        setPrahar({ name: "Tritiya Prahar", phase: "Solar Meridian Zenith" });
      } else if (hours >= 15 && hours < 18) {
        setPrahar({ name: "Chaturtha Prahar", phase: "Amber Descent" });
      } else if (hours >= 18 && hours < 21) {
        setPrahar({ name: "Sandhya Prahar", phase: "Twilight Calm" });
      } else if (hours >= 21 || hours < 0) {
        setPrahar({ name: "Prathama Ratri", phase: "Starlight Void" });
      } else if (hours >= 0 && hours < 3) {
        setPrahar({ name: "Nishita Prahar", phase: "Deep Midnight" });
      } else {
        setPrahar({ name: "Brahma Muhurta", phase: "Pre-Dawn Stillness" });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-black/10 bg-inkSoft px-3 py-1 font-mono text-[11px] text-chalk">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-semibold text-accent">{time || "00:00:00 IST"}</span>
        <span className="hidden text-[9px] uppercase tracking-wider text-graphite sm:inline">
          UTC+5:30
        </span>
      </div>
    );
  }

  return (
    <div className="elev flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-inkSoft p-4">
      <div className="flex items-center gap-3">
        {/* Animated Ashoka 24-Spoke Wheel Ticking */}
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-white">
          <svg
            viewBox="0 0 40 40"
            className="h-7 w-7"
            style={{ transform: `rotate(${secondsAngle}deg)` }}
          >
            <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(44,61,143,0.25)" strokeWidth="1" />
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="20"
                y1="20"
                x2={20 + 16 * Math.cos((i * 15 * Math.PI) / 180)}
                y2={20 + 16 * Math.sin((i * 15 * Math.PI) / 180)}
                stroke="#2c3d8f"
                strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
              />
            ))}
            <circle cx="20" cy="20" r="3" fill="#2c3d8f" />
          </svg>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="mono text-xs font-bold text-accent">{time || "00:00:00 IST"}</span>
            <span className="rounded bg-accent/10 px-1.5 py-0.2 font-mono text-[9px] text-accent">
              82.5°E Mirzapur
            </span>
          </div>
          <span className="mono text-[10px] text-slate block mt-0.5">
            {prahar.name} · {prahar.phase}
          </span>
        </div>
      </div>

      <span className="hidden font-mono text-[10px] uppercase tracking-widest text-vanya md:inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-vanya radar-pulse" />
        Live Calibre Sweep
      </span>
    </div>
  );
}
