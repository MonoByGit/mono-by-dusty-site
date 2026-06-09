import type { Metadata } from "next";
import VoorbeeldRapportageClient from "@/components/VoorbeeldRapportageClient";

export const metadata: Metadata = {
  title: "Voorbeeld-bevindingenpagina, AI-Nulmeting · Mono by Dusty",
  description:
    "Zo ziet je eigen bevindingenpagina eruit na de AI-Nulmeting. Een voorbeeld bij een fictief accountantskantoor: volwassenheid, houding, kansen en het geadviseerde pad.",
  alternates: {
    canonical: "/voorbeeld-rapportage",
  },
  openGraph: {
    type: "website",
    title: "Voorbeeld-bevindingenpagina, AI-Nulmeting · Mono by Dusty",
    description:
      "Zo ziet je eigen bevindingenpagina eruit na de AI-Nulmeting. Een voorbeeld bij een fictief accountantskantoor: volwassenheid, houding, kansen en het geadviseerde pad.",
    url: "https://monobydusty.com/voorbeeld-rapportage",
  },
};

export default function VoorbeeldRapportagePage() {
  return <VoorbeeldRapportageClient />;
}
