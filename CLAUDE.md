@AGENTS.md

# Kamsteeg Tuinen — projectdocumentatie

## Project

Website voor **Kamsteeg Tuinen**, een hovenier in Breda (regio Noord-Brabant). Ruim 25 jaar actief in tuinontwerp, tuinaanleg, tuinonderhoud en (zwem)vijvers & waterpartijen. Werkgebied: Breda, Etten-Leur, Tilburg, Oosterhout, Roosendaal.

- **Stack:** Next.js 16.2.2 (App Router), React 19.2.4, TypeScript
- **Styling:** Tailwind CSS v4 — gebruik `@import "tailwindcss"` en `@theme {}`, NIET de v3-syntaxis met `theme.extend`
- **Font:** Roboto (300/400/500) via Google Fonts CDN (`@import url(...)` in `globals.css`) — **niet** `next/font/google`
- **GitHub:** `mrtnvrmln1972-eng/greenleaf-testsite`
- **Hosting:** Vercel (gemigreerd van Netlify)
- **CMS:** WordPress headless op `https://pingwin-development.nl`

---

## Projectgeschiedenis (git-log samenvatting)

| Fase | Commits | Wat er gebeurde |
|------|---------|-----------------|
| Bootstrap | `2f0feb0` | Create Next App initieel |
| GreenLeaf | `06ff61d` | Eerste homepage als GreenLeaf + Netlify config |
| Ombouw naar Kamsteeg | `120dc31`–`d6ff1ea` | Volledige herbouw als Kamsteeg Tuinen, design gebaseerd op strandtuin.nl |
| WordPress | `18036c7`–`e45ed65` | Headless WordPress koppeling, ACF-velden, `lib/wordpress.ts` |
| Design iteraties | `49d7590`–`b4acc11` | Componenten per component gebouwd: Diensten (grid + SVG iconen), Galerij (slider), Projecten |
| Navbar & Hero | `20feeec`–`e552535` | Navbar scroll-effect (transparant → `#5b604b`), Hero overlay rechts 40% breed |
| Design upgrade | `b52e16e` | Typografie 300/48px, kleur `#1a1a18`, scroll fade-in, uppercase knoppen |
| Assets | `38a9772`–`0fd14e5` | Lokale afbeeldingen toegevoegd, logo `logo-kamsteeg.png` |

**Netlify is volledig verwijderd** (`netlify.toml` en plugin zijn weg, Vercel is actief via `.vercel/project.json`).

---

## Tekstregel — KRITIEK

**Alle zichtbare teksten op de website komen UITSLUITEND en LETTERLIJK uit het aangeleverde copybestand.**

- Verzin geen tekst. Parafraseer niet. Vul niet aan.
- Als er een copybestand wordt aangeleverd (DOCX, TXT of anderszins), gebruik dan de tekst exact zoals die erin staat — inclusief interpunctie, hoofdlettergebruik en opmaak.
- Als er voor een component geen copy beschikbaar is, vraag dan eerst om copy voordat je placeholder-tekst schrijft.
- Uitzondering: alt-teksten van afbeeldingen en ARIA-labels mogen beschrijvend zijn als er geen copy voor is.

---

## Bestandsstructuur

