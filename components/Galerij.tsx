"use client";

const fotos = [
  { src: "/images/DSC_4243-768x476.jpg",                                              alt: "Tuin aangelegd door Kamsteeg Tuinen" },
  { src: "/images/IMG_9526-scaled.jpg",                                               alt: "Tuinproject Kamsteeg Tuinen" },
  { src: "/images/IMG_010904-024-1024x768.webp",                                      alt: "Tuinaanleg Kamsteeg Tuinen" },
  { src: "/images/tussenetalage.jpg",                                                  alt: "Tuinontwerp Kamsteeg Tuinen" },
  { src: "/images/Overflowing-flower-beds-lining-winding-brick-paths-0.jpeg.webp",    alt: "Borders en paden Kamsteeg Tuinen" },
];

export default function Galerij() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: 0 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "4px",
        }}
      >
        {fotos.map((foto) => (
          <div
            key={foto.src}
            style={{
              overflow: "hidden",
              height: "250px",
              lineHeight: 0,
              fontSize: 0,
            }}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                verticalAlign: "bottom",
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
