"use client";

const stappen = [
  "U neemt contact op via het formulier, telefoon of e-mail.",
  "Wij plannen een vrijblijvend kennismakingsgesprek bij u thuis.",
  "U ontvangt een helder voorstel, afgestemd op uw wensen en budget.",
];

const knoppen = [
  { label: "Vraag offerte aan", href: "mailto:info@kamsteegtuinen.nl" },
  { label: "Bel direct: 076 5421230", href: "tel:0765421230" },
  { label: "Mail ons", href: "mailto:info@kamsteegtuinen.nl" },
];

export default function Conversie() {
  return (
    <section id="contact" style={{ backgroundColor: "#5E644B", padding: "120px 0" }} className="mob-py">
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 40px", textAlign: "center" }} className="mob-px">
        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#ffffff",
            marginBottom: "24px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Klaar voor een tuin met een goed gevoel?
        </h2>

        <h3
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "24px",
            color: "rgba(255,255,255,0.90)",
            marginBottom: "24px",
            lineHeight: 1.3,
            transitionDelay: "0.1s",
          }}
        >
          Vraag een vrijblijvende offerte aan
        </h3>

        <p
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "18px",
            color: "rgba(255,255,255,0.80)",
            marginBottom: "80px",
            lineHeight: 1.75,
            transitionDelay: "0.2s",
          }}
        >
          Benieuwd wat Kamsteeg Tuinen voor u kan betekenen? Neem vrijblijvend contact met ons op. Wij luisteren graag naar uw wensen en maken een voorstel op maat.
        </p>

        <p
          data-fade=""
          style={{
            fontWeight: 400,
            fontSize: "11px",
            color: "rgba(255,255,255,0.60)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "48px",
            transitionDelay: "0.3s",
          }}
        >
          Zo werkt het:
        </p>

        <div
          data-fade=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0",
            marginBottom: "80px",
            flexWrap: "wrap",
            transitionDelay: "0.4s",
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
                    fontWeight: 300,
                    fontSize: "14px",
                    margin: "0 auto 16px",
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ fontWeight: 300, fontSize: "17px", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, display: "block" }}>
                  {s}
                </span>
              </div>
              {i < stappen.length - 1 && (
                <div
                  className="stap-lijn"
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

        <div data-fade="" style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", transitionDelay: "0.5s" }}>
          {knoppen.map((k) => (
            <a
              key={k.label}
              href={k.href}
              style={{
                display: "inline-block",
                fontWeight: 400,
                fontSize: "13px",
                color: "#ffffff",
                backgroundColor: "transparent",
                border: "1px solid rgba(255,255,255,0.6)",
                padding: "16px 40px",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
            >
              {k.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
