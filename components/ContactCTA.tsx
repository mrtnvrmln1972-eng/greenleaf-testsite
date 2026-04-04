"use client";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-400/20 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10">
            {/* Leaf icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.83-1.22 3.77-1.94 5.68-2.1C7.04 14.5 9.5 11.5 17 8z" />
                <path d="M16.5 3C13 6 11 9 11 12c0 1.5.5 3 1.5 4.5C14.5 14 16 11 17 8c.5-1.5.5-3 0-5z" opacity="0.8" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Klaar voor uw droomtuin?
            </h2>
            <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Vraag vandaag nog een gratis, vrijblijvende offerte aan. Onze experts komen graag bij u langs voor een persoonlijk adviesgesprek.
            </p>

            {/* Contact form inline */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Uw naam"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-green-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Telefoonnummer"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-green-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-white text-green-700 font-bold px-7 py-3.5 rounded-full hover:bg-green-50 transition-colors shadow-lg whitespace-nowrap"
              >
                Bel mij terug
              </button>
            </form>

            {/* Contact details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-green-100 text-sm">
              <a href="tel:+31612345678" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +31 6 12 34 56 78
              </a>
              <span className="hidden sm:block text-green-400">·</span>
              <a href="mailto:info@greenleaf.nl" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@greenleaf.nl
              </a>
              <span className="hidden sm:block text-green-400">·</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ma–Vr: 08:00–17:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
