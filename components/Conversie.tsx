"use client";
const stappen = [
  "Contact opnemen",
  "Kennismakingsgesprek",
  "Voorstel op maat",
];

const knoppen = [
  { label: "Vraag offerte aan", href: "#" },
  { label: "Bel: 076 5421230", href: "tel:0765421230" },
  { label: "Mail: info@kamsteegtuinen.nl", href: "mailto:info@kamsteegtuinen.nl" },
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
        <p
          style={{
            fontWeight: 300,
            fontSize: "17px",
            color: "rgba(255,255,255,0.80)",
            marginBottom: "56px",
            lineHeight: 1.7,
          }}
        >
          Neem vrijblijvend contact met ons op.
        </p>

        {/* Stappen */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0",
            marginBottom: "56px",
            flexWrap: "wrap",
          }}
        >
          {stappen.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center", padding: "0 24px" }}>
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
                <span style={{ fontWeight: 300, fontSize: "14px", color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" }}>
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
