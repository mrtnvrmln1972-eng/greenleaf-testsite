const redenen = [
  "Één aanspreekpunt voor ontwerp, aanleg én onderhoud",
  "Ruim 25 jaar ervaring als hovenier in regio Breda",
  "Specialist in (zwem)vijvers en waterpartijen",
  "Voor particulieren, bedrijven en overheden",
];

export default function Waarom() {
  return (
    <section className="bg-[#4A7B75] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-light tracking-[0.2em] uppercase text-white/60 mb-3 block">
              Onze kracht
            </span>
            <h2
              className="font-display text-white font-normal leading-snug"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Waarom Kamsteeg Tuinen?
            </h2>
          </div>

          <div className="space-y-6">
            {redenen.map((r, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="shrink-0 w-6 h-6 rounded-full border border-white/40 flex items-center justify-center text-white/80 text-xs font-light mt-0.5">
                  {i + 1}
                </span>
                <p className="font-light text-white/90 leading-relaxed">{r}</p>
              </div>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-white text-[#4A7B75] font-light text-sm tracking-widest px-8 py-3.5 hover:bg-[#F0F0ED] transition-colors"
              >
                Plan een kennismakingsgesprek
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
