"use client";
const stappen = [
  "U neemt contact op via het formulier, telefoon of e-mail.",
  "Wij plannen een vrijblijvend kennismakingsgesprek bij u thuis.",
  "U ontvangt een helder voorstel, afgestemd op uw wensen en budget.",
];

const knoppen = [
  { label: "Vraag offerte aan", href: "#" },
  { label: "Bel direct: 076 5421230", href: "tel:0765421230" },
  { label: "Mail ons: info@kamsteegtuinen.nl", href: "mailto:info@kamsteegtuinen.nl" },
];

export default function Conversie() {
  return (
    <section id="contact" style={{ backgroundColor: "#5b604b", padding: "100px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 60px)",
            color: "#ffffff",
            marginBottom: "18px",
          }}
        >
          Klaar voor een tuin met een goed gevoel?
        </h2>

        <h3
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "22px",
            color: "rgba(255,255,255,0.90)",
            marginBottom: "20px",
          }}
        >
          Vraag een vrijblijvende offerte aan
        </h3>

        <p
          style={{
            fontWeight: 300,
            fontSize: "17px",
            color: "rgba(255,255,255,0.80)",
            marginBottom: "56px",
            lineHeight: 1.7,
          }}
        >
          Benieuwd wat Kamsteeg Tuinen voor u kan betekenen? Neem vrijblijvend contact met ons op. Wij luisteren graag naar uw wensen en maken een voorstel op maat.
        </p>

        {/* Zo werkt het */}
        <p
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(255,255,255,0.70)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Zo werkt het:
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          {stappen.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ textAlign: "center", padding: "0 24px", maxWidth: "200px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 300,
                    fontSize: "14px",
                    margin: "0 auto 10px",
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em", lineHeight: 1.6, display: "block" }}>
                  {s}
                </span>
              </div>
              {i < stappen.length - 1 && (
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                    flexShrink: 0,
                    marginTop: "20px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Knoppen */}
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          {knoppen.map((k, i) => (
            <a
              key={k.label}
              href={k.href}
              style={{
                display: "inline-block",
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: i === 0 ? 400 : 300,
                fontSize: "14px",
                color: i === 0 ? "#5b604b" : "#ffffff",
                backgroundColor: i === 0 ? "#ffffff" : "transparent",
                border: "1px solid rgba(255,255,255,0.7)",
                padding: "13px 28px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {k.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
