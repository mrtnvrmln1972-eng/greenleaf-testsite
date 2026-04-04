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
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, transparent 80%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "60px",
          right: "60px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontWeight: 400,
            fontSize: "90px",
            color: "#ffffff",
            margin: "0 0 24px",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Kamsteeg Tuinen – Tuinen met een goed gevoel in regio Breda
        </h1>

        <p
          style={{
            fontWeight: 400,
            fontSize: "17px",
            color: "rgba(255,255,255,0.88)",
            margin: "0 0 10px",
            maxWidth: "680px",
            lineHeight: 1.7,
            color: "#ffffff",
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
    </section>
  );
}
