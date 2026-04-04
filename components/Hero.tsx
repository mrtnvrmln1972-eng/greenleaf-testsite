export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85')",
        }}
      />

      {/* Gradient: subtle darkening toward bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      {/* Content pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-sans font-light tracking-[0.15em] md:tracking-[0.25em] text-white uppercase leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            Kamsteeg Tuinen
          </h1>
          <p className="font-sans font-light tracking-[0.1em] text-white/85 mb-8 text-lg md:text-xl">
            Tuinen met een goed gevoel
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-[#4A7B75] text-white font-light text-sm tracking-widest px-8 py-3.5 hover:bg-[#3a6158] transition-colors"
            >
              Vraag vrijblijvend advies aan
            </a>
            <a
              href="#projecten"
              className="inline-block border border-white text-white font-light text-sm tracking-widest px-8 py-3.5 hover:bg-white hover:text-[#2C3E35] transition-colors"
            >
              Bekijk gerealiseerde tuinen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
