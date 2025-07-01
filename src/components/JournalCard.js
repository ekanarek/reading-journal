import React from "react";

const JournalCard = ({ entry }) => {
  const { title, author, image, started, finished, rating, notes } = entry;

  return (
    <div className="journalCard">
      <img alt={title} src={image} />
      <div>
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Date Started: {started}</p>
        <p>Date Finished: {finished}</p>
        <p>Rating: {rating}/5</p>
        <p>Click to see more</p>
      </div>
    </div>
  );
};

export default JournalCard;
