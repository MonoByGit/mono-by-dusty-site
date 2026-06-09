# Handoff: Mono by Dusty — marketing & dienstensite

## Overview
Een premium, rustige marketing- en dienstensite voor **Mono by Dusty**, de AI-dienst van Dusty Baars voor het MKB. De dienst loopt van leren (mensen meekrijgen) tot bouwen (werkende prototypes). Doelgroep: eigenaar/directeur van een MKB-bedrijf (±10–50 medewerkers). De site moet binnen één blik vakmanschap en rust uitstralen: gevestigd, niet conceptueel.

**Taal:** Nederlands. **Domein:** monobydusty.com. **Hosting:** Vercel.

## About the design files
De bestanden in dit pakket zijn **design-referenties, gebouwd in losse HTML/CSS/JS** — high-fidelity prototypes die de definitieve look, copy en interacties tonen. Het zijn **geen productiebestanden om één-op-één te kopiëren**. De opdracht is om deze designs **opnieuw op te bouwen in een echte codebase** volgens de hieronder beschreven stack en patronen.

**Doel-stack (uit de oorspronkelijke brief):** Next.js (App Router) + TypeScript, Tailwind CSS met de tokens hieronder als CSS-variabelen, Framer Motion voor animatie, `next/font` voor Inter + Newsreader, `next/image` voor alle beelden. Mobile-first, toegankelijk (WCAG AA-contrast, volledige toetsenbordnavigatie, `prefers-reduced-motion`), snel.

## Fidelity
**High-fidelity.** Kleuren, typografie, spacing, radii, schaduwen en interacties zijn definitief. Bouw de UI pixel-getrouw na, maar met de eigen componenten/patronen van de codebase (geen letterlijke HTML-copy).

---

## Routes / sitemap
| Route | Inhoud |
|---|---|
| `/` | Home one-pager: hero (kinetisch), bewijsbalk, "Waarom ik", "Hoe het werkt" (3 stappen), aanbod-teaser (3 sporen), prijzen-teaser, testimonials (gereserveerd), vertrouwenslaag, Over Dusty, oprichtersnotitie, contact-CTA |
| `/aanpak` | Nu een sectie/anker op home (`#aanpak`) |
| `/aanbod` | Overzicht: 2 sporen + maakservice, gegroepeerd, links naar detail |
| `/aanbod/[slug]` | 11 pakket-detailpagina's (zie anatomie) |
| `/paden` | Hub: 3 kant-en-klare routes |
| `/paden/[slug]` | `startpad`, `versnelpad`, `directiepad` |
| `/prijzen` | Transparante prijstabel + 3 paden als keuzehulp |
| `/nulmeting` | Landingspagina voor de AI-Nulmeting (de voordeur) + aanmeldformulier |
| `/contact` | Contact + FAQ-accordeons |
| `/voorbeeld-rapportage` | Interactieve bevindingenpagina (het "gouden voorbeeld") |
| `/voorbeelden/[slug]` | 11 voorbeeld-opleveringen (ai-startkit, afdelings-playbook, ai-spelregels, honderd-dagen-plan, champion-pakket, prototype-oplevering, validatie-rapport, kwaliteitskaart, productie-readiness, sprint-oplevering, maandelijkse-voortgang) |

**Aanbod-slugs:** `ai-nulmeting`(=/nulmeting), `slim-werken-met-ai`, `ai-op-jouw-afdeling`, `veilig-met-ai`, `ai-voor-de-directie`, `ai-champions`, `van-idee-naar-prototype`, `toets-je-idee`, `goed-bouwen-met-ai`, `veilig-bouwen-met-ai`, `prototype-sprint`, `doorlopende-begeleiding`.

---

## Design tokens
Gedefinieerd in `assets/css/tokens.css`. Licht is de standaard; donker spiegelt het.

### Kleur — licht
- bg `#FAF8F3` · surface `#FFFFFF` · surface-2 `#FBF9F4`
- ink `#1A1A1A` · ink-soft `#4A4A4A` · ink-mute `#7A7A7A`
- primary `#2B5BC4` · primary-deep `#21489E` · primary-ink `#FFFFFF` · blue-soft `#EAF0FB`
- line `#E8E3D7` · line-soft `#F0EDE5`

### Kleur — donker
- bg `#161513` · surface `#1F1E1B` · surface-2 `#232220`
- ink `#EDE8DD` · ink-soft `#C7C2B5` · ink-mute `#8E887C`
- primary `#A8BEEC` · primary-deep `#8AA6E2` · primary-ink `#14213A` · blue-soft `rgba(168,190,236,.12)`
- line `#2E2E2A` · line-soft `#262521`

