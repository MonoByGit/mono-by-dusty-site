import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NulmetingForm from "@/components/NulmetingForm";

export const metadata: Metadata = {
  title: "De AI-Nulmeting, het startpunt · Mono by Dusty",
  description:
    "In één sessie meten we waar je organisatie staat met AI: vaardigheid, houding en kansen. Je krijgt een eigen online bevindingenpagina terug. Vanaf €950.",
  alternates: {
    canonical: "/nulmeting",
  },
  openGraph: {
    type: "website",
    title: "De AI-Nulmeting, het startpunt · Mono by Dusty",
    description:
      "In één sessie meten we waar je organisatie staat met AI: vaardigheid, houding en kansen. Je krijgt een eigen online bevindingenpagina terug. Vanaf €950.",
    url: "https://monobydusty.com/nulmeting",
  },
};

export default function NulmetingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow" style={{ color: "var(--c-agent)" }}>
            <span className="dot" style={{ background: "var(--c-agent)" }}></span>
            AI-Nulmeting &middot; het startpunt
          </span>
          <h1>
            Weet precies waar je organisatie staat met{" "}
            <span className="accent" style={{ color: "var(--primary)" }}>
              AI
            </span>
            .
          </h1>
          <p className="lead hero-sub font-sans">
            In één sessie meten we vaardigheid, houding en de kansen in het dagelijks werk. Je krijgt een eigen online
            bevindingenpagina terug, deelbaar met collega's en directie. Dit is waar elk traject begint.
          </p>
          <div className="price-chip hero-sub">
            <b>vanaf &euro;950</b>
            <span>excl. btw &middot; één sessie</span>
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link className="btn btn-primary btn-lg" href="#aanmelden">
              Meld je aan{" "}
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
            <Link className="btn btn-ghost btn-lg" href="/voorbeeld-rapportage">
              Bekijk een voorbeeld
            </Link>
          </div>
        </div>
        <div className="wrap wrap-wide hero-media" style={{ marginTop: "clamp(40px,6vw,64px)" }}>
          <div className="imgph k-agent" style={{ aspectRatio: "16/7", boxShadow: "var(--shadow-lg)", position: "relative" }}>
            <Image
              className="imgph-img"
              src="/assets/img/5_nulmeting_hero.png"
              alt="De nulmeting-sessie"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <span className="imgph-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Foto: de nulmeting-sessie in uitvoering
            </span>
          </div>
        </div>
      </section>

      {/* WAT WE METEN */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Wat we meten
              </span>
              <h2 className="h2">Drie dingen, in één sessie.</h2>
              <p className="sh-note">
                Geen vragenlijst om in te vullen en te vergeten. Een gesprek en een meting die meteen richting geven.
              </p>
            </div>
          </div>
          <div className="why-grid" data-stagger>
            <article className="card why-card k-agent reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Vaardigheid</h3>
              <p>Wat kan je team al met AI, en waar zit de ruimte om te groeien?</p>
              <span className="why-num">01</span>
            </article>
            <article className="card why-card k-human reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Houding</h3>
              <p>Hoe kijkt de organisatie naar AI: enthousiasme, twijfel of weerstand?</p>
              <span className="why-num">02</span>
            </article>
            <article className="card why-card k-automate reveal">
              <span className="why-dot"></span>
              <h3 className="h3">Kansen</h3>
              <p>Waar in het dagelijks werk zit de grootste, haalbare winst?</p>
              <span className="why-num">03</span>
            </article>
          </div>
        </div>
      </section>

      {/* WAT JE TERUGKRIJGT */}
      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="split reverse">
            <div className="split-media reveal">
              <div className="imgph k-agent" style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image
                  className="imgph-img"
                  src="/assets/img/6_nulmeting_scherm.png"
                  alt="De online bevindingenpagina"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <span className="imgph-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4M7 9h10M7 13h6" strokeLinecap="round" />
                  </svg>
                  Voorbeeld: je online bevindingenpagina
                </span>
              </div>
            </div>
            <div className="split-body reveal">
              <span className="eyebrow">
                <span className="dot"></span>Wat je terugkrijgt
              </span>
              <h2 className="h2" style={{ marginTop: "14px" }}>
                Een eigen bevindingenpagina.
              </h2>
              <p>
                Geen pdf in een la, maar een levende online pagina, gemaakt voor jouw organisatie. Helder, deelbaar en
                concreet.
              </p>
              <ul className="checklist">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Een scherp beeld van waar je staat
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  De kansen, op volgorde van impact
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Deelbaar met collega's en directie
                </li>
              </ul>
              <Link className="btn btn-ghost" href="/voorbeeld-rapportage">
                Bekijk een voorbeeld{" "}
                <span className="arr">
                  <svg
                    width="16"
                    height="16"
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
            </div>
          </div>
        </div>
      </section>

      {/* FOTO'S */}
      <section className="section">
        <div className="wrap wrap-wide">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Hoe het eruitziet
              </span>
              <h2 className="h2">Een sessie, geen toets.</h2>
            </div>
          </div>
          <div className="photo-strip reveal">
            <div className="imgph k-human" style={{ position: "relative" }}>
              <Image
                className="imgph-img"
                src="/assets/img/7_nulmeting_strook_1.png"
                alt="De groep in gesprek"
                fill
                sizes="(max-width: 600px) 100vw, 400px"
              />
              <span className="imgph-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-1-5.8M21 20a6 6 0 0 0-5-5.9" strokeLinecap="round" />
                </svg>
                Foto: de groep in gesprek
              </span>
            </div>
            <div className="imgph k-agent" style={{ position: "relative" }}>
              <Image
                className="imgph-img"
                src="/assets/img/8_nulmeting_strook_2.png"
                alt="Meten en scoren"
                fill
                sizes="(max-width: 600px) 100vw, 400px"
              />
              <span className="imgph-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                  <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Foto: meten en scoren
              </span>
            </div>
            <div className="imgph k-automate" style={{ position: "relative" }}>
              <Image
                className="imgph-img"
                src="/assets/img/9_nulmeting_strook_3.png"
                alt="De bevindingen op scherm"
                fill
                sizes="(max-width: 600px) 100vw, 400px"
              />
              <span className="imgph-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                  <rect x="3" y="4" width="18" height="13" rx="2" />
                  <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                </svg>
                Foto: de bevindingen op scherm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* AANMELDEN */}
      <section className="section" id="aanmelden" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Meld je aan
              </span>
              <h2 className="h2">Begin met de nulmeting.</h2>
              <p className="sh-note">
                Laat je gegevens achter, dan plannen we samen een datum. Je zit nergens aan vast tot we de sessie
                bevestigen.
              </p>
            </div>
          </div>
          <NulmetingForm />
        </div>
      </section>
    </main>
  );
}
