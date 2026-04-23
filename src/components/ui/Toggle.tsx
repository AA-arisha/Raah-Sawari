// src/components/ui/Toggle.tsx
import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  sublabel?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label, sublabel }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#3D1F2A" }}>{label}</div>
        {sublabel && <div style={{ fontSize: 11, color: "#A07080", marginTop: 2 }}>{sublabel}</div>}
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{
          width: 46,
          height: 25,
          borderRadius: 99,
          border: "none",
          cursor: "pointer",
          position: "relative",
          background: checked ? "#D4728A" : "#e8d0d8",
          transition: "background 0.3s",
          flexShrink: 0
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            width: 19,
            height: 19,
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
            transition: "transform 0.3s",
            transform: checked ? "translateX(21px)" : "translateX(0)"
          }}
        />
      </button>
    </div>
  );
};