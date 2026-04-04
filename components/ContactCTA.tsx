"use client";

import type { ContactData } from "@/lib/wordpress";

interface ContactCTAProps {
  data?: ContactData;
}

export default function ContactCTA({ data }: ContactCTAProps) {
  const heading = data?.heading ?? "Klaar voor uw droomtuin?";
  const subheading =
    data?.subheading ?? "Vraag vandaag nog een gratis, vrijblijvende offerte aan. Onze experts komen graag bij u langs voor een persoonlijk adviesgesprek.";
  const adres = data?.adres ?? "Tuinstraat 12, Amsterdam";
  const openingstijden = data?.openingstijden ?? "Ma–Vr: 08:00–17:00";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.83-1.22 3.77-1.94 5.68-2.1C7.04 14.5 9.5 11.5 17 8z" />
                <path d="M16.5 3C13 6 11 9 11 12c0 1.5.5 3 1.5 4.5C14.5 14 16 11 17 8c.5-1.5.5-3 0-5z" opacity="0.8" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {heading}
            </h2>
            <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              {subheading}
            </p>

            {/* Form */}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Uw naam"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-green-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="tel"
                placeholder="Telefoonnummer"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-green-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
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
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {adres}
              </span>
              <span className="hidden sm:block text-green-400">·</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {openingstijden}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
