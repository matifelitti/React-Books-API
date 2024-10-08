import React, { useState } from "react";
import "./Card.css";
import Modal from "./Modal";

function Card({ bookData }) {
  const [show, setShow] = useState(false);
  const [book, setBook] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setBook(item);
    setShow(true);
  };

  return (
    <div className="row justify-content-center mb-4">
      {bookData.map((item) => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const title = item.volumeInfo.title || "No Title Available";
        const authors = item.volumeInfo.authors
          ? item.volumeInfo.authors.join(", ")
          : "Unknown Author";
        if (thumbnail) {
          return (
            <div
              key={item.id}
              className="card mt-4 mx-4"
              onClick={() => handleShow(item)}
            >
              <img
                src={thumbnail}
                className="card-img-top mx-auto m-2 p-2"
                alt="book image"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-6 text-center">{title}</h5>
                <p className="card-text text-center">{authors}</p>
              </div>
            </div>
          );
        }
        return null;
      })}

      {book && <Modal show={show} item={book} close={handleClose} />}
    </div>
  );
}

export default Card;
