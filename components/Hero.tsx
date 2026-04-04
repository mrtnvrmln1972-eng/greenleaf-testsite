export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/kamsteeg/hero/Toptuinen-Luxe-villatuin-in-Bilthoven-08.jpg"
        alt="Luxe villatuin gerealiseerd door Kamsteeg Tuinen"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay blok rechts, verticaal gecentreerd */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "40%",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            padding: "48px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontWeight: 400,
              fontSize: "clamp(2rem, 3.5vw, 54px)",
              color: "#ffffff",
              margin: "0 0 24px",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Kamsteeg Tuinen – Tuinen met een goed gevoel
          </h1>

          <p
            style={{
              fontWeight: 400,
              fontSize: "17px",
              color: "#ffffff",
              margin: "0 0 10px",
              lineHeight: 1.7,
            }}
          >
            Al meer dan 25 jaar creëert Kamsteeg Tuinen buitenruimtes waar u met plezier vertoeft.
            Van tuinontwerp en tuinaanleg tot volledig tuinonderhoud — voor particulieren, bedrijven
            en overheden in Breda en omgeving.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: "17px",
              color: "rgba(255,255,255,0.80)",
              margin: "0 0 40px",
              lineHeight: 1.7,
            }}
          >
            Ontdek wat wij voor uw tuin kunnen betekenen.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                fontWeight: 400,
                fontSize: "14px",
                color: "#ffffff",
                backgroundColor: "transparent",
                border: "1px solid #ffffff",
                padding: "12px 28px",
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
                fontWeight: 400,
                fontSize: "14px",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "12px 28px",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Bekijk gerealiseerde tuinen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
