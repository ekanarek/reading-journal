import React, { useState } from "react";

const JournalCard = ({ entry }) => {
  const { title, author, image, started, finished, rating, notes } = entry;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="journalCard" onClick={() => setIsClicked(!isClicked)}>
      <button className="deleteButton">X</button>
      {isClicked ? (
        <p>{notes}</p>
      ) : (
        <>
          <img alt={title} src={image} />
          <div>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <p>Date Started: {started}</p>
            <p>Date Finished: {finished}</p>
            <p>Rating: {rating}/5</p>
            <p>Click to see more</p>
          </div>
        </>
      )}
    </div>
  );
};

export default JournalCard;
