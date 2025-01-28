import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
      const userId = localStorage.getItem("userId");
      if (userId) {
          const localStorageKey = `stocks_${userId}`;
          const savedStocks = localStorage.getItem(localStorageKey);
          
          if (savedStocks) {
            try {
                const parsedStocks = JSON.parse(savedStocks);
                if (Array.isArray(parsedStocks)) {
                    setAddedStocks(parsedStocks);
                } else {
                    console.error("Saved stocks are not an array. Resetting data.");
                    localStorage.removeItem(localStorageKey);
                    setAddedStocks([]);
                }
            } catch (error) {
                console.error("Error parsing saved stocks:", error);
                setAddedStocks([]);
            }
        } else {
          fetch(`http://localhost:8080/api/portfolios/user/${userId}`)
          .then((response) => response.json())
          .then((data) => {
              if (Array.isArray(data)) {
                  setAddedStocks(data);
                  localStorage.setItem(localStorageKey, JSON.stringify(data));
              } else {
                  console.error('API response is not an array:', data);
                  setAddedStocks([]);
              }
          })
          .catch((error) => console.error('Error fetching stocks:', error));
  }
}
  }, []);
  
    const handleStockClick = (stock) => {
        setSelectedStock(stock); 
        setOverlayVisible(true); 
      };

      const handleAddStock = async (stockData) => {
       
        setOverlayVisible(false); 

        const userId = localStorage.getItem("userId");
       
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
      
          if (response.ok) {
            setAddedStocks((prev) => {
              const updatedStocks = prev.some((s) => s.symbol === stockData.symbol)
                  ? prev
                  : [...prev, stockData];
              const localStorageKey = `stocks_${userId}`;
              localStorage.setItem(localStorageKey, JSON.stringify(updatedStocks));
              return updatedStocks;
          });
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
        const userId = localStorage.getItem("userId");
        const localStorageKey = `stocks_${userId}`;
        setAddedStocks((prev) => {
            const updatedStocks = prev.filter((_, i) => i !== index);
            localStorage.setItem(localStorageKey, JSON.stringify(updatedStocks));
            return updatedStocks;
        });
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



