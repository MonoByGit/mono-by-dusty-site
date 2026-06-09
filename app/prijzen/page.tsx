import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijzen, transparant en per pakket · Mono by Dusty",
  description:
    "Alle prijzen transparant, exclusief btw. Losse pakketten of drie kant-en-klare paden: startpad, versnelpad en directiepad.",
  alternates: {
    canonical: "/prijzen",
  },
};

export default function PrijzenPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>Prijzen
          </span>
          <h1>
            Transparant,<br />
            geen <span className="accent">verrassingen</span>.
          </h1>
          <p className="lead hero-sub">
            Vaste prijzen per pakket, exclusief btw. Liever een route dan losse keuzes? 
            Kies een van de drie paden hieronder.
          </p>
        </div>
      </section>

      {/* PRICE TABLES */}
      <section className="section-tight">
        <div className="wrap">
          {/* Startpunt */}
          <h3 className="h3" style={{ margin: "0 0 16px", display: "flex", alignItems: "center", gap: "9px" }}>
            <span className="dot" style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c-agent)" }}></span>
            Het startpunt
          </h3>
          <div className="card reveal" style={{ padding: "10px 26px" }}>
            <div className="price-table">
              <div className="price-row" style={{ borderBottom: 0 }}>
                <Link className="pr-name" href="/nulmeting" style={{ fontWeight: 700 }}>
                  AI-Nulmeting
                </Link>
                <span className="pr-price">
                  <small>vanaf </small>&euro;950
                </span>
              </div>
            </div>
          </div>

          {/* Spoor 1 */}
          <h3 className="h3" style={{ margin: "34px 0 16px", display: "flex", alignItems: "center", gap: "9px" }}>
            <span className="dot" style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c-human)" }}></span>
            Spoor 1 &middot; Werken met AI
          </h3>
          <div className="card reveal" style={{ padding: "10px 26px" }}>
            <div className="price-table">
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/slim-werken-met-ai">Slim werken met AI</Link>
                <span className="pr-price">&euro;1.450</span>
              </div>
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/ai-op-jouw-afdeling">AI op jouw afdeling</Link>
                <span className="pr-price">&euro;1.650</span>
              </div>
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/veilig-met-ai">Veilig met AI</Link>
                <span className="pr-price">&euro;1.250</span>
              </div>
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/ai-voor-de-directie">AI voor de directie</Link>
                <span className="pr-price">&euro;1.950</span>
              </div>
              <div className="price-row" style={{ borderBottom: 0 }}>
                <Link className="pr-name" href="/aanbod/ai-champions">AI-Champions</Link>
                <span className="pr-price">&euro;5.500</span>
              </div>
            </div>
          </div>

          {/* Spoor 2 */}
          <h3 className="h3" style={{ margin: "34px 0 16px", display: "flex", alignItems: "center", gap: "9px" }}>
            <span className="dot" style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c-agent)" }}></span>
            Spoor 2 &middot; Bouwen met AI
          </h3>
          <div className="card reveal" style={{ padding: "10px 26px" }}>
            <div className="price-table">
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/van-idee-naar-prototype">Van idee naar prototype</Link>
                <span className="pr-price">&euro;1.950</span>
              </div>
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/toets-je-idee">Toets je idee</Link>
                <span className="pr-price">&euro;1.450</span>
              </div>
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/goed-bouwen-met-ai">Goed bouwen met AI</Link>
                <span className="pr-price">&euro;1.650</span>
              </div>
              <div className="price-row" style={{ borderBottom: 0 }}>
                <Link className="pr-name" href="/aanbod/veilig-bouwen-met-ai">Veilig bouwen met AI</Link>
                <span className="pr-price">&euro;1.650</span>
              </div>
            </div>
          </div>

          {/* Spoor 3 */}
          <h3 className="h3" style={{ margin: "34px 0 16px", display: "flex", alignItems: "center", gap: "9px" }}>
            <span className="dot" style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--c-automate)" }}></span>
            Maakservice &middot; done-with-you
          </h3>
          <div className="card reveal" style={{ padding: "10px 26px" }}>
            <div className="price-table">
              <div className="price-row">
                <Link className="pr-name" href="/aanbod/prototype-sprint">Prototype-sprint</Link>
                <span className="pr-price">&euro;3.500&ndash;7.500</span>
              </div>
              <div className="price-row" style={{ borderBottom: 0 }}>
                <Link className="pr-name" href="/aanbod/doorlopende-begeleiding">Doorlopende begeleiding</Link>
                <span className="pr-price">&euro;1.500&ndash;3.000<small> p/m</small></span>
              </div>
            </div>
          </div>

          <p className="muted reveal" style={{ marginTop: "20px", fontSize: "14px" }}>
            Alle bedragen zijn exclusief btw. Pakketten zijn los te boeken of te combineren tot een pad.
          </p>
        </div>
      </section>

      {/* THREE PATHS COMPARISON */}
      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap wrap-wide">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow"><span className="dot"></span>Drie paden</span>
              <h2 className="h2" style={{ marginTop: "14px" }}>Liever een route dan losse keuzes.</h2>
              <p className="sh-note">
                Elk pad begint met de nulmeting en is samengesteld uit de onderdelen die het beste passen. Richtprijzen, exclusief btw.
              </p>
            </div>
          </div>
          <div className="paths" data-stagger>
            <article className="card path-card k-human reveal">
              <span className="path-tag">Startpad</span>
              <p className="muted" style={{ fontSize: "15px" }}>Voor wie net begint en de hele organisatie wil meekrijgen.</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Slim werken met AI
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Veilig met AI
                </li>
              </ul>
              <Link className="btn btn-ghost" href="/paden/startpad">Bekijk het startpad</Link>
            </article>

            <article className="card path-card feature k-agent reveal">
              <span className="path-flag">Meest gekozen</span>
              <span className="path-tag">Versnelpad</span>
              <p className="muted" style={{ fontSize: "15px" }}>Voor wie al wil bouwen en snelheid wil maken.</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Toets je idee
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Van idee naar prototype
                </li>
              </ul>
              <Link className="btn btn-primary" href="/paden/versnelpad">Bekijk het versnelpad</Link>
            </article>

            <article className="card path-card k-automate reveal">
              <span className="path-tag">Directiepad</span>
              <p className="muted" style={{ fontSize: "15px" }}>Voor directie en MT die richting willen bepalen.</p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI-Nulmeting
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI voor de directie
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  AI-Champions (kickoff)
                </li>
              </ul>
              <Link className="btn btn-ghost" href="/paden/directiepad">Bekijk het directiepad</Link>
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
            <h2>Twijfel je over de route?</h2>
            <p>Het begint met een gesprek, en daarna met de nulmeting. Daar kiezen we samen het pad.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Plan een gesprek{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/aanbod">
                Bekijk het aanbod
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
