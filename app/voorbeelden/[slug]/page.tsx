import { notFound } from "next/navigation";
import Link from "next/link";
import { voorbeelden } from "@/data/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(voorbeelden).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const example = voorbeelden[slug];
  if (!example) return {};
  
  return {
    title: `Voorbeeld · ${example.title} · Mono by Dusty`,
    description: example.subtitle,
    alternates: {
      canonical: `/voorbeelden/${slug}`,
    },
  };
}

function cleanLink(link: string) {
  if (!link) return "";
  let clean = link.replace("../", "/").replace(".html", "");
  if (!clean.startsWith("/") && !clean.startsWith("http") && !clean.startsWith("mailto:") && !clean.startsWith("tel:")) {
    clean = "/aanbod/" + clean;
  }
  return clean;
}

export default async function ExamplePage({ params }: PageProps) {
  const { slug } = await params;
  const example = voorbeelden[slug];

  if (!example) {
    notFound();
  }

  // Determine spoor theme color class for main
  // All examples from Spoor 1 (learning) are purple k-human, Spoor 2 (building) are blue k-agent, Spoor 3 is groen k-automate.
  let mainSpoorClass = "k-human";
  if (slug === "prototype-oplevering" || slug === "validatie-rapport" || slug === "kwaliteitskaart" || slug === "productie-readiness") {
    mainSpoorClass = "k-agent";
  } else if (slug === "sprint-oplevering" || slug === "maandelijkse-voortgang") {
    mainSpoorClass = "k-automate";
  }

  return (
    <main className={mainSpoorClass}>
      {/* HERO */}
      <section className="page-hero">
        <div className="hero-wash"></div>
        <div className="wrap hero-inner detail-head">
          {example.backText && (
            <Link className="vb-back" href={cleanLink(example.backHref)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 inline-block mr-1.5 align-text-bottom">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              {example.backText}
            </Link>
          )}
          <span className="eyebrow hero-eyebrow" style={{ marginTop: "14px" }}>
            <span className="dot"></span>Voorbeeld-oplevering
          </span>
          <h1>{example.title}</h1>
          <p className="detail-lead hero-sub">{example.subtitle}</p>
          <div className="vb-meta">
            <span className="vb-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 mr-1.5 inline-block align-text-bottom">
                <rect x="3" y="3" width="7" height="9" rx="1.5" />
                <rect x="14" y="3" width="7" height="5" rx="1.5" />
                <rect x="14" y="12" width="7" height="9" rx="1.5" />
                <rect x="3" y="16" width="7" height="5" rx="1.5" />
              </svg>{" "}
              {example.metaNote}
            </span>
          </div>
        </div>
      </section>

      {/* RENDER DYNAMIC SECTIONS */}
      {example.sections.map((section, idx) => {
        const isAlternateBg = idx % 2 === 1;
        const style = isAlternateBg 
          ? { background: "var(--surface-2)", borderBlock: "1px solid var(--line)" } 
          : {};
        
        return (
          <section className="section" style={style} key={idx}>
            <div className="wrap">
              <div className="reveal">
                {section.eyebrow && (
                  <span className="eyebrow">
                    <span className="dot"></span>
                    {section.eyebrow}
                  </span>
                )}
                {section.title && <h2 className="vb-sec-title">{section.title}</h2>}
                <div 
                  className="vb-content"
                  dangerouslySetInnerHTML={{ __html: section.contentHtml }} 
                />
              </div>
            </div>
          </section>
        );
      })}

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
            <h2>Dit is een voorbeeld. Jouw versie is van jou.</h2>
            <p>Wil je dit voor je eigen organisatie? Het begint met een gesprek en de nulmeting.</p>
            <div className="cta-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Plan een gesprek{" "}
                <span className="arr">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              {example.backHref && (
                <Link className="btn btn-ghost btn-lg" href={cleanLink(example.backHref)}>
                  {example.backText.replace("Hoort bij ", "Bekijk ")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
