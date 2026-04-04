import { parse } from "node-html-parser";

const WP_API = "https://pingwin-development.nl/wp-json/wp/v2";

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

// ─── Parsers ─────────────────────────────────────────────────────────────────

function text(node: ReturnType<typeof parse> | null): string {
  return node?.innerText.replace(/\s+/g, " ").trim() ?? "";
}

export function parseHeroData(html: string): HeroData {
  const root = parse(html);

  const h1 = root.querySelector("h1");
  const paragraphs = root.querySelectorAll(".elementor-widget-text-editor .elementor-widget-container");
  const btn = root.querySelector(".elementor-button-text");

  return {
    heading: text(h1) || "Uw tuin, onze passie",
    subheading: text(paragraphs[0]) || "Professionele tuinspecialisten voor ontwerp, onderhoud en bestrating.",
    ctaText: text(btn) || "Gratis offerte aanvragen",
  };
}

export function parseServicesData(html: string): ServiceData[] {
  const root = parse(html);

  // Each service block has an h2 + a text-editor description
  const headings = root.querySelectorAll(".elementor-widget-heading .elementor-heading-title");
  const descriptions = root.querySelectorAll(".elementor-widget-text-editor .elementor-widget-container");

  const services: ServiceData[] = [];

  headings.forEach((h, i) => {
    const naam = text(h);
    const beschrijving = text(descriptions[i]);
    // Skip non-service headings (CTA sections, testimonials)
    if (naam && beschrijving && !["Get Growing", "Happy clients"].includes(naam)) {
      services.push({ naam, beschrijving });
    }
  });

  return services.length ? services : [
    { naam: "Tuinontwerp", beschrijving: "Wij ontwerpen uw droomtuin van A tot Z." },
    { naam: "Tuinonderhoud", beschrijving: "Uw tuin het hele jaar door in topconditie." },
    { naam: "Bestrating", beschrijving: "Van opritten tot terrassen – kwalitatieve bestrating." },
  ];
}

export function parseContactData(html: string): ContactData {
  const root = parse(html);

  const headings = root.querySelectorAll(".elementor-widget-heading .elementor-heading-title");
  const texts = root.querySelectorAll(".elementor-widget-text-editor .elementor-widget-container");

  // "Get in Touch" heading
  const ctaHeading = root.querySelectorAll(".elementor-widget-heading .elementor-heading-title");

  // Find address and hours from text blocks
  let adres = "";
  let openingstijden = "";

  texts.forEach((t) => {
    const val = text(t).replace(/&#8211;/g, "–").replace(/&#[0-9]+;/g, "");
    if (val.includes("Street") || val.includes("straat") || val.includes("Ave")) adres = val;
    if (/[0-9](am|pm|:00)/i.test(val)) openingstijden = val;
  });

  // CTA section heading + subtext
  const ctaSectionH = headings.find((h) => text(h).includes("Get Growing") || text(h).includes("Neem contact"));
  const ctaSubtext = texts.find((t) => text(t).includes("dreams") || text(t).includes("chat"));

  return {
    heading: ctaSectionH ? text(ctaSectionH) : "Klaar voor uw droomtuin?",
    subheading: ctaSubtext
      ? text(ctaSubtext)
      : "Vraag vandaag nog een gratis, vrijblijvende offerte aan.",
    adres: adres || "Tuinstraat 12, Amsterdam",
    openingstijden: openingstijden || "Ma–Vr: 08:00–17:00",
  };
}
