"use client";

import { useEffect, useRef, useState } from "react";

const GAP = 12;
const VISIBLE = 3;

const fotos = [
  { src: "/images/DSC_4243-768x476.jpg",                                            alt: "Tuin aangelegd door Kamsteeg Tuinen" },
  { src: "/images/IMG_9526-scaled.jpg",                                             alt: "Tuinproject Kamsteeg Tuinen" },
  { src: "/images/IMG_010904-024-1024x768.webp",                                    alt: "Tuinaanleg Kamsteeg Tuinen" },
  { src: "/images/tussenetalage.jpg",                                                alt: "Tuinontwerp Kamsteeg Tuinen" },
  { src: "/images/Overflowing-flower-beds-lining-winding-brick-paths-0.jpeg.webp",  alt: "Borders en paden Kamsteeg Tuinen" },
];

const N = fotos.length;
const slides = [...fotos, ...fotos, ...fotos]; // 15 slides voor oneindige loop
const START = N; // begin in de middelste kopie (index 5)

export default function Galerij() {
  const [index, setIndex] = useState(START);
  const [animating, setAnimating] = useState(true);
  const [photoWidth, setPhotoWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setPhotoWidth((w - (VISIBLE - 1) * GAP) / VISIBLE);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function prev() {
    setAnimating(true);
    setIndex((i) => i - 1);
  }

  function next() {
    setAnimating(true);
    setIndex((i) => i + 1);
  }

  function handleTransitionEnd() {
    if (index < N) {
      setAnimating(false);
      setIndex(index + N);
    } else if (index >= 2 * N) {
      setAnimating(false);
      setIndex(index - N);
    }
  }

  useEffect(() => {
    if (!animating) {
      // Zet transition na 1 frame terug aan
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimating(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animating]);

  const translateX = photoWidth > 0 ? -(index * (photoWidth + GAP)) : 0;

  return (
    <section style={{ backgroundColor: "transparent", padding: "40px 0" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Pijl links */}
        <button
          onClick={prev}
          aria-label="Vorige foto"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 16px",
            color: "#5b604b",
            lineHeight: 0,
            zIndex: 2,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#3d4232"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#5b604b"; }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="20,6 10,16 20,26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </button>

        {/* Slider viewport */}
        <div
          ref={containerRef}
          style={{ flex: 1, overflow: "hidden" }}
        >
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: animating ? "transform 0.4s ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((foto, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: photoWidth > 0 ? `${photoWidth}px` : "calc(33.333% - 8px)",
                  height: "280px",
                  overflow: "hidden",
                  lineHeight: 0,
                  fontSize: 0,
                }}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    verticalAlign: "bottom",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pijl rechts */}
        <button
          onClick={next}
          aria-label="Volgende foto"
          style={{
            flexShrink: 0,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 16px",
            color: "#5b604b",
            lineHeight: 0,
            zIndex: 2,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#3d4232"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#5b604b"; }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="12,6 22,16 12,26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" fill="none" />
          </svg>
        </button>
      </div>
      </div>
    </section>
  );
}
