const plaatsen = [
  "Breda en directe omgeving",
  "Etten-Leur",
  "Tilburg",
  "Oosterhout",
  "Roosendaal en omstreken",
];

export default function Werkgebied() {
  return (
    <section id="werkgebied" style={{ backgroundColor: "#f4f0e8", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#6b6b5a",
            marginBottom: "64px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Werkgebied Breda en omgeving
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
            marginBottom: "56px",
          }}
        >
          {/* Links: foto */}
          <div data-fade="">
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
          <div data-fade="" style={{ display: "flex", flexDirection: "column", transitionDelay: "0.15s" }}>
            <h3
              style={{
                fontWeight: 300,
                fontSize: "24px",
                color: "#5b604b",
                marginBottom: "24px",
                lineHeight: 1.3,
              }}
            >
              Hovenier in Breda en omliggende plaatsen
            </h3>

            <p
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "#1a1a18",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              Kamsteeg Tuinen is uw hovenier in Breda en de wijde regio. Of u nu woont in het centrum van Breda, in Etten-Leur, Tilburg of een van de omliggende dorpen — wij komen graag bij u langs voor een vrijblijvend adviesgesprek.
            </p>

            <p
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "#1a1a18",
                lineHeight: 1.75,
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
                    fontWeight: 300,
                    fontSize: "18px",
                    color: "#1a1a18",
                    lineHeight: 1.75,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#6b6b5a" }}>–</span>
                  {p}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "#1a1a18",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              Woont u buiten dit gebied? Neem gerust contact op — in overleg is veel mogelijk.
            </p>

            <div>
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#5b604b",
                  border: "1px solid #5b604b",
                  padding: "16px 40px",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
              >
                Neem contact op met Sander Kamsteeg
              </a>
            </div>
          </div>
        </div>

        {/* Links onderaan */}
        <p data-fade="" style={{ fontWeight: 300, fontSize: "14px", color: "#6b6b5a", transitionDelay: "0.2s" }}>
          <a href="#" style={{ color: "#6b6b5a", textDecoration: "none", transition: "color 0.3s ease" }}>→ Hovenier in Breda</a>
          {"  |  "}
          <a href="#" style={{ color: "#6b6b5a", textDecoration: "none", transition: "color 0.3s ease" }}>→ Hovenier in Etten-Leur</a>
          {"  |  "}
          <a href="#" style={{ color: "#6b6b5a", textDecoration: "none", transition: "color 0.3s ease" }}>→ Hovenier in Tilburg</a>
        </p>

      </div>
    </section>
  );
}
