import React from "react";
import "../infoOverlay/StockDataOverlay.css"; 
import highIcon from '../../imports/images/icons8-stocks-30.png'
import closeIcon from '../../imports/images/icons8-close-60.png'
import lowIcon from '../../imports/images/icons8-low-priority-30.png'
import moneyIcon from '../../imports/images/icons8-money-24.png'
import openIcon from '../../imports/images/icons8-open-24.png'

const StockDataOverlay = ({ stockData, onClose }) => {
    if (!stockData) return null;

    return (
        <div className="stockDataOverlay">
            <div className="sdoverlay-content">
                <h2>Key Price Points</h2>
    
                <div className="info-item">
                <img src={moneyIcon} className="sd-icon" alt="High Icon" />
                    <strong>Today's Current Price:</strong>
                    <span>${stockData.c}</span>
                </div>
    
                <div className="info-item">
                    <img src={highIcon} className="sd-icon" alt="High Icon" />
                    <strong>Today's High Price:</strong>
                    <span>${stockData.h}</span>
                </div>
    
                <div className="info-item">
                <img src={lowIcon} className="sd-icon" alt="High Icon" />
                    <strong>Today's Low Price:</strong>
                    <span>${stockData.l}</span>
                </div>
    
                <div className="info-item">
                <img src={openIcon} className="sd-icon" alt="High Icon" />
                    <strong>Today's Open Price:</strong>
                    <span>${stockData.o}</span>
                </div>
    
                <div className="info-item">
                <img src={closeIcon} className="sd-icon" alt="High Icon" />
                    <strong>Previous Close:</strong>
                    <span>${stockData.pc}</span>
                </div>
    
                <button className="sd-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}    

export default StockDataOverlay;
