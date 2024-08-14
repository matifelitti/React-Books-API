import React from "react";
import "./Modal.css";

const Modal = ({ show, item, close }) => {
  if (!show) {
    return null;
  }

  const thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="modal-overlay" role="dialog">
      <div className="modal-content">
        <div className="modal-header">
          <img src={thumbnail} alt="book image" />
          <h5 className="modal-title">{item.volumeInfo.title}</h5>
        </div>
        <div className="modal-body">
          <div className="content">
            <p>{item.volumeInfo.description}</p>
            <p>
              <strong>Authors:</strong> {item.volumeInfo.authors.join(", ")}
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={close}>
            Close
          </button>
          <a
            href={item.volumeInfo.previewLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button type="button" className="btn btn-primary">
              READ
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
