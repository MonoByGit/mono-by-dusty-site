import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { paden } from "@/data/content";
import SpoorWrapper from "@/components/SpoorWrapper";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(paden).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pathDetail = paden[slug];
  if (!pathDetail) return {};
  
  return {
    title: `${pathDetail.title} · Mono by Dusty`,
    description: pathDetail.subtitle,
    alternates: {
      canonical: `/paden/${slug}`,
    },
  };
}

function cleanLink(link: string) {
  if (!link) return "";
  let clean = link.replace("../", "/").replace(".html", "");
  if (clean.includes("#")) {
    const parts = clean.split("#");
    const page = parts[0];
    const hash = parts[1];
    const cleanPage = page === "index" ? "" : page;
    return `${cleanPage.startsWith("/") ? "" : "/"}${cleanPage}#${hash}`;
  }
  if (!clean.startsWith("/") && !clean.startsWith("http") && !clean.startsWith("mailto:") && !clean.startsWith("tel:")) {
    clean = "/aanbod/" + clean;
  }
  return clean;
}

export default async function PathPage({ params }: PageProps) {
  const { slug } = await params;
  const pathDetail = paden[slug];

  if (!pathDetail) {
    notFound();
  }

  // Versnelpad is Spoor 2 (Bouwen) and uses oker canvas.
  const isSpoor2 = slug === "versnelpad";
  const spoorValue = isSpoor2 ? "2" : "";

  const spoorClasses: Record<string, string> = {
    startpad: "k-human",
    versnelpad: "k-agent",
    directiepad: "k-automate",
  };
  const pathSpoorClass = spoorClasses[slug] || "k-human";

  return (
    <main>
      <SpoorWrapper spoor={spoorValue} />
      
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner detail-head">
          <nav className="breadcrumb hero-eyebrow" aria-label="Kruimelpad">
            <Link href="/prijzen">Prijzen</Link>
            <span className="sep">/</span>
            <Link href="/paden">Paden</Link>
            <span className="sep">/</span>
            <span className="cur">{pathDetail.title}</span>
          </nav>
          <div className="detail-flags hero-eyebrow">
            <span className={`spoor-pill ${pathSpoorClass}`}>
              <span className="dot"></span>{pathDetail.spoorText}
            </span>
          </div>
          <h1 className="hero-sub">{pathDetail.title}</h1>
          <p className="detail-lead hero-sub">{pathDetail.subtitle}</p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="section-tight">
        <div className="wrap">
          <div className="imgph reveal" style={{ position: "relative", aspectRatio: "16/7", boxShadow: "var(--shadow-md)" }}>
            <Image
              className="imgph-img"
              src={pathDetail.imageSrc.replace("../", "/")}
              alt={pathDetail.imageAlt || pathDetail.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <span className="imgph-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {pathDetail.imageLabel}
            </span>
          </div>
        </div>
      </section>

      {/* USP BAND */}
      <section className="section-tight">
        <div className="wrap">
          <div className={`oplevert ${pathSpoorClass} reveal`}>
            <span className="eyebrow">
              <span className="dot"></span>Wat het je oplevert
            </span>
            <div className="oplevert-grid">
              {pathDetail.oplevert.map((item, idx) => (
                <div className="oplevert-card" key={idx}>
                  <span className="ov-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW DETAILS */}
      <section className="section-tight">
        <div className="wrap">
          {pathDetail.voorWie && (
            <div className="detail-block reveal">
              <span className="eyebrow">
                <span className="dot"></span>Voor wie
              </span>
              <p className="detail-lead-p" style={{ marginTop: "14px" }}>
                {pathDetail.voorWie}
              </p>
            </div>
          )}
          {pathDetail.deReis && (
            <div className="detail-block reveal" style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
              <span className="eyebrow">
                <span className="dot"></span>De reis
              </span>
              <p className="detail-lead-p" style={{ marginTop: "14px" }}>
                {pathDetail.deReis}
              </p>
            </div>
          )}
          {pathDetail.quote && (
            <div className="verschuiving reveal" style={{ marginTop: "clamp(32px, 4vw, 48px)" }}>
              <p>
                <span className="mark">&ldquo;</span>
                {pathDetail.quote}
                <span className="mark">&rdquo;</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PATH ITEMS OUTLINE & ASIDE CARD */}
      <section className={`section ${pathSpoorClass}`} style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className={`detail ${pathSpoorClass}`}>
            <div className="detail-main">
              {pathDetail.included && pathDetail.included.length > 0 && (
                <section className="detail-block reveal">
                  <h2>Wat erin zit</h2>
                  <p style={{ marginBottom: "18px", color: "var(--ink-soft)" }}>
                    Een samengestelde route uit de losse onderdelen, afgestemd op waar je staat. Elk onderdeel kun je openen voor de details.
                  </p>
                  <div className="path-incl">
                    {pathDetail.included.map((item, idx) => (
                      <Link className="card path-incl-item" href={cleanLink(item.href)} key={idx}>
                        <span className="pi-step">{item.step}</span>
                        <div className="pi-body">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <span className="pi-go">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {pathDetail.watJeKrijgt && pathDetail.watJeKrijgt.length > 0 && (
                <section className="detail-block reveal">
                  <h2>Wat je krijgt</h2>
                  <ul className="checklist">
                    {pathDetail.watJeKrijgt.map((item, idx) => (
                      <li key={idx}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {pathDetail.anders && pathDetail.anders.text && (
                <section className="detail-block reveal">
                  <div className={`card anders-card ${pathSpoorClass}`}>
                    <h2>{pathDetail.anders.title || "De winst"}</h2>
                    <p>{pathDetail.anders.text}</p>
                  </div>
                </section>
              )}

              {pathDetail.praktijk && pathDetail.praktijk.text && (
                <section className="detail-block reveal">
                  <div className={`card praktijk ${pathSpoorClass}`}>
                    <span className="pk-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.3-1 2.5H9c0-1.2-.3-1.8-1-2.5A6 6 0 0 1 12 3Z" />
                      </svg>
                    </span>
                    <div className="pk-body">
                      <h4>{pathDetail.praktijk.title || "Voorbeeld uit de praktijk"}</h4>
                      <p>{pathDetail.praktijk.text}</p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            <aside>
              <div className="card book-card reveal">
                <span className="los-badge" style={{ alignSelf: "flex-start" }}>
                  <span className="pulse"></span>Een compleet pad
                </span>
                <div className="book-price">
                  {pathDetail.bookCard.price}
                  <small>{pathDetail.bookCard.unit}</small>
                </div>
                <Link className="btn btn-primary btn-lg" href="/contact">
                  Boek dit pad{" "}
                  <span className="arr">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
                <p className="book-reassure">
                  Liever eerst overleggen?
                  <br />
                  <Link href="/contact#bericht">Plan een kort gesprek.</Link>
                </p>
                {pathDetail.bookCard.standalone && <p className="book-standalone">{pathDetail.bookCard.standalone}</p>}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DELIVERABLES SHOWCASE */}
      {pathDetail.deliverables && pathDetail.deliverables.length > 0 && (
        <section className="section">
          <div className="wrap wrap-wide">
            <div className="sec-head reveal">
              <div className="sh-text">
                <span className="eyebrow">
                  <span className="dot"></span>De opleveringen
                </span>
                <h2 className="h2" style={{ marginTop: "14px" }}>
                  Zo ziet de uitkomst eruit.
                </h2>
                <p className="muted" style={{ marginTop: "10px", maxWidth: "54ch" }}>
                  Voorbeelden van de tastbare opleveringen die bij dit pad horen, plus je bevindingenpagina.
                </p>
              </div>
            </div>
            <div className="xsell-grid" data-stagger>
              {pathDetail.deliverables.map((deliv, idx) => {
                // Check spoor class
                const isNulmeting = deliv.step === "0";
                const spoorClass = isNulmeting ? "k-agent" : pathSpoorClass;
                return (
                  <Link className={`card xsell ${spoorClass}`} href={cleanLink(deliv.href)} key={idx}>
                    <span className="xs-spoor">
                      <span className="dot"></span>
                      {deliv.step}
                    </span>
                    <h3>{deliv.title}</h3>
                    <p>{deliv.desc}</p>
                    <span className="xs-go">
                      Bekijk voorbeeld{" "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* PROMISE BAND */}
      <section className="section-tight">
        <div className="wrap">
          <div className="impl-promise reveal">
            <p>En wat je besluit te implementeren, kan ik met je uitvoeren of voor je maken. Het pad stopt niet bij het advies.</p>
            <Link className="btn btn-primary" href="/contact">
              Plan een gesprek{" "}
              <span className="arr">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {pathDetail.faqs && pathDetail.faqs.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="sec-head reveal">
              <div className="sh-text">
                <span className="eyebrow">
                  <span className="dot"></span>Veelgestelde vragen
                </span>
                <h2 className="h2" style={{ marginTop: "14px" }}>
                  Goed om te weten.
                </h2>
              </div>
            </div>
            <div className="faq reveal">
              {pathDetail.faqs.map((faq, idx) => (
                <details className="faq-item" key={idx}>
                  <summary className="faq-q">
                    {faq.q}
                    <span className="faq-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BOTTOM */}
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
            <h2>Klaar voor het {slug}?</h2>
            <p>We beginnen met een gesprek en de nulmeting. Daarna zetten we samen de stappen, in jouw tempo.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Boek dit pad{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link className="btn btn-ghost btn-lg" href="/prijzen">
                Vergelijk de paden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Service & FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": pathDetail.spoorText,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Mono by Dusty",
                  "url": "https://monobydusty.com"
                },
                "name": pathDetail.title,
                "description": pathDetail.subtitle,
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": pathDetail.bookCard.price.replace(/[^0-9]/g, ""),
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "priceType": "https://schema.org/MinimumPrice",
                    "priceCurrency": "EUR",
                    "price": pathDetail.bookCard.price.replace(/[^0-9]/g, "")
                  }
                }
              },
              ...(pathDetail.faqs && pathDetail.faqs.length > 0 ? [{
                "@type": "FAQPage",
                "mainEntity": pathDetail.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              }] : [])
            ]
          })
        }}
      />
    </main>
  );
}
