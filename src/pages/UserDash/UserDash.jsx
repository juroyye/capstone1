import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
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
    const userDashButtons = ['Dashboard', 'Profile', 'Logout']; 
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
        <div className="added-stocks">
        {addedStocks.map((stock, index) => (
          <div key={index} className="stock-item">
            <h4>{stock.description} ({stock.symbol})</h4>
            <Line
              data={stock.chartData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
              }}
            />
          </div>
        ))}
      </div>
        </div>
    );
};

export default UserDash;



