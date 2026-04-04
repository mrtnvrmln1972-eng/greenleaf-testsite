"use client";

const projecten = [
  {
    foto: "/images/vlug-12.jpg",
    alt: "Zwemvijver met rieten dak – Breda",
    titel: "Zwemvijver met rieten dak – Breda",
    tekst: "Een natuurlijke zwemvijver naadloos verweven met een weelderige landschappelijke tuin. Het rieten dak van de bijgebouwen geeft dit project een warme, landelijke uitstraling die perfect aansluit bij de groene omgeving.",
  },
  {
    foto: "/images/landelijke-tuin-hendriks-hoveniers-16-16469123278l64z_750x473.jpg",
    alt: "Landschappelijke tuin – Etten-Leur",
    titel: "Landschappelijke tuin – Etten-Leur",
    tekst: "Een ruime, open tuin met siergrassen, bochtige borders en een stijlvolle vijver. De zachte lijnen en het gebruik van inheemse beplanting creëren een rustgevende oase die elk seizoen van zijn best is.",
  },
  {
    foto: "/images/Luxe-wellness-binnentuin-bij-hotel-Van-der-Valk-Dutch-Quality-Gardens-11.jpg",
    alt: "Bedrijfstuin Van der Valk – Tilburg",
    titel: "Bedrijfstuin Van der Valk – Tilburg",
    tekst: "Een moderne binnentuin voor hotel Van der Valk met sculpturale buxusvormen en strakke grindvlakken. De tuin combineert zakelijke uitstraling met een warme, groene sfeer die gasten verwelkomt.",
  },
];

export default function Projecten() {
  return (
    <section id="projecten" style={{ backgroundColor: "#5b604b", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#ffffff",
            marginBottom: "24px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Projecten &amp; inspiratie
        </h2>
        <p
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "18px",
            color: "rgba(255,255,255,0.80)",
            textAlign: "center",
            lineHeight: 1.75,
            maxWidth: "640px",
            margin: "0 auto 72px",
            transitionDelay: "0.1s",
          }}
        >
          Benieuwd hoe een tuin van Kamsteeg eruitziet in de praktijk? Bekijk onze gerealiseerde projecten.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginBottom: "64px",
          }}
        >
          {projecten.map((p, idx) => (
            <div
              key={p.foto}
              data-fade=""
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div style={{ overflow: "hidden", height: "340px", lineHeight: 0, fontSize: 0 }}>
                <img
                  src={p.foto}
                  alt={p.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    verticalAlign: "bottom",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>

              <div style={{ paddingTop: "24px" }}>
                <p style={{
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: "22px",
                  color: "#ffffff",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}>
                  {p.titel}
                </p>
                <p style={{
                  fontFamily: '"Roboto", system-ui, sans-serif',
                  fontWeight: 300,
                  fontSize: "17px",
                  color: "rgba(255,255,255,0.80)",
                  lineHeight: 1.75,
                }}>
                  {p.tekst}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div data-fade="" style={{ textAlign: "center", transitionDelay: "0.3s" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              fontWeight: 400,
              fontSize: "13px",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.6)",
              padding: "16px 40px",
              textDecoration: "none",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent"; }}
          >
            Bekijk meer projecten
          </a>
        </div>

      </div>
    </section>
  );
}
