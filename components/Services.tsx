import type { ServiceData } from "@/lib/wordpress";

// Icon set – cycles through if more services than icons
const ICONS = [
  <svg key="design" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="maintenance" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>,
  <svg key="paving" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
];

const COLORS = [
  { bg: "bg-green-50",   text: "text-green-600",   badge: "bg-green-100 text-green-700",   border: "border-green-200" },
  { bg: "bg-emerald-50", text: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700", border: "border-emerald-200" },
  { bg: "bg-teal-50",    text: "text-teal-600",    badge: "bg-teal-100 text-teal-700",    border: "border-teal-200" },
];

const IMAGES = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  "https://images.unsplash.com/photo-1599598425947-5202edd56fdb?w=600&q=80",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d72?w=600&q=80",
];

const DEFAULT_SERVICES: ServiceData[] = [
  { naam: "Tuinontwerp", beschrijving: "Wij ontwerpen uw droomtuin van A tot Z. Onze ervaren ontwerpers maken een persoonlijk plan dat aansluit op uw wensen, stijl en budget." },
  { naam: "Tuinonderhoud", beschrijving: "Uw tuin het hele jaar door in topconditie. Wij zorgen voor regelmatig maaien, snoeien, onkruid wieden en seizoensgebonden werkzaamheden." },
  { naam: "Bestrating", beschrijving: "Van opritten tot terrassen – wij leggen hoogwaardige bestrating die decennia lang meegaat. Met oog voor detail en kwaliteit." },
];

interface ServicesProps {
  diensten?: ServiceData[];
}

export default function Services({ diensten }: ServicesProps) {
  const list = diensten?.length ? diensten : DEFAULT_SERVICES;

  return (
    <section id="diensten" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Wat wij doen
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Onze diensten
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Van de eerste schets tot het laatste keitje – wij regelen het volledig voor u.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((service, i) => {
            const c = COLORS[i % COLORS.length];
            const icon = ICONS[i % ICONS.length];
            const image = IMAGES[i % IMAGES.length];

            return (
              <div
                key={service.naam}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-4 left-4 ${c.bg} ${c.text} p-3 rounded-2xl shadow-md border ${c.border}`}>
                    {icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.naam}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 flex-1">{service.beschrijving}</p>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 ${c.text} font-semibold hover:gap-3 transition-all`}
                  >
                    Meer informatie
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
