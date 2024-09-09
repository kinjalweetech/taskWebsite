
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../Redux/SearchSlice";
import { Link, useNavigate } from "react-router-dom";
import "../Component/CSS/header.css";
import Container from "./Container";

function Searching() {
  const search = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState(search || "");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      dispatch(setSearchTerm(localSearch)); // Dispatch the new search term to Redux
      navigate(`/search/${localSearch}`); // Navigate to the search page with the search term
    }
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={localSearch}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          {localSearch && (
            <button type="submit" className="search-btn">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          )}
        </form>
      </div>
      <nav className="header__nav">
        {/* Category buttons */}
        <Link
          to="/mountain"
          className="nav-btn"
          onClick={() => dispatch(setSearchTerm("mountain"))}
        >
          Mountain
        </Link>
        <Link
          to="/bird"
          className="nav-btn"
          onClick={() => dispatch(setSearchTerm("bird"))}
        >
          Bird
        </Link>
        <Link
          to="/food"
          className="nav-btn"
          onClick={() => dispatch(setSearchTerm("food"))}
        >
          Food
        </Link>
        <Link
          to="/beach"
          className="nav-btn"
          onClick={() => dispatch(setSearchTerm("beach"))}
        >
          Beach
        </Link>
      </nav>
      <div className="image-container">
        {/* Pass the current search term to the Container component */}
        <Container searchTerm={search} />
      </div>
    </>
  );
}

export default Searching;
