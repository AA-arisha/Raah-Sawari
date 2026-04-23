// src/components/ui/Modal.tsx
import React, { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="rs-modal-overlay" onClick={onClose}>
      <div className="rs-modal-box" onClick={e => e.stopPropagation()}>
        {title && (
          <div style={{
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(212,114,138,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700, color: "#3D1F2A" }}>
              {title}
            </span>
            <button
              onClick={onClose}
              style={{
                background: "rgba(212,114,138,0.08)",
                border: "none",
                borderRadius: 10,
                width: 32,
                height: 32,
                cursor: "pointer",
                color: "#9D5A6C",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ✕
            </button>
          </div>
        )}
        <div style={{ padding: "20px 24px 24px" }}>{children}</div>
      </div>
    </div>
  );
};