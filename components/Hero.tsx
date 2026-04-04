export default function Hero() {
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
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.30) 50%, transparent 80%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "60px",
          right: "60px",
          zIndex: 10,
        }}
      >
        {/* H1 exact uit copybestand */}
        <h1
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 6vw, 72px)",
            color: "#ffffff",
            margin: "0 0 16px",
            lineHeight: 1.1,
            letterSpacing: "0.01em",
          }}
        >
          Kamsteeg Tuinen – Tuinen met een goed gevoel in regio Breda
        </h1>

        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.95rem, 1.8vw, 18px)",
            color: "rgba(255,255,255,0.88)",
            margin: "0 0 8px",
            maxWidth: "680px",
            lineHeight: 1.7,
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
            fontSize: "clamp(0.9rem, 1.5vw, 16px)",
            color: "rgba(255,255,255,0.75)",
            margin: "0 0 28px",
          }}
        >
          Ontdek wat wij voor uw tuin kunnen betekenen.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
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
