import React, { useState } from "react";
import axios from "axios";
import "./Sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/stocks/search?query=${query}`
      );
      setResults(response.data.result);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const handleStockClick = (stock) => {
    setSelectedStock(stock);
  };

  const handleCloseOverlay = () => {
    setSelectedStock(null);
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for stocks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="results-container">
        {results.map((stock) => (
          <div
            key={stock.symbol}
            className="stock-item"
            onClick={() => handleStockClick(stock)}
          >
            {stock.description} ({stock.symbol})
          </div>
        ))}
      </div>

      {/* my overlay */}
      {selectedStock && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>{selectedStock.description} ({selectedStock.symbol})</h2>
            <p>Charts and prices etc...</p>
            <button onClick={handleCloseOverlay} className="close-overlay">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;




