import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card col-md-3 m-4 p-4">
      <img
        src="src/assets/book cover example.png"
        className="card-img-top"
        alt="book image"
      ></img>
      <div className="card-body">
        <h5 className="card-title">Book title</h5>
        <p className="card-text">Text</p>
      </div>
    </div>
  );
}

export default Card;
