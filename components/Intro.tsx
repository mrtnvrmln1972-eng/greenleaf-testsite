const btnStyle: React.CSSProperties = {
  display: "inline-block",
  fontFamily: '"Roboto", system-ui, sans-serif',
  fontWeight: 400,
  fontSize: "13px",
  color: "#5b604b",
  border: "1px solid #5b604b",
  padding: "16px 40px",
  textDecoration: "none",
  background: "transparent",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  transition: "background-color 0.3s ease, color 0.3s ease",
};

export default function Intro() {
  return (
    <section style={{ backgroundColor: "#f4f0e8", padding: "120px 0" }} className="mob-py">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }} className="mob-px">

        <h2
          data-fade=""
          style={{
            fontWeight: 300,
            fontSize: "48px",
            color: "#6b6b5a",
            marginBottom: "40px",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Uw tuin, ons vakmanschap
        </h2>

        <p data-fade="" style={{ fontWeight: 300, fontSize: "18px", color: "#1a1a18", lineHeight: 1.75, marginBottom: "24px", maxWidth: "760px", margin: "0 auto 24px", textAlign: "center", transitionDelay: "0.1s" }}>
          Een mooie tuin begint bij een vakman die luistert naar uw wensen. Kamsteeg Tuinen
          combineert ruim 25 jaar ervaring met persoonlijke aandacht. Ons team denkt met u mee —
          van het eerste idee tot het eindresultaat.
        </p>
        <p data-fade="" style={{ fontWeight: 300, fontSize: "18px", color: "#1a1a18", lineHeight: 1.75, marginBottom: "72px", maxWidth: "760px", margin: "0 auto 72px", textAlign: "center", transitionDelay: "0.2s" }}>
          Wij werken voor particulieren, bedrijven en overheden in Breda en de wijde omgeving.
          Geen project is te groot of te klein. Wat ons drijft? De overtuiging dat een goed
          aangelegde tuin uw dagelijks leven verrijkt.
        </p>

        <div
          className="col-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            borderTop: "1px solid #c8c4b4",
            paddingTop: "64px",
          }}
        >
          {/* Linkerkolom */}
          <div data-fade="" style={{ display: "flex", flexDirection: "column", transitionDelay: "0.1s" }}>
            <h3 style={{ fontWeight: 300, fontSize: "24px", color: "#5b604b", marginBottom: "24px", lineHeight: 1.3 }}>
              Tuinen met een goed gevoel
            </h3>
            <p style={{ fontWeight: 300, fontSize: "18px", color: "#1a1a18", lineHeight: 1.75, marginBottom: "20px" }}>
              &ldquo;Tuinen met een goed gevoel&rdquo; is meer dan een slogan. Het beschrijft onze
              aanpak: wij ontwerpen, leggen aan en onderhouden tuinen waarin u zich het hele jaar
              door prettig voelt. Met oog voor sfeer, functionaliteit en de natuur om u heen.
            </p>
            <p style={{ fontWeight: 300, fontSize: "18px", color: "#1a1a18", lineHeight: 1.75, marginBottom: "40px" }}>
              Of u nu wilt genieten van een zonnige zithoek, een groene oase of een robuuste
              buitenruimte voor uw bedrijf — wij zorgen dat het klopt. Tot in detail.
            </p>
            <div style={{ marginTop: "auto" }}>
              <a href="/diensten/particulieren" style={btnStyle}>
                Bekijk onze diensten voor particulieren
              </a>
            </div>
          </div>

          {/* Rechterkolom */}
          <div data-fade="" style={{ display: "flex", flexDirection: "column", transitionDelay: "0.2s" }}>
            <h3 style={{ fontWeight: 300, fontSize: "24px", color: "#5b604b", marginBottom: "24px", lineHeight: 1.3 }}>
              Voor particulieren én bedrijven
            </h3>
            <p style={{ fontWeight: 300, fontSize: "18px", color: "#1a1a18", lineHeight: 1.75, marginBottom: "20px" }}>
              Als particulier wilt u een tuin die past bij uw woning en leefstijl. Als bedrijf
              wilt u een representatieve buitenruimte die indruk maakt op bezoekers en medewerkers.
              Bij Kamsteeg Tuinen krijgt u in beide gevallen dezelfde toewijding en kwaliteit.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
              {[
                "Particulieren: van tuinontwerp en tuinaanleg tot seizoensonderhoud.",
                "Bedrijven en overheden: bedrijfstuinen, groene buitenruimtes en structureel onderhoud.",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontWeight: 300,
                    fontSize: "18px",
                    color: "#1a1a18",
                    lineHeight: 1.75,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#6b6b5a" }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto" }}>
              <a href="/diensten/bedrijven" style={btnStyle}>
                Bekijk onze diensten voor bedrijven
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
