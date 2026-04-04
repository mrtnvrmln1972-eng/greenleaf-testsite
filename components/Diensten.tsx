"use client";
const diensten = [
  {
    titel: "Tuinontwerp",
    tekst:
      "Een goed tuinontwerp is de basis voor een tuin die jarenlang voldoening geeft. Wij luisteren naar uw wensen en vertalen die naar een persoonlijk plan voor uw hovenier in Breda.",
  },
  {
    titel: "Tuinaanleg",
    tekst:
      "Onze vakmensen leggen uw tuin aan met zorg en precisie, met duurzame materialen. Professionele tuinaanleg in Breda en omgeving, van begin tot oplevering.",
  },
  {
    titel: "Tuinonderhoud",
    tekst:
      "Van snoeien en onkruidbestrijding tot een compleet seizoensplan voor tuinonderhoud. Wij houden uw tuin het hele jaar door in topconditie.",
  },
  {
    titel: "(Zwem)vijvers & waterpartijen",
    tekst:
      "Kamsteeg Tuinen is specialist in de aanleg van vijvers en zwemvijvers. Een waterpartij geeft uw tuin beleving en sfeer in elk seizoen.",
  },
];

export default function Diensten() {
  return (
    <section id="diensten" style={{ backgroundColor: "#f2eee2", padding: "100px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>
        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#7a7b6b",
            marginBottom: "64px",
            textAlign: "center",
          }}
        >
          Onze diensten
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
          }}
        >
          {diensten.map((d) => (
            <div key={d.titel}>
              <h3
                style={{
                  fontFamily: "Roboto, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  color: "#7a7b6b",
                  marginBottom: "14px",
                  borderBottom: "1px solid #c8c4b4",
                  paddingBottom: "12px",
                }}
              >
                {d.titel}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                {d.tekst}
              </p>
              <a
                href="#contact"
                style={{
                  fontFamily: "Roboto, system-ui, sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#7a7b6b",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")}
              >
                Meer informatie →
              </a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "60px", textAlign: "center" }}>
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
            Bekijk alle diensten →
          </a>
        </div>
      </div>
    </section>
  );
}