### Vier signatuurkleuren (= de vier logo-dots)
- automate/groen `#5B8A3A` (dark `#8FBE6A`) · augment/amber `#B07A1A` (dark `#D8A24A`) · agent/blauw `#2B5BC4` (dark `#A8BEEC`) · human/paars `#6B4A8A`
- Tints (licht): t-automate `#EEF3E8`, t-augment `#F6EFE1`, t-agent `#EAF0FB`, t-human `#F0EBF5`

### Spoor-omgevingen (belangrijk visueel systeem)
Elk spoor heeft een eigen sfeer, gestuurd via `--accent`/`--tint` (klassen `.k-human`, `.k-agent`, `.k-automate`) én via een paginabrede canvaskleur:
- **Spoor 1 (Werken met AI, breedte) = paars accent, warme standaard-bg.**
- **Spoor 2 (Bouwen met AI) = blauw accent + warm-oker canvas.** Geactiveerd met `data-spoor="2"` op `<html>`: `--bg:#F4ECDB`, `--surface-2:#FBF5E8` (dark `--bg:#1B1712`, `--surface-2:#262016`), plus een zachte amber hero-gloed. **Let op:** nav en footer houden bewust de normale huiskleur — op die elementen worden `--bg`/`--surface-2` teruggezet naar `#FAF8F3`/`#FBF9F4` (dark `#161513`/`#232220`).
- **Spoor 3 (Maakservice) = groen accent.**
- **Nulmeting = de blauwe voordeur.**

### Radii / spacing / type / motion
- radius: kaart `14px`, sub `8px`, pill `999px`
- content max-width `1080px` (wide `1200px`), gutter `clamp(20px,5vw,40px)`
- fonts: `Inter` (400–800) overal; `Newsreader` (serif, italic) voor hero-kop, pull-quotes en testimonial-citaten. Hero: serif, weight 500, tracking `-0.018em`.
- body 16px, line-height 1.6, ink-soft
- shadows (warm): sm `0 1px 2px rgba(40,33,20,.05),0 2px 8px rgba(40,33,20,.04)`; md `0 8px 24px rgba(40,33,20,.07),0 2px 6px rgba(40,33,20,.05)`; lg `0 24px 60px rgba(40,33,20,.10),0 6px 16px rgba(40,33,20,.06)`
- easing: `cubic-bezier(.22,.68,.16,1)`; duur ±.42s

---

## Theme system
- Volgt `prefers-color-scheme`, met handmatige override (opgeslagen in `localStorage`).
- **Geen flash:** een kleine inline `<script>` in `<head>` zet `data-theme` (+ accent/hero-tweak vars) vóór paint. In Next.js: equivalent via een blocking inline script in het document/`<head>`.

