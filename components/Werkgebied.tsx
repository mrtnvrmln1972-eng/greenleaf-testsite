"use client";

import { useEffect, useRef } from "react";

const plaatsen = [
  "Breda en directe omgeving",
  "Etten-Leur",
  "Tilburg",
  "Oosterhout",
  "Roosendaal en omstreken",
];

const steden = [
  { naam: "Breda", lat: 51.5719, lng: 4.7683, hoofd: true },
  { naam: "Etten-Leur", lat: 51.5654, lng: 4.6381, hoofd: false },
  { naam: "Tilburg", lat: 51.5555, lng: 5.0913, hoofd: false },
  { naam: "Oosterhout", lat: 51.6408, lng: 4.8574, hoofd: false },
  { naam: "Roosendaal", lat: 51.5280, lng: 4.4628, hoofd: false },
];

export default function Werkgebied() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const L = (window as unknown as { L: any }).L;
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: [51.5719, 4.7683],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstanceRef.current = map;

      // CartoDB Positron tiles
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // Werkgebied cirkel (~30km straal)
      L.circle([51.5719, 4.7683], {
        radius: 30000,
        color: "#5b604b",
        fillColor: "#5b604b",
        fillOpacity: 0.15,
        weight: 1.5,
        opacity: 0.4,
      }).addTo(map);

      // Custom marker icon
      function makeIcon(hoofd: boolean) {
        return L.divIcon({
          className: "",
          html: `<div style="
            width: ${hoofd ? 14 : 10}px;
            height: ${hoofd ? 14 : 10}px;
            background: #5b604b;
            border: 2px solid #ffffff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [hoofd ? 14 : 10, hoofd ? 14 : 10],
          iconAnchor: [hoofd ? 7 : 5, hoofd ? 7 : 5],
          popupAnchor: [0, -10],
        });
      }

      steden.forEach(({ naam, lat, lng, hoofd }) => {
        const marker = L.marker([lat, lng], { icon: makeIcon(hoofd) }).addTo(map);
        marker.bindTooltip(naam, {
          permanent: true,
          direction: "right",
          offset: [hoofd ? 10 : 8, 0],
          className: "kamsteeg-tooltip",
        });
      });

      // Tooltip styling via injected style tag
      if (!document.getElementById("leaflet-custom-css")) {
        const style = document.createElement("style");
        style.id = "leaflet-custom-css";
        style.textContent = `
          .kamsteeg-tooltip {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            color: #3a3a2e !important;
            font-family: 'Roboto', system-ui, sans-serif !important;
            font-size: 12px !important;
            font-weight: 500 !important;
            letter-spacing: 0.03em !important;
            padding: 0 !important;
            white-space: nowrap !important;
          }
          .kamsteeg-tooltip::before {
            display: none !important;
          }
          .leaflet-control-attribution {
            font-size: 10px !important;
          }
        `;
        document.head.appendChild(style);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="werkgebied" style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px" }}>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* Tekst kolom */}
          <div>
            <h2
              style={{
                fontWeight: 400,
                fontSize: "60px",
                color: "#7a7b6b",
                marginBottom: "32px",
                lineHeight: 1.2,
              }}
            >
              Werkgebied Breda en omgeving
            </h2>

            <h3
              style={{
                fontWeight: 400,
                fontSize: "24px",
                color: "#5b604b",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              Hovenier in Breda en omliggende plaatsen
            </h3>

            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#3a3a2e",
                lineHeight: 1.7,
                marginBottom: "40px",
              }}
            >
              Kamsteeg Tuinen is uw hovenier in Breda en de wijde regio. Of u nu woont in het centrum van Breda, in Etten-Leur, Tilburg of een van de omliggende dorpen — wij komen graag bij u langs voor een vrijblijvend adviesgesprek.
            </p>

            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#3a3a2e",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Ons werkgebied omvat onder meer:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {plaatsen.map((p) => (
                <li
                  key={p}
                  style={{
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "#3a3a2e",
                    lineHeight: 1.7,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "6px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#7a7b6b" }}>–</span>
                  {p}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#3a3a2e",
                lineHeight: 1.7,
                marginBottom: "48px",
              }}
            >
              Woont u buiten dit gebied? Neem gerust contact op — in overleg is veel mogelijk.
            </p>

            <p style={{ fontWeight: 400, fontSize: "14px", color: "#7a7b6b" }}>
              <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Breda</a>
              {"  |  "}
              <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Etten-Leur</a>
              {"  |  "}
              <a href="#" style={{ color: "#7a7b6b", textDecoration: "none" }}>→ Hovenier in Tilburg</a>
            </p>
          </div>

          {/* Kaart kolom */}
          <div
            ref={mapRef}
            style={{
              height: "450px",
              width: "100%",
              flexShrink: 0,
            }}
          />

        </div>
      </div>
    </section>
  );
}
