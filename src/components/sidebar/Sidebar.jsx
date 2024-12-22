import React, { useState } from "react";
import axios from "axios";
import "./Sidebar.css";


const Sidebar = ({onStockClick}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
 

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
            onClick={() => onStockClick(stock)}
          >
            {stock.description} ({stock.symbol})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;




