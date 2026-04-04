const navigatie = [
  "Home",
  "Tuinontwerp",
  "Tuinaanleg",
  "Tuinonderhoud",
  "Over ons",
  "Contact",
  "Facebook",
  "LinkedIn",
  "Instagram",
];

const awards = [
  "Tuin van het jaar 2009",
  "Persprijs 2009",
  "Overall winnaar 2009",
];

// Lijnkunst stadssilhouet-logo — exact nagebouwd naar referentie
function KamsteegLogo() {
  return (
    <svg
      width="180"
      height="80"
      viewBox="0 0 180 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kamsteeg Tuinen logo"
    >
      {/* Grond/basis */}
      <line x1="10" y1="62" x2="170" y2="62" stroke="#5b604b" strokeWidth="1" />

      {/* Linkertoren */}
      <rect x="14" y="42" width="14" height="20" stroke="#5b604b" strokeWidth="1" fill="none" />
      <rect x="17" y="38" width="8" height="6" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="21" y1="34" x2="21" y2="38" stroke="#5b604b" strokeWidth="1" />

      {/* Middelste gebouw groot */}
      <rect x="32" y="30" width="28" height="32" stroke="#5b604b" strokeWidth="1" fill="none" />
      <rect x="40" y="22" width="12" height="10" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="46" y1="16" x2="46" y2="22" stroke="#5b604b" strokeWidth="1" />
      {/* Ramen */}
      <rect x="36" y="36" width="6" height="6" stroke="#5b604b" strokeWidth="0.8" fill="none" />
      <rect x="50" y="36" width="6" height="6" stroke="#5b604b" strokeWidth="0.8" fill="none" />
      <rect x="36" y="48" width="6" height="6" stroke="#5b604b" strokeWidth="0.8" fill="none" />
      <rect x="50" y="48" width="6" height="6" stroke="#5b604b" strokeWidth="0.8" fill="none" />
      {/* Deur */}
      <rect x="42" y="52" width="8" height="10" stroke="#5b604b" strokeWidth="0.8" fill="none" />

      {/* Rechter gebouwen kleiner */}
      <rect x="64" y="40" width="18" height="22" stroke="#5b604b" strokeWidth="1" fill="none" />
      <rect x="67" y="36" width="5" height="5" stroke="#5b604b" strokeWidth="0.8" fill="none" />
      <rect x="75" y="36" width="5" height="5" stroke="#5b604b" strokeWidth="0.8" fill="none" />

      <rect x="86" y="44" width="14" height="18" stroke="#5b604b" strokeWidth="1" fill="none" />
      <rect x="89" y="40" width="4" height="5" stroke="#5b604b" strokeWidth="0.8" fill="none" />

      {/* Bomen rechts */}
      <circle cx="112" cy="48" r="8" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="112" y1="56" x2="112" y2="62" stroke="#5b604b" strokeWidth="1" />

      <circle cx="130" cy="50" r="6" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="130" y1="56" x2="130" y2="62" stroke="#5b604b" strokeWidth="1" />

      <circle cx="145" cy="46" r="9" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="145" y1="55" x2="145" y2="62" stroke="#5b604b" strokeWidth="1" />

      <circle cx="161" cy="50" r="6" stroke="#5b604b" strokeWidth="1" fill="none" />
      <line x1="161" y1="56" x2="161" y2="62" stroke="#5b604b" strokeWidth="1" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#cecdb9" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 40px 40px" }}>

        {/* Logo */}
        <div style={{ marginBottom: "10px" }}>
          <KamsteegLogo />
        </div>
        <p
          style={{
            fontFamily: "Roboto, system-ui, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            color: "#5b604b",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          Kamsteeg Tuinen
        </p>

        {/* 3 kolommen */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5b604b",
                marginBottom: "18px",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Contact
            </h4>
            <address
              style={{
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.9,
              }}
            >
              Rithsestraat 152<br />
              4838 GD Breda<br />
              Telefoon:{" "}
              <a href="tel:0765421230" style={{ color: "#555", textDecoration: "none" }}>
                076 5421230
              </a>
              <br />
              E-mail:{" "}
              <a href="mailto:info@kamsteegtuinen.nl" style={{ color: "#555", textDecoration: "none" }}>
                info@kamsteegtuinen.nl
              </a>
              <br />
              Website: www.kamsteegtuinen.nl
            </address>
          </div>

          {/* Awards */}
          <div>
            <h4
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5b604b",
                marginBottom: "18px",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Awards
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {awards.map((a) => (
                <li
                  key={a}
                  style={{ fontWeight: 300, fontSize: "14px", color: "#555", lineHeight: 2 }}
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4
              style={{
                fontFamily: "Roboto, system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                color: "#5b604b",
                marginBottom: "18px",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Kamsteeg Tuinen
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navigatie.map((n) => (
                <li key={n} style={{ lineHeight: 2 }}>
                  <a
                    href="#"
                    style={{
                      fontWeight: 300,
                      fontSize: "14px",
                      color: "#555",
                      textDecoration: "underline",
                      textUnderlineOffset: "2px",
                    }}
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #b8b7a5", paddingTop: "20px" }}>
          <p style={{ fontWeight: 300, fontSize: "13px", color: "#888", textAlign: "center" }}>
            © Kamsteeg Tuinen 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
