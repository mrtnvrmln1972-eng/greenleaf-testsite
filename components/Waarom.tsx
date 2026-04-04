"use client";
const punten = [
  "Eén aanspreekpunt voor tuinontwerp, tuinaanleg én tuinonderhoud.",
  "Ruim 25 jaar ervaring als hovenier in regio Breda en omstreken.",
  "Specialist in (zwem)vijvers en complete buitenruimtes.",
  "Voor particulieren, bedrijven en overheden — elk project krijgt dezelfde toewijding.",
];

export default function Waarom() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#7a7b6b",
            marginBottom: "24px",
          }}
        >
          Waarom Kamsteeg Tuinen?
        </h2>
        <p
          style={{
            fontWeight: 300,
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Er zijn veel hoveniers. Maar er is een reden waarom klanten in Breda en omgeving al ruim 25 jaar voor Kamsteeg kiezen:
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "48px" }}>
          {punten.map((p, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                padding: "20px 0",
                borderBottom: "1px solid #e8e4d8",
                fontWeight: 300,
                fontSize: "16px",
                color: "#444",
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  minWidth: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid #7a7b6b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  color: "#7a7b6b",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          style={{
            display: "inline-block",
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            color: "#5b604b",
            border: "1px solid #5b604b",
            padding: "12px 36px",
            textDecoration: "none",
            letterSpacing: "0.06em",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#5b604b";
            el.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = "#5b604b";
          }}
        >
          Plan een kennismakingsgesprek →
        </a>
      </div>
    </section>
  );
}
