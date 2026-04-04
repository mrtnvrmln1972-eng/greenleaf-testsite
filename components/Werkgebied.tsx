const plaatsen = ["Breda", "Etten-Leur", "Tilburg", "Oosterhout", "Roosendaal"];

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
        <p
          style={{
            fontWeight: 300,
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Kamsteeg Tuinen is uw <strong style={{ fontWeight: 500 }}>hovenier in Breda</strong> en
          de wijde regio. Wij komen graag bij u langs voor een vrijblijvend adviesgesprek over{" "}
          <strong style={{ fontWeight: 500 }}>tuinaanleg in Breda</strong> of{" "}
          <strong style={{ fontWeight: 500 }}>tuinonderhoud</strong> in uw omgeving.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          {plaatsen.map((p) => (
            <span
              key={p}
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "#5b604b",
                border: "1px solid #5b604b",
                padding: "8px 22px",
                letterSpacing: "0.06em",
              }}
            >
              {p}
            </span>
          ))}
        </div>
        <p
          style={{
            fontWeight: 300,
            fontSize: "14px",
            color: "#888",
            marginTop: "18px",
            fontStyle: "italic",
          }}
        >
          En overige plaatsen in Noord-Brabant
        </p>
      </div>
    </section>
  );
}
