import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (value) => {
    setTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="search-container">
      <input
        autoFocus
        className="search-bar"
        placeholder="Search for your favorite movies"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
