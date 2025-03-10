import Sidebar from '../../components/sidebar/Sidebar';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import '../UserDash/UserDash.css';
import Overlay from '../../components/overlay/Overlay';
import StockDataOverlay from "../../components/infoOverlay/StockDataOverlay";
import plusSignImage from '../../imports/images/icons8-plus-sign-100.png';
import trashPic from '../../imports/images/purpTrash.png';
import form from '../../imports/images/icons8-form-30.png'
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
  const navigate = useNavigate();
    const userDashButtons = []; 
    const [isOverlayVisible, setOverlayVisible] = useState(false); 
    const [selectedStock, setSelectedStock] = useState(null); 
    const [addedStocks, setAddedStocks] = useState([]);
    const [stockColumns, setStockColumns] = useState(2);
    const [favoriteStocks, setFavoriteStocks] = useState({});
    const [isStockOverlayVisible, setStockOverlayVisible] = useState(false);
    const [selectedStockData, setSelectedStockData] = useState(null);





    useEffect(() => {
      const userId = localStorage.getItem("userId");
      if (userId) {
          const localStorageKey = `stocks_${userId}`;
          const savedStocks = localStorage.getItem(localStorageKey);
          const savedFavorites = localStorage.getItem(`favorites_${userId}`);

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
        }    
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        setFavoriteStocks(parsedFavorites || {}); // Ensure it's an object
      } catch (error) {
        console.error("Error parsing saved favorites:", error);
        setFavoriteStocks({});
      }
    }

    
    if (!savedStocks) {
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

    const toggleFavorite = (stockSymbol) => {
      setFavoriteStocks((prevFavorites) => {
        const updatedFavorites = {
          ...prevFavorites,
          [stockSymbol]: !prevFavorites[stockSymbol],
        };
    
    
        const userId = localStorage.getItem("userId");
        localStorage.setItem(`favorites_${userId}`, JSON.stringify(updatedFavorites));
    
        return updatedFavorites;
      });
    };

    const handleOpenStockOverlay = async (stockSymbol) => {
      try {
          const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=ctivuchr01qgfbsvlrggctivuchr01qgfbsvlrh0`);
          if (!response.ok) {
              throw new Error("Failed to fetch stock data");
          }
          const data = await response.json();
          setSelectedStockData(data);
          setStockOverlayVisible(true);
      } catch (error) {
          console.error("Error fetching stock data:", error);
      }
  };

  
    

      

    return (
        <div className="user-dash">
            <Navbar buttons={userDashButtons} />
            <Sidebar onStockClick={handleStockClick} />
            {isOverlayVisible && (
                <Overlay stock={selectedStock} onClose={handleCloseOverlay} onAddStock={handleAddStock}/>
             )}

        {isStockOverlayVisible && (
          <StockDataOverlay 
        stockData={selectedStockData} 
        onClose={() => setStockOverlayVisible(false)} 
         />
          )}


             <div className='content-container'>

             <div className="stock-toggle">
    <label htmlFor="stockColumns">Stocks per Row: </label>
    <select 
      id="stockColumns" 
      value={stockColumns} 
      onChange={(e) => setStockColumns(Number(e.target.value))}
    >
      <option value={2}>2</option>
      <option value={3}>3</option>
    </select>
  </div>

  <div className="stocks-grid" style={{ gridTemplateColumns: `repeat(${stockColumns}, 1fr)` }}>
    {addedStocks.length > 0 ? (
      addedStocks.map((stock, index) => (
        <div key={index} className="stock-box">
          <h4>{stock.description} ({stock.symbol})</h4>
          
          <div className="stock-actions">
         
          <button className='infoForm' onClick={() => handleOpenStockOverlay(stock.symbol)}>
            <img src={form} alt='info form' />
          </button>


          <button className="remove-stock-button" onClick={() => handleRemoveStock(index)}>
            <img src={trashPic} alt='remove icon' />
          </button>

         
          <button 
            className={`favorite-button ${favoriteStocks[stock.symbol] ? "favorited" : ""}`}
            onClick={() => toggleFavorite(stock.symbol)}
          >
            {favoriteStocks[stock.symbol] ? "★" : "☆"}
          </button>
        </div>
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
             ))
             ) : (
              <div className="emptyPlus">
              <img className='plus-sign' src={plusSignImage} alt="Plus sign" />
              <p>No stocks added yet.</p>
            </div>
          )}
        
          </div>
          
        </div>
         <div className="button-group">
      <button className="news-button" onClick={() => navigate('/news')}>
        News
      </button>
      <button className="logout-button" onClick={() => navigate('/')}>
        Logout
      </button>
      </div>
      </div>
    );
};

export default UserDash;



