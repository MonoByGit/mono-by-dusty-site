import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxBackground from "@/components/ParallaxBackground";
import TweaksPanel from "@/components/TweaksPanel";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  variable: "--font-sans-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-display-next",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI voor het MKB, van leren tot bouwen · Mono by Dusty",
  description:
    "Ik help organisaties verder met AI. Nulmeting, workshops en werkende prototypes voor het MKB. Door Dusty Baars.",
  metadataBase: new URL("https://monobydusty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Mono by Dusty",
    locale: "nl_NL",
    title: "AI voor het MKB, van leren tot bouwen · Mono by Dusty",
    description:
      "Ik help organisaties verder met AI. Nulmeting, workshops en werkende prototypes voor het MKB. Door Dusty Baars.",
    url: "https://monobydusty.com",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mono by Dusty",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${newsreader.variable} antialiased`}
      suppressHydrationWarning
      data-hero="serif"
      data-theme="light"
    >
      <head>
        {/* Prevent flash of dark/light theme and apply edit tweaks before rendering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var r=document.documentElement, tw={};
                try{tw=JSON.parse(localStorage.getItem('mono-tweaks')||'null')||{};}catch(e){}
                var t; try{t=localStorage.getItem('mono-theme');}catch(e){}
                if(!t){ t=(tw.theme&&tw.theme!=='system')?tw.theme:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'); }
                r.setAttribute('data-theme',t);
                r.setAttribute('data-hero',tw.hero||'serif');
                var A={blue:['#2B5BC4','#21489E'],human:['#6B4A8A','#573B73'],green:['#5B8A3A','#4A7230'],amber:['#B07A1A','#936414']};
                var a=A[tw.accent]||A.blue; r.style.setProperty('--primary',a[0]); r.style.setProperty('--primary-deep',a[1]); r.style.setProperty('--primary-ink','#fff');
                if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){ r.classList.add('js-anim'); }
              })();
            `,
          }}
        />
        <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <ParallaxBackground />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
        <TweaksPanel />
      </body>
    </html>
  );
}
