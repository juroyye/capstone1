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
    <form onSubmit={handleSearch} style={{ width: "100%" }}>
        <input
            type="text"
            className="search-bar"
            placeholder="Search for stocks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" type="submit">
            Search
        </button>
    </form>
    <div className="search-results">
        {results.map((result, index) => (
            <div key={index}>
                <strong>{result.description}</strong> ({result.symbol})
            </div>
        ))}
    </div>
</div>

  );
};

export default Sidebar;



