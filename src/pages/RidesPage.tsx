// src/pages/RidesPage.tsx
import React, { useState, useEffect } from 'react';
import { MapView, Toggle, FareStepper } from '../components/ui';
import { RIDE_OPTIONS } from '../constants/data';
import { useFareStep } from '../hooks';
import type { Route, Booking, RideOption } from '../types';

interface RidesPageProps {
  route: Route;
  onBook: (booking: Booking) => void;
  onBack: () => void;
}

export const RidesPage: React.FC<RidesPageProps> = ({ route, onBook, onBack }) => {
  const [sel, setSel] = useState("mini");
  const [femalePref, setFemalePref] = useState(false);
  const selRide = RIDE_OPTIONS.find(r => r.id === sel) as RideOption;
  const fareStep = useFareStep(
    selRide?.basePrice || 220,
    Math.round((selRide?.basePrice || 220) * .8),
    Math.round((selRide?.basePrice || 220) * 1.5),
    10
  );

  useEffect(() => { fareStep.reset(); }, [sel]);

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 60px)", background: "#fdf2f5" }}>
      <div className="inner-sidebar">
        <div style={{ padding: "24px 24px 20px", borderBottom: "1.5px solid rgba(212,114,138,0.1)", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: "rgba(212,114,138,0.08)",
            border: "1.5px solid rgba(212,114,138,0.14)",
            cursor: "pointer",
            color: "#9D5A6C",
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>←</button>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#3D1F2A" }}>Choose a Ride</div>
            <div style={{ fontSize: 12, color: "#A07080", marginTop: 1 }}>سواری_selectedector کریں</div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Route summary */}
          <div style={{ background: "rgba(212,114,138,0.05)", border: "1.5px solid rgba(212,114,138,0.12)", borderRadius: 16, padding: 16 }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, marginTop: 3, flexShrink: 0 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#9D5A6C" }} />
                <div style={{ width: 1.5, height: 22, background: "linear-gradient(to bottom,#9D5A6C,#E0A0B0)" }} />
                <div style={{ width: 10, height: 10, borderRadius: 2, background: "#E07B8A", border: "2px solid #F0A8BC" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: "#3D1F2A", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{route.from}</div>
                <div style={{ fontSize: 13, color: "#3D1F2A", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{route.to}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 20, marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(212,114,138,0.1)" }}>
              <div style={{ fontSize: 12, color: "#A07080" }}><b style={{ color: "#3D1F2A" }}>~8 km</b> route</div>
              <div style={{ fontSize: 12, color: "#A07080" }}><b style={{ color: "#3D1F2A" }}>22 min</b> estimated</div>
            </div>
          </div>

          {/* Ride options */}
          {RIDE_OPTIONS.map(ride => (
            <div
              key={ride.id}
              className={`ride-opt${sel === ride.id ? " sel" : ""}`}
              onClick={() => setSel(ride.id)}
              style={{ position: "relative" }}
            >
              {sel === ride.id && (
                <div style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 22,
                  height: 22,
                  background: "linear-gradient(135deg,#D4728A,#9D5A6C)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  color: "white",
                  fontWeight: 700
                }}>✓</div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: sel === ride.id ? "rgba(212,114,138,0.1)" : "rgba(212,114,138,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24
                }}>{ride.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F2A" }}>{ride.name}</span>
                    <span style={{ fontSize: 12, color: "#C0A0B0", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic" }}>{ride.urdu}</span>
                    {femalePref && ride.id !== "moto" && (
                      <span style={{ fontSize: 10, background: "rgba(212,114,138,0.1)", color: "#D4728A", border: "1px solid rgba(212,114,138,0.2)", padding: "1px 8px", borderRadius: 20 }}>♀ Pref</span>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    {[ride.eta, `${ride.seats} seat${ride.seats > 1 ? "s" : ""}`, ride.description].map((v, i) => (
                      <span key={i} style={{ fontSize: 11, color: "#A07080" }}>
                        {i > 0 && <span style={{ color: "#DDB0BC", marginRight: 7 }}>·</span>}{v}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: "#3D1F2A" }}>
                    Rs {sel === ride.id ? fareStep.fare : ride.basePrice}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Female pref */}
          <div style={{ background: "rgba(212,114,138,0.04)", border: "1.5px solid rgba(212,114,138,0.12)", borderRadius: 16, padding: 16 }}>
            <Toggle checked={femalePref} onChange={setFemalePref} label="Female Rider Preference" sublabel="خواتین ڈرائیور" />
            {femalePref && (
              <div style={{ marginTop: 12, padding: "10px 12px", background: "rgba(212,114,138,0.06)", border: "1px solid rgba(212,114,138,0.18)", borderRadius: 10, fontSize: 12, color: "#9D5A6C", lineHeight: 1.5 }}>
                ℹ️ Preference set. Wait times may be slightly longer. Available for Mini & Rickshaw.
              </div>
            )}
          </div>

          <FareStepper
            fare={fareStep.fare}
            inc={fareStep.inc}
            dec={fareStep.dec}
            reset={fareStep.reset}
            isMin={fareStep.isMin}
            isMax={fareStep.isMax}
            recommended={selRide?.basePrice}
            label="Offer Fare"
          />
        </div>

        <div style={{ padding: "18px 24px", borderTop: "1.5px solid rgba(212,114,138,0.1)" }}>
          <button className="rs-btn-primary" onClick={() => onBook({ ride: selRide, fare: fareStep.fare, femalePref })}>
            Find Offers — Rs {fareStep.fare} →
          </button>
          <p style={{ fontSize: 11, color: "#C0A0B0", textAlign: "center", marginTop: 10 }}>Drivers will see your fare offer</p>
        </div>
      </div>

      <div style={{ flex: 1, padding: 24 }}>
        <MapView label="Your route" showRoute />
      </div>
    </div>
  );
};