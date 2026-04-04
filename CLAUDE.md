@AGENTS.md

# Kamsteeg Tuinen — projectdocumentatie

## Project

Website voor **Kamsteeg Tuinen**, een hovenier in Breda (regio Noord-Brabant). Ruim 25 jaar actief in tuinontwerp, tuinaanleg, tuinonderhoud en (zwem)vijvers & waterpartijen. Werkgebied: Breda, Etten-Leur, Tilburg, Oosterhout, Roosendaal.

- **Stack:** Next.js 16.2.2 (App Router, Turbopack), TypeScript
- **Styling:** Tailwind CSS v4 — gebruik `@import "tailwindcss"` en `@theme {}`, NIET de v3-syntaxis met `theme.extend`
- **Font:** Roboto (300/400/500) via `next/font/google`
- **GitHub:** `mrtnvrmln1972-eng/greenleaf-testsite`
- **Hosting:** Vercel (migratie van Netlify — zie onderaan)
- **CMS:** WordPress headless op `https://pingwin-development.nl`

---

## Tekstregel — KRITIEK

**Alle zichtbare teksten op de website komen UITSLUITEND en LETTERLIJK uit het aangeleverde copybestand.**

- Verzin geen tekst. Parafraseer niet. Vul niet aan.
- Als er een copybestand wordt aangeleverd (DOCX, TXT of anderszins), gebruik dan de tekst exact zoals die erin staat — inclusief interpunctie, hoofdlettergebruik en opmaak.
- Als er voor een component geen copy beschikbaar is, vraag dan eerst om copy voordat je placeholder-tekst schrijft.
- Uitzondering: alt-teksten van afbeeldingen en ARIA-labels mogen beschrijvend zijn als er geen copy voor is.

---

## Design systeem (gebaseerd op strandtuin.nl)

### Kleurpalet

| Token            | Hex       | Gebruik                                      |
|------------------|-----------|----------------------------------------------|
| `#f2eee2`        | beige     | Achtergrond secties (Intro, Diensten, Werkgebied) |
| `#ffffff`        | wit       | Achtergrond secties (Waarom), reviewkaarten  |
| `#5b604b`        | donker olijf | Achtergrond Conversie/Projecten, primaire CTA-kleur, knoppen |
| `#7a7b6b`        | licht olijf | H2, H3, subtekst, links, sterrencijfers     |
| `#cecdb9`        | taupe     | Footer achtergrond                           |
| `#c8c4b4`        | taupe licht | Scheidingslijnen, borders                  |
| `#e8e4d8`        | off-white | Subtiele borders (reviewkaarten, lijsten)    |
| `#444` / `#555`  | donkergrijs | Bodytekst                                   |

### Typografie

- **Font:** Roboto — gewichten 300 (body), 400 (headings, labels), 500 (accenten)
- **H2:** `fontWeight: 400`, `fontSize: "clamp(2rem, 5vw, 60px)"`, `color: "#7a7b6b"` (lichte secties) of `#ffffff` (donkere secties)
- **H3:** `fontWeight: 400`, `fontSize: "22px"`, zelfde kleurlogica als H2
- **Body groot:** `fontWeight: 300`, `fontSize: "16px"`, `lineHeight: 1.8`
- **Body klein:** `fontWeight: 300`, `fontSize: "15px"`, `lineHeight: 1.78`
- **Labels / CTA-tekst:** `fontWeight: 400`, `fontSize: "14px"`, `letterSpacing: "0.04em"` tot `"0.06em"`

### Spacing & layout

