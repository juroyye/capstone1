import React from "react";
import "../infoOverlay/StockDataOverlay.css"; 

const StockDataOverlay = ({ stockData, onClose }) => {
    if (!stockData) return null;

    return (
        <div className="stockDataOverlay">
            <div className="sdoverlay-content">
                <h2>Key Price Points</h2>
                <p><strong>Today's Current Price:</strong> ${stockData.c}</p>
                <p><strong>Today's High Price:</strong> ${stockData.h}</p>
                <p><strong>Today's Low Price:</strong> ${stockData.l}</p>
                <p><strong>Today's Open Price:</strong> ${stockData.o}</p>
                <p><strong>Previous Close:</strong> ${stockData.pc}</p>
                <button className="sd-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default StockDataOverlay;
