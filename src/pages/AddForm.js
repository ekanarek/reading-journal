import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const AddForm = () => {
  const { selectedBook } = useOutletContext();
  console.log(selectedBook);

  const [image, setImage] = useState(selectedBook.image);

  return (
    <div>
      <form>
        <h3>Add A New Journal Entry</h3>
        <label>Title: </label>
        <input type="text" value={selectedBook.title} readOnly="readOnly" />
        <label>Author: </label>
        <input type="text" value={selectedBook.author} readOnly="readOnly" />
        <label>Cover Image URL: </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AddForm;
