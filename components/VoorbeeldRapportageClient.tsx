"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// Helper to format numbers with Dutch decimals
function formatDutch(value: number, decimals: number) {
  const s = decimals ? value.toFixed(decimals) : String(Math.round(value));
  return s.replace(".", ",");
}

// CountUp Component triggered on viewport entry
function CountUp({ target, decimals = 0 }: { target: number; decimals?: number }) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrent(target);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let frameId: number;

    const startAnimation = () => {
      const duration = 1100; // ms
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // Cubic ease out
        setCurrent(target * eased);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setCurrent(target);
        }
      };

      frameId = requestAnimationFrame(step);
    };

    if (elementRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    } else {
      setCurrent(target);
    }

    return () => {
      if (observer) observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [target, decimals, shouldReduceMotion]);

  return <span ref={elementRef}>{formatDutch(current, decimals)}</span>;
}

// Animated Width Component triggered on viewport entry
function AnimatedBar({ width, className, style }: { width: number; className?: string; style?: React.CSSProperties }) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCurrentWidth(width);
      return;
    }

    let observer: IntersectionObserver | null = null;

    if (elementRef.current && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentWidth(width);
              if (observer) observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    } else {
      setCurrentWidth(width);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [width, shouldReduceMotion]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        width: `${currentWidth}%`,
        transition: shouldReduceMotion ? "none" : "width 1.1s cubic-bezier(0.215, 0.61, 0.355, 1)",
      }}
    />
  );
}

