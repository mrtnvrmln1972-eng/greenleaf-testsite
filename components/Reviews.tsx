const reviews = [
  {
    naam: "Familie De Vries",
    plaats: "Breda",
    tekst:
      "Kamsteeg heeft onze tuin volledig getransformeerd. Van een kaal stukje grond naar een groene oase. De communicatie was prettig, de uitvoering vakkundig en het resultaat overtreft onze verwachtingen.",
    sterren: 5,
  },
  {
    naam: "Jan en Monique",
    plaats: "Etten-Leur",
    tekst:
      "Eindelijk een hovenier die doet wat hij belooft. Onze zwemvijver is de trots van de buurt. Kamsteeg heeft ons van begin tot eind begeleid en alles was tot in de puntjes verzorgd.",
    sterren: 5,
  },
  {
    naam: "Vastgoedbeheer Reijnen",
    plaats: "Tilburg",
    tekst:
      "Al drie jaar verzorgt Kamsteeg het onderhoud van onze bedrijfstuin. Altijd stipt, altijd netjes. Een betrouwbare partner voor professioneel tuinonderhoud in de regio.",
    sterren: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-14">
          <span className="text-xs font-light tracking-[0.2em] uppercase text-[#4A7B75] mb-3 block">
            Ervaringen
          </span>
          <h2
            className="font-display text-[#2C3E35] font-normal mb-2"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Klantreviews &amp; keurmerken
          </h2>
          <h3 className="font-light text-[#6b7c74] text-lg">
            Dit zeggen onze klanten
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.naam}
              className="bg-[#F0F0ED] p-8 flex flex-col"
            >
              {/* Sterren */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.sterren }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#4A7B75]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-light text-[#2C3E35] leading-relaxed text-sm italic flex-1 mb-6">
                &ldquo;{r.tekst}&rdquo;
              </p>

              <div className="border-t border-[#4A7B75]/20 pt-4">
                <p className="font-medium text-[#2C3E35] text-sm">{r.naam}</p>
                <p className="font-light text-[#6b7c74] text-xs tracking-wide">{r.plaats}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
