import React, { useState } from "react";
import axios from "axios";
import "../sidebar/Sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState(""); // To store user input
  const [results, setResults] = useState([]); // To store API response
  const [error, setError] = useState(null); // To handle errors

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Make an API call to the backend
      const response = await axios.get(
        `http://localhost:8080/stocks/search?query=${query}`
      );

      // Update the results state with the API response
      setResults(response.data.result || []); // Assuming `result` contains stock info
      setError(null); // Clear previous errors
    } catch (err) {
      // Handle errors and update error state
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
          onChange={(e) => setQuery(e.target.value)} // Update query state
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error">{error}</p>} {/* Display error message */}

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