```
testsite/
├── app/
│   ├── globals.css          # Tailwind v4 @theme, Roboto import, fade-in animatie
│   ├── layout.tsx           # RootLayout: metadata, AnimateOnScroll, suppressHydrationWarning
│   └── page.tsx             # Homepage: importeert alle 11 componenten, revalidate=60
├── components/
│   ├── AnimateOnScroll.tsx  # Client: IntersectionObserver op [data-fade] elementen
│   ├── Navbar.tsx           # Client: scroll-aware achtergrond, hamburger menu
│   ├── Hero.tsx             # Server: full-viewport foto + overlay rechts 40%
│   ├── Intro.tsx            # Server: H2, 2 alinea's, 2-koloms H3-grid
│   ├── Galerij.tsx          # Client: 3-foto slider met prev/next (5 lokale foto's)
│   ├── Diensten.tsx         # Client: 4-koloms grid, SVG-iconen, shimmer animatie op links
│   ├── Projecten.tsx        # Client: 3-koloms grid, hover zoom op foto's
│   ├── Reviews.tsx          # Client: 3 reviewkaarten, dealer-logobalk
│   ├── Waarom.tsx           # Client: genummerde bullets, CTA knop
│   ├── Werkgebied.tsx       # Server: foto links + tekst rechts, locatielijst
│   ├── Conversie.tsx        # Client: 3-stappen flow, 3 CTA-knoppen
│   └── Footer.tsx           # Server: 4-koloms grid, adres, awards, navigatie
├── lib/
│   └── wordpress.ts         # fetchPage(), parseHeroData(), parseServicesData(), parseContactData()
├── public/
│   ├── logo-kamsteeg.png
│   ├── images/              # Lokale projectfoto's en tuinfoto's
│   │   └── kamsteeg/hero/   # Hero-achtergrond
│   ├── Hero home/           # Kandidaat hero-foto's (nog niet in gebruik)
│   ├── Slider home/         # 6 foto's voor slider (nog niet gekoppeld aan Galerij)
│   └── Overige foto's/      # Extra foto's (nog niet in gebruik)
└── wordpress/
    └── functions-snippet.php  # PHP voor register_rest_field() en register_post_meta()
```

---

## Design systeem (gebaseerd op strandtuin.nl)

### Kleurpalet

| Token            | Hex       | Gebruik                                      |
|------------------|-----------|----------------------------------------------|
| `#f4f0e8`        | beige     | Achtergrond: Intro, Diensten, Reviews, Werkgebied |
| `#ffffff`        | wit       | Achtergrond: Waarom, reviewkaarten           |
| `#5b604b`        | donker olijf | Achtergrond: Galerij, Projecten, Conversie; Navbar (na scroll); primaire CTA-kleur |
| `#6b6b5a`        | licht olijf | H2, H3, subtekst, sterrencijfers           |
| `#7a7b6b`        | licht olijf alt | Reviews links, dealer-balk hover         |
| `#cecdb9`        | taupe     | Footer achtergrond                           |
| `#c8c4b4`        | taupe licht | Scheidingslijnen, borders                  |
| `#e8e4d8`        | off-white | Subtiele borders (reviewkaarten, lijsten)    |
| `#1a1a18`        | bijna-zwart | Bodytekst, adres, footer tekst             |

> Let op: in de praktijk wordt `#f4f0e8` gebruikt voor beige-secties, niet `#f2eee2` zoals in de `@theme` staat.

### Typografie (feitelijk gebruikt)

- **Font:** Roboto via Google Fonts CDN — gewichten 300/400 (500 niet actief gebruikt)
- **H2:** `fontWeight: 300`, `fontSize: "48px"`, `color: "#6b6b5a"` (licht) of `#ffffff` (donker)
- **H3:** `fontWeight: 300`, `fontSize: "24px"`, `color: "#5b604b"` of `rgba(255,255,255,0.90)`
- **Body:** `fontWeight: 300`, `fontSize: "18px"`, `lineHeight: 1.75`, `color: "#1a1a18"`
- **Klein body:** `fontWeight: 300`, `fontSize: "17px"`, `lineHeight: 1.75`
- **Labels / CTA-tekst:** `fontWeight: 400`, `fontSize: "13px"`, `letterSpacing: "0.1em"`, `textTransform: "uppercase"`

### Spacing & layout

- **Sectie padding:** `padding: "120px 0"` (in gebruik) — CLAUDE.md zei `100px`, maar praktijk is `120px`
- **Container breed:** `maxWidth: "1200px"`, `margin: "0 auto"`, `padding: "0 40px"`
- **Container smal:** `maxWidth: "860px"` (Waarom, Conversie)
- **Container galerij:** `maxWidth: "1400px"`
- **Grid gap diensten:** `48px`
- **Grid gap reviews/projecten:** `40px`

