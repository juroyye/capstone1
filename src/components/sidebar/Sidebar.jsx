import React, { useState } from "react";
import '../sidebar/Sidebar.css'

const Sidebar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <div className="sidebar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-bar"
          placeholder="...search for stocks, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
     
    </div>
  );
};

export default Sidebar;
