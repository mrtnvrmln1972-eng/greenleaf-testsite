const fotos = [
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-1.jpg", alt: "Tuinstijl 1 – Kamsteeg Tuinen" },
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-2.jpg", alt: "Tuinstijl 2 – Kamsteeg Tuinen" },
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-3.jpg", alt: "Tuinstijl 3 – Kamsteeg Tuinen" },
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-4.jpg", alt: "Tuinstijl 4 – Kamsteeg Tuinen" },
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-5.jpg", alt: "Tuinstijl 5 – Kamsteeg Tuinen" },
  { src: "/images/kamsteeg/tuinstijlen/tuinstijl-6.jpg", alt: "Tuinstijl 6 – Kamsteeg Tuinen" },
];

const stijlen = [
  { label: "Ecologische tuin",      href: "/tuinstijlen/ecologische-tuin/" },
  { label: "Landschappelijke tuin", href: "/tuinstijlen/landschappelijke-tuin/" },
  { label: "Strandtuin",            href: "/tuinstijlen/strandtuin/" },
  { label: "Stadstuin",             href: "/tuinstijlen/stadstuin/" },
  { label: "Villatuin",             href: "/tuinstijlen/villatuin/" },
  { label: "Boerderijtuin",         href: "/tuinstijlen/boerderijtuin/" },
  { label: "Dakterras",             href: "/tuinstijlen/dakterras/" },
  { label: "Bedrijfstuin",          href: "/tuinstijlen/bedrijfstuin/" },
  { label: "Restauranttuin",        href: "/tuinstijlen/restauranttuin/" },
];

export default function Tuinstijlen() {
  return (
    <section id="tuinstijlen" style={{ backgroundColor: "#f4f0e8", padding: "120px 0" }} className="mob-py">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }} className="mob-px">
        <div
          className="col-2"
          style={{
            display: "grid",
            gridTemplateColumns: "65fr 35fr",
            gap: "64px",
            alignItems: "start",
          }}
        >

          {/* Foto grid links */}
          <div
            data-fade=""
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "8px",
            }}
          >
            {fotos.map((foto, i) => (
              <div key={i} style={{ overflow: "hidden", lineHeight: 0 }}>
                <img
                  src={foto.src}
                  alt={foto.alt}
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Tekst rechts */}
          <div data-fade="" style={{ transitionDelay: "0.15s" }}>
            <h2
              style={{
                fontWeight: 300,
                fontSize: "48px",
                color: "#6b6b5a",
                marginBottom: "28px",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Tuinstijlen
            </h2>

            <p
              style={{
                fontWeight: 300,
                fontSize: "18px",
                color: "#1a1a18",
                lineHeight: 1.75,
                marginBottom: "40px",
              }}
            >
              Of u nu houdt van strak modern, weelderig landelijk of een speelse stadstuin: wij
              realiseren elke gewenste tuinstijl met oog voor detail en duurzaamheid.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {stijlen.map((s) => (
                <li key={s.href} style={{ borderBottom: "1px solid #c8c4b4" }}>
                  <a
                    href={s.href}
                    style={{
                      display: "block",
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "#5b604b",
                      textDecoration: "none",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "14px 0",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
