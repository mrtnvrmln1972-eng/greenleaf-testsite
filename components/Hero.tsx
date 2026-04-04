export default function Hero() {
  const textShadow = "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.6)";

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "580px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/kamsteeg/hero/Toptuinen-Luxe-villatuin-in-Bilthoven-08.jpg"
        alt="Luxe villatuin gerealiseerd door Kamsteeg Tuinen"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Tekstblok rechtsonder */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          right: "60px",
          zIndex: 10,
          width: "50vw",
          maxWidth: "50vw",
          textAlign: "right",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 4vw, 48px)",
            color: "#ffffff",
            margin: "0 0 16px",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            textShadow,
          }}
        >
          Kamsteeg Tuinen – Tuinen met een goed gevoel in regio Breda
        </h1>

        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.9rem, 1.6vw, 16px)",
            color: "rgba(255,255,255,0.88)",
            margin: "0 0 8px",
            lineHeight: 1.7,
            textShadow,
          }}
        >
          Al meer dan 25 jaar creëert Kamsteeg Tuinen buitenruimtes waar u met plezier vertoeft.
          Van tuinontwerp en tuinaanleg tot volledig tuinonderhoud — voor particulieren, bedrijven
          en overheden in Breda en omgeving.
        </p>
        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.3vw, 15px)",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 28px",
            textShadow,
          }}
        >
          Ontdek wat wij voor uw tuin kunnen betekenen.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "flex-end" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              fontFamily: "Roboto, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#5b604b",
              backgroundColor: "#ffffff",
              padding: "13px 30px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Vraag vrijblijvend advies aan
          </a>
          <a
            href="#projecten"
            style={{
              display: "inline-block",
              fontFamily: "Roboto, system-ui, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.7)",
              padding: "13px 30px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Bekijk gerealiseerde tuinen
          </a>
        </div>
      </div>
    </section>
  );
}
