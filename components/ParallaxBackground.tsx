"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Hero entrance
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const fireHero = () => {
      root.classList.add("hero-go");
    };

    // Wait for fonts to settle or 500ms safety
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      requestAnimationFrame(fireHero);
    };

    if (document.fonts && document.fonts.ready) {
      Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 500))
      ]).then(go);
    }
    setTimeout(go, 600);

    const handleVisibility = () => {
      if (!document.hidden) fireHero();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // 2. Parallax and Nav Border Scroll
    const onScroll = () => {
      const sy = window.scrollY;
      
      const nav = document.querySelector(".nav");
      // Nav scrolled class
      if (nav) {
        nav.classList.toggle("scrolled", sy > 8);
      }

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
      document.removeEventListener("visibilitychange", handleVisibility);
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
