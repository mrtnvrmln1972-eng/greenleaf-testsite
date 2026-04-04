const plaatsen = ["Breda", "Etten-Leur", "Tilburg", "Oosterhout", "Roosendaal"];

export default function Werkgebied() {
  return (
    <section className="bg-[#F0F0ED] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-light tracking-[0.2em] uppercase text-[#4A7B75] mb-3 block">
              Regio
            </span>
            <h2
              className="font-display text-[#2C3E35] font-normal mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
            >
              Werkgebied Breda en omgeving
            </h2>
            <h3 className="font-light text-[#6b7c74] text-lg mb-6">
              Hovenier in Breda en omliggende plaatsen
            </h3>
            <p className="font-light text-[#2C3E35] leading-relaxed">
              Kamsteeg Tuinen is uw{" "}
              <strong className="font-medium">hovenier in Breda</strong> en de wijde regio.
              Wij komen graag bij u langs voor een vrijblijvend adviesgesprek over{" "}
              <strong className="font-medium">tuinaanleg in Breda</strong> of{" "}
              <strong className="font-medium">tuinonderhoud</strong> in uw omgeving.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-light text-[#6b7c74] text-sm mb-6 tracking-wide uppercase">
              Wij werken onder meer in:
            </p>
            <div className="flex flex-wrap gap-3">
              {plaatsen.map((p) => (
                <span
                  key={p}
                  className="border border-[#4A7B75] text-[#4A7B75] font-light text-sm tracking-widest px-5 py-2"
                >
                  {p}
                </span>
              ))}
            </div>
            <p className="font-light text-[#6b7c74] text-sm mt-5 italic">
              En overige plaatsen in Noord-Brabant
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
