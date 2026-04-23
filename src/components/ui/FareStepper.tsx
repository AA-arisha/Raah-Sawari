// src/components/ui/FareStepper.tsx
import React from 'react';
import type { FareStepperState } from '../../types';

interface FareStepperProps extends FareStepperState {
  recommended?: number;
  label?: string;
}

export const FareStepper: React.FC<FareStepperProps> = ({
  fare,
  inc,
  dec,
  reset: _reset,
  isMin,
  isMax,
  recommended,
  label = "Your Fare"
}) => {
  const btnStyle = (disabled: boolean) => ({
    width: 38,
    height: 38,
    borderRadius: 12,
    border: "1.5px solid rgba(212,114,138,0.22)",
    background: disabled ? "transparent" : "white",
    color: disabled ? "#D0B0BC" : "#9D5A6C",
    fontSize: 20,
    fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div className="fare-box">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "#C0809A" }}>
          {label}
        </span>
        {recommended && (
          <span style={{ fontSize: 11, color: "#D4728A", background: "rgba(212,114,138,0.1)", padding: "2px 10px", borderRadius: 20 }}>
            Rec: Rs {recommended}
          </span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button onClick={dec} disabled={isMin} style={btnStyle(isMin)}>−</button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 700, color: "#3D1F2A" }}>
            Rs {fare}
          </span>
        </div>
        <button onClick={inc} disabled={isMax} style={btnStyle(isMax)}>+</button>
      </div>
    </div>
  );
};