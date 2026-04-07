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
        className="hero-panel"
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
          className="hero-box"
          style={{
            backgroundColor: "rgba(91,96,75,0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            padding: "56px 48px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontWeight: 300,
              fontSize: "clamp(2rem, 3.5vw, 72px)",
              color: "#ffffff",
              margin: "0 0 28px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Kamsteeg Tuinen – Tuinen met een goed gevoel
          </h1>

          <p
            style={{
              fontWeight: 300,
              fontSize: "18px",
              color: "rgba(255,255,255,0.90)",
              margin: "0 0 12px",
              lineHeight: 1.75,
            }}
          >
            Al meer dan 25 jaar creëert Kamsteeg Tuinen buitenruimtes waar u met plezier vertoeft.
            Van tuinontwerp en tuinaanleg tot volledig tuinonderhoud — voor particulieren, bedrijven
            en overheden in Breda en omgeving.
          </p>
          <p
            style={{
              fontWeight: 300,
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              margin: "0 0 44px",
              lineHeight: 1.75,
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
                fontSize: "13px",
                color: "#ffffff",
                backgroundColor: "transparent",
                border: "1px solid #ffffff",
                padding: "16px 40px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background-color 0.3s ease, opacity 0.3s ease",
              }}
            >
              Vrijblijvend advies
            </a>
            <a
              href="#projecten"
              style={{
                display: "inline-block",
                fontWeight: 400,
                fontSize: "13px",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.5)",
                padding: "16px 40px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "border-color 0.3s ease, opacity 0.3s ease",
              }}
            >
              Bekijk projecten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
