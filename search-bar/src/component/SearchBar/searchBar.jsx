import React, { useState } from "react";
import "./searchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ placeholder, data }) => {
  const [searchedItem, setsearchedItem] = useState("");
  const [filteredData, setfilteredData] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setsearchedItem(value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().startsWith(value.toLowerCase())
    );
    setfilteredData(filtered.slice(0, 15));
  };
  const handleSuggestionClick = (value) => {
    setsearchedItem(value);
    setfilteredData([]);
  };
  return (
    <div className="container">
      <div className="container-search">
        <div className="container-input">
          <input
            type="text"
            placeholder={placeholder}
            value={searchedItem}
            onChange={handleChange}
          />
          <div className="search-icon">
            <SearchIcon fontSize="medium" />
          </div>
        </div>
        {searchedItem.length > 0 && filteredData.length > 0 && (
          <div className="container-suggestion">
            {filteredData.map((item, i) => (
              <div
                key={i}
                className="items"
                onClick={() => handleSuggestionClick(item.title)}
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
