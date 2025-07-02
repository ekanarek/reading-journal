import React, { useState } from "react";
import "../styles/JournalCard.css";

const JournalCard = ({ entry, handleDelete }) => {
  const { title, author, image, started, finished, rating, notes } = entry;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="journalCard" onClick={() => setIsClicked(!isClicked)}>
      <button
        className="deleteButton"
        onClick={(e) => {
          e.stopPropagation();
          handleDelete(entry);
        }}
      >
        X
      </button>
      <img alt={title} src={image} />
      <div className="journalDetails">
        {isClicked ? (
          <p>{notes}</p>
        ) : (
          <>
            <p>
              <strong>Title:</strong> {title}
            </p>
            <p>
              <strong>Author:</strong> {author}
            </p>
            <p>
              <strong>Date Started:</strong> {started}
            </p>
            <p>
              <strong>Date Finished:</strong> {finished}
            </p>
            <p>
              <strong>Rating:</strong> {rating}/5
            </p>
          </>
        )}
      </div>
      <div className="clickForMore">
        Click to see {isClicked ? "book details" : "notes"}
      </div>
    </div>
  );
};

export default JournalCard;
