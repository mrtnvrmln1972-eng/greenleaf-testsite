"use client";

import { useState } from "react";

const projecten = [
  {
    foto: "/images/vlug-12.jpg",
    alt: "Zwemvijver met rieten dak – Breda",
    h3: "Gerealiseerde tuinen in en rond Breda",
    tekst: "Een zwemvijver met rieten dak in een weelderige groene tuin — vakmanschap van Kamsteeg Tuinen in Breda.",
  },
  {
    foto: "/images/landelijke-tuin-hendriks-hoveniers-16-16469123278l64z_750x473.jpg",
    alt: "Landschappelijke tuin – Etten-Leur",
    h3: "Landschappelijke tuin in de Baronie",
    tekst: "Een rustige, open landschappelijke tuin met siergrassen en vijver — aangelegd door Kamsteeg Tuinen in Etten-Leur.",
  },
  {
    foto: "/images/Luxe-wellness-binnentuin-bij-hotel-Van-der-Valk-Dutch-Quality-Gardens-11.jpg",
    alt: "Bedrijfstuin kantoorpand – Tilburg",
    h3: "Bedrijfstuin Van der Valk – Tilburg",
    tekst: "Een moderne binnentuin voor hotel Van der Valk, aangelegd en onderhouden door Kamsteeg Tuinen.",
  },
];

export default function Projecten() {
  const [actief, setActief] = useState(0);
  const [zichtbaar, setZichtbaar] = useState(true);

  function handleKlik(index: number) {
    if (index === actief) return;
    setZichtbaar(false);
    setTimeout(() => {
      setActief(index);
      setZichtbaar(true);
    }, 300);
  }

  return (
    <section id="projecten" style={{ backgroundColor: "#5b604b", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#ffffff",
            marginBottom: "24px",
            lineHeight: 1.2,
            textAlign: "center",
          }}
        >
          Projecten &amp; inspiratie
        </h2>
        <p
          style={{
            fontWeight: 400,
            fontSize: "17px",
            color: "rgba(255,255,255,0.80)",
            textAlign: "center",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto 72px",
          }}
        >
          Benieuwd hoe een tuin van Kamsteeg eruitziet in de praktijk? Bekijk onze gerealiseerde projecten.
        </p>

        {/* Foto's + tekst per kolom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "56px",
          }}
        >
          {projecten.map((p, i) => (
            <div key={p.foto}>
              {/* Klikbare foto */}
              <button
                onClick={() => handleKlik(i)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: 0,
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <div style={{ overflow: "hidden", aspectRatio: "3/2" }}>
                  <img
                    src={p.foto}
                    alt={p.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      opacity: i === actief ? 1 : 0.55,
                      transition: "opacity 0.3s ease, transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
                {/* Actieve indicator lijn */}
                <div
                  style={{
                    height: "3px",
                    backgroundColor: i === actief ? "#ffffff" : "transparent",
                    transition: "background-color 0.3s ease",
                  }}
                />
              </button>

              {/* Tekst direct onder de foto — zichtbaar alleen bij actieve foto */}
              <div
                style={{
                  paddingTop: "20px",
                  minHeight: "100px",
                  opacity: i === actief ? (zichtbaar ? 1 : 0) : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontWeight: 400,
                    fontSize: "20px",
                    color: "#ffffff",
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {p.h3}
                </h3>
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.78)",
                    lineHeight: 1.7,
                  }}
                >
                  {p.tekst}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-block",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              border: "1px solid #ffffff",
              padding: "12px 28px",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
          >
            Bekijk meer projecten →
          </a>
        </div>

      </div>
    </section>
  );
}
