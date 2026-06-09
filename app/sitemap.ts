import { MetadataRoute } from "next";
import { packages, paden, voorbeelden } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://monobydusty.com";

  // Static pages
  const staticPages = [
    "",
    "/aanbod",
    "/paden",
    "/prijzen",
    "/nulmeting",
    "/contact",
    "/voorbeeld-rapportage",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic package pages
  const packagePages = Object.keys(packages).map((slug) => ({
    url: `${baseUrl}/aanbod/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic path pages
  const pathPages = Object.keys(paden).map((slug) => ({
    url: `${baseUrl}/paden/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic example pages
  const examplePages = Object.keys(voorbeelden).map((slug) => ({
    url: `${baseUrl}/voorbeelden/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...packagePages, ...pathPages, ...examplePages];
}
