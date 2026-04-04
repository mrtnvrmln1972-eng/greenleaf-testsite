"use client";
const projecten = [
  {
    foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=85",
    titel: "Landelijke achtertuin – Breda Noord",
    tekst: "Van kale ondergrond naar een weelderige landelijke tuin. Tuinaanleg in Breda voor een gezin met jonge kinderen.",
  },
  {
    foto: "https://images.unsplash.com/photo-1563306406-9a2d0cc1d77c?w=700&q=85",
    titel: "Zwemvijver villa – Etten-Leur",
    tekst: "Biologische zwemvijver geïntegreerd in een parkachtige tuin. Specialist in (zwem)vijvers en waterpartijen.",
  },
  {
    foto: "https://images.unsplash.com/photo-1582407947304-fd86f28320c7?w=700&q=85",
    titel: "Bedrijfstuin kantoorpand – Tilburg",
    tekst: "Representatieve bedrijfstuin met laag onderhoud en hoge uitstraling. Structureel tuinonderhoud inbegrepen.",
  },
];

const inspiratieBullets = [
  "Kleine tuinen slim inrichten",
  "Onderhoudsarme tuinen",
  "Voortuinideeën die opvallen",
  "Tuinstijlen: modern, landelijk, ecologisch en meer",
];

export default function Projecten() {
  return (
    <section
      id="projecten"
      style={{ backgroundColor: "#5b604b", padding: "100px 0" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#ffffff",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Projecten &amp; inspiratie
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "16px",
            color: "rgba(255,255,255,0.80)",
            textAlign: "center",
            marginBottom: "60px",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto 60px",
          }}
        >
          Benieuwd hoe een tuin van Kamsteeg eruitziet in de praktijk? Bekijk onze gerealiseerde projecten en laat u inspireren voor uw eigen buitenruimte.
        </p>

        <h3
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          Gerealiseerde tuinen in en rond Breda
        </h3>
        <p
          style={{
            fontWeight: 300,
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75,
            marginBottom: "40px",
            maxWidth: "720px",
          }}
        >
          Van een moderne stadstuin in het centrum van Breda tot een landelijke tuin in de Baronie: elk project is uniek. In ons portfolio ziet u wat er mogelijk is — en hoe wij de wensen van onze klanten vertalen naar een prachtig eindresultaat.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          {projecten.map((p) => (
            <div key={p.titel}>
              <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src={p.foto}
                  alt={p.titel}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 0,
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Laat u inspireren
        </h3>
        <p
          style={{
            fontWeight: 300,
            fontSize: "15px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.75,
            marginBottom: "16px",
          }}
        >
          Op zoek naar ideeën voor uw tuin? In onze inspiratiegidsen vindt u tips en voorbeelden voor onder meer:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 52px" }}>
          {inspiratieBullets.map((b) => (
            <li
              key={b}
              style={{
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.8,
                paddingLeft: "16px",
                position: "relative",
                marginBottom: "6px",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.5)" }}>–</span>
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              fontFamily: "Roboto, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "12px 36px",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
          >
            Bekijk meer projecten
          </a>
          <a
            href="#"
            style={{
              display: "inline-block",
              fontFamily: "Roboto, system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              color: "rgba(255,255,255,0.80)",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "12px 36px",
              textDecoration: "none",
              letterSpacing: "0.06em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
          >
            Meer tuin-inspiratie
          </a>
        </div>
      </div>
    </section>
  );
}
