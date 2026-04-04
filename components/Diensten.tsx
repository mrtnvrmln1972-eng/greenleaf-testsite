"use client";

const diensten = [
  {
    h3: "Tuinontwerp",
    p1: "Een goed tuinontwerp is de basis voor een tuin die jarenlang voldoening geeft. Onze ontwerpers vertalen uw wensen naar een doordacht plan — van eerste schets tot compleet beplantingsplan.",
    p2: "We houden rekening met de omgeving, het gebruik en uw budget. Zo ontstaat een ontwerp dat niet alleen mooi is, maar ook praktisch en haalbaar.",
    cta: "→ Meer over tuinontwerp",
    href: "/tuinontwerp/",
  },
  {
    h3: "Tuinaanleg",
    p1: "Of het nu gaat om een compacte stadstuin of een uitgestrekt landschap: onze vakmensen leggen uw tuin aan met zorg en precisie. Wij werken met duurzame materialen en besteden extra aandacht aan een solide basis.",
    p2: "Het resultaat? Een tuin die er direct prachtig uitziet én op de lange termijn mooi blijft.",
    cta: "→ Meer over tuinaanleg",
    href: "/tuinaanleg/",
  },
  {
    h3: "Tuinonderhoud",
    p1: "Een mooie tuin vraagt om regelmatige zorg. Kamsteeg Tuinen biedt zowel eenmalig als periodiek onderhoud. Van snoeien en onkruidbestrijding tot een compleet seizoensplan — wij houden uw tuin in topconditie.",
    p2: "U geniet van het resultaat, wij nemen het werk uit handen.",
    cta: "→ Meer over tuinonderhoud",
    href: "/tuinonderhoud/",
  },
  {
    h3: "(Zwem)vijvers & waterpartijen",
    p1: "Water brengt rust en leven in uw tuin. Kamsteeg Tuinen is specialist in de aanleg van vijvers, zwemvijvers en waterpartijen. Wij adviseren u over de juiste opzet, afmetingen en techniek — zodat u jarenlang geniet van helder water in een natuurlijke omgeving.",
    p2: "",
    cta: "→ Meer over (zwem)vijvers en waterpartijen",
    href: "/tuinaanleg/zwemvijvers/",
  },
];

export default function Diensten() {
  return (
    <section id="diensten" style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

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
            maxWidth: "680px",
            margin: "0 auto 80px",
          }}
        >
          Van een compleet tuinontwerp tot periodiek onderhoud: Kamsteeg Tuinen is uw vaste partner
          voor elke fase van uw tuin. Hieronder vindt u een overzicht van onze hoofddiensten.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "56px",
            marginBottom: "64px",
          }}
        >
          {diensten.map((d) => (
            <div key={d.h3}>
              <h3
                style={{
                  fontWeight: 400,
                  fontSize: "24px",
                  color: "#5b604b",
                  marginBottom: "18px",
                  paddingBottom: "16px",
                  lineHeight: 1.2,
                  borderBottom: "1px solid #c8c4b4",
                }}
              >
                {d.h3}
              </h3>
              <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "14px" }}>
                {d.p1}
              </p>
              {d.p2 && (
                <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "20px" }}>
                  {d.p2}
                </p>
              )}
              <a
                href={d.href}
                style={{ fontWeight: 400, fontSize: "14px", color: "#7a7b6b", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")}
              >
                {d.cta}
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
