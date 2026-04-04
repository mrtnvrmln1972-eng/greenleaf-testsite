const reviews = [
  {
    naam: "Familie De Vries",
    plaats: "Breda",
    tekst: "Kamsteeg heeft onze tuin volledig getransformeerd. Van een kaal stukje grond naar een groene oase. De communicatie was prettig, de uitvoering vakkundig.",
    sterren: 5,
  },
  {
    naam: "Jan en Monique",
    plaats: "Etten-Leur",
    tekst: "Eindelijk een hovenier die doet wat hij belooft. Onze zwemvijver is de trots van de buurt. Kamsteeg heeft ons van begin tot eind perfect begeleid.",
    sterren: 5,
  },
  {
    naam: "Vastgoedbeheer Reijnen",
    plaats: "Tilburg",
    tekst: "Al drie jaar verzorgt Kamsteeg het onderhoud van onze bedrijfstuin. Altijd stipt, altijd netjes. Een betrouwbare partner voor professioneel tuinonderhoud.",
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
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          Dit zeggen onze klanten
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
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
              {/* Sterren */}
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
      </div>
    </section>
  );
}
