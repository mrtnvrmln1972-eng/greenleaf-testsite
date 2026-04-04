const stappen = [
  { nr: "01", label: "Contact opnemen" },
  { nr: "02", label: "Kennismakingsgesprek" },
  { nr: "03", label: "Voorstel op maat" },
];

export default function Conversie() {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">

        <span className="text-xs font-light tracking-[0.2em] uppercase text-[#4A7B75] mb-3 block">
          Vrijblijvend contact
        </span>
        <h2
          className="font-display text-[#2C3E35] font-normal mb-3"
          style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
        >
          Klaar voor een tuin met een goed gevoel?
        </h2>
        <h3 className="font-light text-[#6b7c74] text-lg mb-14">
          Vraag een vrijblijvende offerte aan
        </h3>

        {/* Stappen */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 mb-14">
          {stappen.map((s, i) => (
            <div key={s.nr} className="flex items-center">
              <div className="flex flex-col items-center px-8">
                <span className="font-display text-[#4A7B75] font-normal text-3xl mb-1">
                  {s.nr}
                </span>
                <span className="font-light text-[#2C3E35] text-sm tracking-wide">{s.label}</span>
              </div>
              {i < stappen.length - 1 && (
                <svg
                  className="hidden sm:block text-[#4A7B75]/30 mx-2 shrink-0"
                  width="32"
                  height="2"
                  viewBox="0 0 32 2"
                >
                  <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-[#4A7B75] text-white font-light text-sm tracking-widest px-8 py-4 hover:bg-[#3a6158] transition-colors"
          >
            Vraag offerte aan
          </a>
          <a
            href="tel:0765421230"
            className="border border-[#2C3E35] text-[#2C3E35] font-light text-sm tracking-widest px-8 py-4 hover:bg-[#2C3E35] hover:text-white transition-colors"
          >
            Bel direct: 076 5421230
          </a>
          <a
            href="mailto:info@kamsteegtuinen.nl"
            className="border border-[#2C3E35] text-[#2C3E35] font-light text-sm tracking-widest px-8 py-4 hover:bg-[#2C3E35] hover:text-white transition-colors"
          >
            Mail: info@kamsteegtuinen.nl
          </a>
        </div>

      </div>
    </section>
  );
}