export default function VoorbeeldRapportageClient() {
  const [shareText, setShareText] = useState("Deel");

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const data = {
      title: document.title,
      text: "Voorbeeld-bevindingenpagina, Mono by Dusty",
      url: window.location.href,
    };
    if (navigator.share) {
      navigator.share(data).catch(() => {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          setShareText("Link gekopieerd");
          setTimeout(() => setShareText("Deel"), 1800);
        })
        .catch(() => {
          setShareText("Kopieer de link");
          setTimeout(() => setShareText("Deel"), 1800);
        });
    } else {
      setShareText("Kopieer de link");
      setTimeout(() => setShareText("Deel"), 1800);
    }
  };

  return (
    <main>
      {/* HEADER / HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="vb-badge hero-eyebrow">
            <span className="pulse"></span>Voorbeeld, zo ziet jouw rapport eruit
          </span>
          <span className="eyebrow" style={{ display: "block", marginBottom: "14px" }}>
            <span className="dot" style={{ background: "var(--c-agent)" }}></span>AI-Nulmeting
          </span>
          <h1 className="rep-title hero-sub">
            Waar Berghuis &amp; Vos staat met AI, en de logische volgende stap.
          </h1>
          <p className="rep-sub hero-sub font-sans">
            Een nulmeting bij een fictief kantoor, om te laten zien wat je terugkrijgt. Geen rapport van twaalf pagina's,
            maar een levende pagina die je deelt met collega's en directie.
          </p>
          <div className="rep-meta hero-sub font-sans">
            <b>Berghuis &amp; Vos</b>
            <span>accountants en adviseurs</span>
            <span className="sep"></span>
            <span>32 medewerkers</span>
            <span className="sep"></span>
            <span>sessie van een halve dag</span>
            <span className="sep"></span>
            <span>juni 2026</span>
            <span className="sep"></span>
            <span>
              samengesteld door <b>Dusty Baars</b>, Mono by Dusty
            </span>
          </div>
          <div className="rep-actions hero-sub font-sans">
            <button className="btn btn-ghost btn-sm" onClick={handlePrint}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Download (PDF)
            </button>
            <button className="btn btn-ghost btn-sm" onClick={handleShare}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
              </svg>
              <span>{shareText}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 1. IN EEN OOGOPSLAG */}
      <section className="rep-sec">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">01</span>
            <h2>In één oogopslag</h2>
          </div>
          <div className="stat-grid" data-stagger>
            <div className="card stat-card reveal">
              <div className="stat-num">
                <CountUp target={2.4} decimals={1} />
                <span className="unit">/ 4</span>
              </div>
              <p className="stat-label">Gemiddelde volwassenheid op een schaal van 1 tot 4.</p>
            </div>
            <div className="card stat-card reveal">
              <div className="stat-num">
                <CountUp target={41} />
                <span className="unit">%</span>
              </div>
              <p className="stat-label">Zit in de middengroep: nieuwsgierig, maar nog niet dagelijks gebruikend.</p>
            </div>
            <div className="card stat-card reveal">
              <div className="stat-num">
                <CountUp target={9} />
              </div>
              <p className="stat-label">Concrete kansen gevonden in het dagelijks werk.</p>
              <span className="stat-tag" style={{ color: "var(--c-automate)" }}>
                <span className="dot" style={{ background: "var(--c-automate)" }}></span>
                waarvan 3 quick wins
              </span>
            </div>
          </div>
          <div className="stat-note reveal font-sans">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>
              Geschatte tijdwinst bij de eerste drie kansen: samen ongeveer{" "}
              <b style={{ color: "var(--ink)" }}>6 tot 9 uur per week</b> over de teams.
            </span>
          </div>
        </div>
      </section>

      {/* 2. VOLWASSENHEIDSVERDELING */}
      <section className="rep-sec alt">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">02</span>
            <h2>Volwassenheidsverdeling</h2>
            <p>
              Waar staat het team echt, zonder oordeel. De grootste groep is nieuwsgierig maar gebruikt AI nog niet dagelijks.
              Eén gerichte stap tilt die hele groep op.
            </p>
          </div>
          <div className="bars reveal font-sans">
            <div className="bar-row">
              <span className="bar-label">
                <span className="lv">Niveau 1</span> Beginner
              </span>
              <div className="bar-track">
                <AnimatedBar width={18} className="bar-fill" style={{ background: "var(--r-grey)" }} />
              </div>
              <span className="bar-val">18%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">
                <span className="lv">Niveau 2</span> Nieuwsgierig
              </span>
              <div className="bar-track">
                <AnimatedBar width={41} className="bar-fill" style={{ background: "var(--r-amber)" }} />
              </div>
              <span className="bar-val">41%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">
                <span className="lv">Niveau 3</span> Gebruiker
              </span>
              <div className="bar-track">
                <AnimatedBar width={28} className="bar-fill" style={{ background: "var(--r-blue)" }} />
              </div>
              <span className="bar-val">28%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">
                <span className="lv">Niveau 4</span> Bouwer
              </span>
              <div className="bar-track">
                <AnimatedBar width={13} className="bar-fill" style={{ background: "var(--r-green)" }} />
              </div>
              <span className="bar-val">13%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOUDINGSKAART */}
      <section className="rep-sec">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">03</span>
            <h2>Houdingskaart</h2>
            <p>
              Vaardigheid is maar de helft. Hoe mensen zich voelen bepaalt of ze meebewegen. De meesten staan open, een
              kleine groep is nog huiverig. Die angst is laag te houden met heldere spelregels vanaf dag één.
            </p>
          </div>
          <div className="seg-wrap reveal font-sans">
            <div className="seg-bar">
              <AnimatedBar width={15} className="seg" style={{ background: "var(--r-attn)" }} />
              <AnimatedBar width={34} className="seg" style={{ background: "var(--r-amber)" }} />
              <AnimatedBar width={36} className="seg" style={{ background: "var(--r-blue)" }} />
              <AnimatedBar width={15} className="seg" style={{ background: "var(--r-green)" }} />
            </div>
            <div className="seg-legend">
              <span className="lg">
                <span className="sw" style={{ background: "var(--r-attn)" }}></span>Huiverig <b>15%</b>
              </span>
              <span className="lg">
                <span className="sw" style={{ background: "var(--r-amber)" }}></span>Afwachtend <b>34%</b>
              </span>
              <span className="lg">
                <span className="sw" style={{ background: "var(--r-blue)" }}></span>Open <b>36%</b>
              </span>
              <span className="lg">
                <span className="sw" style={{ background: "var(--r-green)" }}></span>Enthousiast <b>15%</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PER AFDELING */}
      <section className="rep-sec alt">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">04</span>
            <h2>Per afdeling</h2>
            <p>Het beeld verschilt per team. Zo ziet het eruit per afdeling.</p>
          </div>
          <div className="rep-table-wrap reveal font-sans">
            <table className="rep-table">
              <thead>
                <tr>
                  <th>Afdeling</th>
                  <th>Volwassenheid</th>
                  <th>Houding</th>
                  <th>Grootste kans</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Accountancy en adviseurs
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      2,7{" "}
                      <span className="mini">
                        <i style={{ width: "68%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-open">
                      <span className="d"></span>Open
                    </span>
                  </td>
                  <td data-l="Grootste kans">Offertes en adviesbrieven sneller opstellen</td>
                </tr>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Administratie
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      2,1{" "}
                      <span className="mini">
                        <i style={{ width: "53%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-afwachtend">
                      <span className="d"></span>Afwachtend
                    </span>
                  </td>
                  <td data-l="Grootste kans">Boekingsomschrijvingen en mail opschonen</td>
                </tr>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Salarisadministratie
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      1,9{" "}
                      <span className="mini">
                        <i style={{ width: "48%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-huiverig">
                      <span className="d"></span>Huiverig
                    </span>
                  </td>
                  <td data-l="Grootste kans">Terugkerende vragen beantwoorden</td>
                </tr>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Fiscaal
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      2,8{" "}
                      <span className="mini">
                        <i style={{ width: "70%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-enthousiast">
                      <span className="d"></span>Enthousiast
                    </span>
                  </td>
                  <td data-l="Grootste kans">Wetgeving doorzoekbaar maken</td>
                </tr>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Front office en balie
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      2,3{" "}
                      <span className="mini">
                        <i style={{ width: "58%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-open">
                      <span className="d"></span>Open
                    </span>
                  </td>
                  <td data-l="Grootste kans">Concepten voor klantmail</td>
                </tr>
                <tr>
                  <td className="td-afd" data-l="Afdeling">
                    Directie
                  </td>
                  <td data-l="Volwassenheid">
                    <span className="score">
                      2,5{" "}
                      <span className="mini">
                        <i style={{ width: "63%" }}></i>
                      </span>
                    </span>
                  </td>
                  <td data-l="Houding">
                    <span className="hpill h-enthousiast">
                      <span className="d"></span>Enthousiast
                    </span>
                  </td>
                  <td data-l="Grootste kans">Sturing en beleid op AI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. KANSEN-HEATMAP */}
      <section className="rep-sec">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">05</span>
            <h2>Kansen-heatmap</h2>
            <p>
              Elke kans uitgezet op impact en inspanning. Linksboven zit het goud: veel effect, weinig moeite. Daar
              beginmen we.
            </p>
          </div>
          <div className="scatter reveal font-sans">
            <span className="axis-y">Impact, laag naar hoog</span>
            <span className="axis-x">Inspanning, laag naar hoog</span>
            <div className="scatter-plot">
              <div className="quad-qw">
                <span>Quick wins</span>
              </div>
              <div className="pt p-now" style={{ left: "16%", top: "17%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Offertes sneller opstellen</span>
              </div>
              <div className="pt p-now" style={{ left: "33%", top: "31%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Notulen en samenvattingen</span>
              </div>
              <div className="pt p-now" style={{ left: "18%", top: "52%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Mail-concepten voor de balie</span>
              </div>
              <div className="pt p-later rev" style={{ left: "80%", top: "18%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Wetgeving doorzoekbaar</span>
              </div>
              <div className="pt p-later rev" style={{ left: "86%", top: "35%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Kennisbank doorzoekbaar</span>
              </div>
              <div className="pt p-later" style={{ left: "54%", top: "55%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Social posts opzetten</span>
              </div>
              <div className="pt p-small" style={{ left: "20%", top: "80%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Urenregistratie opschonen</span>
              </div>
              <div className="pt p-small rev" style={{ left: "82%", top: "62%" }}>
                <span className="pt-dot"></span>
                <span className="pt-lbl">Klantportaal-assistent</span>
              </div>
            </div>
            <div className="scatter-legend">
              <span className="lg">
                <span className="d" style={{ background: "var(--r-blue)" }}></span>Nu oppakken
              </span>
              <span className="lg">
                <span className="d" style={{ background: "var(--r-amber)" }}></span>Hoge impact, meer werk
              </span>
              <span className="lg">
                <span className="d" style={{ background: "var(--r-grey)" }}></span>Later of bewust uitstellen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DE DRIE GROOTSTE KANSEN */}
      <section className="rep-sec alt">
        <div className="wrap wrap-wide">
          <div className="rep-h reveal">
            <span className="num">06</span>
            <h2>De drie grootste kansen</h2>
            <p>Hoge impact, weinig moeite. Hier ligt de snelste winst.</p>
          </div>
          <div className="opp-grid" data-stagger>
            <article className="card opp reveal">
              <span className="opp-rank font-display">1</span>
              <h3>Offertes sneller opstellen</h3>
              <p>
                De adviseurs verliezen wekelijks uren aan offertes vanaf nul. Een vaste werkwijze met AI halveert dat, met
                behoud van de eigen toon.
              </p>
              <div className="opp-badges font-sans">
                <span className="opp-badge hi">Impact hoog</span>
                <span className="opp-badge">Weinig moeite</span>
                <span className="opp-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  circa 3 uur per week
                </span>
              </div>
            </article>
            <article className="card opp reveal">
              <span className="opp-rank font-display">2</span>
              <h3>Notulen en samenvattingen</h3>
              <p>
                Overleggen kosten nu naloop. AI vat samen en haalt de actiepunten eruit, klaar binnen minuten.
              </p>
              <div className="opp-badges font-sans">
                <span className="opp-badge hi">Impact hoog</span>
                <span className="opp-badge">Weinig moeite</span>
                <span className="opp-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  circa 2 uur per week
                </span>
              </div>
            </article>
            <article className="card opp reveal">
              <span className="opp-rank font-display">3</span>
              <h3>Mail-concepten voor de balie</h3>
              <p>
                De eerste lijn beantwoordt veel terugkerende vragen. Concepten op maat schelen tijd en houden de kwaliteit
                gelijk.
              </p>
              <div className="opp-badges font-sans">
                <span className="opp-badge mid">Impact midden</span>
                <span className="opp-badge">Weinig moeite</span>
                <span className="opp-badge">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  circa 2 uur per week
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BRUG: VAN BEVINDING NAAR UITVOERING */}
      <section className="rep-sec alt">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">De brug</span>
            <h2>Van bevinding naar uitvoering</h2>
            <p>
              Een rapport is mooi, maar de winst zit in het doen. Bij elke kans hoort een concrete volgende stap, en die
              kan ik ook met je uitvoeren of voor je bouwen. Zo blijft het niet bij een advies.
            </p>
          </div>
          <div className="bridge-list reveal font-sans">
            <div className="bridge-row">
              <span className="bridge-from">Offertes sneller opstellen</span>
              <span className="bridge-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="bridge-to">
                <Link href="/aanbod">AI op jouw afdeling</Link>
                <span>voor de adviseurs. Samen de werkwijze vastleggen.</span>
              </span>
            </div>
            <div className="bridge-row">
              <span className="bridge-from">Notulen en samenvattingen</span>
              <span className="bridge-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="bridge-to">
                <Link href="/aanbod">Slim werken met AI</Link>
                <span>een dagdeel en je hele team kan het.</span>
              </span>
            </div>
            <div className="bridge-row">
              <span className="bridge-from">Wetgeving en kennis doorzoekbaar</span>
              <span className="bridge-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span className="bridge-to">
                <Link href="/aanbod">Prototype-sprint</Link>
                <span>ik bouw een doorzoekbare kennisassistent met je.</span>
              </span>
            </div>
          </div>
          <div className="bridge-foot reveal font-sans">
            <p>De nulmeting wijst de weg. Elke stap erop kan ik met je zetten, van een dagdeel tot een gebouwde oplossing.</p>
            <div className="bf-actions">
              <Link className="btn btn-primary" href="/contact">
                Plan een gesprek
              </Link>
              <a className="btn-text" href="#geadviseerde-pad">
                Bekijk het geadviseerde pad
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WAT WE ZAGEN */}
      <section className="rep-sec">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">07</span>
            <h2>Wat we zagen</h2>
          </div>
          <div className="obs-list" data-stagger>
            <div className="card obs reveal">
              <span className="obs-q font-display">&ldquo;</span>
              <p>Er wordt al met AI gewerkt, maar versnipperd en zonder afspraken. Iedereen vindt zijn eigen wiel uit.</p>
            </div>
            <div className="card obs reveal">
              <span className="obs-q font-display">&ldquo;</span>
              <p>De grootste rem is geen onkunde maar onzekerheid over wat wel en niet mag met klantgegevens.</p>
            </div>
            <div className="card obs reveal">
              <span className="obs-q font-display">&ldquo;</span>
              <p>Fiscaal en directie lopen voorop en kunnen de motor worden voor de rest.</p>
            </div>
            <div className="card obs reveal">
              <span className="obs-q font-display">&ldquo;</span>
              <p>De winst zit nu in het dagelijks werk, niet in grote nieuwe systemen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HET GEADVISEERDE PAD */}
      <section className="rep-sec alt" id="geadviseerde-pad">
        <div className="wrap">
          <div className="rep-h reveal">
            <span className="num">08</span>
            <h2>Het geadviseerde pad</h2>
            <p>
              Jullie zitten met een grote middengroep en een gezonde houding. Dat vraagt om breedte eerst, daarna
              verdieping. Het Startpad past, met één gerichte toevoeging.
            </p>
          </div>
          <div className="tl reveal">
            <div className="tl-item k-human">
              <span className="tl-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-1-5.8M21 20a6 6 0 0 0-5-5.9" strokeLinecap="round" />
                </svg>
              </span>
              <div className="tl-body font-sans">
                <span className="tl-week">Week 1</span>
                <h3>Slim werken met AI</h3>
                <p>Tilt de middengroep van 41% in één dagdeel naar zelfverzekerd dagelijks gebruik.</p>
              </div>
            </div>
            <div className="tl-item k-agent">
              <span className="tl-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <div className="tl-body font-sans">
                <span className="tl-week">Week 2</span>
                <h3>AI op jouw afdeling, te beginnen bij de adviseurs</h3>
                <p>De offertes en notulen direct aanpakken, daar zit de snelste winst.</p>
              </div>
            </div>
            <div className="tl-item k-augment">
              <span className="tl-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="tl-body font-sans">
                <span className="tl-week">Week 3</span>
                <h3>Veilig met AI</h3>
                <p>Met klantgegevens in een accountantskantoor zijn lichte, heldere spelregels een voorwaarde.</p>
              </div>
            </div>
            <div className="tl-item k-automate">
              <span className="tl-node">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m12 3 2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5L12 3Z" stroke-linejoin="round" />
                </svg>
              </span>
              <div className="tl-body font-sans">
                <span className="tl-week">Later</span>
                <h3>AI-Champions</h3>
                <p>De 13% bouwers worden de motor die het zelf draaiende houdt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AFSLUITING */}
      <section className="section cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="cta-wash"></div>
            <span className="cta-dots">
              <i style={{ background: "#5B8A3A" }}></i>
              <i style={{ background: "#B07A1A" }}></i>
              <i style={{ background: "#6B4A8A" }}></i>
              <i style={{ background: "#2B5BC4" }}></i>
            </span>
            <h2>Klaar voor je eigen pagina?</h2>
            <p>
              Dit is een voorbeeld. Jullie eigen pagina komt uit één sessie van een halve dag, en je deelt hem met een
              link. Vanaf daar kiezen we samen het pad, of we starten meteen met de eerste quick win.
            </p>
            <div className="cta-actions font-sans">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Plan een gesprek{" "}
                <span className="arr">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/nulmeting">
                Over de nulmeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
