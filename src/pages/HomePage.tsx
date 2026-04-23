// src/pages/HomePage.tsx
import React from 'react';
// import { FEATURES, RECENT_LOCATIONS } from '../constants';

interface HomePageProps {
  onSearch: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSearch }) => {
//   const [pickup, setPickup] = useState("");
//   const [dropoff, setDropoff] = useState("");
//   const [active, setActive] = useState<string | null>(null);

  return (
    <div style={{ background: "#fdf2f5" }}>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", height: 532 }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1619468129361-605ebea04b44?w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          animation: "heroZoom 8s ease-out forwards",
          filter: "brightness(0.72) saturate(1.1)"
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(30,8,18,0.15) 0%, rgba(30,8,18,0.04) 30%, rgba(30,8,18,0.54) 65%, rgba(20,5,12,0.94) 100%)"
        }} />

        {["🌸", "🌺", "🌷", "✿", "❀", "🌸"].map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              bottom: -20,
              left: `${10 + i * 16}%`,
              fontSize: `${12 + (i % 3) * 4}px`,
              animation: `floatPetal ${6 + i * 1.4}s linear ${i * 1.1}s infinite`,
              opacity: 0,
              pointerEvents: "none"
            }}
          >
            {p}
          </div>
        ))}

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 36px" }}>
            <div style={{ maxWidth: 660 }}>
              {/* Badge */}
              <div className="fade-up-1" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(212,114,138,0.22)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(212,114,138,0.4)",
                borderRadius: 20,
                padding: "5px 16px",
                fontSize: 11,
                color: "#964d61",
                fontWeight: 600,
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginBottom: 16
              }}>
                <span>🌸</span> Karachi's Premium Ride App
              </div>

              <h1 className="fade-up-2" style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 74,
                fontWeight: 700,
                color: "white",
                lineHeight: 0.95,
                letterSpacing: "-2px",
                marginBottom: 8
              }}>
                Raah<br />Sawri
              </h1>
              <p className="fade-up-3" style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: 22,
                fontStyle: "italic",
                color: "#F0A8BC",
                marginBottom: 14,
                fontWeight: 400
              }}>
                راہ سواری — Your Journey, Your Way
              </p>
              <p className="fade-up-3" style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.62)",
                fontWeight: 300,
                marginBottom: 28,
                letterSpacing: "0.3px"
              }}>
                Set your own fare · Safe rides · Always on time
              </p>
                <button className="rs-btn-primary fade-up-5" onClick={() => onSearch( "Dolmen Mall Clifton")}>
                  Find My Ride <span>→</span>
                </button>

              {/* Search card */}
              {/* <div className="fade-up-4" style={{
                background: "rgba(253,242,245,0.97)",
                borderRadius: 22,
                padding: 20,
                boxShadow: "0 -8px 40px rgba(0,0,0,0.28), 0 20px 40px rgba(157,90,108,0.13)",
                maxWidth: 520
              }}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#C0809A",
                  marginBottom: 14
                }}>🗺️ Where are you going?</div>

                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                  <div style={{
                    position: "absolute",
                    left: 20,
                    top: 38,
                    bottom: 38,
                    width: 1.5,
                    background: "linear-gradient(to bottom,#9D5A6C,#E0A0B0)",
                    borderRadius: 2
                  }} />

                  {[
                    { key: "pickup", val: pickup, set: setPickup, dot: { borderRadius: "50%", background: "#9D5A6C" }, ph: "Pickup location…" },
                    { key: "dropoff", val: dropoff, set: setDropoff, dot: { borderRadius: 2, background: "#E07B8A", border: "2px solid #F0A8BC" }, ph: "Drop-off destination…" },
                  ].map(f => (
                    <div
                      key={f.key}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "white",
                        border: `1.5px solid ${active === f.key ? "#D4728A" : "rgba(212,114,138,0.15)"}`,
                        borderRadius: 14,
                        padding: "12px 14px",
                        boxShadow: active === f.key ? "0 0 0 3px rgba(212,114,138,0.12)" : "none",
                        transition: "all 0.2s"
                      }}
                    >
                      <div style={{ width: 10, height: 10, flexShrink: 0, ...f.dot }} />
                      <input
                        value={f.val}
                        onChange={e => f.set(e.target.value)}
                        onFocus={() => setActive(f.key)}
                        onBlur={() => setActive(null)}
                        onKeyDown={e => e.key === "Enter" && onSearch(dropoff || "Dolmen Mall Clifton")}
                        placeholder={f.ph}
                        style={{ flex: 1, border: "none", background: "transparent", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "#3D1F2A", outline: "none" }}
                      />
                      {f.val && (
                        <span style={{ fontSize: 11, color: "#C0A0B0", cursor: "pointer" }} onClick={() => f.set("")}>
                          ✕
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <button className="rs-btn-primary" onClick={() => onSearch(dropoff || "Dolmen Mall Clifton")}>
                  Find My Ride <span>→</span>
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 32px 0" }}>
        <div style={{
          background: "linear-gradient(135deg,#3D1F2A,#6B3347)",
          borderRadius: 22,
          padding: "20px 12px",
          display: "flex",
          gap: 4,
          boxShadow: "0 8px 32px rgba(61,31,42,0.2)"
        }}>
          {[["50K+", "Riders"], ["4.9★", "Rating"], ["3 Min", "Avg Wait"], ["24/7", "Available"]].map(([n, l], i) => (
            <div key={i} className="stat-item">
              <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 700, color: "#F0A8BC", lineHeight: 1 }}>{n}</span>
              <span style={{ display: "block", fontSize: 10, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.8px", marginTop: 4 }}>{l}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* FEATURES */}
      {/* <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 32px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#D4728A", marginBottom: 10 }}>✦ Why Choose Us ✦</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 40, fontWeight: 700, color: "#3D1F2A", lineHeight: 1.15, marginBottom: 10 }}>
            Ride <em style={{ color: "#D4728A" }}>Smarter,</em> Travel Safer
          </h2>
          <p style={{ fontSize: 14, color: "#A07080", fontWeight: 300, lineHeight: 1.7 }}>
            Everything you need for a comfortable, safe and affordable journey across Karachi.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="feature-tile">
              <span style={{ fontSize: 30, display: "block", marginBottom: 12 }}>{f.icon}</span>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 600, color: "#3D1F2A", marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 12.5, color: "#A07080", lineHeight: 1.55, fontWeight: 300 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <div className="rs-divider" /> */}

      {/* RECENT + TESTIMONIAL */}
      {/* <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C0809A", marginBottom: 16 }}>Recent Places</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {RECENT_LOCATIONS.map(loc => (
              <button key={loc.id} className="recent-btn" onClick={() => onSearch(loc.name)}>
                <div style={{
                  width: 40,
                  height: 40,
                  background: "rgba(212,114,138,0.08)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  flexShrink: 0
                }}>{loc.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#3D1F2A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{loc.name}</div>
                  <div style={{ fontSize: 12, color: "#A07080", marginTop: 2 }}>{loc.area}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "#D4728A", fontSize: 18 }}>›</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#C0809A", marginBottom: 2 }}>What Riders Say</div>
          <div className="rs-panel" style={{ padding: "22px 20px", position: "relative" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 64, color: "#F0A8BC", lineHeight: 1, position: "absolute", top: 8, left: 16, opacity: 0.35 }}>"</div>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontStyle: "italic", color: "#3D1F2A", lineHeight: 1.65, marginTop: 22, marginBottom: 18 }}>
              Raah Sawri is the only app where I actually feel safe travelling alone at night. The female driver option is a blessing!
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#F0A8BC,#D4728A)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                flexShrink: 0
              }}>👩</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#3D1F2A" }}>Zara Ahmed</div>
                <div style={{ fontSize: 11, color: "#A07080" }}>Regular rider, Gulshan-e-Iqbal</div>
              </div>
              <div style={{ marginLeft: "auto", color: "#E07B8A", fontSize: 13, letterSpacing: 2 }}>★★★★★</div>
            </div>
          </div> */}

          {/* CTA */}
          {/* <div style={{
            background: "linear-gradient(135deg,#D4728A,#9D5A6C)",
            borderRadius: 20,
            padding: "24px 22px",
            textAlign: "center",
            boxShadow: "0 12px 40px rgba(157,90,108,0.28)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{ position: "absolute", top: -16, right: -8, fontSize: 72, opacity: 0.1, pointerEvents: "none" }}>🌸</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 700, color: "white", marginBottom: 7, lineHeight: 1.2 }}>Start Your Journey Today</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 16, fontWeight: 300 }}>Download free & book your first ride in seconds</p>
            <button style={{
              background: "white",
              border: "none",
              borderRadius: 50,
              padding: "11px 28px",
              fontFamily: "'Jost',sans-serif",
              fontSize: 13,
              fontWeight: 700,
              color: "#9D5A6C",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
              onMouseEnter={e => (e.target as HTMLButtonElement).style.transform = "scale(1.04)"}
              onMouseLeave={e => (e.target as HTMLButtonElement).style.transform = "scale(1)"}
            >🌸 Get the App</button>
          </div>
        </div>
      </div> */}

      {/* <div style={{ height: 38 }} /> */}
    </div>
  );
};