- **Sectie padding:** `padding: "100px 0"`
- **Container:** `maxWidth: "1100px"` (brede secties) of `"960px"` / `"860px"` (smallere tekst-secties), `margin: "0 auto"`, `padding: "0 40px"`
- **Grid gap groot:** `48px` (diensten), `40px` (reviews), `20px` (projectfoto's)
- **Sectie-intro maximaal:** `maxWidth: "680px"`, gecentreerd met `margin: "0 auto 64px"`

### Knoppen & links

Twee knopstijlen:

**Outline-knop (lichte achtergrond):**
```tsx
border: "1px solid #5b604b"
color: "#5b604b"
padding: "12px 36px"
fontSize: "14px", fontWeight: 400, letterSpacing: "0.05em"
// hover: background "#5b604b", color "#fff"
```

**Outline-knop (donkere achtergrond):**
```tsx
border: "1px solid rgba(255,255,255,0.6)"
color: "#ffffff"
padding: "12px 36px"
// hover: background "rgba(255,255,255,0.12)"
```

**Primaire knop (wit op donker):**
```tsx
backgroundColor: "#ffffff"
color: "#5b604b"
border: "1px solid rgba(255,255,255,0.7)"
padding: "13px 28px"
fontWeight: 400
```

Geen `border-radius` op knoppen of afbeeldingen.

### Stijlregels

- Gebruik **inline styles**, geen Tailwind utility classes in JSX — dit garandeert pixel-accurate controle.
- Geen `border-radius` op knoppen, kaarten of foto's.
- Hover-effecten via `onMouseEnter`/`onMouseLeave` (vereist `"use client"`).
- Afbeeldingen: gebruik `<img>` met `objectFit: "cover"` en een vaste `aspectRatio`.
- Foto's schalen op hover met `transform: "scale(1.04)"` en `transition: "transform 0.6s ease"`.

---

## Paginastructuur (homepage)

Componenten in volgorde in `app/page.tsx`:

| Component      | Achtergrond | Inhoud                                    |
|----------------|-------------|-------------------------------------------|
| `Navbar`       | transparant → wit op scroll | Logo + nav + hamburger |
| `Hero`         | foto full-viewport | H1, subtekst, 2 CTA-knoppen         |
| `Intro`        | `#f2eee2`   | H2, 2 alinea's, 2 H3-blokken             |
| `Galerij`      | `#ffffff`   | 5-koloms fotogalerij                      |
| `Diensten`     | `#f2eee2`   | H2, intro, 4 dienstenblokken, CTA         |
| `Projecten`    | `#5b604b`   | H2, H3 "Gerealiseerde tuinen", H3 "Inspiratie", 2 CTA's |
| `Reviews`      | `#f2eee2`   | H2, H3, 3 reviewkaarten, H3 keurmerken, CTA |
| `Waarom`       | `#ffffff`   | H2, intro, 4 genummerde bullets, CTA      |
| `Werkgebied`   | `#f2eee2`   | H2, H3, alinea, locatielijst, 3 links     |
| `Conversie`    | `#5b604b`   | H2, H3, alinea, 3 stappen, 3 knoppen     |
| `Footer`       | `#cecdb9`   | SVG logo, slogan, 3 kolommen, copyright   |

Alle componenten met event handlers hebben `"use client"` bovenaan.

---

## WordPress koppeling

- **Endpoint:** `https://pingwin-development.nl/wp-json/wp/v2/pages`
- **Client:** `lib/wordpress.ts`
- **ISR:** `export const revalidate = 60` in `app/page.tsx`
- **Query params:** `?acf_format=standard&_fields=id,slug,title,content,acf,meta,hero_fields`
- **Prioriteitsvolgorde voor hero-velden:** `acf` → `hero_fields` → `meta` → HTML-fallback
- **ACF (gratis versie):** ACF-velden zijn niet standaard beschikbaar via REST API. Gebruik `register_rest_field()` en `register_post_meta()` — snippet staat in `wordpress/functions-snippet.php`.
- **Parsers:** `parseHeroData`, `parseServicesData`, `parseContactData` in `lib/wordpress.ts` — gebruik standaard HTML-selectors (`h1`, `h2`, `p`), geen Elementor CSS-klassen.
- Als een WordPress-pagina geen content heeft (`content_len: 0`), valt de parser terug op homepage-content.

---

## Netlify → Vercel migratie

We migreren van Netlify naar Vercel.

- **Netlify-configuratie (`netlify.toml` en `@netlify/plugin-nextjs`) is verouderd** — gebruik dit niet meer als basis voor deployment-configuratie.
- Vercel detecteert Next.js automatisch; geen aparte config nodig voor standaard deployments.
- Verwijder `netlify.toml` en de Netlify plugin uit `package.json` zodra de migratie is afgerond.
- Environment variables worden ingesteld via het Vercel dashboard (niet in `.env` committen).

---

## Overige technische aandachtspunten

- **Hydration warning:** Browser-extensies (bijv. Feedly) injecteren attributen in `<body>`. Opgelost met `suppressHydrationWarning` op `<body>` in `app/layout.tsx`.
- **Server Components:** Componenten met `onMouseEnter`/`onMouseLeave` of andere event handlers moeten `"use client"` hebben.
- **Afbeeldingen van Unsplash:** Geregistreerd in `next.config.ts` onder `remotePatterns`. Voeg nieuwe externe hostnames daar toe.
- **Geen `border-radius`** — nergens in het ontwerp.
