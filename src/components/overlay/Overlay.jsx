import React from "react";
import '../overlay/Overlay.css'

const Overlay = ({ stock, onClose }) => {
  if (!stock) return null; // Do not render if no stock is selected

  return (
    <div
      className="overlay"
      onClick={(e) => e.target.className === "overlay" && onClose()}
    >
      <div className="overlay-content">
        <h2>{stock.description} ({stock.symbol})</h2>
        <p>Charts and prices etc...</p>
        <button onClick={onClose} className="close-overlay">X</button>
      </div>
    </div>
  );
};

export default Overlay;
