import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4" id="about-container">
            <h3 className="display-6 fw-bold mb-3">About the Library</h3>
            <p className="lead">
              In this library, you can search for books of your interest and see
              information about them. You also have the possibility to read the
              entire book by pressing the READ button in the modal!
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="src/assets/about.png"
            className="img-fluid rounded shadow-sm"
            alt="library illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
