const navigatie = [
  "Home", "Tuinontwerp", "Tuinaanleg", "Tuinonderhoud", "Over ons", "Contact",
];

const awards = [
  "Tuin van het jaar 2009",
  "Persprijs 2009",
  "Overall winnaar 2009",
];

export default function Footer() {
  return (
    <footer className="bg-[#4A7B75]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">

        {/* Logo */}
        <div className="mb-12">
          <p className="font-sans font-light tracking-[0.25em] text-sm uppercase text-white/90">
            Kamsteeg Tuinen
          </p>
          <p className="font-light text-white/50 text-xs tracking-wide mt-1">
            Tuinen met een goed gevoel
          </p>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Contact */}
          <div>
            <h4 className="font-light text-white tracking-[0.15em] text-xs uppercase mb-5 border-b border-white/20 pb-3">
              Contact
            </h4>
            <address className="not-italic font-light text-white/75 text-sm leading-loose">
              Rithsestraat 152<br />
              4838 GD Breda<br />
              <a href="tel:0765421230" className="hover:text-white transition-colors">
                076 5421230
              </a><br />
              <a href="mailto:info@kamsteegtuinen.nl" className="hover:text-white transition-colors">
                info@kamsteegtuinen.nl
              </a>
            </address>
          </div>

          {/* Awards */}
          <div>
            <h4 className="font-light text-white tracking-[0.15em] text-xs uppercase mb-5 border-b border-white/20 pb-3">
              Awards
            </h4>
            <ul className="font-light text-white/75 text-sm space-y-2">
              {awards.map((a) => (
                <li key={a} className="flex gap-2 items-center">
                  <span className="text-white/40 text-xs">—</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-light text-white tracking-[0.15em] text-xs uppercase mb-5 border-b border-white/20 pb-3">
              Kamsteeg Tuinen
            </h4>
            <ul className="font-light text-white/75 text-sm space-y-2">
              {navigatie.map((n) => (
                <li key={n}>
                  <a href="#" className="hover:text-white transition-colors">
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-light text-white/50 text-xs">
            © Kamsteeg Tuinen 2025
          </p>
          <div className="flex gap-5">
            <a href="#" className="font-light text-white/50 text-xs hover:text-white/80 transition-colors">
              Privacyverklaring
            </a>
            <a href="#" className="font-light text-white/50 text-xs hover:text-white/80 transition-colors">
              Sitemap
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
