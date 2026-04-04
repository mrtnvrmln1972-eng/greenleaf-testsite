"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Tuinontwerp", href: "#diensten" },
  { label: "Tuinaanleg", href: "#diensten" },
  { label: "Tuinonderhoud", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F0F0ED]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className={`font-sans font-light tracking-[0.25em] text-sm uppercase transition-colors ${
            scrolled ? "text-[#2C3E35]" : "text-white"
          }`}
        >
          Kamsteeg Tuinen
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-light tracking-wide transition-colors hover:text-[#4A7B75] ${
                scrolled ? "text-[#2C3E35]" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-sm font-light border px-5 py-2 tracking-wide transition-all hover:bg-[#4A7B75] hover:border-[#4A7B75] hover:text-white ${
              scrolled
                ? "border-[#4A7B75] text-[#4A7B75]"
                : "border-white/70 text-white"
            }`}
          >
            Advies aanvragen
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#2C3E35]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F0F0ED] border-t border-[#4A7B75]/20 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#2C3E35] font-light text-sm tracking-wide hover:text-[#4A7B75]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 border border-[#4A7B75] text-[#4A7B75] text-sm font-light px-5 py-2 text-center tracking-wide hover:bg-[#4A7B75] hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Advies aanvragen
          </a>
        </div>
      )}
    </header>
  );
}
