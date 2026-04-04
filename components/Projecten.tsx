const projecten = [
  {
    foto: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    titel: "Landelijke achtertuin – Breda Noord",
    omschrijving:
      "Van kale ondergrond naar een weelderige landelijke tuin met siergrassen, vaste planten en een gebakken klinkerterras. Gerealiseerde tuin in Breda voor een gezin met jonge kinderen.",
    tags: ["Tuinontwerp", "Tuinaanleg"],
  },
  {
    foto: "https://images.unsplash.com/photo-1563306406-9a2d0cc1d77c?w=800&q=80",
    titel: "Zwemvijver villa – Etten-Leur",
    omschrijving:
      "Biologische zwemvijver geïntegreerd in een parkachtige tuin. De vijver filtert op natuurlijke wijze en biedt het hele jaar door een sfeervol waterbeeld.",
    tags: ["Zwemvijver", "Tuinaanleg"],
  },
  {
    foto: "https://images.unsplash.com/photo-1582407947304-fd86f28320c7?w=800&q=80",
    titel: "Bedrijfstuin kantoorpand – Tilburg",
    omschrijving:
      "Representatieve bedrijfstuin voor een kantoorpand in Tilburg. Laag onderhoud, hoge uitstraling. Kamsteeg verzorgt ook het structurele tuinonderhoud.",
    tags: ["Bedrijfstuin", "Tuinonderhoud"],
  },
];

export default function Projecten() {
  return (
    <section id="projecten" className="bg-[#F0F0ED] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <span className="text-xs font-light tracking-[0.2em] uppercase text-[#4A7B75] mb-3 block">
            Onze realisaties
          </span>
          <h2
            className="font-display text-[#2C3E35] font-normal mb-2"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Projecten &amp; inspiratie
          </h2>
          <h3 className="font-light text-[#6b7c74] text-lg">
            Gerealiseerde tuinen in en rond Breda
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projecten.map((p) => (
            <article key={p.titel} className="group flex flex-col bg-white">
              <div className="overflow-hidden aspect-[4/3]">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${p.foto}')` }}
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex gap-2 flex-wrap mb-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase text-[#4A7B75] border border-[#4A7B75]/30 px-2.5 py-1 font-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-normal text-[#2C3E35] mb-3 text-lg">
                  {p.titel}
                </h3>
                <p className="font-light text-[#6b7c74] leading-relaxed text-sm flex-1">
                  {p.omschrijving}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-[#4A7B75] text-[#4A7B75] font-light text-sm tracking-widest px-10 py-3.5 hover:bg-[#4A7B75] hover:text-white transition-colors"
          >
            Bekijk meer projecten
          </a>
        </div>

      </div>
    </section>
  );
}
