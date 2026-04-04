export default function Intro() {
  return (
    <section className="bg-[#F0F0ED] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <h2
          className="font-display text-[#4A7B75] font-normal leading-snug mb-10"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
        >
          Uw tuin, ons vakmanschap
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16 text-[#2C3E35] font-light leading-relaxed text-[1.0625rem]">
          <p>
            Een mooie tuin begint bij een vakman die luistert naar uw wensen. Kamsteeg Tuinen
            combineert ruim 25 jaar ervaring met persoonlijke aandacht. Ons team denkt met u mee
            — van het eerste idee tot het eindresultaat.
          </p>
          <p>
            Wij werken voor particulieren, bedrijven en overheden in Breda en de wijde omgeving.
            Geen project is te groot of te klein. Als{" "}
            <strong className="font-medium">hovenier in Breda</strong> kennen wij de regio als
            geen ander.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-t border-[#4A7B75]/20 pt-12">
          <div>
            <h3
              className="font-display text-[#2C3E35] font-normal italic mb-4"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
            >
              Tuinen met een goed gevoel
            </h3>
            <p className="font-light text-[#2C3E35] leading-relaxed text-[1.0rem]">
              Wij ontwerpen, leggen aan en onderhouden tuinen waarin u zich het hele jaar door
              prettig voelt. Met oog voor sfeer, functionaliteit en de natuur om u heen.
            </p>
          </div>

          <div>
            <h3
              className="font-display text-[#2C3E35] font-normal italic mb-4"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
            >
              Voor particulieren én bedrijven
            </h3>
            <ul className="space-y-3 font-light text-[#2C3E35] text-[1.0rem]">
              <li className="flex gap-3">
                <span className="text-[#4A7B75] mt-1 shrink-0">—</span>
                <span>
                  <strong className="font-medium">Particulieren:</strong> van{" "}
                  <span className="text-[#4A7B75]">tuinontwerp</span> en tuinaanleg tot
                  seizoensonderhoud.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4A7B75] mt-1 shrink-0">—</span>
                <span>
                  <strong className="font-medium">Bedrijven en overheden:</strong> bedrijfstuinen,
                  groene buitenruimtes en structureel onderhoud.
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
