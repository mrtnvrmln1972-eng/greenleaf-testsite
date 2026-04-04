"use client";
const fotos = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=85",
    alt: "Buitenzithoek met loungebank – tuinaanleg Breda",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=85",
    alt: "Solitaire boom formele tuin – tuinontwerp",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d72?w=600&q=85",
    alt: "Landgoed met bestrating – hovenier Breda",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=85",
    alt: "Zwemvijver met terras – zwemvijver specialist",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9af5b2e2c98d?w=600&q=85",
    alt: "Moderne tuin – tuinonderhoud Breda",
  },
];

export default function Galerij() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
      {/* 5 gelijke kolommen, kleine gap, geen border-radius — exact als referentie */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "6px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {fotos.map((foto) => (
          <div
            key={foto.src}
            style={{
              overflow: "hidden",
              aspectRatio: "3 / 4",
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
                borderRadius: 0,
                transition: "transform 0.6s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
