import { parse } from "node-html-parser";

const WP_API = "https://pingwin-development.nl/wp-json/wp/v2";

const SKIP_HEADINGS = ["About Us", "Get Growing", "Happy clients", "Our Spot", "Contact"];

// ─── Types ────────────────────────────────────────────────────────────────────

/** Velden zoals blootgesteld door ACF Pro of acf_format=standard */
export interface AcfFields {
  hero_titel?: string;
  hero_subtitel?: string;
  hero_knoptekst?: string;
}

/**
 * Velden zoals blootgesteld via register_rest_field() in functions.php.
 * Wordt als top-level sleutel 'hero_fields' op de response gezet.
 */
export interface RestHeroFields {
  hero_titel?: string;
  hero_subtitel?: string;
  hero_knoptekst?: string;
}

/**
 * Velden zoals blootgesteld via register_post_meta(..., ['show_in_rest' => true]).
 * Worden als 'meta.hero_titel' etc. op de response gezet.
 */
export interface WpMeta {
  hero_titel?: string;
  hero_subtitel?: string;
  hero_knoptekst?: string;
  [key: string]: unknown;
}

export interface WpPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  /** ACF Pro / acf_format=standard */
  acf: AcfFields;
  /** register_rest_field() onder sleutel 'hero_fields' */
  hero_fields: RestHeroFields;
  /** register_post_meta met show_in_rest => true */
  meta: WpMeta;
}

export interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
}

export interface ServiceData {
  naam: string;
  beschrijving: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  adres: string;
  openingstijden: string;
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

export async function fetchPage(slug: string): Promise<WpPage | null> {
  try {
    const res = await fetch(
      `${WP_API}/pages?slug=${slug}&acf_format=standard&_fields=id,slug,title,content,acf,meta,hero_fields`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const pages = await res.json();
    if (!pages.length) return null;
    const p = pages[0];
    return {
      id: p.id,
      slug: p.slug,
      title: p.title.rendered,
      content: p.content.rendered,
      acf: p.acf ?? {},
      hero_fields: p.hero_fields ?? {},
      meta: p.meta ?? {},
    };
  } catch {
    return null;
  }
}

// ─── Hero field resolution ────────────────────────────────────────────────────

/**
 * Zoekt de hero-waarden op in volgorde van prioriteit:
 *   1. ACF Pro  (page.acf.hero_*)
 *   2. register_rest_field  (page.hero_fields.hero_*)
 *   3. register_post_meta   (page.meta.hero_*)
 *   4. HTML-parser fallback
 */
function resolveHeroFields(page: WpPage): Partial<AcfFields> {
  // 1 – ACF Pro / acf_format=standard
  if (page.acf?.hero_titel || page.acf?.hero_subtitel || page.acf?.hero_knoptekst) {
    return page.acf;
  }
  // 2 – register_rest_field onder 'hero_fields'
  if (page.hero_fields?.hero_titel || page.hero_fields?.hero_subtitel || page.hero_fields?.hero_knoptekst) {
    return page.hero_fields;
  }
  // 3 – register_post_meta met show_in_rest => true
  if (page.meta?.hero_titel || page.meta?.hero_subtitel || page.meta?.hero_knoptekst) {
    return {
      hero_titel:     page.meta.hero_titel as string | undefined,
      hero_subtitel:  page.meta.hero_subtitel as string | undefined,
      hero_knoptekst: page.meta.hero_knoptekst as string | undefined,
    };
  }
  return {};
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function cleanText(raw: string): string {
  return raw.replace(/\s+/g, " ").replace(/&#[0-9]+;/g, "").trim();
}

// ─── Parsers ─────────────────────────────────────────────────────────────────

export function parseHeroData(page: WpPage): HeroData {
  const fields = resolveHeroFields(page);

  if (fields.hero_titel || fields.hero_subtitel || fields.hero_knoptekst) {
    return {
      heading:    fields.hero_titel?.trim()     || "Uw tuin, onze passie",
      subheading: fields.hero_subtitel?.trim()  || "Professionele tuinspecialisten voor ontwerp, onderhoud en bestrating.",
      ctaText:    fields.hero_knoptekst?.trim() || "Gratis offerte aanvragen",
    };
  }

  // Fallback: HTML-parser
  const root = parse(page.content);
  const heading = cleanText(root.querySelector("h1")?.innerText ?? "");

  const firstP = root.querySelector("p");
  let subheading = "";
  if (firstP) {
    firstP.querySelectorAll("a, img").forEach((n) => n.remove());
    subheading = cleanText(firstP.innerText);
  }

  const ctaText = cleanText(parse(page.content).querySelector("a")?.innerText ?? "");

  return {
    heading:    heading    || "Uw tuin, onze passie",
    subheading: subheading || "Professionele tuinspecialisten voor ontwerp, onderhoud en bestrating.",
    ctaText:    ctaText    || "Gratis offerte aanvragen",
  };
}

export function parseServicesData(html: string): ServiceData[] {
  if (!html.trim()) return [];

  const root = parse(html);
  const services: ServiceData[] = [];

  root.querySelectorAll("h2").forEach((h2) => {
    const naam = cleanText(h2.innerText);
    if (!naam || SKIP_HEADINGS.includes(naam)) return;

    let sibling = h2.nextElementSibling;
    let beschrijving = "";
    while (sibling) {
      if (sibling.tagName === "H2") break;
      if (sibling.tagName === "P") {
        const t = cleanText(sibling.innerText);
        if (t.length > 10) { beschrijving = t; break; }
      }
      sibling = sibling.nextElementSibling;
    }

    if (beschrijving) services.push({ naam, beschrijving });
  });

  return services;
}

export function parseContactData(html: string): ContactData {
  if (!html.trim()) {
    return {
      heading:       "Klaar voor uw droomtuin?",
      subheading:    "Vraag vandaag nog een gratis, vrijblijvende offerte aan.",
      adres:         "Tuinstraat 12, Amsterdam",
      openingstijden:"Ma–Vr: 08:00–17:00",
    };
  }

  const root = parse(html);
  const allText = root.querySelectorAll("p").map((p) => cleanText(p.innerText));

  const adres          = allText.find((t) => /street|straat|avenue|ave|weg|laan/i.test(t)) ?? "Tuinstraat 12, Amsterdam";
  const openingstijden = allText.find((t) => /\d.*(am|pm|:00)/i.test(t))                  ?? "Ma–Vr: 08:00–17:00";
  const heading        = cleanText(root.querySelectorAll("h2").find((h) =>
    /get growing|contact|neem contact/i.test(h.innerText)
  )?.innerText ?? "Klaar voor uw droomtuin?");
  const subheading     = allText.find((t) => /dream|chat|offerte|contact/i.test(t))        ?? "";

  return {
    heading,
    subheading: subheading || "Vraag vandaag nog een gratis, vrijblijvende offerte aan.",
    adres,
    openingstijden,
  };
}
