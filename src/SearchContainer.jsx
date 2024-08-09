import React, { useState } from "react";
import "./SearchContainer.css";
import Card from "./Card";
import axios from "axios";

function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBooks = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyBJ4bH0jtAP7_hL0NIE-5-hxj04y2KYaAk&maxResults=20`
      )
      .then((res) => setBookData(res.data.items))
      .catch((error) => console.log(error));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBooks();
    }
  };

  const handleSearchButtonClick = () => {
    searchBooks();
  };

  return (
    <div className="container my-4" id="search-container">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-none shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="pb-4 display-4 fw-bold lh-1">
            Welcome to the Library !
          </h1>

          <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <form
              className="d-flex w-100"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-3 shadow-none w-100"
                type="search"
                placeholder="For Example: To Kill a Mockingbird"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="btn-lg px-3 fw-bold"
                onClick={handleSearchButtonClick}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-0 p-0 overflow-hidden">
          <img
            src="src/assets/library.png"
            className="card-img"
            alt="library image"
          />
        </div>
      </div>
      <Card bookData={bookData} />
    </div>
  );
}

export default SearchContainer;
