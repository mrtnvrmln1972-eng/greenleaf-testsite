"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Tuinontwerp", href: "#diensten" },
  { label: "Tuinaanleg", href: "#diensten" },
  { label: "Tuinonderhoud", href: "#diensten" },
  { label: "Projecten", href: "#projecten" },
  { label: "Over ons", href: "#waarom" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? "#5b604b" : "rgba(91,96,75,0.65)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        className="flex items-center justify-between px-8 md:px-14"
        style={{ height: "90px" }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "inline-block", lineHeight: 0 }}>
          <img
            src="/logo-kamsteeg.png"
            alt="Kamsteeg Tuinen"
            style={{ height: "70px", width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: '"Roboto", system-ui, sans-serif',
                fontSize: "15px",
                fontWeight: 400,
                color: "#ffffff",
                textDecoration: "none",
                letterSpacing: "0.03em",
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.65"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden"
          style={{ color: "#ffffff", background: "none", border: "none", cursor: "pointer" }}
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
          style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e5e5", padding: "0 32px 24px", display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: "14px", fontWeight: 400, color: "#1a1a18", textDecoration: "none", letterSpacing: "0.03em" }}
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
