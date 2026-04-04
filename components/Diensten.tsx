const diensten = [
  {
    titel: "Tuinontwerp",
    beschrijving:
      "Een persoonlijk tuinontwerp dat past bij uw wensen, leefstijl en omgeving. Van schets tot gedetailleerd beplantingsplan — wij geven uw tuin richting.",
    href: "#contact",
  },
  {
    titel: "Tuinaanleg",
    beschrijving:
      "Professionele tuinaanleg in Breda en omgeving. Wij realiseren uw tuin met oog voor detail, duurzame materialen en een vlekkeloze oplevering.",
    href: "#contact",
  },
  {
    titel: "Tuinonderhoud",
    beschrijving:
      "Structureel tuinonderhoud voor particulieren én bedrijven. Uw tuin het hele jaar door verzorgd en in optimale conditie.",
    href: "#contact",
  },
  {
    titel: "(Zwem)vijvers & waterpartijen",
    beschrijving:
      "Specialist in zwemvijvers, natuurvijvers en waterpartijen. Wij ontwerpen en realiseren watertuinen die jarenlang een lust voor het oog blijven.",
    href: "#contact",
  },
];

export default function Diensten() {
  return (
    <section id="diensten" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <span className="text-xs font-light tracking-[0.2em] uppercase text-[#4A7B75] mb-3 block">
            Wat wij doen
          </span>
          <h2
            className="font-display text-[#2C3E35] font-normal"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Onze diensten
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#4A7B75]/10">
          {diensten.map((d) => (
            <div
              key={d.titel}
              className="bg-[#F0F0ED] p-8 flex flex-col group hover:bg-[#4A7B75] transition-colors duration-300"
            >
              <h3
                className="font-display font-normal text-[#4A7B75] group-hover:text-white mb-4 transition-colors"
                style={{ fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)" }}
              >
                {d.titel}
              </h3>
              <p className="font-light text-[#2C3E35] group-hover:text-white/85 leading-relaxed text-sm flex-1 transition-colors">
                {d.beschrijving}
              </p>
              <a
                href={d.href}
                className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#4A7B75] group-hover:text-white transition-colors font-light"
              >
                Meer informatie
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-[#4A7B75] text-[#4A7B75] font-light text-sm tracking-widest px-10 py-3.5 hover:bg-[#4A7B75] hover:text-white transition-colors"
          >
            Bekijk alle diensten
          </a>
        </div>

      </div>
    </section>
  );
}
