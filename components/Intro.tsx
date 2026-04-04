export default function Intro() {
  return (
    <section style={{ backgroundColor: "#f2eee2", padding: "120px 0" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 40px" }}>

        <h2
          style={{
            fontWeight: 400,
            fontSize: "60px",
            color: "#7a7b6b",
            marginBottom: "40px",
            lineHeight: 1.2,
          }}
        >
          Uw tuin, ons vakmanschap
        </h2>

        <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "24px" }}>
          Een mooie tuin begint bij een vakman die luistert naar uw wensen. Kamsteeg Tuinen
          combineert ruim 25 jaar ervaring met persoonlijke aandacht. Ons team denkt met u mee —
          van het eerste idee tot het eindresultaat.
        </p>
        <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "72px" }}>
          Wij werken voor particulieren, bedrijven en overheden in Breda en de wijde omgeving.
          Geen project is te groot of te klein. Wat ons drijft? De overtuiging dat een goed
          aangelegde tuin uw dagelijks leven verrijkt.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "64px",
            borderTop: "1px solid #c8c4b4",
            paddingTop: "64px",
          }}
        >
          <div>
            <h3
              style={{
                fontWeight: 400,
                fontSize: "24px",
                color: "#5b604b",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              Tuinen met een goed gevoel
            </h3>
            <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "18px" }}>
              &ldquo;Tuinen met een goed gevoel&rdquo; is meer dan een slogan. Het beschrijft onze
              aanpak: wij ontwerpen, leggen aan en onderhouden tuinen waarin u zich het hele jaar
              door prettig voelt. Met oog voor sfeer, functionaliteit en de natuur om u heen.
            </p>
            <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7 }}>
              Of u nu wilt genieten van een zonnige zithoek, een groene oase of een robuuste
              buitenruimte voor uw bedrijf — wij zorgen dat het klopt. Tot in detail.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontWeight: 400,
                fontSize: "24px",
                color: "#5b604b",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              Voor particulieren én bedrijven
            </h3>
            <p style={{ fontWeight: 400, fontSize: "17px", color: "#3a3a2e", lineHeight: 1.7, marginBottom: "20px" }}>
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
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "#3a3a2e",
                    lineHeight: 1.7,
                    paddingLeft: "20px",
                    position: "relative",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ position: "absolute", left: 0, color: "#7a7b6b" }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ fontWeight: 400, fontSize: "14px", color: "#7a7b6b" }}>
              <a href="#" style={{ color: "#7a7b6b" }}>→ Bekijk onze diensten voor particulieren</a>
              {"  |  "}
              <a href="#" style={{ color: "#7a7b6b" }}>→ Bekijk onze diensten voor bedrijven</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
