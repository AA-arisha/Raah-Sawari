// src/pages/RoutePage.tsx
import React, { useState } from 'react';
import { MapView } from '../components/ui';
import { SUGGESTIONS } from '../constants/data';
import type { Route } from '../types';

interface RoutePageProps {
  onConfirm: (route: Route) => void;
  onBack: () => void;
}

export const RoutePage: React.FC<RoutePageProps> = ({ onConfirm, onBack }) => {
  const [from, setFrom] = useState("My Location — Saddar, Karachi");
  const [to, setTo] = useState("");
  const [sugs, setSugs] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  const handleTo = (v: string) => {
    setTo(v);
    setSugs(v.length > 1 ? SUGGESTIONS.filter(s => s.toLowerCase().includes(v.toLowerCase())) : []);
  };

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
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#3D1F2A" }}>Plan Your Route</div>
            {/* <div style={{ fontSize: 12, color: "#A07080", marginTop: 1 }}>اپنا راستہ منتخب کریں</div> */}
          </div>
        </div>

        <div style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
          {/* From */}
          <div>
            <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C0809A", display: "block", marginBottom: 8 }}>From</label>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "white", border: "1.5px solid rgba(212,114,138,0.14)", borderRadius: 14, padding: "12px 14px" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#9D5A6C", flexShrink: 0 }} />
              <input
                value={from}
                onChange={e => setFrom(e.target.value)}
                style={{ flex: 1, border: "none", background: "transparent", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "#3D1F2A", outline: "none" }}
              />
            </div>
          </div>

          {/* <div style={{ display: "flex", alignItems: "center", gap: 8, paddingLeft: 4 }}>
            <div style={{ width: 1.5, height: 22, background: "linear-gradient(to bottom,#9D5A6C,#E0A0B0)" }} />
            <button style={{ fontSize: 12, color: "#C0A0B0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif" }}>⇅ Swap</button>
          </div> */}

          {/* To */}
          <div style={{ position: "relative" }}>
            <label style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C0809A", display: "block", marginBottom: 8 }}>To</label>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "white",
              border: `1.5px solid ${focused ? "#D4728A" : "rgba(212,114,138,0.14)"}`,
              borderRadius: 14,
              padding: "12px 14px",
              boxShadow: focused ? "0 0 0 3px rgba(212,114,138,0.12)" : "none",
              transition: "all 0.2s"
            }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: "#E07B8A", border: "2px solid #F0A8BC", flexShrink: 0 }} />
              <input
                value={to}
                onChange={e => handleTo(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Where to?"
                autoFocus
                style={{ flex: 1, border: "none", background: "transparent", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "#3D1F2A", outline: "none" }}
              />
            </div>
            {focused && sugs.length > 0 && (
              <div style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                marginTop: 4,
                background: "white",
                border: "1.5px solid rgba(212,114,138,0.16)",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(157,90,108,0.13)",
                zIndex: 10
              }}>
                {sugs.slice(0, 5).map((s, i) => (
                  <button
                    key={i}
                    onMouseDown={() => { setTo(s); setSugs([]); setFocused(false); }}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "11px 16px",
                      background: "none",
                      border: "none",
                      borderBottom: i < 4 ? "1px solid rgba(212,114,138,0.07)" : "none",
                      fontSize: 13,
                      color: "#3D1F2A",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontFamily: "'Jost',sans-serif",
                      transition: "background 0.12s"
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,114,138,0.06)"}
                    onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "none"}
                  >
                    <span style={{ color: "#C0809A" }}>📍</span>{s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* <button style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 14px",
            borderRadius: 14,
            border: "1.5px dashed rgba(212,114,138,0.24)",
            background: "none",
            color: "#C0A0B0",
            cursor: "pointer",
            fontSize: 13,
            fontFamily: "'Jost',sans-serif",
            transition: "all 0.2s"
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4728A";
              (e.currentTarget as HTMLButtonElement).style.color = "#9D5A6C";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(212,114,138,0.24)";
              (e.currentTarget as HTMLButtonElement).style.color = "#C0A0B0";
            }}
          >🗺️ Choose on map <span style={{ marginLeft: "auto" }}>→</span></button> */}

          <div>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#C0A0B0", marginBottom: 10 }}>Popular Near You</div>
            {SUGGESTIONS.slice(0, 3).map((s, i) => (
              <button
                key={i}
                onClick={() => setTo(s)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "9px 10px",
                  borderRadius: 10,
                  background: "none",
                  border: "none",
                  fontSize: 13,
                  color: "#7D4A5C",
                  cursor: "pointer",
                  fontFamily: "'Jost',sans-serif",
                  transition: "background 0.12s",
                  marginBottom: 2
                }}
                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,114,138,0.07)"}
                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "none"}
              >
                <span style={{ marginRight: 8, color: "#D4A0B0" }}>🕐</span>{s}
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: "18px 24px", borderTop: "1.5px solid rgba(212,114,138,0.1)" }}>
          <button className="rs-btn-primary" onClick={() => onConfirm({ from, to: to || "Dolmen Mall Clifton" })}>Confirm Route →</button>
        </div>
      </div>

      <div style={{ flex: 1, padding: 24 }}>
        <MapView label="Select on map" showRoute={!!to} />
      </div>
    </div>
  );
};