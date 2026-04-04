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
          }}
        >
          Benieuwd hoe een tuin van Kamsteeg eruitziet in de praktijk?<br />
          Bekijk onze gerealiseerde projecten.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "52px",
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
              <h3
                style={{
                  fontFamily: "Roboto, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "17px",
                  color: "#ffffff",
                  marginTop: "16px",
                  marginBottom: "8px",
                }}
              >
                {p.titel}
              </h3>
              <p style={{ fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
                {p.tekst}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
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
            Bekijk meer projecten →
          </a>
        </div>
      </div>
    </section>
  );
}
