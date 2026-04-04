export default function Intro() {
  return (
    <section style={{ backgroundColor: "#f2eee2", padding: "100px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#7a7b6b",
            marginBottom: "36px",
            lineHeight: 1.1,
          }}
        >
          Uw tuin, ons vakmanschap
        </h2>

        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          Een mooie tuin begint bij een vakman die luistert naar uw wensen. Kamsteeg Tuinen
          combineert ruim 25 jaar ervaring met persoonlijke aandacht. Ons team denkt met u mee —
          van het eerste idee tot het eindresultaat.
        </p>
        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "#444",
            lineHeight: 1.8,
            marginBottom: "56px",
          }}
        >
          Wij werken voor particulieren, bedrijven en overheden in Breda en de wijde omgeving.
          Als <strong style={{ fontWeight: 500 }}>hovenier in Breda</strong> kennen wij de regio
          als geen ander. Geen project is te groot of te klein.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            borderTop: "1px solid #c8c4b4",
            paddingTop: "48px",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "22px",
                color: "#7a7b6b",
                marginBottom: "14px",
              }}
            >
              Tuinen met een goed gevoel
            </h3>
            <p style={{ fontWeight: 300, fontSize: "15px", color: "#555", lineHeight: 1.75 }}>
              Wij ontwerpen, leggen aan en onderhouden tuinen waarin u zich het hele jaar door
              prettig voelt. Met oog voor sfeer, functionaliteit en de natuur om u heen.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "22px",
                color: "#7a7b6b",
                marginBottom: "14px",
              }}
            >
              Voor particulieren én bedrijven
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Particulieren: van tuinontwerp en tuinaanleg tot seizoensonderhoud.",
                "Bedrijven en overheden: bedrijfstuinen, groene buitenruimtes en structureel onderhoud.",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontWeight: 300,
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.75,
                    paddingLeft: "16px",
                    position: "relative",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "#7a7b6b",
                    }}
                  >
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
