"use client";

import { useState } from "react";

const fotos = [
  { src: "/images/DSC_4243-768x476.jpg",                                           alt: "Tuin aangelegd door Kamsteeg Tuinen" },
  { src: "/images/IMG_9526-scaled.jpg",                                            alt: "Tuinproject Kamsteeg Tuinen" },
  { src: "/images/IMG_010904-024-1024x768.webp",                                   alt: "Tuinaanleg Kamsteeg Tuinen" },
  { src: "/images/tussenetalage.jpg",                                               alt: "Tuinontwerp Kamsteeg Tuinen" },
  { src: "/images/Overflowing-flower-beds-lining-winding-brick-paths-0.jpeg.webp", alt: "Borders en paden Kamsteeg Tuinen" },
];

const N = fotos.length;

export default function Galerij() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i - 1 + N) % N);
  }

  function next() {
    setIndex((i) => (i + 1) % N);
  }

  const zichtbaar = [
    fotos[index % N],
    fotos[(index + 1) % N],
    fotos[(index + 2) % N],
  ];

  return (
    <section style={{ backgroundColor: "#5b604b", padding: "100px 0" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Pijl links */}
        <button
          onClick={prev}
          aria-label="Vorige foto"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            color: "#ffffff",
            lineHeight: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,6 10,16 20,26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </button>

        {/* Foto's grid */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}
        >
          {zichtbaar.map((foto, i) => (
            <div key={i} style={{ overflow: "hidden", lineHeight: 0 }}>
              <img
                src={foto.src}
                alt={foto.alt}
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>

        {/* Pijl rechts */}
        <button
          onClick={next}
          aria-label="Volgende foto"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
            color: "#ffffff",
            lineHeight: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.6)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#ffffff"; }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="12,6 22,16 12,26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </button>
      </div>
    </section>
  );
}
