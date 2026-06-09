"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  // 1. Reveal on scroll
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Target all elements needing scroll reveal
    const reveals = document.querySelectorAll(".reveal, .step, .card.xsell, .tmx-mini, .impl-promise");

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
      );
      
      reveals.forEach((el) => io.observe(el));

      return () => {
        reveals.forEach((el) => io.unobserve(el));
      };
    }
  }, [pathname]);

  // 2. Handle stagger index for grouped reveals
  useEffect(() => {
    const groups = document.querySelectorAll("[data-stagger]");
    groups.forEach((group) => {
      const kids = group.querySelectorAll(".reveal, .card.xsell, .tmx-mini");
      kids.forEach((k, i) => {
        (k as HTMLElement).style.setProperty("--i", String(i));
      });
    });
  }, [pathname]);

  // 3. Handle steps connector line measurement
  useEffect(() => {
    const stepsContainers = document.querySelectorAll(".steps");
    const cleanups: (() => void)[] = [];

    stepsContainers.forEach((s) => {
      const nums = s.querySelectorAll(".step-num");
      if (nums.length < 2) return;

      const measure = () => {
        const sr = s.getBoundingClientRect();
        const a = nums[0].getBoundingClientRect();
        const b = nums[nums.length - 1].getBoundingClientRect();
        const top = (a.top - sr.top) + a.height / 2;
        const h = ((b.top - sr.top) + b.height / 2) - top;
        (s as HTMLElement).style.setProperty("--ln-top", `${top.toFixed(1)}px`);
        (s as HTMLElement).style.setProperty("--ln-h", `${h.toFixed(1)}px`);
      };

      // Run initial measurement
      measure();

      // Recalculate on resize
      window.addEventListener("resize", measure, { passive: true });
      cleanups.push(() => window.removeEventListener("resize", measure));

      // Recalculate once fonts are fully loaded
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measure);
      }
    });

    return () => {
      cleanups.forEach((cb) => cb());
    };
  }, [pathname]);

  // 4. Trigger hero entrance transition (hero-go) on pathname change & visibilitychange
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("hero-go");

    let done = false;
    const fireHero = () => {
      if (done) return;
      done = true;
      root.classList.add("hero-go");
    };

    if (root.classList.contains("js-anim")) {
      // Play after fonts settle or 350ms safety cap
      if (document.fonts && document.fonts.ready) {
        Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, 250))
        ]).then(fireHero);
      }
      
      const t1 = setTimeout(fireHero, 350);

      const handleVisibility = () => {
        if (!document.hidden) fireHero();
      };
      document.addEventListener("visibilitychange", handleVisibility);

      return () => {
        clearTimeout(t1);
        document.removeEventListener("visibilitychange", handleVisibility);
      };
    } else {
      root.classList.add("hero-go");
    }
  }, [pathname]);

  return null;
}
