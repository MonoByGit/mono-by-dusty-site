"use client";

import { useEffect, useState } from "react";

const ACCENTS = {
  blue:   { name: "Mono Blue", c: "#2B5BC4", d: "#21489E" },
  human:  { name: "Paars",     c: "#6B4A8A", d: "#573B73" },
  green:  { name: "Groen",     c: "#5B8A3A", d: "#4A7230" },
  amber:  { name: "Amber",     c: "#B07A1A", d: "#936414" }
};

export default function TweaksPanel() {
  const [show, setShow] = useState(false);
  const [tweaks, setTweaks] = useState({
    hero: "serif",
    bento: "columns",
    accent: "blue",
    theme: "system"
  });

  useEffect(() => {
    // 1. Load initial tweaks from localStorage
    const saved = localStorage.getItem("mono-tweaks");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTweaks(prev => ({ ...prev, ...parsed }));
      } catch (e) {}
    }

    // 2. Set up postMessage listeners for iframe integration
    const handleMessage = (e: MessageEvent) => {
      const type = e.data && e.data.type;
      if (type === "__activate_edit_mode") {
        setShow(true);
      } else if (type === "__deactivate_edit_mode") {
        setShow(false);
      }
    };
    window.addEventListener("message", handleMessage);

    // 3. Let parent know edit mode is available
    try {
      window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    } catch (e) {}

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // 4. Apply changes to documentElement
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-hero", tweaks.hero);
    
    // Apply accent
    const a = ACCENTS[tweaks.accent as keyof typeof ACCENTS] || ACCENTS.blue;
    root.style.setProperty("--primary", a.c);
    root.style.setProperty("--primary-deep", a.d);
    root.style.setProperty("--primary-ink", "#fff");

    // Apply theme
    if (tweaks.theme === "system") {
      localStorage.removeItem("mono-theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.setAttribute("data-theme", systemTheme);
    } else {
      root.setAttribute("data-theme", tweaks.theme);
      localStorage.setItem("mono-theme", tweaks.theme);
    }

    // Save to localStorage
    localStorage.setItem("mono-tweaks", JSON.stringify(tweaks));
    
    // Post back to parent if in iframe
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: tweaks }, "*");
    } catch (e) {}
  }, [tweaks]);

  const updateTweak = (key: string, val: string) => {
    setTweaks(prev => ({ ...prev, [key]: val }));
  };

  if (!show) return null;

  return (
    <div className={`tw show`} aria-label="Tweaks">
      <div className="tw-h">
        <span style={{ display: "flex", alignItems: "center" }}>
          <span className="dots">
            <i style={{ background: "#5B8A3A" }}></i>
            <i style={{ background: "#B07A1A" }}></i>
            <i style={{ background: "#6B4A8A" }}></i>
            <i style={{ background: "#2B5BC4" }}></i>
          </span>
          <b>Tweaks</b>
        </span>
        <button className="tw-x" onClick={() => { setShow(false); window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); }} aria-label="Sluiten">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="tw-b">
        <div className="tw-f">
          <label>Hero-stijl</label>
          <div className="tw-seg" data-tw="hero">
            <button className={tweaks.hero === "serif" ? "on" : ""} onClick={() => updateTweak("hero", "serif")}>Serif</button>
            <button className={tweaks.hero === "sans" ? "on" : ""} onClick={() => updateTweak("hero", "sans")}>Grotesk</button>
          </div>
          <div className="tw-note">Warme serif-display of zelfverzekerde grotesk voor de hero-kop.</div>
        </div>
        <div className="tw-f">
          <label>Accentkleur</label>
          <div className="tw-sw" data-tw="accent">
            {Object.entries(ACCENTS).map(([key, a]) => (
              <button key={key} className={tweaks.accent === key ? "on" : ""} onClick={() => updateTweak("accent", key)}>
                <span className="c" style={{ background: a.c }}></span>
              </button>
            ))}
          </div>
        </div>
        <div className="tw-f">
          <label>Thema</label>
          <div className="tw-seg" data-tw="theme">
            <button className={tweaks.theme === "light" ? "on" : ""} onClick={() => updateTweak("theme", "light")}>Licht</button>
            <button className={tweaks.theme === "dark" ? "on" : ""} onClick={() => updateTweak("theme", "dark")}>Donker</button>
            <button className={tweaks.theme === "system" ? "on" : ""} onClick={() => updateTweak("theme", "system")}>Systeem</button>
          </div>
        </div>
      </div>
    </div>
  );
}
