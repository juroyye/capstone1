import React, { useState } from "react";
import axios from "axios";
import "../sidebar/Sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState([]); 
  const [error, setError] = useState(null); 

  const handleSearch = async (e) => {
    e.preventDefault(); 

    try {
      
      const response = await axios.get(
        `http://localhost:8080/stocks/search?query=${query}`
      );

      
      setResults(response.data.result || []); 
      setError(null);
    } catch (err) {
      
      console.error("Error fetching stock data:", err);
      setError("Failed to fetch stock data. Please try again.");
    }
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for stocks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error">{error}</p>} {}

      <ul className="search-results">
        {results.map((stock, index) => (
          <li key={index}>
            <strong>{stock.description}</strong> ({stock.symbol})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



