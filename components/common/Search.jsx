"use client";

import { useState } from "react";

const Search = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="search-button">
      <button
        className="nav-link"
        onClick={() => setSearchActive(!searchActive)}
      >
        <span className="icons">
          <i className="icon-search"></i>
        </span>
        <span>Search</span>
      </button>
      <div className={`search-popup ${searchActive && "d-block"}`}>
        <div className="search-bg" onClick={() => setSearchActive(false)}></div>
        <div className={`search-form ${searchActive && "end-0"}`}>
          <form action="#">
            <div className="form">
              <input
                type="text"
                id="searchs"
                placeholder="Search Your Fovatires Game"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
