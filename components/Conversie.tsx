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
    <section id="contact" style={{ backgroundColor: "#5b604b", padding: "120px 0" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px", textAlign: "center" }}>
        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#ffffff",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          Klaar voor een tuin met een goed gevoel?
        </h2>

        <h3
          style={{
            fontWeight: 400,
            fontSize: "24px",
            color: "rgba(255,255,255,0.90)",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}
        >
          Vraag een vrijblijvende offerte aan
        </h3>

        <p
          style={{
            fontWeight: 400,
            fontSize: "17px",
            color: "rgba(255,255,255,0.82)",
            marginBottom: "72px",
            lineHeight: 1.7,
          }}
        >
          Benieuwd wat Kamsteeg Tuinen voor u kan betekenen? Neem vrijblijvend contact met ons op. Wij luisteren graag naar uw wensen en maken een voorstel op maat.
        </p>

        <p
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(255,255,255,0.70)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "40px",
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
            marginBottom: "72px",
            flexWrap: "wrap",
          }}
        >
          {stappen.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ textAlign: "center", padding: "0 28px", maxWidth: "220px" }}>
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
                    fontWeight: 400,
                    fontSize: "14px",
                    margin: "0 auto 14px",
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontWeight: 400, fontSize: "17px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, display: "block" }}>
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

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          {knoppen.map((k) => (
            <a
              key={k.label}
              href={k.href}
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
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; }}
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
