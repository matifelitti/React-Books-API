import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img
          src="src/assets/logo.png"
          className="logo"
          alt="library image"
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link me-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-3" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