## Kerncomponenten & patronen
- **Nav (sticky):** translucent + backdrop-blur, merk-logo (ring van 12 dots, pulserende golf-animatie), links rechts, primaire CTA "Plan een gesprek". **Pagina-indicator = een zwevende "pill"** achter de actieve/hovered link die vloeiend mee-glijdt (JS zet `left`/`width` van `.nav-ind` op `mouseenter`, met spring-transition). Mobiel: hamburger → fullscreen menu.
- **Footer:** grote serif-signatuurregel "*Creëren* is de handtekening, mensen *meenemen* is de missie.", merkkolom + navigatie + contact, en een rustige regel "Opgesteld door Dusty Baars, Mono by Dusty · [datum]".
- **Hero (home):** kinetische kop die regel-voor-regel binnenkomt (fade-up, stagger), eyebrow met dot, sub, twee knoppen, losgezette signatuur-quote, "40+ apps in 50 dagen"-badge met de vier dots.
- **Kaarten:** surface, 14px radius, zachte schaduw; rand alleen op hover. Hover-lift.
- **USP-band "Wat het je oplevert"** (op detail- en pad-pagina's): schoon-witte band, accent-toprand in spoorkleur, 2-koloms genummerde uitkomsten (01–04) met accent-badges.
- **Example-showcase** ("Bekijk een voorbeeld van wat je krijgt"): 2-koloms sectie met links een (licht gekantelde, zwevende) document-preview en rechts kop + naam + knop.
- **FAQ:** native `<details>/<summary>` accordeons (semantisch + toegankelijk).
- **Detail-pagina aside:** sticky "Los te boeken" boek-blok (prijs prominent, "Boek dit onderdeel", "Plan een kort gesprek", PDF-download). Sticky binnen een grid die meeschaalt met de linkerkolom.
- **Prijstabel, scrollytelling-stappen, tijdlijn, bento/tracks, breadcrumbs, badges ("Los te boeken", "Meest gekozen").**
- **Testimonials (home):** één groot featured citaat (serif) + 4 tekst-only mini-citaten (naam vet + "Rol, bedrijf"). Nu gereserveerde placeholders.
- **Voorbeeld-opleveringen:** eigen template (hero met "hoort bij"-breadcrumb + dashboard-pill, dan secties per type: promptkaarten, do/don't-lijsten, KPI-stats, status-checklists, voor/na, genummerde stappen, live-link blok). Boodschap overal: deze opleveringen "wonen in je klant-dashboard".

## Motion-laag
`assets/css/sections.css` + `assets/js/site.js`. Alles achter `@media (prefers-reduced-motion: no-preference)`:
- scroll-reveals via IntersectionObserver (`.reveal` → `.in`), met `data-stagger` voor opeenvolgende kinderen
- merk-dots deinen gestaggerd; eyebrow-dots "ademen"; primaire knoppen sheen-veeg bij hover; pijltjes schuiven; preview zweeft; sterren twinkelen; nav-pill liquid glide
- entree-animaties gegate op zichtbaarheid zodat print/PDF/reduced-motion de eindstaat tonen

## SEO
- Open Graph + `<link rel=canonical>` op elke pagina (geen Twitter/X — bewust weggelaten)
- JSON-LD: `ProfessionalService` (org), `FAQPage` (op pagina's met FAQ), `BreadcrumbList` (detail/pad)
- `sitemap.xml` + `robots.txt` in root (in Next.js: `app/sitemap.ts` + `app/robots.ts`)

## Content-regels (hard)
- Nederlands overal. **Nooit em-dashes** (gebruik komma/punt of herschrijf). Het woord "concept"/"klad" komt nergens voor.
- Nummering overal: `0` (Nulmeting), `1.1–1.5`, `2.1–2.4`, `3.1–3.2`; paden bij naam.
- Elke pagina/oplevering draagt de signatuur "Opgesteld door Dusty Baars, Mono by Dusty" + datum.

## Assets
- **Foto's** in `assets/img/` (genummerd 1–11 + S1–S4), gekoppeld per plek; zie `assets/img/`. Dit zijn **demo-beelden** (placeholders), te vervangen door definitieve. Het portret bij "De man achter de dienst" (`4_home_over_dusty.png`) is bewust definitief gehouden.
- **Logo:** `assets/logo.svg` (ring van 12 dots), thema-adaptief via CSS-mask/inline-SVG; favicon `assets/favicon.svg`.
- **`assets/css/`**: `tokens.css`, `base.css`, `sections.css`, `brand.css`, `voorbeelden.css`, `rapportage.css`. **`assets/js/`**: `site.js` (nav, reveals, accordeons, formulieren, nav-pill), `tweaks.js`.

## Files
Alle bron-HTML staat in dit pakket: de root-pagina's (`index.html`, `aanbod.html`, `prijzen.html`, `nulmeting.html`, `contact.html`, `paden.html`, `voorbeeld-rapportage.html`) plus de mappen `aanbod/`, `paden/`, `voorbeelden/` en `assets/`. Gebruik ze als visuele en gedrags-referentie.

---

## ⚠️ Nog in te vullen door de opdrachtgever (Dusty)
> **Kanttekening:** de onderstaande zes punten zijn bewust als placeholder opengelaten. Dusty vult deze zelf nog in vóór livegang — bouw ze als nette, makkelijk vervangbare slots.
1. **`assets/og-image.png` (1200×630)** — het social-deelbeeld; de meta-tags verwijzen er al naar.
2. **PDF's in `/downloads/[slug].pdf`** — de download-knoppen staan klaar; de bestanden volgen.
3. **Testimonials** — 5 gereserveerde plekken op de home, wachtend op echte quotes (naam + rol/bedrijf + citaat).
4. **Contactgegevens** — `studio@monobydusty.com`, telefoonnummer en KvK staan als placeholder.
5. **Foto's** — de huidige beelden zijn demo-materiaal; te vervangen door definitieve foto's (zie maatlijst in `assets/img/`).
6. **Klant-dashboard** — bewust nog narratief (komende bouwfase); alle voorbeeld-opleveringen wonen daar later in.
