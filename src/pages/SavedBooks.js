import React from "react";
import { useOutletContext } from "react-router-dom";

const SavedBooks = () => {
  const { savedBooks } = useOutletContext();

  return (
    <div>
      <p>Saved books here!</p>
    </div>
  );
};

export default SavedBooks;
