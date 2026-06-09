import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "De paden, drie routes door het aanbod · Mono by Dusty",
  description:
    "Drie kant-en-klare routes door het aanbod van Mono by Dusty: Startpad, Versnelpad en Directiepad. Elk pad begint met de nulmeting.",
  alternates: {
    canonical: "/paden",
  },
};

export default function PadenPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>De paden
          </span>
          <h1>
            Drie kant-en-klare routes door het <span className="accent">aanbod</span>.
          </h1>
          <p className="lead hero-sub">
            Elk pad begint met de Nulmeting en is opgebouwd voor een specifieke situatie.
            Een bundel zit iets onder de som van de losse delen. Liever losse onderdelen? 
            Bekijk het volledige aanbod.
          </p>
          <div className="hero-actions" style={{ marginTop: "26px" }}>
            <Link className="btn btn-primary" href="/contact">
              Plan een gesprek{" "}
              <span className="arr">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="btn btn-ghost" href="/aanbod">
              Bekijk het aanbod
            </Link>
          </div>
        </div>
      </section>

      {/* PATHS SECTION */}
      <section className="section">
        <div className="wrap wrap-wide">
          <div className="paths" data-stagger>
            <article className="card path-card k-human reveal">
              <span className="path-tag">Startpad</span>
              <p className="muted" style={{ fontSize: "15px" }}>
                Voor de organisatie die achterloopt en de hele vloer mee moet krijgen.
              </p>
              <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "1.05rem", margin: "2px 0" }}>
                Richtprijs &plusmn; &euro;5.500
              </div>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Begint met de AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Samengesteld uit losse onderdelen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Iets onder de som van de delen
                </li>
              </ul>
              <Link className="btn btn-ghost" href="/paden/startpad">
                Bekijk het startpad{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </article>

            <article className="card path-card k-agent reveal">
              <span className="path-flag">Meest gekozen</span>
              <span className="path-tag">Versnelpad</span>
              <p className="muted" style={{ fontSize: "15px" }}>
                Voor het team dat al mee is en wil bouwen.
              </p>
              <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "1.05rem", margin: "2px 0" }}>
                Richtprijs &plusmn; &euro;4.500
              </div>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Begint met de AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Samengesteld uit losse onderdelen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Iets onder de som van de delen
                </li>
              </ul>
              <Link className="btn btn-primary" href="/paden/versnelpad">
                Bekijk het versnelpad{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </article>

            <article className="card path-card k-automate reveal">
              <span className="path-tag">Directiepad</span>
              <p className="muted" style={{ fontSize: "15px" }}>
                Voor de top die de beweging wil sturen en verankeren.
              </p>
              <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "1.05rem", margin: "2px 0" }}>
                Richtprijs &plusmn; &euro;6.500
              </div>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Begint met de AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Samengesteld uit losse onderdelen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Iets onder de som van de delen
                </li>
              </ul>
              <Link className="btn btn-ghost" href="/paden/directiepad">
                Bekijk het directiepad{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
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
            <h2>Niet zeker welk pad past?</h2>
            <p>We beginnen met een gesprek en de nulmeting. Daarna kiezen we samen de route.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Plan een gesprek{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/prijzen">
                Bekijk de prijzen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
