"use client";

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
    <section style={{ backgroundColor: "#f4f0e8", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#6b6b5a",
            marginBottom: "24px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Klantreviews &amp; keurmerken
        </h2>

        <h3
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "24px",
            color: "#5b604b",
            marginBottom: "56px",
            lineHeight: 1.3,
            textAlign: "center",
            transitionDelay: "0.1s",
          }}
        >
          Dit zeggen onze klanten
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {reviews.map((r, idx) => (
            <div
              key={r.naam}
              data-fade=""
              style={{
                backgroundColor: "#ffffff",
                padding: "40px",
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              <div style={{ marginBottom: "20px", color: "#6b6b5a", fontSize: "16px", letterSpacing: "2px" }}>
                {"★".repeat(r.sterren)}
              </div>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "17px",
                  color: "#1a1a18",
                  lineHeight: 1.75,
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
                <p style={{ fontWeight: 300, fontSize: "13px", color: "#6b6b5a", marginTop: "4px" }}>
                  {r.plaats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div data-fade="" style={{ marginBottom: "64px", transitionDelay: "0.3s" }}>
          <a
            href="#"
            style={{ fontWeight: 400, fontSize: "14px", color: "#6b6b5a", textDecoration: "none", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#5b604b"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b6b5a"; }}
          >
            → Lees meer klantbeoordelingen
          </a>
        </div>

        <div style={{ borderTop: "1px solid #c8c4b4", marginBottom: "64px" }} />

        <h3
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "24px",
            color: "#5b604b",
            marginBottom: "20px",
            lineHeight: 1.3,
            transitionDelay: "0.1s",
          }}
        >
          Erkende en bekroonde tuinspecialist
        </h3>

        <p
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "18px",
            color: "#1a1a18",
            lineHeight: 1.75,
            marginBottom: "40px",
            transitionDelay: "0.2s",
          }}
        >
          Kamsteeg Tuinen staat bekend om kwaliteit en betrouwbaarheid. Dat bevestigen niet alleen onze klanten, maar ook de branche:
        </p>

        <div data-fade="" style={{ borderTop: "1px solid #c8c4b4", padding: "40px 0 0", transitionDelay: "0.3s" }}>
          <p style={{
            fontWeight: 400,
            fontSize: "11px",
            color: "#6b6b5a",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "36px",
          }}>
            Wij zijn erkend dealer voor
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {[
              {
                label: "KOKOSYSTEMS",
                style: {
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "4px",
                  color: "#1a1a18",
                  transition: "color 0.3s ease",
                  cursor: "default",
                },
              },
              {
                label: "PLATOFLEX",
                style: {
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  color: "#1a1a18",
                  transition: "color 0.3s ease",
                  cursor: "default",
                },
              },
              {
                label: "Avyna",
                style: {
                  fontFamily: "Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#1a1a18",
                  transition: "color 0.3s ease",
                  cursor: "default",
                },
              },
              {
                label: "tablazz",
                style: {
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontSize: "20px",
                  fontWeight: 300,
                  letterSpacing: "2px",
                  color: "#1a1a18",
                  transition: "color 0.3s ease",
                  cursor: "default",
                },
              },
            ].map(({ label, style }) => (
              <span
                key={label}
                style={style as React.CSSProperties}
                onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "#5b604b"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "#1a1a18"; }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
