import packagesData from "./packages.json";
import padenData from "./paden.json";
import voorbeeldenData from "./voorbeelden.json";

export interface PackageDetail {
  slug: string;
  title: string;
  subtitle: string;
  spoorText: string;
  spoorClass: string;
  isLosBoekbaar: boolean;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  oplevert: string[];
  probleem: string;
  watHetIs: string;
  quote: string;
  voorWie: string;
  watJeKrijgt: string[];
  agenda: { time: string; body: string }[];
  praktijk: { title: string; text: string };
  anders: { title: string; text: string };
  bookCard: {
    price: string;
    unit: string;
    standalone: string;
    reassure: string;
    pdfLink: string;
  };
  example: {
    title: string;
    name: string;
    desc: string;
    link: string;
  };
  faqs: { q: string; a: string }[];
  crossSells: { href: string; step: string; title: string; desc: string }[];
}

export interface PathDetail {
  slug: string;
  title: string;
  subtitle: string;
  spoorText: string;
  isLosBoekbaar: boolean;
  imageSrc: string;
  imageAlt: string;
  imageLabel: string;
  oplevert: string[];
  voorWie: string;
  deReis: string;
  quote: string;
  included: { href: string; step: string; title: string; desc: string }[];
  watJeKrijgt: string[];
  anders: { title: string; text: string };
  praktijk: { title: string; text: string };
  bookCard: {
    price: string;
    unit: string;
    standalone: string;
    reassure: string;
  };
  deliverables: { href: string; step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface ExampleDetail {
  slug: string;
  backText: string;
  backHref: string;
  title: string;
  subtitle: string;
  metaNote: string;
  sections: { eyebrow: string; title: string; contentHtml: string }[];
}

export const packages = packagesData as Record<string, PackageDetail>;
export const paden = padenData as Record<string, PathDetail>;
export const voorbeelden = voorbeeldenData as Record<string, ExampleDetail>;
