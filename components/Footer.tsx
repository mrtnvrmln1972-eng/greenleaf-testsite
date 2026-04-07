const navigatie = [
  { label: "Home", href: "#" },
  { label: "Tuinontwerp", href: "#diensten" },
  { label: "Tuinaanleg", href: "#diensten" },
  { label: "Tuinonderhoud", href: "#diensten" },
  { label: "Over ons", href: "#waarom" },
  { label: "Contact", href: "#contact" },
];

const awards = [
  "Tuin van het jaar 2009",
  "Persprijs 2009",
  "Overall winnaar 2009",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#cecdb9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 40px" }}>

        <div
          className="col-footer"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: "40px",
          }}
        >
          {/* Kolom 1: Logo + slogan */}
          <div>
            <img
              src="/logo-kamsteeg.png"
              alt="Kamsteeg Tuinen"
              style={{ height: "60px", width: "auto", display: "block", marginBottom: "14px" }}
            />
            <p style={{ fontWeight: 300, fontSize: "13px", color: "#1a1a18", margin: 0, fontStyle: "italic" }}>
              Tuinen met een goed gevoel
            </p>
          </div>

          {/* Kolom 2: Contact */}
          <div>
            <h4
              style={{
                fontWeight: 400,
                fontSize: "11px",
                color: "#1a1a18",
                marginBottom: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h4>
            <address
              style={{
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "14px",
                color: "#1a1a18",
                lineHeight: 1.9,
              }}
            >
              Rithsestraat 152<br />
              4838 GD Breda<br />
              <a href="tel:0765421230" style={{ color: "#1a1a18", textDecoration: "none", transition: "color 0.3s ease" }}>076 5421230</a><br />
              <a href="mailto:info@kamsteegtuinen.nl" style={{ color: "#1a1a18", textDecoration: "none", transition: "color 0.3s ease" }}>info@kamsteegtuinen.nl</a>
            </address>
          </div>

          {/* Kolom 3: Awards */}
          <div>
            <h4
              style={{
                fontWeight: 400,
                fontSize: "11px",
                color: "#1a1a18",
                marginBottom: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Awards
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {awards.map((a) => (
                <li
                  key={a}
                  style={{ fontWeight: 300, fontSize: "14px", color: "#1a1a18", lineHeight: 1.9 }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Navigatie */}
          <div>
            <h4
              style={{
                fontWeight: 400,
                fontSize: "11px",
                color: "#1a1a18",
                marginBottom: "16px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Navigatie
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navigatie.map((n) => (
                <li key={n.label} style={{ lineHeight: 1.9 }}>
                  <a
                    href={n.href}
                    style={{ fontWeight: 300, fontSize: "14px", color: "#1a1a18", textDecoration: "none", transition: "color 0.3s ease", letterSpacing: "0.02em" }}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #b8b7a5", paddingTop: "20px" }}>
          <p style={{ fontWeight: 300, fontSize: "13px", color: "#1a1a18", margin: 0 }}>
            © Kamsteeg Tuinen 2025
          </p>
        </div>

      </div>
    </footer>
  );
}
