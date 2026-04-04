"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Tuinontwerp", href: "#diensten" },
  { label: "Tuinaanleg", href: "#diensten" },
  { label: "Tuinonderhoud", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over ons", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        borderBottom: scrolled ? "1px solid #e5e5e5" : "none",
      }}
    >
      <div
        className="flex items-center justify-between px-8 md:px-14"
        style={{ height: "70px" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          {/* SVG lijnlogo placeholder — zelfde stijl als strandtuin.nl */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: scrolled ? "#5b604b" : "#fff" }}
          >
            <rect x="1" y="1" width="34" height="34" rx="0" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 28 Q18 8 30 28" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="18" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span
            className="text-sm font-light tracking-widest uppercase"
            style={{ color: scrolled ? "#5b604b" : "#fff", letterSpacing: "0.18em" }}
          >
            Kamsteeg Tuinen
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-light transition-opacity hover:opacity-60"
              style={{ color: scrolled ? "#333" : "#fff" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden transition-opacity hover:opacity-60"
          style={{ color: scrolled ? "#333" : "#fff" }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="square" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-8 pb-6 gap-5"
          style={{ backgroundColor: "#fff", borderTop: "1px solid #e5e5e5" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-light text-gray-700 hover:text-[#5b604b] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
