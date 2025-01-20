import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../UserDash/UserDash.css'
import Overlay from '../../components/overlay/Overlay';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const UserDash = () => {
    const userDashButtons = [ 
      { label: "Logout", route: "/" },]; 
    const [isOverlayVisible, setOverlayVisible] = useState(false); 
    const [selectedStock, setSelectedStock] = useState(null); 
    const [addedStocks, setAddedStocks] = useState([]);
  
    const handleStockClick = (stock) => {
        setSelectedStock(stock); 
        setOverlayVisible(true); 
      };

      const handleAddStock = (stockData) => {
        setAddedStocks((prev) => [...prev, stockData]); 
        setOverlayVisible(false); 
      };
    
      const handleCloseOverlay = () => {
        setSelectedStock(null); 
        setOverlayVisible(false); 
      };

      

    return (
        <div className="user-dash">
            <Navbar buttons={userDashButtons} />
            <Sidebar onStockClick={handleStockClick} />
            {isOverlayVisible && (
        <Overlay stock={selectedStock} onClose={handleCloseOverlay} onAddStock={handleAddStock}/>
      )}

      <div className='content-container'>

        <div className="stocks-grid">
        {addedStocks.map((stock, index) => (
          <div key={index} className="stock-box">
            <h4>{stock.description} ({stock.symbol})</h4>
            <Line
              data={stock.chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: { grid: { display: false } },
                  y: { grid: { display: true },
                  min: Math.max(0, Math.min(...stock.chartData.datasets[0].data) - 1), // Ensure min doesn't go below 0
                  max: Math.max(...stock.chartData.datasets[0].data) + 1, // Add 100 to the maximum
                },
              },
              }}
            />
          </div>
        ))}
          </div>
        </div>
      </div>
    );
};

export default UserDash;



