import React from "react";
import "./About.css";

function About() {
  return (
    <div className="container my-4 mt-5">
      <div
        className="row p-4 pb-0 pe-lg-0 pt-lg-5 justify-content-md-start rounded-3 border-none shadow-lg"
        id="about-container"
      >
        <h1 className="display-4 fw-bold lh-2">About to the Library !</h1>
        <h5>
          In this library you can search for books of your interest and see
          information about it. You also have the possibility to read the entire
          book by pressing the READ button in the modal !
        </h5>
      </div>
    </div>
  );
}

export default About;
