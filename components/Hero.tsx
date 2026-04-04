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
      {/* Volledige achtergrondafbeelding */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Semi-transparante balk onderaan — exact zoals referentie */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 60%, transparent 100%)",
        }}
      />

      {/* Tekst — links uitgelijnd, onderin */}
      <div
        style={{
          position: "absolute",
          bottom: "60px",
          left: "60px",
          right: "60px",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(3rem, 9vw, 90px)",
            color: "#ffffff",
            letterSpacing: "0.02em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          KAMSTEEG TUINEN
        </h1>
        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2vw, 20px)",
            color: "rgba(255,255,255,0.90)",
            marginTop: "12px",
            letterSpacing: "0.03em",
          }}
        >
          Tuinen met een goed gevoel
        </p>
      </div>
    </section>
  );
}
