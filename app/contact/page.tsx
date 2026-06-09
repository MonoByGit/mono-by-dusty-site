import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & veelgestelde vragen · Mono by Dusty",
  description:
    "Neem contact op met Dusty Baars. Mail, bel of stuur een bericht. Plus antwoorden op de meest gestelde vragen over de nulmeting, workshops en bouwen met AI.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    title: "Contact & veelgestelde vragen · Mono by Dusty",
    description:
      "Neem contact op met Dusty Baars. Mail, bel of stuur een bericht. Plus antwoorden op de meest gestelde vragen over de nulmeting, workshops en bouwen met AI.",
    url: "https://monobydusty.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow hero-eyebrow">
            <span className="dot"></span>Contact
          </span>
          <h1>
            Even contact, dan zetten we de{" "}
            <span className="accent" style={{ color: "var(--primary)" }}>
              eerste stap
            </span>
            .
          </h1>
          <p className="lead hero-sub font-sans">
            Een vraag, een idee, of meteen aan de slag? Mail, bel, of stuur hieronder een bericht. Ik antwoord
            persoonlijk, meestal binnen één werkdag.
          </p>
        </div>
      </section>

      {/* CONTACT + FORM */}
      <section className="section-tight">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info reveal">
              <span className="eyebrow">
                <span className="dot"></span>Direct contact
              </span>
              <h2 className="h3" style={{ fontSize: "clamp(1.4rem,2.4vw,1.8rem)", margin: "12px 0 4px" }}>
                Liever direct?
              </h2>
              <div className="contact-list">
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="9" r="3.2" />
                      <path d="M5 20a7 7 0 0 1 14 0" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">Naam</span>
                    <span className="ci-value">Dusty Baars</span>
                  </span>
                </div>
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">E-mail</span>
                    <a className="ci-value" href="mailto:studio@monobydusty.com">
                      studio@monobydusty.com
                    </a>
                  </span>
                </div>
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">Telefoon</span>
                    <a className="ci-value" href="tel:+31624001122">
                      +31 6 24 00 11 22
                    </a>
                  </span>
                </div>
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="4" y="3" width="16" height="18" rx="2" />
                      <path d="M8 7h3M8 11h3M8 15h3M14 7h2M14 11h2M14 15h2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">KvK</span>
                    <span className="ci-value">87 65 43 21</span>
                  </span>
                </div>
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">Portfolio</span>
                    <a className="ci-value" href="https://www.dustybaars.com" target="_blank" rel="noopener noreferrer">
                      dustybaars.com
                    </a>
                  </span>
                </div>
                <div className="contact-row">
                  <span className="ci-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17h4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="ci-text">
                    <span className="ci-label">LinkedIn</span>
                    <a className="ci-value" href="https://www.linkedin.com/in/dustybaars/" target="_blank" rel="noopener noreferrer">
                      in/dustybaars
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="sh-text">
              <span className="eyebrow">
                <span className="dot"></span>Veelgestelde vragen
              </span>
              <h2 className="h2">Misschien zit je antwoord er al bij.</h2>
              <p className="sh-note">En zo niet, stel je vraag gerust via het formulier hierboven.</p>
            </div>
          </div>
          <div className="faq reveal">
            <details className="faq-item">
              <summary className="faq-q">
                Waar beginnen we?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Vrijwel altijd met de <Link href="/nulmeting">AI-Nulmeting</Link>. In één sessie meten we waar je organisatie
                staat, en van daaruit bepalen we samen de logische vervolgstappen. Geen standaardtraject, maar wat past.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Wat kost het?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                We zijn transparant en niet duur. De nulmeting start vanaf €950, workshops vanaf €1.250 en bouwen vanaf
                €1.450 (excl. btw). De volledige prijslijst en drie kant-en-klare paden vind je op de{" "}
                <Link href="/prijzen">prijzenpagina</Link>.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Voor welke organisaties is dit bedoeld?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Het MKB, ruwweg organisaties van 10 tot 50 medewerkers, waar je ziet dat AI moet, maar het team nog niet
                bewegt. Van de receptie tot de boardroom: iedereen mee.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Werken jullie op locatie of online?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Allebei. Sessies en workshops doen we het liefst op locatie, omdat dat het meest oplevert, maar online of
                hybride kan prima. We stemmen het af op wat voor jouw team werkt.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Hoe snel kunnen we starten?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Meestal binnen enkele weken. Een nulmeting plannen we vaak nog sneller. Laat in je bericht weten hoe dringend
                het is, dan kijk ik wat er mogelijk is.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Vervangt AI straks onze mensen?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Nee, daar geloof ik niet in. AI moet je mensen beter maken en vrij maken voor zinvoller werk. Mensen meenemen
                is de missie, niet ze vervangen.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Krijgen we iets tastbaars?
                <span className="faq-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="faq-a">
                Altijd. Van de nulmeting krijg je een eigen online bevindingenpagina. Bij een bouwtraject een werkend,
                klikbaar prototype. Geen vage adviezen, maar iets dat je kunt laten zien en gebruiken.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
