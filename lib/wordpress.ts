import { parse } from "node-html-parser";

const WP_API = "https://pingwin-development.nl/wp-json/wp/v2";

// h2's that are page-structure headings, not service names
const SKIP_HEADINGS = ["About Us", "Get Growing", "Happy clients", "Our Spot", "Contact"];

export interface WpPage {
  id: number;
  slug: string;
  title: string;
  content: string;
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
    const res = await fetch(`${WP_API}/pages?slug=${slug}&_fields=id,slug,title,content`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const pages = await res.json();
    if (!pages.length) return null;
    const page = pages[0];
    return {
      id: page.id,
      slug: page.slug,
      title: page.title.rendered,
      content: page.content.rendered,
    };
  } catch {
    return null;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function cleanText(raw: string): string {
  return raw.replace(/\s+/g, " ").replace(/&#[0-9]+;/g, "").trim();
}

// ─── Parsers ─────────────────────────────────────────────────────────────────

export function parseHeroData(html: string): HeroData {
  const root = parse(html);

  // heading: first <h1>
  const heading = cleanText(root.querySelector("h1")?.innerText ?? "");

  // subheading: text in first <p>, stripping any nested <a> and <img> text
  const firstP = root.querySelector("p");
  let subheading = "";
  if (firstP) {
    // Remove link and image nodes to get only the surrounding text
    firstP.querySelectorAll("a, img").forEach((n) => n.remove());
    subheading = cleanText(firstP.innerText);
  }

  // CTA: first <a> text anywhere on the page (re-parse since we mutated above)
  const rootFresh = parse(html);
  const ctaText = cleanText(rootFresh.querySelector("a")?.innerText ?? "");

  return {
    heading: heading || "Uw tuin, onze passie",
    subheading: subheading || "Professionele tuinspecialisten voor ontwerp, onderhoud en bestrating.",
    ctaText: ctaText || "Gratis offerte aanvragen",
  };
}

export function parseServicesData(html: string): ServiceData[] {
  if (!html.trim()) return [];

  const root = parse(html);
  const services: ServiceData[] = [];

  root.querySelectorAll("h2").forEach((h2) => {
    const naam = cleanText(h2.innerText);
    if (!naam || SKIP_HEADINGS.includes(naam)) return;

    // Walk siblings until we hit the next <p> with real text (skip <p> that only contain images)
    let sibling = h2.nextElementSibling;
    let beschrijving = "";
    while (sibling) {
      if (sibling.tagName === "H2") break; // stop at next service
      if (sibling.tagName === "P") {
        const t = cleanText(sibling.innerText);
        if (t.length > 10) { // skip image-only paragraphs
          beschrijving = t;
          break;
        }
      }
      sibling = sibling.nextElementSibling;
    }

    if (beschrijving) {
      services.push({ naam, beschrijving });
    }
  });

  return services;
}

export function parseContactData(html: string): ContactData {
  if (!html.trim()) {
    return {
      heading: "Klaar voor uw droomtuin?",
      subheading: "Vraag vandaag nog een gratis, vrijblijvende offerte aan.",
      adres: "Tuinstraat 12, Amsterdam",
      openingstijden: "Ma–Vr: 08:00–17:00",
    };
  }

  const root = parse(html);
  const allText = root.querySelectorAll("p").map((p) => cleanText(p.innerText));

  const adres = allText.find((t) => /street|straat|avenue|ave|weg|laan/i.test(t)) ?? "Tuinstraat 12, Amsterdam";
  const openingstijden = allText.find((t) => /\d.*(am|pm|:00)/i.test(t)) ?? "Ma–Vr: 08:00–17:00";

  const ctaH2 = root.querySelectorAll("h2").find((h) =>
    /get growing|contact|neem contact/i.test(h.innerText)
  );
  const heading = ctaH2 ? cleanText(ctaH2.innerText) : "Klaar voor uw droomtuin?";

  const subtext = allText.find((t) => /dream|chat|offerte|contact/i.test(t)) ?? "";

  return {
    heading,
    subheading: subtext || "Vraag vandaag nog een gratis, vrijblijvende offerte aan.",
    adres,
    openingstijden,
  };
}
