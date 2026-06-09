import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="hero-wash"></div>
        <div className="wrap wrap-wide hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>AI voor ondernemers
          </span>
          <h1 className="hero-title">
            <span className="line"><span>Ik help organisaties</span></span>
            <span className="line"><span>verder met <span className="accent">AI</span>.</span></span>
          </h1>
          <p className="hero-sub font-sans">
            Van je mensen meekrijgen tot een werkend prototype dat laat zien wat kan. Van leren tot bouwen.
          </p>
          <div className="hero-actions">
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
          <div className="hero-sign">
            <span className="mark">&ldquo;</span>
            <p>
              De tools zijn nu van iedereen.<br />
              Het verschil zit in wie weet wát te bouwen, en waarom.
            </p>
          </div>
        </div>
        <div className="wrap wrap-wide hero-media">
          <div className="imgph k-agent" style={{ position: "relative" }}>
            <Image
              className="imgph-img"
              src="/assets/img/1_home_hero.png"
              alt="Dusty geeft een workshop"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <span className="imgph-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="9" r="1.4" />
              </svg>
              Foto: Dusty geeft een workshop &middot; liggend, breed
            </span>
          </div>
          <div className="hero-media-badge">
            <span className="dots">
              <i style={{ background: "#5B8A3A" }}></i>
              <i style={{ background: "#B07A1A" }}></i>
              <i style={{ background: "#6B4A8A" }}></i>
              <i style={{ background: "#2B5BC4" }}></i>
            </span>
            40+ apps in 50 dagen
          </div>
        </div>
      </section>

      {/* ===================== PROOF ===================== */}
      <section className="proof">
        <div className="wrap wrap-wide proof-inner">
          <div className="proof-stat">
            <b>1 miljoen+</b>
            <span>mensen gebruiken mijn werk, elke maand</span>
          </div>
          <div className="proof-div"></div>
          <div className="proof-stat">
            <b>12 jaar</b>
            <span>ontwerp voor enterprise</span>
          </div>
          <div className="proof-logos" aria-label="Ervaring bij">
            <span>Shell</span>
            <span>Roche</span>
            <span>Philips</span>
            <span>ING</span>
          </div>
        </div>
      </section>

      {/* ===================== WAAROM IK ===================== */}
      <section className="section" id="waarom">
        <div className="wrap">
          <div className="why-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Waarom ik
              </span>
              <h2 className="h2" style={{ marginTop: "14px" }}>
                Geen praatjes.<br />
                Een werkend resultaat.
              </h2>
              <p className="sh-note">
                Twaalf jaar ontwerp voor enterprise, twee jaar eigen AI-producten. Nu in dienst van jouw organisatie.
              </p>
            </div>
            <div className="why-hero-img">
              <div className="imgph k-augment" style={{ position: "relative" }}>
                <Image
                  className="imgph-img"
                  src="/assets/img/2_home_waarom_ik.png"
                  alt="Dusty aan het werk"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <span className="imgph-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Sfeerbeeld: Dusty aan het werk
                </span>
              </div>
            </div>
          </div>
          <div className="why-grid" data-stagger>
            <article className="card why-card k-automate reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Ik bouw zelf.</h3>
              <p>Niet alleen uitleg, een werkend ding dat je kunt aanklikken.</p>
              <span className="why-num">01</span>
            </article>
            <article className="card why-card k-augment reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Ontwerp en enterprise.</h3>
              <p>Twaalf jaar ervaring, nu vertaald naar AI.</p>
              <span className="why-num">02</span>
            </article>
            <article className="card why-card k-human reveal">
              <span className="why-dot"></span>
              <h3 className="h3">De mens voorop.</h3>
              <p>Van de receptie tot de boardroom, iedereen mee.</p>
              <span className="why-num">03</span>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== HOE HET WERKT ===================== */}
      <section className="section" id="aanpak" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Hoe het werkt
              </span>
              <h2 className="h2">Eerst meten, dan kiezen, dan doen.</h2>
              <p className="sh-note">
                Geen standaardtraject. We beginnen bij waar je organisatie echt staat, en werken van daaruit.
              </p>
            </div>
          </div>
          <div className="howit">
            <div className="steps-col">
              <div className="steps">
                <div className="step k-agent">
                  <div className="step-num">1</div>
                  <div className="step-body">
                    <h3 className="h3">Nulmeting</h3>
                    <p>In één sessie meten we waar je organisatie staat: vaardigheid, houding en de kansen in het werk.</p>
                  </div>
                </div>
                <div className="step k-augment">
                  <div className="step-num">2</div>
                  <div className="step-body">
                    <h3 className="h3">Inventariseren</h3>
                    <p>Vanuit die uitkomst bepalen we samen wat er echt nodig is, en in welke volgorde.</p>
                  </div>
                </div>
                <div className="step k-automate">
                  <div className="step-num">3</div>
                  <div className="step-body">
                    <h3 className="h3">Uitvoeren</h3>
                    <p>Pas dan kiezen we de workshops, het traject of de maakservice die passen.</p>
                  </div>
                </div>
              </div>
              <div className="steps-foot reveal">
                <p>Wat je terugkrijgt is een eigen online bevindingenpagina, deelbaar met collega&rsquo;s en directie.</p>
                <Link className="btn btn-primary btn-sm" href="/voorbeeld-rapportage">
                  Bekijk een voorbeeld{" "}
                  <span className="arr">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
            <div className="howit-media reveal">
              <div className="imgph k-augment" style={{ position: "relative" }}>
                <Image
                  className="imgph-img"
                  src="/assets/img/3_home_hoe_het_werkt.png"
                  alt="Dusty geeft training voor een groep"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <span className="imgph-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Foto: Dusty geeft training voor een groep
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== AANBOD (BENTO) ===================== */}
      <section className="section" id="aanbod">
        <div className="wrap wrap-wide">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Het aanbod
              </span>
              <h2 className="h2">Twee sporen, plus een maakservice.</h2>
              <p className="sh-note">
                De breedte om je mensen mee te krijgen, de diepte om echt te bouwen, en de maakservice om het samen neer te zetten.
              </p>
            </div>
          </div>

          <div className="tracks-3" data-stagger>
            <Link className="card xsell k-human reveal" href="/aanbod">
              <span className="xs-spoor">
                <span className="dot"></span>Spoor 1 &middot; de breedte
              </span>
              <h3>Werken met AI</h3>
              <p>Je hele organisatie mee, van de vloer tot de directie. Vaardigheid, houding en vertrouwen.</p>
              <span className="xs-go">
                Bekijk het spoor{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="card xsell k-agent reveal" href="/aanbod">
              <span className="xs-spoor">
                <span className="dot"></span>Spoor 2 &middot; de diepte
              </span>
              <h3>Bouwen met AI</h3>
              <p>Van vaag idee naar iets dat echt werkt. Toetsen, bouwen, en goed bouwen.</p>
              <span className="xs-go">
                Bekijk het spoor{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
            <Link className="card xsell k-automate reveal" href="/aanbod">
              <span className="xs-spoor">
                <span className="dot"></span>Maakservice &middot; done-with-you
              </span>
              <h3>Samen maken</h3>
              <p>Ik maak het met je, of voor je. Een prototype, een werkend resultaat dat je kunt gebruiken.</p>
              <span className="xs-go">
                Bekijk het spoor{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: "clamp(28px,4vw,42px)" }}>
            <Link className="btn btn-primary btn-lg" href="/aanbod">
              Bekijk het volledige aanbod{" "}
              <span className="arr">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== PRIJZEN TEASER ===================== */}
      <section className="section" id="prijzen" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="price-teaser">
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot"></span>Prijzen
              </span>
              <h2 className="h2" style={{ marginTop: "14px" }}>
                Transparant, geen verrassingen.
              </h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                We verstoppen onze prijzen niet en we zijn niet duur. Vaste prijzen per pakket, exclusief btw, los te boeken of als pad. De volledige prijs staat per pakket op de detailpagina.
              </p>
              <Link className="btn btn-primary" style={{ marginTop: "26px" }} href="/prijzen">
                Bekijk alle prijzen en paden{" "}
                <span className="arr">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="card reveal" style={{ padding: "8px 24px" }}>
              <div className="price-table">
                <div className="price-row">
                  <span className="pr-name">
                    <span className="dot" style={{ background: "var(--c-agent)" }}></span>
                    AI-Nulmeting{" "}
                    <small style={{ color: "var(--ink-mute)", fontWeight: 500 }}>
                      &middot; het startpunt
                    </small>
                  </span>
                  <span className="pr-price">
                    <small>vanaf </small>&euro;950
                  </span>
                </div>
                <div className="price-row">
                  <span className="pr-name">
                    <span className="dot" style={{ background: "var(--c-human)" }}></span>
                    Werken met AI
                  </span>
                  <span className="pr-price">
                    <small>vanaf </small>&euro;1.250
                  </span>
                </div>
                <div className="price-row">
                  <span className="pr-name">
                    <span className="dot" style={{ background: "var(--c-agent)" }}></span>
                    Bouwen met AI
                  </span>
                  <span className="pr-price">
                    <small>vanaf </small>&euro;1.450
                  </span>
                </div>
                <div className="price-row" style={{ borderBottom: 0 }}>
                  <span className="pr-name">
                    <span className="dot" style={{ background: "var(--c-automate)" }}></span>
                    Samen maken
                  </span>
                  <span className="pr-price">
                    <small>vanaf </small>&euro;950<small> p/m</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WAAR DIT OP RUST ===================== */}
      <section className="section" id="waar-dit-op-rust">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Waar dit op rust
              </span>
              <h2 className="h2" style={{ marginTop: "14px" }}>
                Geen portfolio, wel een staat van dienst.
              </h2>
              <p className="sh-note">
                Een nieuwe dienst, gebouwd op twaalf jaar werk en eigen producten die draaien.
              </p>
            </div>
          </div>
          <div className="why-grid" data-stagger>
            <article className="card why-card k-augment reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Waar ik vandaan kom</h3>
              <p>Twaalf jaar ontwerp voor enterprise, bij Shell, Roche, Philips en ING.</p>
              <span className="why-num">01</span>
            </article>
            <article className="card why-card k-agent reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Wat ik heb gebouwd</h3>
              <p>
                Mijn eigen AI-producten draaien, met echte gebruikers. Memortium met betalende klanten, en veertig werkende apps in vijftig dagen. Ik vraag niets wat ik niet zelf doe.
              </p>
              <span className="why-num">02</span>
            </article>
            <article className="card why-card k-automate reveal">
              <span className="why-dot"></span>
              <h3 className="h3">De methode is beproefd</h3>
              <p>Tientallen ontwerp- en UX-workshops gegeven. Dezelfde spier, nu gericht op AI.</p>
              <span className="why-num">03</span>
            </article>
          </div>
          <div className="dl-bar reveal" style={{ marginTop: "24px" }}>
            <p>Het volledige werk en de verhalen staan op mijn portfolio.</p>
            <a className="btn btn-ghost btn-sm" href="https://www.dustybaars.com" target="_blank" rel="noopener noreferrer">
              Bekijk mijn werk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 inline-block ml-1">
                <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section tmx-sec" id="testimonials">
        <div className="wrap">
          <div className="tmx-head reveal">
            <span className="eyebrow">
              <span className="dot"></span>Wat klanten zeggen
            </span>
            <h2>In hun eigen woorden.</h2>
            <p>Vijf klanten verhalen (gereserveerde placeholders, wachten op goedkeuring).</p>
          </div>
          
          <figure className="tmx-feature reveal">
            <span className="tmx-mark">&ldquo;</span>
            <blockquote>
              Het eerste van vijf klantverhalen verschijnt hier binnenkort.
            </blockquote>
            <figcaption className="tmx-by">
              <span className="tmx-av">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-6 h-6">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" strokeLinecap="round" />
                </svg>
              </span>
              <span style={{ textAlign: "left" }}>
                <span className="nm">Naam volgt</span>
                <br />
                <span className="rl">Rol, bedrijf</span>
              </span>
            </figcaption>
          </figure>
          
          <div className="tmx-row" data-stagger>
            <figure className="tmx-mini reveal">
              <span className="tmx-mark">&ldquo;</span>
              <p className="ph">Een klantverhaal krijgt hier binnenkort zijn plek.</p>
              <figcaption className="tmx-cite">
                <span className="nm">Naam volgt</span>
                <span className="rl">Rol, bedrijf</span>
              </figcaption>
            </figure>
            <figure className="tmx-mini reveal">
              <span className="tmx-mark">&ldquo;</span>
              <p className="ph">Een klantverhaal krijgt hier binnenkort zijn plek.</p>
              <figcaption className="tmx-cite">
                <span className="nm">Naam volgt</span>
                <span className="rl">Rol, bedrijf</span>
              </figcaption>
            </figure>
            <figure className="tmx-mini reveal">
              <span className="tmx-mark">&ldquo;</span>
              <p className="ph">Een klantverhaal krijgt hier binnenkort zijn plek.</p>
              <figcaption className="tmx-cite">
                <span className="nm">Naam volgt</span>
                <span className="rl">Rol, bedrijf</span>
              </figcaption>
            </figure>
            <figure className="tmx-mini reveal">
              <span className="tmx-mark">&ldquo;</span>
              <p className="ph">Een klantverhaal krijgt hier binnenkort zijn plek.</p>
              <figcaption className="tmx-cite">
                <span className="nm">Naam volgt</span>
                <span className="rl">Rol, bedrijf</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===================== OVER DUSTY ===================== */}
      <section className="section" id="over">
        <div className="wrap">
          <div className="over">
            <div className="over-media reveal">
              <div className="imgph k-human" style={{ position: "relative" }}>
                <Image
                  className="imgph-img"
                  src="/assets/img/4_home_over_dusty.png"
                  alt="Portret van Dusty Baars"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <span className="imgph-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                    <circle cx="12" cy="9" r="3.5" />
                    <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
                  </svg>
                  Portret: Dusty Baars
                </span>
              </div>
            </div>
            <div className="over-body reveal">
              <span className="eyebrow">Over Dusty</span>
              <h2 className="h2">De man achter de dienst.</h2>
              <p>
                Ik ben Dusty Baars. Ik begon met een eigen studio, ontwierp jaren voor enterprise bij Shell, Roche, Philips en ING, en bouwde de laatste twee jaar mijn eigen AI-producten.
              </p>
              <p>
                Entrepreneurschap, ontwerp en bouwen, nu komen die drie samen in één dienst. Ik geloof niet in het vervangen van mensen. AI moet ze beter maken en vrij maken voor zinvoller werk.
              </p>
              <p className="over-sign">Creëren is de handtekening, mensen meenemen is de missie.</p>
              <div className="over-links">
                <a className="btn btn-ghost btn-sm" href="https://www.dustybaars.com" target="_blank" rel="noopener noreferrer">
                  Portfolio
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 inline-block ml-1">
                    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
                <a className="btn btn-ghost btn-sm" href="https://www.linkedin.com/in/dustybaars/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 inline-block ml-1">
                    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OPRICHTERSNOTITIE ===================== */}
      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: "760px", marginInline: "auto", textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="dot"></span>Eerlijk over waar ik sta
            </span>
            <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", lineHeight: 1.5, color: "var(--ink)", marginTop: "20px", textWrap: "pretty" }}>
              Deze dienst is nieuw onder Mono by Dusty. Ik ga niet doen alsof ik er al honderd heb gedaan. Wat ik wel heb, is twaalf jaar ontwerp, tientallen workshops, en mijn eigen bedrijven die ik met AI heb gebouwd en draaiend houd. Het werk is hetzelfde, alleen scherper geworden in dit tijdperk. Ik sta achter mijn kunnen. Wat ik nu zoek, is de kans om het voor jou te laten zien. Geen grote beloftes, gewoon een eerste gesprek en daarna de eerste stap.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section className="section cta" id="contact">
        <div className="wrap">
          <div className="cta-card reveal">
            <div className="cta-wash"></div>
            <span className="cta-dots">
              <i style={{ background: "#5B8A3A" }}></i>
              <i style={{ background: "#B07A1A" }}></i>
              <i style={{ background: "#6B4A8A" }}></i>
              <i style={{ background: "#2B5BC4" }}></i>
            </span>
            <h2>Klaar om te beginnen?</h2>
            <p>Het begint met een gesprek, en daarna met de nulmeting.</p>
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
