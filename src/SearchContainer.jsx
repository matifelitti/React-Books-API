import React from "react";
import "./SearchContainer.css";

function SearchContainer() {
  return (
    <div className="container my-4" id="search-container">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border-none shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="pb-4 display-4 fw-bold lh-1">
            Welcome to the Library !
          </h1>

          <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <form className="d-flex" role="search">
              <input
                className="form-control me-3 shadow-none"
                type="search"
                placeholder="For Example: To Kill a Mockingbird"
                aria-label="Search"
              ></input>
              <button type="button" className="btn-lg px-3 fw-bold">
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
          ></img>
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