### Knoppen

**Outline licht (op beige/wit):**
```tsx
border: "1px solid #5b604b", color: "#5b604b"
padding: "16px 40px", fontSize: "13px", fontWeight: 400
letterSpacing: "0.1em", textTransform: "uppercase"
// hover: backgroundColor "#5b604b", color "#fff"
```

**Outline donker (op olijf):**
```tsx
border: "1px solid rgba(255,255,255,0.6)", color: "#ffffff"
padding: "16px 40px", fontSize: "13px"
// hover: backgroundColor "rgba(255,255,255,0.12)"
```

Geen `border-radius` op knoppen of afbeeldingen — nergens in het ontwerp.

### Stijlregels

- Gebruik **inline styles**, geen Tailwind utility classes in JSX.
- Hover-effecten via `onMouseEnter`/`onMouseLeave` (vereist `"use client"`).
- Afbeeldingen: `<img>` met `objectFit: "cover"`, vaste `height` in px.
- Foto hover: `transform: "scale(1.03)"`, `transition: "transform 0.6s ease"`.
- Fade-in animatie: voeg `data-fade=""` toe aan elementen; `AnimateOnScroll` component triggert `.is-visible` via IntersectionObserver. Stagger via `transitionDelay`.

---

## Paginastructuur (homepage)

Componenten in volgorde in `app/page.tsx`:

| Component      | Achtergrond | Feitelijke inhoud                            |
|----------------|-------------|----------------------------------------------|
| `Navbar`       | `rgba(91,96,75,0.65)` → `#5b604b` op scroll | Logo, 6 nav-links, hamburger |
| `Hero`         | Foto full-viewport | Overlay rechts 40%, H1, 2 p's, 2 knoppen |
| `Intro`        | `#f4f0e8`   | H2, 2 alinea's, 2-koloms grid met H3 + tekst + knop per kolom |
| `Galerij`      | `#5b604b`   | Slider: 3 foto's tegelijk, prev/next pijlen (5 foto's totaal) |
| `Diensten`     | `#f4f0e8`   | H2, intro, 4-koloms grid (SVG-icoon + H3 + p + shimmer-link), CTA |
| `Projecten`    | `#5b604b`   | H2, intro, 3-koloms fotogrid + titel + tekst, CTA |
| `Reviews`      | `#f4f0e8`   | H2, H3, 3 reviewkaarten, link, scheidslijn, H3 keurmerken, 4 dealer-logos |
| `Waarom`       | `#ffffff`   | H2, intro, 4 genummerde list-items, CTA |
| `Werkgebied`   | `#f4f0e8`   | H2, 2-koloms: foto links + H3/tekst/lijst/knop rechts, 3 SEO-links |
| `Conversie`    | `#5b604b`   | H2, H3, alinea, 3-stappen flow, 3 CTA-knoppen |
| `Footer`       | `#cecdb9`   | 4-koloms: logo+slogan, adres, awards, navigatie |

Componenten met event handlers (`"use client"`): `Navbar`, `Galerij`, `Diensten`, `Projecten`, `Reviews`, `Waarom`, `Conversie`, `AnimateOnScroll`.

Server Components (geen `"use client"`): `Hero`, `Intro`, `Werkgebied`, `Footer`.

---

## WordPress koppeling

- **Endpoint:** `https://pingwin-development.nl/wp-json/wp/v2/pages`
- **Client:** `lib/wordpress.ts` — exporteert `fetchPage()`, `parseHeroData()`, `parseServicesData()`, `parseContactData()`
- **ISR:** `export const revalidate = 60` in `app/page.tsx`
- **Query params:** `?acf_format=standard&_fields=id,slug,title,content,acf,meta,hero_fields`
- **Prioriteitsvolgorde voor hero-velden:** `acf` → `hero_fields` → `meta` → HTML-fallback
- **ACF (gratis versie):** ACF-velden zijn niet standaard beschikbaar via REST API. Gebruik `register_rest_field()` en `register_post_meta()` — snippet staat in `wordpress/functions-snippet.php`.
- **Parsers:** `parseHeroData`, `parseServicesData`, `parseContactData` — gebruik standaard HTML-selectors (`h1`, `h2`, `p`), geen Elementor CSS-klassen.
- **Let op:** `fetchPage()` wordt momenteel **niet aangeroepen** in `app/page.tsx` — de WP-koppeling is gebouwd maar nog niet geactiveerd. Alle content staat hardcoded in de componenten.

