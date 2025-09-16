import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/AddForm.css";
import { Book } from "../types/Book";
import { Entry } from "../types/Entry";

interface AddFormContext {
  selectedBook: Book | null;
  handleAddEntry: (entry: Entry) => void;
}

const AddForm: React.FC = () => {
  const { selectedBook, handleAddEntry } = useOutletContext<AddFormContext>();

  const [title, setTitle] = useState<string>(selectedBook?.title ?? "");
  const [author, setAuthor] = useState<string>(selectedBook?.author ?? "");
  const [image, setImage] = useState<string>(selectedBook?.image ?? "");
  const [startDate, setStartDate] = useState<string>("");
  const [finishedDate, setFinishedDate] = useState<string>("");
  const [rating, setRating] = useState<number | "">("");
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEntry = {
      title: title,
      author: author,
      image: image,
      started: startDate,
      finished: finishedDate,
      rating: Number(rating),
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
          {selectedBook?.title ? (
            <input type="text" value={title} readOnly disabled />
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
          {selectedBook?.author ? (
            <input type="text" value={author} readOnly disabled />
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
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>
        <div className="formRow column">
          <textarea
            placeholder="Add your reading notes here..."
            rows={10}
            cols={50}
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
