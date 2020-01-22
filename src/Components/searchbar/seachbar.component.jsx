import React from "react";
import "./searchbar-styles.css";

export const Searchbar = ({placeholder, handleChange}) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
); 


