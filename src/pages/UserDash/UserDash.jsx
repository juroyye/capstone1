import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../UserDash/UserDash.css'
import Overlay from '../../components/overlay/Overlay';
import trashPic from '../../imports/images/purpTrash.png';
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

      const handleAddStock = async (stockData) => {
        setAddedStocks((prev) => [...prev, stockData]); 
        setOverlayVisible(false); 

        const userId = localStorage.getItem("userId");
        console.log(userId)
  
       
        if (!userId) {
          alert("User not logged in. Please log in to continue.");
          return;
        }
        if (!stockData) {
          alert("No stock selected.");
          return;
        }

        const stockSymbol = stockData.symbol;
        

        try {
          
          const url = `http://localhost:8080/api/portfolios/addStock?userId=${userId}&stockSymbol=${stockSymbol}`;
      
          
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          // Handle response
          if (response.ok) {
            const result = await response.json();
            alert("Stock added successfully!");
            console.log("Response:", result);
          } else {
            const errorResult = await response.json();
            alert(`Failed to add stock: ${errorResult.message}`);
            console.error("Error:", errorResult);
          }
        } catch (error) {
          console.error("Error adding stock:", error);
          alert("An error occurred while adding the stock.");
        }

      };
    
      const handleCloseOverlay = () => {
        setSelectedStock(null); 
        setOverlayVisible(false); 
      };

      const handleRemoveStock = (index) => {
        setAddedStocks((prev) => prev.filter((_, i) => i !== index)); 
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
            <button 
              className="remove-stock-button" 
              onClick={() => handleRemoveStock(index)}
            >
            <img src={trashPic} alt='remove icon' />
             </button>
            <Line
              data={stock.chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: { grid: { display: false } },
                  y: { grid: { display: true },
                  min: Math.max(0, Math.min(...stock.chartData.datasets[0].data) - 1), 
                  max: Math.max(...stock.chartData.datasets[0].data) + 1, 
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



