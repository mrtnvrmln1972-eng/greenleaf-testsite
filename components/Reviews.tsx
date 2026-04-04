const reviews = [
  {
    naam: "Familie De Vries",
    plaats: "Breda",
    tekst: "Kamsteeg heeft onze tuin volledig getransformeerd. Van een kaal stukje grond naar een groene oase waar we elke avond van genieten. Vakkundig, netjes en precies zoals besproken.",
    sterren: 5,
  },
  {
    naam: "Jan en Monique",
    plaats: "Etten-Leur",
    tekst: "Eindelijk een hovenier die doet wat hij belooft. Duidelijke offerte, strakke planning en een prachtig resultaat. Onze zwemvijver is de trots van de buurt.",
    sterren: 5,
  },
  {
    naam: "Vastgoedbeheer Reijnen",
    plaats: "Tilburg",
    tekst: "Al drie jaar verzorgt Kamsteeg het onderhoud van onze bedrijfstuin. Altijd stipt, altijd netjes. De tuin ziet er elk seizoen verzorgd uit.",
    sterren: 5,
  },
];

export default function Reviews() {
  return (
    <section style={{ backgroundColor: "#f2eee2", padding: "100px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#7a7b6b",
            marginBottom: "20px",
          }}
        >
          Klantreviews &amp; keurmerken
        </h2>

        <h3
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "#7a7b6b",
            marginBottom: "16px",
          }}
        >
          Dit zeggen onze klanten
        </h3>
        <p
          style={{
            fontWeight: 300,
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "52px",
          }}
        >
          Wij laten ons werk graag voor zich spreken. Maar het mooiste compliment komt van onze klanten zelf:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.naam}
              style={{
                backgroundColor: "#ffffff",
                padding: "36px",
              }}
            >
              <div style={{ marginBottom: "18px", color: "#7a7b6b", fontSize: "16px", letterSpacing: "2px" }}>
                {"★".repeat(r.sterren)}
              </div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "#444",
                  lineHeight: 1.78,
                  fontStyle: "italic",
                  marginBottom: "24px",
                }}
              >
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid #e8e4d8", paddingTop: "18px" }}>
                <p style={{ fontWeight: 500, fontSize: "14px", color: "#5b604b", margin: 0 }}>
                  {r.naam}
                </p>
                <p style={{ fontWeight: 300, fontSize: "13px", color: "#888", marginTop: "3px" }}>
                  {r.plaats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #c8c4b4", paddingTop: "52px" }}>
          <h3
            style={{
              fontFamily: "Roboto, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "22px",
              color: "#7a7b6b",
              marginBottom: "16px",
            }}
          >
            Erkende en bekroonde tuinspecialist
          </h3>
          <p
            style={{
              fontWeight: 300,
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            Kamsteeg Tuinen staat bekend om kwaliteit en betrouwbaarheid. Dat bevestigen niet alleen onze klanten, maar ook de branche:
          </p>
          <a
            href="#"
            style={{ fontWeight: 400, fontSize: "14px", color: "#7a7b6b", textDecoration: "none" }}
          >
            → Lees meer klantbeoordelingen
          </a>
        </div>

      </div>
    </section>
  );
}
