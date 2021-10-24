import "./SearchBar.css";
import React, { useState } from "react";

function sanitize(string) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return string.replace(reg, (match) => map[match]);
}

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSearch = (value) => {
    const sanitizedValue = sanitize(value); // prevent xss
    setTerm(sanitizedValue);

    if (onSearch) {
      onSearch(sanitizedValue);
    }
  };

  return (
    <div className="search-container">
      <input
        autoFocus
        className="search-bar"
        placeholder="Search"
        value={term}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
