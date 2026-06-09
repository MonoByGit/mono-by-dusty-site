"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { name: "Aanpak", href: "/#aanpak" },
  { name: "Aanbod", href: "/aanbod" },
  { name: "Paden", href: "/paden" },
  { name: "Prijzen", href: "/prijzen" },
  { name: "Over", href: "/#over" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const innerRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLSpanElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  
  // Track active index
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // Determine which link is active based on path
    let foundIndex = -1;
    if (pathname === "/aanbod" || pathname.startsWith("/aanbod/")) {
      foundIndex = 1;
    } else if (pathname === "/paden" || pathname.startsWith("/paden/")) {
      foundIndex = 2;
    } else if (pathname === "/prijzen") {
      foundIndex = 3;
    } else if (pathname === "/") {
      // Default to nothing or hash-based matching on scroll (simplified to default active for now)
      foundIndex = -1; 
    }
    setActiveIndex(foundIndex);
  }, [pathname]);

  // Handle glide pill positioning
  const movePill = (el: HTMLElement | null) => {
    const ind = indRef.current;
    const inner = innerRef.current;
    if (!ind || !inner) return;

    if (!el) {
      ind.style.opacity = "0";
      return;
    }

    const PX = 7;
    const pr = inner.getBoundingClientRect();
    const lr = el.getBoundingClientRect();
    
    ind.style.left = `${lr.left - pr.left - PX}px`;
    ind.style.width = `${lr.width + PX * 2}px`;
    ind.style.opacity = "1";
  };

  useEffect(() => {
    // Align pill with active element initially
    const activeEl = activeIndex !== null && activeIndex >= 0 ? linksRef.current[activeIndex] : null;
    movePill(activeEl);

    const handleResize = () => {
      const currentActiveEl = activeIndex !== null && activeIndex >= 0 ? linksRef.current[activeIndex] : null;
      movePill(currentActiveEl);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  // Handle body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (index: number) => {
    const el = linksRef.current[index];
    movePill(el);
  };

  const handleMouseLeave = () => {
    const activeEl = activeIndex !== null && activeIndex >= 0 ? linksRef.current[activeIndex] : null;
    movePill(activeEl);
  };

  return (
    <>
      <header className="nav">
        <div ref={innerRef} className="wrap wrap-wide nav-inner">
          <span ref={indRef} className="nav-ind" aria-hidden="true"></span>
          
          <Link href="/" className="brand" aria-label="Mono by Dusty, home">
            <svg className="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g><path d="m7.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m4.2 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m3 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m4.2 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m7.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m12 22c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m16.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m19.8 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
              <g><path d="m21 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m19.8 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
              <g><path d="m16.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m12 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
            </svg>
            <span className="brand-name">
              <b>Mono</b> <span>by Dusty</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Hoofdmenu" onMouseLeave={handleMouseLeave}>
            {NAV_LINKS.map((link, idx) => {
              const isActive = activeIndex === idx;
              return (
                <Link
                  key={link.name}
                  ref={(el) => {
                    linksRef.current[idx] = el;
                  }}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  href={link.href}
                  onMouseEnter={() => handleMouseEnter(idx)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link className="btn btn-primary btn-sm nav-cta" href="/contact">
            Plan een gesprek
          </Link>

          <button 
            className="nav-burger" 
            onClick={() => setMobileOpen(true)}
            aria-label="Menu openen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobileMenu">
        <div className="wrap mobile-menu-top">
          <Link href="/" className="brand" onClick={() => setMobileOpen(false)}>
            <svg className="brand-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <g><path d="m7.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m4.2 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m3 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m4.2 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m7.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m12 22c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m16.5 20.8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m19.8 17.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
              <g><path d="m21 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m19.8 8.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.5 1-1 1z" /></g>
              <g><path d="m16.5 5.2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
              <g><path d="m12 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1c0 .6-.4 1-1 1z" /></g>
            </svg>
            <span className="brand-name">
              <b>Mono</b> <span>by Dusty</span>
            </span>
          </Link>
          <button 
            className="mobile-menu-close" 
            onClick={() => setMobileOpen(false)}
            aria-label="Menu sluiten"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="wrap mobile-links" aria-label="Mobiel menu">
          {NAV_LINKS.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
            >
              <span className="num">{String(idx + 1).padStart(2, "0")}</span>
              {link.name}
            </Link>
          ))}
          <Link 
            href="/nulmeting" 
            onClick={() => setMobileOpen(false)}
          >
            <span className="num">06</span>
            Nulmeting
          </Link>
        </nav>
        <div className="wrap mobile-foot">
          <Link 
            className="btn btn-primary btn-lg" 
            href="/contact" 
            onClick={() => setMobileOpen(false)}
          >
            Plan een gesprek
          </Link>
          <span className="muted" style={{ fontSize: "14px" }}>studio@monobydusty.com</span>
        </div>
      </div>
    </>
  );
}
