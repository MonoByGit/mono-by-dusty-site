import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/content";
import SpoorWrapper from "@/components/SpoorWrapper";
import type { Metadata } from "next";

// Force static rendering for all 11 slugs
export async function generateStaticParams() {
  return Object.keys(packages).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages[slug];
  if (!pkg) return {};
  
  return {
    title: `${pkg.title} · Mono by Dusty`,
    description: pkg.subtitle,
    alternates: {
      canonical: `/aanbod/${slug}`,
    },
  };
}

function cleanLink(link: string) {
  if (!link) return "";
  let clean = link.replace("../", "/").replace(".html", "");
  // If it starts with an anchor or hash
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

export default async function PackagePage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = packages[slug];

  if (!pkg) {
    notFound();
  }

  // Determine if it belongs to Spoor 2
  const isSpoor2 = pkg.spoorText.includes("Spoor 2");
  const spoorValue = isSpoor2 ? "2" : "";

  // Clean spoor class mapping (removes "spoor-pill" from layout container classes)
  const cleanSpoorClass = pkg.spoorClass.includes("k-human")
    ? "k-human"
    : pkg.spoorClass.includes("k-agent")
    ? "k-agent"
    : "k-automate";

  return (
    <main>
      <SpoorWrapper spoor={spoorValue} />
      
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner detail-head">
          <nav className="breadcrumb hero-eyebrow" aria-label="Kruimelpad">
            <Link href="/aanbod">Aanbod</Link>
            <Link href="/paden">Paden</Link>
            <span className="sep">/</span>
            <span className="cur">{pkg.spoorText}</span>
          </nav>
          <div className="detail-flags hero-eyebrow">
            {pkg.isLosBoekbaar && (
              <span className="los-badge">
                <span className="pulse"></span>Los te boeken
              </span>
            )}
            <span className={`spoor-pill ${cleanSpoorClass}`}>
              <span className="dot"></span>{pkg.spoorText}
            </span>
          </div>
          <h1 className="hero-sub">{pkg.title}</h1>
          <p className="detail-lead hero-sub">{pkg.subtitle}</p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="section-tight">
        <div className="wrap">
          <div className="imgph reveal" style={{ position: "relative", aspectRatio: "16/7", boxShadow: "var(--shadow-md)" }}>
            <Image
              className="imgph-img"
              src={pkg.imageSrc.replace("../", "/")}
              alt={pkg.imageAlt || pkg.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <span className="imgph-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 inline-block mr-1">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 16 5-5 4 4 3-3 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {pkg.imageLabel}
            </span>
          </div>
        </div>
      </section>

      {/* USP BAND */}
      <section className="section-tight">
        <div className="wrap">
          <div className={`oplevert ${cleanSpoorClass} reveal`}>
            <span className="eyebrow">
              <span className="dot"></span>Wat het je oplevert
            </span>
            <div className="oplevert-grid">
              {pkg.oplevert.map((item, idx) => (
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

      {/* DETAILS INFO */}
      <section className="section-tight">
        <div className="wrap">
          {pkg.probleem && (
            <div className="detail-block reveal">
              <span className="eyebrow">
                <span className="dot"></span>Het probleem
              </span>
              <p className="detail-lead-p" style={{ marginTop: "14px" }}>
                {pkg.probleem}
              </p>
            </div>
          )}
          {pkg.watHetIs && (
            <div className="detail-block reveal" style={{ marginTop: "clamp(36px, 5vw, 56px)" }}>
              <span className="eyebrow">
                <span className="dot"></span>Wat het is
              </span>
              <p className="detail-lead-p" style={{ marginTop: "14px" }}>
                {pkg.watHetIs}
              </p>
            </div>
          )}
          {pkg.quote && (
            <div className="verschuiving reveal" style={{ marginTop: "clamp(36px, 5vw, 56px)" }}>
              <p>
                <span className="mark">&ldquo;</span>
                {pkg.quote}
                <span className="mark">&rdquo;</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DETAILED AGENDA & BOOKING BLOCK */}
      <section className={`section ${cleanSpoorClass}`} style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
        <div className="wrap">
          <div className={`detail ${cleanSpoorClass}`}>
            <div className="detail-main">
              {pkg.voorWie && (
                <section className="detail-block reveal">
                  <div className="card voorwie-card">
                    <span className="vw-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
                        <circle cx="9" cy="8" r="3" />
                        <path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-1-5.8M21 20a6 6 0 0 0-5-5.9" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <h2 style={{ fontSize: "1.05rem", marginBottom: "4px" }}>Voor wie</h2>
                      <p>{pkg.voorWie}</p>
                    </div>
                  </div>
                </section>
              )}

              {pkg.watJeKrijgt && pkg.watJeKrijgt.length > 0 && (
                <section className="detail-block reveal">
                  <h2>Wat je krijgt</h2>
                  <ul className="checklist">
                    {pkg.watJeKrijgt.map((item, idx) => (
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

              {pkg.agenda && pkg.agenda.length > 0 && (
                <section className="detail-block reveal">
                  <h2>De sessie-agenda</h2>
                  <div className="agenda">
                    {pkg.agenda.map((item, idx) => (
                      <div className="agenda-item" key={idx}>
                        <span className="agenda-time">{item.time}</span>
                        <div className="agenda-body">
                          <h4>{item.body}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {pkg.praktijk && pkg.praktijk.text && (
                <section className="detail-block reveal">
                  <div className={`card praktijk ${cleanSpoorClass}`}>
                    <span className="pk-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10.5c-.7.7-1 1.3-1 2.5H9c0-1.2-.3-1.8-1-2.5A6 6 0 0 1 12 3Z" />
                      </svg>
                    </span>
                    <div className="pk-body">
                      <h4>{pkg.praktijk.title || "Voorbeeld uit de praktijk"}</h4>
                      <p>{pkg.praktijk.text}</p>
                    </div>
                  </div>
                </section>
              )}

              {pkg.anders && pkg.anders.text && (
                <section className="detail-block reveal">
                  <div className={`card anders-card ${cleanSpoorClass}`}>
                    <h2>{pkg.anders.title || "Wat het anders maakt"}</h2>
                    <p>{pkg.anders.text}</p>
                  </div>
                </section>
              )}
            </div>

            <aside>
              <div className="card book-card reveal">
                {pkg.isLosBoekbaar && (
                  <span className="los-badge" style={{ alignSelf: "flex-start" }}>
                    <span className="pulse"></span>Los te boeken
                  </span>
                )}
                <div className="book-price">
                  {pkg.bookCard.price}
                  <small>{pkg.bookCard.unit}</small>
                </div>
                <Link className="btn btn-primary btn-lg" href="/contact">
                  Boek dit onderdeel{" "}
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
                {pkg.bookCard.standalone && <p className="book-standalone">{pkg.bookCard.standalone}</p>}
                
                {pkg.bookCard.pdfLink && (
                  <a className="book-dl" href={cleanLink(pkg.bookCard.pdfLink)} download>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1">
                      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                    </svg>
                    Download de agenda (PDF) <small className="text-ink-mute"> (Placeholder)</small>
                  </a>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DELIVERABLE SHOWCASE */}
      {pkg.example && pkg.example.name && (
        <section className="section">
          <div className="wrap">
            <div className={`example-showcase ${cleanSpoorClass} reveal`}>
              <div className="es-visual">
                <div className="es-doc">
                  <span className="es-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5 mr-1 inline-block">
                      <rect x="3" y="3" width="7" height="9" rx="1.5" />
                      <rect x="14" y="3" width="7" height="5" rx="1.5" />
                      <rect x="14" y="12" width="7" height="9" rx="1.5" />
                      <rect x="3" y="16" width="7" height="5" rx="1.5" />
                    </svg>{" "}
                    Oplevering
                  </span>
                  <span className="es-title">{pkg.example.name}</span>
                  <div className="es-line" style={{ width: "100%" }}></div>
                  <div className="es-line" style={{ width: "88%" }}></div>
                  <div className="es-line" style={{ width: "95%" }}></div>
                  <div className="es-row">
                    <span className="es-chip"></span>
                    <span className="es-chip"></span>
                  </div>
                  <div className="es-line" style={{ width: "68%" }}></div>
                </div>
              </div>
              <div className="es-body">
                <span className="eyebrow">
                  <span className="dot"></span>De oplevering
                </span>
                <h2>{pkg.example.title || "Bekijk een voorbeeld van wat je krijgt"}</h2>
                <p className="es-name">{pkg.example.name}</p>
                <p>{pkg.example.desc}</p>
                {pkg.example.link && (
                  <Link className="btn btn-primary btn-lg" href={cleanLink(pkg.example.link)}>
                    Bekijk een voorbeeld{" "}
                    <span className="arr">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      {pkg.faqs && pkg.faqs.length > 0 && (
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
              {pkg.faqs.map((faq, idx) => (
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

      {/* RELATED CROSS SELLS */}
      {pkg.crossSells && pkg.crossSells.length > 0 && (
        <section className={`section ${cleanSpoorClass}`} style={{ background: "var(--surface-2)", borderBlock: "1px solid var(--line)" }}>
          <div className="wrap wrap-wide">
            <div className="sec-head reveal">
              <div className="sh-text">
                <span className="eyebrow">
                  <span className="dot"></span>Past hierbij
                </span>
                <h2 className="h2" style={{ marginTop: "14px" }}>
                  Zo bouw je het verder uit.
                </h2>
              </div>
            </div>
            <div className="xsell-grid" data-stagger>
              {pkg.crossSells.map((cs, idx) => (
                <Link className={`card xsell ${cleanSpoorClass}`} href={cleanLink(cs.href)} key={idx}>
                  <span className="xs-spoor">
                    <span className="dot"></span>
                    {cs.step}
                  </span>
                  <h3>{cs.title}</h3>
                  <p>{cs.desc}</p>
                  <span className="xs-go">
                    Bekijk onderdeel{" "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block ml-1">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <h2>Klaar om te starten?</h2>
            <p>Boek dit onderdeel los, of overleg eerst even. Geen heel traject nodig om te beginnen.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Boek dit onderdeel{" "}
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

      {/* JSON-LD Service & FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": pkg.spoorText,
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Mono by Dusty",
                  "url": "https://monobydusty.com"
                },
                "name": pkg.title,
                "description": pkg.subtitle,
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "EUR",
                  "price": pkg.bookCard.price.replace(/[^0-9]/g, ""),
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "priceType": "https://schema.org/MinimumPrice",
                    "priceCurrency": "EUR",
                    "price": pkg.bookCard.price.replace(/[^0-9]/g, "")
                  }
                }
              },
              ...(pkg.faqs && pkg.faqs.length > 0 ? [{
                "@type": "FAQPage",
                "mainEntity": pkg.faqs.map(faq => ({
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