---

## Vercel deployment

- Vercel project is gelinkt via `.vercel/project.json`
- Netlify is volledig verwijderd (geen `netlify.toml`, geen `@netlify/plugin-nextjs`)
- Vercel detecteert Next.js automatisch — geen aparte `vercel.json` nodig
- Environment variables instellen via Vercel dashboard (niet in `.env` committen)

---

## Overige technische aandachtspunten

- **Hydration warning:** Browser-extensies (bijv. Feedly) injecteren attributen in `<body>`. Opgelost met `suppressHydrationWarning` op `<body>` in `app/layout.tsx`.
- **Server Components:** Componenten met `onMouseEnter`/`onMouseLeave` of andere event handlers moeten `"use client"` hebben.
- **Font:** Roboto wordt geladen via `@import url(...)` in `globals.css` (Google Fonts CDN), **niet** via `next/font/google`. Dit werkt maar mist de prestatievoordelen van `next/font` (geen layout shift, geen extra request).
- **Geen `border-radius`** — nergens in het ontwerp.
- **Tailwind v4:** `@theme {}` blok in `globals.css` definieert design tokens (`--color-olive` etc.), maar vrijwel alle styling is inline — de Tailwind-tokens worden nauwelijks gebruikt in componenten.

---

## Openstaande taken

### Hoge prioriteit
1. **WordPress koppeling activeren** — `fetchPage()` aanroepen in `app/page.tsx` en content dynamisch doorgeven aan componenten. Momenteel is alle content hardcoded.
2. **Afbeeldingen uit `Slider home/` koppelen aan Galerij** — 6 kwalitatieve foto's staan in `public/Slider home/` maar de Galerij gebruikt nog 5 oudere foto's uit `public/images/`.
3. **Hero-foto actualiseren** — `public/Hero home/` bevat een kandidaat-foto die nog niet in gebruik is.

### Medium prioriteit
4. **Placeholder-links invullen** — Diverse knoppen en links verwijzen naar `#`:
   - Diensten CTA "Bekijk alle diensten" → `#`
   - Projecten CTA "Bekijk meer projecten" → `#`
   - Reviews link "Lees meer klantbeoordelingen" → `#`
   - Navbar "Over ons" → `#`
   - Werkgebied SEO-links "Hovenier in Breda/Etten-Leur/Tilburg" → `#`
5. **Interne pagina's aanmaken** — `Intro` linkt naar `/diensten/particulieren` en `/diensten/bedrijven`, maar die pagina's bestaan niet.
6. **Responsive design** — Vrijwel geen media queries. Op mobiel breekt het grid-layout (4-koloms Diensten, 3-koloms Projecten/Reviews, 2-koloms Werkgebied/Intro). De Navbar heeft een hamburger-menu maar het mobile dropdown heeft geen animatie.

### Laag prioriteit
7. **Font migreren naar `next/font/google`** — Vervangt CDN-import in `globals.css` voor betere performance (geen FOUT, geen externe request).
8. **Footer copyright-jaar** — Staat hardcoded op `2025`, vervangen door dynamisch jaar.
9. **`Overige foto's/` beoordelen** — Map staat unstaged; beslissen of de foto bruikbaar is.
10. **`next.config.ts` controleren** — Vermelding in de docs over `remotePatterns` voor Unsplash, maar het bestand is er niet in de file listing — Unsplash wordt niet meer gebruikt.
