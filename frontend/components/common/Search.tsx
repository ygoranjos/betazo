"use client";

import { useUIStore } from "@/store";

const Search = () => {
  const { searchActive, toggleSearch } = useUIStore();

  return (
    <div className="search-button">
      <button className="nav-link" onClick={toggleSearch}>
        <span className="icons">
          <i className="icon-search"></i>
        </span>
        <span>Search</span>
      </button>
      <div className={`search-popup ${searchActive ? "d-block" : ""}`}>
        <div className="search-bg" onClick={toggleSearch}></div>
        <div className={`search-form ${searchActive ? "end-0" : ""}`}>
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
