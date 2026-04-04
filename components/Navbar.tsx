"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.5c1.83-1.22 3.77-1.94 5.68-2.1C7.04 14.5 9.5 11.5 17 8z" />
                <path d="M16.5 3C13 6 11 9 11 12c0 1.5.5 3 1.5 4.5C14.5 14 16 11 17 8c.5-1.5.5-3 0-5z" opacity="0.7" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Green<span className="text-green-600">Leaf</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#diensten" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Diensten</a>
            <a href="#over-ons" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Over ons</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Gratis offerte
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <a href="#diensten" className="text-gray-600 hover:text-green-600 font-medium py-1" onClick={() => setMenuOpen(false)}>Diensten</a>
            <a href="#over-ons" className="text-gray-600 hover:text-green-600 font-medium py-1" onClick={() => setMenuOpen(false)}>Over ons</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium py-1" onClick={() => setMenuOpen(false)}>Contact</a>
            <a href="#contact" className="bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold text-center hover:bg-green-700 transition-colors" onClick={() => setMenuOpen(false)}>
              Gratis offerte
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
