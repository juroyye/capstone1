
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

const Overlay = ({ stock, onClose }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (stock) {
      fetchChartData(stock.symbol);
    }
  }, [stock]);

  const fetchChartData = async (symbol) => {
    try {
      const response = await axios.get(
       `http://localhost:8080/stocks/data?symbol=${symbol}`
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
        {chartData ? (
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
        <button onClick={onClose} className="close-overlay">
          X
        </button>
      </div>
    </div>
  );
};

export default Overlay;
