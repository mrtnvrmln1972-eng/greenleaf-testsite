const fotos = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Landelijke tuin met terras – tuinaanleg Breda",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    alt: "Formele beplanting tuinontwerp",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Natuurtuin met waterpartij – zwemvijver specialist",
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    alt: "Moderne tuin met zwembad – hovenier Breda",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9af5b2e2c98d?w=600&q=80",
    alt: "Tuinonderhoud professioneel",
  },
];

export default function Galerij() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-5">
        {fotos.map((foto) => (
          <div key={foto.src} className="relative overflow-hidden aspect-[3/4] group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${foto.src}')` }}
              role="img"
              aria-label={foto.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
