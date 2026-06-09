import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Het aanbod, twee sporen en een maakservice · Mono by Dusty",
  description:
    "Werken met AI en bouwen met AI, plus een done-with-you maakservice. Het volledige aanbod van Mono by Dusty, transparant en per pakket.",
  alternates: {
    canonical: "/aanbod",
  },
};

export default function AanbodPage() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>Het aanbod
          </span>
          <h1>
            Twee sporen, plus een <span className="accent">maakservice</span>.
          </h1>
          <p className="lead hero-sub">
            De breedte om je mensen mee te krijgen, de diepte om echt te bouwen.
            <br />
            En als je wilt, bouw ik mee. Alles begint bij de nulmeting.
          </p>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link className="btn btn-primary" href="/contact">
              Plan een gesprek{" "}
              <span className="arr">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <a className="btn btn-ghost btn-dl" href="/downloads/aanbod-overzicht.pdf" download>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block mr-1">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Volledig overzicht (PDF) <small className="text-ink-mute ml-1">(Placeholder)</small>
            </a>
          </div>
        </div>
      </section>

      {/* NULMETING CALLOUT */}
      <section className="section-tight">
        <div className="wrap">
          <div
            className="card reveal k-agent"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "28px",
              alignItems: "center",
              borderColor: "color-mix(in oklab, var(--c-agent) 30%, var(--line))",
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: "var(--c-agent)" }}>
                <span className="dot" style={{ background: "var(--c-agent)" }}></span>Het startpunt
              </span>
              <h2 className="h3" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)", margin: "12px 0 8px" }}>
                AI-Nulmeting
              </h2>
              <p className="muted" style={{ maxWidth: "54ch" }}>
                In één sessie meten we waar je organisatie staat: vaardigheid, houding, en de kansen in het dagelijks werk.
                Je krijgt een eigen online bevindingenpagina terug, deelbaar met collega&rsquo;s en directie.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              <div className="pkg-price" style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-.03em", color: "var(--ink)" }}>
                <small style={{ fontSize: ".8rem", fontWeight: 500, color: "var(--ink-mute)", marginRight: ".4em" }}>vanaf</small>
                &euro;950
              </div>
              <div>
                <Link className="btn btn-primary btn-sm" href="/nulmeting">
                  Bekijk de nulmeting{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPOOR 1 */}
      <section className="track-section k-human" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap wrap-wide">
          <div className="track-head reveal">
            <div>
              <span className="track-label">Spoor 1 &middot; de breedte</span>
              <h2>Werken met AI</h2>
              <p className="track-sub">Je hele organisatie mee, van de vloer tot de boardroom. Vaardigheid, houding en vertrouwen.</p>
            </div>
          </div>
          <div className="pkg-grid" data-stagger>
            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 1.1</span>
              </div>
              <h3>Slim werken met AI</h3>
              <p className="pkg-intro">De basis voor je hele team: sneller en slimmer, met vertrouwen.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Praktische sessie van een dagdeel
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Direct toepasbare werkvormen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Eigen bevindingenpagina als naslag
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.450</span>
                <Link className="pkg-go" href="/aanbod/slim-werken-met-ai">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 1.2</span>
              </div>
              <h3>AI op jouw afdeling</h3>
              <p className="pkg-intro">Toegespitst op het werk van één afdeling, met concrete use-cases.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Use-cases uit jullie eigen werk
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Hands-on met echte voorbeelden
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Concreet vervolgplan
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.650</span>
                <Link className="pkg-go" href="/aanbod/ai-op-jouw-afdeling">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 1.3</span>
              </div>
              <h3>Veilig met AI</h3>
              <p className="pkg-intro">Heldere kaders: wat mag wel en niet, voor iedereen begrijpelijk.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Privacy en datagebruik in gewone taal
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Do&rsquo;s en don&rsquo;ts voor je team
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Eenvoudige huisregels om mee te starten
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.250</span>
                <Link className="pkg-go" href="/aanbod/veilig-met-ai">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 1.4</span>
              </div>
              <h3>AI voor de directie</h3>
              <p className="pkg-intro">Strategisch overzicht en besluitvorming voor het MT.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Wat verandert er voor jullie markt
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Kansen en risico&rsquo;s scherp in beeld
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Prioriteiten en besluitvorming
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.950</span>
                <Link className="pkg-go" href="/aanbod/ai-voor-de-directie">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 1.5</span>
              </div>
              <h3>AI-Champions</h3>
              <p className="pkg-intro">Een interne kopgroep die de organisatie blijft meenemen.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Meerdaags traject voor 4&ndash;6 mensen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Zij worden de motor in huis
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Doorlopende kennisborging
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;5.500</span>
                <Link className="pkg-go" href="/aanbod/ai-champions">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SPOOR 2 */}
      <section className="track-section k-agent">
        <div className="wrap wrap-wide">
          <div className="track-head reveal">
            <div>
              <span className="track-label">Spoor 2 &middot; de diepte</span>
              <h2>Bouwen met AI</h2>
              <p className="track-sub">Van vaag idee naar iets dat echt werkt. Toetsen, bouwen en goed bouwen.</p>
            </div>
          </div>
          <div className="pkg-grid" data-stagger>
            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 2.1</span>
              </div>
              <h3>Van idee naar prototype</h3>
              <p className="pkg-intro">Van vaag idee naar iets dat werkt en je kunt aanklikken.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Samen je idee aanscherpen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Een werkend, klikbaar prototype
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Concreet beeld van wat kan
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.950</span>
                <Link className="pkg-go" href="/aanbod/van-idee-naar-prototype">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 2.2</span>
              </div>
              <h3>Toets je idee</h3>
              <p className="pkg-intro">Snel valideren of het idee hout snijdt, vóór je bouwt.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Kritische toets op haalbaarheid
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Risico&rsquo;s en aannames helder
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Go / no-go met onderbouwing
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.450</span>
                <Link className="pkg-go" href="/aanbod/toets-je-idee">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 2.3</span>
              </div>
              <h3>Goed bouwen met AI</h3>
              <p className="pkg-intro">De vakmanschap-laag: structuur, kwaliteit en onderhoud.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Goede architectuur en patronen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Onderhoudbaar en uitbreidbaar
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Kwaliteit die meegroeit
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.650</span>
                <Link className="pkg-go" href="/aanbod/goed-bouwen-met-ai">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 2.4</span>
              </div>
              <h3>Veilig bouwen met AI</h3>
              <p className="pkg-intro">Bouwen met oog voor privacy, security en governance.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Security- en privacy-principes
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Governance die in de praktijk werkt
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Veilig richting productie
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.650</span>
                <Link className="pkg-go" href="/aanbod/veilig-bouwen-met-ai">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SPOOR 3 */}
      <section className="track-section k-automate" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap wrap-wide">
          <div className="track-head reveal">
            <div>
              <span className="track-label">Maakservice &middot; done-with-you</span>
              <h2>Samen maken</h2>
              <p className="track-sub">Ik bouw mee, jij houdt de regie. Voor wie niet alleen wil leren, maar resultaat wil neerzetten.</p>
            </div>
          </div>
          <div className="pkg-grid" data-stagger>
            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 3.1</span>
              </div>
              <h3>Prototype-sprint</h3>
              <p className="pkg-intro">In een korte sprint samen een werkend prototype neerzetten.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Done-with-you, jij houdt de regie
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Eén tot enkele weken intensief
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Een tastbaar resultaat aan het eind
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;3.500&ndash;7.500</span>
                <Link className="pkg-go" href="/aanbod/prototype-sprint">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>

            <article className="card pkg reveal">
              <div className="pkg-top">
                <span className="dot"></span>
                <span>Spoor 3.2</span>
              </div>
              <h3>Doorlopende begeleiding</h3>
              <p className="pkg-intro">Maandelijkse begeleiding terwijl je zelf doorbouwt.</p>
              <ul className="what">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Vaste begeleiding per maand
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Sparren, reviewen en bijsturen
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Flexibel op- en afschalen
                </li>
              </ul>
              <div className="pkg-foot">
                <span className="pkg-price">&euro;1.500&ndash;3.000<small> p/m</small></span>
                <Link className="pkg-go" href="/aanbod/doorlopende-begeleiding">
                  Bekijk pakket{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* RUST STROOK */}
      <section className="section" style={{ paddingBlock: 0 }}>
        <div className="wrap">
          <div className="proof-strip reveal">
            <span className="stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.7 20.3 7 13.6l-5-4.6 6.8-.8z" />
                </svg>
              ))}
            </span>
            <p>
              Vijf klanten delen binnenkort hun verhaal over dit werk.{" "}
              <Link href="/#testimonials">Lees de verhalen</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2>Niet zeker welk pakket past?</h2>
            <p>Dat hoeft ook niet. We beginnen met een gesprek en de nulmeting, en kiezen daarna samen.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Plan een gesprek{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/nulmeting">
                Bekijk de nulmeting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
