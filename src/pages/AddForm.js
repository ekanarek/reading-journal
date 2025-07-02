import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AddForm.css";

const AddForm = () => {
  const { selectedBook, handleAddEntry } = useOutletContext();

  const [title, setTitle] = useState(
    selectedBook.title ? selectedBook.title : ""
  );
  const [author, setAuthor] = useState(
    selectedBook.author ? selectedBook.author : ""
  );
  const [image, setImage] = useState(
    selectedBook.image ? selectedBook.image : ""
  );
  const [startDate, setStartDate] = useState("");
  const [finishedDate, setFinishedDate] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      title: title,
      author: author,
      image: image,
      started: startDate,
      finished: finishedDate,
      rating: rating,
      notes: notes,
    };
    handleAddEntry(newEntry);
  };

  return (
    <div className="addFormContainer">
      <form onSubmit={handleSubmit}>
        <h3>Add A New Journal Entry</h3>
        <div className="formRow">
          <label>Title: </label>
          {selectedBook.title ? (
            <input type="text" value={title} readOnly="readOnly" disabled />
          ) : (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
        </div>
        <div className="formRow">
          <label>Author: </label>
          {selectedBook.author ? (
            <input type="text" value={author} readOnly="readOnly" disabled />
          ) : (
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          )}
        </div>
        <div className="formRow">
          <label>Cover Image URL: </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="formRow">
          <label>Date Started: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="formRow">
          <label>Date Finished: </label>
          <input
            type="date"
            value={finishedDate}
            onChange={(e) => setFinishedDate(e.target.value)}
          />
        </div>
        <div className="formRow">
          <label>Rating (1-5): </label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="formRow column">
          <textarea
            placeholder="Add your reading notes here..."
            rows="10"
            cols="50"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddForm;
