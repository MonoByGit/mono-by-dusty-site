"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // We target all elements that need reveal effects
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

  // Handle stagger index for grouped reveals
  useEffect(() => {
    const groups = document.querySelectorAll("[data-stagger]");
    groups.forEach((group) => {
      const kids = group.querySelectorAll(".reveal, .card.xsell, .tmx-mini");
      kids.forEach((k, i) => {
        (k as HTMLElement).style.setProperty("--i", String(i));
      });
    });
  }, [pathname]);

  return null;
}
