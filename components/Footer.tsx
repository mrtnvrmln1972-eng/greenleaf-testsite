export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.83-1.22 3.77-1.94 5.68-2.1C7.04 14.5 9.5 11.5 17 8z" />
                  <path d="M16.5 3C13 6 11 9 11 12c0 1.5.5 3 1.5 4.5C14.5 14 16 11 17 8c.5-1.5.5-3 0-5z" opacity="0.7" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Green<span className="text-green-500">Leaf</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Al meer dan 15 jaar uw betrouwbare partner voor tuinontwerp, onderhoud en bestrating in de regio.
            </p>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="text-white font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#diensten" className="hover:text-green-400 transition-colors">Tuinontwerp</a></li>
              <li><a href="#diensten" className="hover:text-green-400 transition-colors">Tuinonderhoud</a></li>
              <li><a href="#diensten" className="hover:text-green-400 transition-colors">Bestrating</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Gratis offerte</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Tuinstraat 12, Amsterdam</li>
              <li>
                <a href="tel:+31612345678" className="hover:text-green-400 transition-colors">
                  +31 6 12 34 56 78
                </a>
              </li>
              <li>
                <a href="mailto:info@greenleaf.nl" className="hover:text-green-400 transition-colors">
                  info@greenleaf.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} GreenLeaf. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
