"use client";

function IconPotlood() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="10" y1="38" x2="38" y2="10" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <polyline points="34,6 42,14 14,42 6,42 6,34" stroke="#5b604b" strokeWidth="1.5" strokeLinejoin="miter" fill="none" />
      <line x1="6" y1="42" x2="14" y2="42" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="6" y1="34" x2="6" y2="42" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="30" y1="10" x2="38" y2="18" stroke="#5b604b" strokeWidth="1.5" />
    </svg>
  );
}

function IconSchop() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 8 L32 16 Q36 20 34 26 L26 34 L14 22 Q10 18 14 14 Z" stroke="#5b604b" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="26" y1="34" x2="18" y2="42" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="14" y1="22" x2="20" y2="28" stroke="#5b604b" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function IconSchaar() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="13" cy="35" r="6" stroke="#5b604b" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="13" r="6" stroke="#5b604b" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="30" x2="42" y2="10" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="18" y1="18" x2="42" y2="38" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="square" />
      <line x1="27" y1="22" x2="29" y2="26" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconWater() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 28 Q12 22 18 28 Q24 34 30 28 Q36 22 42 28" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M6 36 Q12 30 18 36 Q24 42 30 36 Q36 30 42 36" stroke="#5b604b" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 6 Q28 12 28 17 Q28 22 24 22 Q20 22 20 17 Q20 12 24 6 Z" stroke="#5b604b" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

const diensten = [
  {
    Icon: IconPotlood,
    h3: "Tuinontwerp",
    p: "Een goed tuinontwerp is de basis voor een tuin die jarenlang voldoening geeft. Onze ontwerpers vertalen uw wensen naar een doordacht plan — van eerste schets tot compleet beplantingsplan.",
    cta: "→ Meer over tuinontwerp",
    href: "/tuinontwerp/",
  },
  {
    Icon: IconSchop,
    h3: "Tuinaanleg",
    p: "Onze vakmensen leggen uw tuin aan met zorg en precisie. Wij werken met duurzame materialen en besteden extra aandacht aan een solide basis, voor een tuin die direct prachtig uitziet én lang mooi blijft.",
    cta: "→ Meer over tuinaanleg",
    href: "/tuinaanleg/",
  },
  {
    Icon: IconSchaar,
    h3: "Tuinonderhoud",
    p: "Een mooie tuin vraagt om regelmatige zorg. Wij bieden zowel eenmalig als periodiek onderhoud — van snoeien en onkruidbestrijding tot een compleet seizoensplan voor uw tuin.",
    cta: "→ Meer over tuinonderhoud",
    href: "/tuinonderhoud/",
  },
  {
    Icon: IconWater,
    h3: "Vijvers & zwemvijvers",
    p: "Water brengt rust en leven in uw tuin. Kamsteeg Tuinen is specialist in de aanleg van vijvers en zwemvijvers, afgestemd op de juiste opzet, afmetingen en techniek.",
    cta: "→ Meer over (zwem)vijvers",
    href: "/tuinaanleg/zwemvijvers/",
  },
];

const shimmerDelays = ["0s", "0.6s", "1.2s", "1.8s"];

export default function Diensten() {
  return (
    <section id="diensten" style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#7a7b6b",
            marginBottom: "24px",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Onze diensten
        </h2>
        <p
          style={{
            fontWeight: 400,
            fontSize: "17px",
            color: "#3a3a2e",
            lineHeight: 1.7,
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 80px",
          }}
        >
          Van een compleet tuinontwerp tot periodiek onderhoud: Kamsteeg Tuinen is uw vaste partner
          voor elke fase van uw tuin.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "48px",
            alignItems: "stretch",
            marginBottom: "64px",
          }}
        >
          {diensten.map(({ Icon, h3, p, cta, href }, idx) => (
            <div key={h3} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "28px" }}>
                <Icon />
              </div>
              <h3
                style={{
                  fontWeight: 400,
                  fontSize: "20px",
                  color: "#5b604b",
                  marginBottom: "16px",
                  lineHeight: 1.2,
                }}
              >
                {h3}
              </h3>
              <p style={{ fontWeight: 400, fontSize: "16px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "24px", flexGrow: 1 }}>
                {p}
              </p>
              <a
                href={href}
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  textDecoration: "none",
                  marginTop: "auto",
                  display: "inline-block",
                  background: "linear-gradient(90deg, #7a7b6b 35%, #b8b4a2 50%, #7a7b6b 65%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: `shimmer 2.5s linear infinite`,
                  animationDelay: shimmerDelays[idx],
                }}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              fontWeight: 400,
              fontSize: "14px",
              color: "#5b604b",
              border: "1px solid #5b604b",
              padding: "12px 28px",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#5b604b";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "#5b604b";
            }}
          >
            Bekijk alle diensten
          </a>
        </div>

      </div>
    </section>
  );
}
