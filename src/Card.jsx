import React from "react";
import "./Card.css";

function Card({ bookData }) {
  return (
    <div className="row m-5 justify-content-center">
      {bookData.map((item) => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const title = item.volumeInfo.title || "No Title Available";
        const authors = item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown Author";
        if (thumbnail != undefined) {
          return (
            <div key={item.id} className="card col-md-3 mx-3 my-3">
              <img
                src={thumbnail}
                className="card-img-top mx-auto m-3 p-3"
                alt="book image"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-5 text-center">{title}</h5>
                <p className="card-text text-center">{authors}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Card;
