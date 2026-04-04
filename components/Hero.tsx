import type { HeroData } from "@/lib/wordpress";

interface HeroProps {
  data?: HeroData;
}

export default function Hero({ data }: HeroProps) {
  const heading = data?.heading ?? "Uw tuin, onze passie";
  const subheading =
    data?.subheading ?? "Van ontwerp tot onderhoud – GreenLeaf transformeert uw buitenruimte in een groene oase.";
  const ctaText = data?.ctaText ?? "Gratis offerte aanvragen";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-700 to-emerald-500"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Meer dan 15 jaar ervaring
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          {heading.includes("onze passie") ? (
            <>
              Uw tuin,{" "}
              <span className="text-green-400">onze passie</span>
            </>
          ) : (
            <span>{heading}</span>
          )}
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            {ctaText}
          </a>
          <a
            href="#diensten"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/30 transition-all hover:-translate-y-0.5"
          >
            Bekijk onze diensten ↓
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "500+", label: "Projecten" },
            { value: "15 jr", label: "Ervaring" },
            { value: "100%", label: "Tevredenheid" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-green-400">{stat.value}</div>
              <div className="text-sm text-gray-300 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs animate-bounce">
        <span>Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
