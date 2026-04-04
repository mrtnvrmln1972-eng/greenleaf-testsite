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
    <section style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#7a7b6b",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          Klantreviews &amp; keurmerken
        </h2>

        <h3
          style={{
            fontWeight: 400,
            fontSize: "24px",
            color: "#5b604b",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Dit zeggen onze klanten
        </h3>
        <p
          style={{
            fontWeight: 400,
            fontSize: "17px",
            color: "#3a3a2e",
            lineHeight: 1.7,
            marginBottom: "64px",
          }}
        >
          Wij laten ons werk graag voor zich spreken. Maar het mooiste compliment komt van onze klanten zelf:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          {reviews.map((r) => (
            <div
              key={r.naam}
              style={{
                backgroundColor: "#ffffff",
                padding: "40px",
              }}
            >
              <div style={{ marginBottom: "20px", color: "#7a7b6b", fontSize: "16px", letterSpacing: "2px" }}>
                {"★".repeat(r.sterren)}
              </div>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: "17px",
                  color: "#3a3a2e",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "28px",
                }}
              >
                &ldquo;{r.tekst}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid #e8e4d8", paddingTop: "20px" }}>
                <p style={{ fontWeight: 400, fontSize: "14px", color: "#5b604b", margin: 0 }}>
                  {r.naam}
                </p>
                <p style={{ fontWeight: 400, fontSize: "13px", color: "#888", marginTop: "4px" }}>
                  {r.plaats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #c8c4b4", paddingTop: "64px" }}>
          <h3
            style={{
              fontWeight: 400,
              fontSize: "24px",
              color: "#5b604b",
              marginBottom: "20px",
              lineHeight: 1.2,
            }}
          >
            Erkende en bekroonde tuinspecialist
          </h3>
          <p
            style={{
              fontWeight: 400,
              fontSize: "17px",
              color: "#3a3a2e",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Kamsteeg Tuinen staat bekend om kwaliteit en betrouwbaarheid. Dat bevestigen niet alleen onze klanten, maar ook de branche:
          </p>
          {/* Erkende dealer logo-balk */}
          <div style={{ borderTop: "1px solid #c8c4b4", paddingTop: "40px", marginBottom: "40px" }}>
            <p style={{ fontWeight: 400, fontSize: "13px", color: "#7a7b6b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "28px" }}>
              Wij zijn erkend dealer voor
            </p>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>

              {/* KOKOSYSTEMS */}
              <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kokosystems">
                <text x="0" y="22" fontFamily='"Roboto", system-ui, sans-serif' fontSize="14" fontWeight="500" fill="#7a7b6b" letterSpacing="3">KOKOSYSTEMS</text>
              </svg>

              {/* PLATOFLEX */}
              <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Platoflex">
                <text x="0" y="22" fontFamily='"Roboto", system-ui, sans-serif' fontSize="14" fontWeight="500" fill="#7a7b6b" letterSpacing="2">PLATOFLEX</text>
              </svg>

              {/* Avyna */}
              <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Avyna">
                <text x="0" y="26" fontFamily="Georgia, serif" fontSize="22" fontWeight="400" fontStyle="italic" fill="#7a7b6b">Avyna</text>
              </svg>

              {/* tablazz */}
              <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Tablazz">
                <text x="0" y="22" fontFamily='"Roboto", system-ui, sans-serif' fontSize="16" fontWeight="300" fill="#7a7b6b" letterSpacing="1">tablazz</text>
              </svg>

            </div>
          </div>

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
