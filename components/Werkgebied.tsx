const plaatsen = [
  "Breda en directe omgeving",
  "Etten-Leur",
  "Tilburg",
  "Oosterhout",
  "Roosendaal en omstreken",
];

export default function Werkgebied() {
  return (
    <section id="werkgebied" style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

        {/* H2 over volledige breedte */}
        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#7a7b6b",
            marginBottom: "56px",
            lineHeight: 1.2,
          }}
        >
          Werkgebied Breda en omgeving
        </h2>

        {/* Foto + tekst twee kolommen */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "48px",
          }}
        >
          {/* Links: foto */}
          <div>
            <img
              src="/images/Kamperland-sander_2_med-scaled.jpg"
              alt="Sander Kamsteeg, hovenier Breda"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </div>

          {/* Rechts: tekst */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3
              style={{
                fontWeight: 400,
                fontSize: "24px",
                color: "#5b604b",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Hovenier in Breda en omliggende plaatsen
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
              Kamsteeg Tuinen is uw hovenier in Breda en de wijde regio. Of u nu woont in het centrum van Breda, in Etten-Leur, Tilburg of een van de omliggende dorpen — wij komen graag bij u langs voor een vrijblijvend adviesgesprek.
            </p>

            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#3a3a2e",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              Ons werkgebied omvat onder meer:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {plaatsen.map((p) => (
                <li
                  key={p}
                  style={{
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "#3a3a2e",
                    lineHeight: 1.7,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#7a7b6b" }}>–</span>
                  {p}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#3a3a2e",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Woont u buiten dit gebied? Neem gerust contact op — in overleg is veel mogelijk.
            </p>

            {/* CTA knop */}
            <div>
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#5b604b",
                  border: "1px solid #5b604b",
                  padding: "14px 32px",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
              >
                Neem contact op met Sander Kamsteeg
              </a>
            </div>
          </div>
        </div>

        {/* Links onderaan over volledige breedte */}
        <p style={{ fontWeight: 400, fontSize: "14px", color: "#7a7b6b" }}>
          <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Breda</a>
          {"  |  "}
          <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Etten-Leur</a>
          {"  |  "}
          <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Tilburg</a>
        </p>

      </div>
    </section>
  );
}
