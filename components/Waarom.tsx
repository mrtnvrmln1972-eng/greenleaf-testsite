"use client";

const punten = [
  "Eén aanspreekpunt voor tuinontwerp, tuinaanleg én tuinonderhoud.",
  "Ruim 25 jaar ervaring als hovenier in regio Breda en omstreken.",
  "Specialist in (zwem)vijvers en complete buitenruimtes.",
  "Voor particulieren, bedrijven en overheden — elk project krijgt dezelfde toewijding.",
];

export default function Waarom() {
  return (
    <section id="waarom" style={{ backgroundColor: "#ffffff", padding: "120px 0" }} className="mob-py">
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px" }} className="mob-px">
        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#6b6b5a",
            marginBottom: "32px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Waarom Kamsteeg Tuinen?
        </h2>
        <p
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "18px",
            color: "#1a1a18",
            lineHeight: 1.75,
            marginBottom: "64px",
            textAlign: "center",
            transitionDelay: "0.1s",
          }}
        >
          Er zijn veel hoveniers. Maar er is een reden waarom klanten in Breda en omgeving al ruim 25 jaar voor Kamsteeg kiezen:
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "72px" }}>
          {punten.map((p, i) => (
            <li
              key={i}
              data-fade=""
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "28px",
                padding: "28px 0",
                borderBottom: "1px solid #e8e4d8",
                fontWeight: 300,
                fontSize: "18px",
                color: "#1a1a18",
                lineHeight: 1.75,
                transitionDelay: `${(i + 2) * 0.1}s`,
              }}
            >
              <span
                style={{
                  minWidth: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "1px solid #6b6b5a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  color: "#6b6b5a",
                  flexShrink: 0,
                  marginTop: "3px",
                }}
              >
                {i + 1}
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div data-fade="" style={{ textAlign: "center", transitionDelay: "0.7s" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
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
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "#5b604b";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "#5b604b";
            }}
          >
            Plan een kennismakingsgesprek
          </a>
        </div>
      </div>
    </section>
  );
}
