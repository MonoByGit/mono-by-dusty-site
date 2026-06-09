"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 2. Parallax Scroll
    const onScroll = () => {
      const sy = window.scrollY;

      // Parallax background scroll
      if (!reduce) {
        if (gridRef.current) {
          gridRef.current.style.backgroundPosition = `0px ${(sy * 0.28).toFixed(1)}px`;
        }
        if (waveRef.current) {
          waveRef.current.style.transform = `translateY(${(sy * 0.12).toFixed(1)}px)`;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial call
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="site-bg" aria-hidden="true">
      <div ref={gridRef} className="bg-grid"></div>
      <div ref={waveRef} className="bg-wave"></div>
    </div>
  );
}
