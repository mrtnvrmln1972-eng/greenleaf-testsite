const plaatsen = [
  "Breda en directe omgeving",
  "Etten-Leur",
  "Tilburg",
  "Oosterhout",
  "Roosendaal en omstreken",
];

export default function Werkgebied() {
  return (
    <section style={{ backgroundColor: "#f2eee2", padding: "100px 0" }}>
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
          Werkgebied Breda en omgeving
        </h2>

        <h3
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "#7a7b6b",
            marginBottom: "20px",
          }}
        >
          Hovenier in Breda en omliggende plaatsen
        </h3>

        <p
          style={{
            fontWeight: 300,
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Kamsteeg Tuinen is uw hovenier in Breda en de wijde regio. Of u nu woont in het centrum van Breda, in Etten-Leur, Tilburg of een van de omliggende dorpen — wij komen graag bij u langs voor een vrijblijvend adviesgesprek.
        </p>

        <p
          style={{
            fontWeight: 300,
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "16px",
          }}
        >
          Ons werkgebied omvat onder meer:
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
          {plaatsen.map((p) => (
            <li
              key={p}
              style={{
                fontWeight: 300,
                fontSize: "15px",
                color: "#555",
                lineHeight: 1.8,
                paddingLeft: "16px",
                position: "relative",
                marginBottom: "4px",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "#7a7b6b" }}>–</span>
              {p}
            </li>
          ))}
        </ul>

        <p
          style={{
            fontWeight: 300,
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          Woont u buiten dit gebied? Neem gerust contact op — in overleg is veel mogelijk.
        </p>

        <p style={{ fontWeight: 300, fontSize: "14px", color: "#7a7b6b" }}>
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
