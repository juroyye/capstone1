
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./Overlay.css";
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

const Overlay = ({ stock, onClose, onAddStock }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (stock) {
      fetchChartData(stock.symbol);
    }
  }, [stock]);

  const handleAddStock = async (stockId) => {
    
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(`http://localhost:8080/portfolio/addStock?userId=${userId}&stockId=${stockId}`, {
          method: "POST",
      });
      const result = await response.json();
      alert(result.message);
  } catch (error) {
      console.error("Error adding stock:", error);
  }


    if (chartData) {
      const stockData = {
        ...stock,
        chartData, 
      };
      onAddStock(stockData);
    }
    onClose(); 
  };
  

  const fetchChartData = async (symbol) => {
    try {
      console.log(symbol)
      const encodedSymbol = encodeURIComponent(symbol); 
      const response = await axios.get(
       `http://localhost:8080/stocks/data?symbol=${encodedSymbol}`
      );
      
      const { c, h, l, o } = response.data; 
      setChartData({
        labels: ["Open", "High", "Low", "Current"],
        datasets: [
          {
            label: `${stock.description} Stock Data`,
            data: [o, h, l, c],
            backgroundColor: "rgba(154, 28, 204, 0.4)",
            borderColor: "rgb(68, 70, 100)",
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };

  if (!stock) return null;

  return (
    <div className="overlay" onClick={(e) => e.target.className === "overlay" && onClose()}>
      <div className="overlay-content">
        <h2>
          {stock.description} ({stock.symbol})
        </h2>

        <div className="chart-container">  
             {chartData   ? (
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        ) : (
          <p>Loading chart...</p>
        )}
        </div>
   
        <button onClick= {handleAddStock} className="add-stock-button">
            Add Stock
            </button>

           <button onClick={onClose} className="close-overlay">X</button>
      </div>
    </div>
  );
};

export default Overlay;

