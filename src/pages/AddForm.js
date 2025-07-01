import React from "react";
import { useOutletContext } from "react-router-dom";

const AddForm = () => {
  const { selectedBook } = useOutletContext();
  console.log(selectedBook);

  return (
    <div>
      <p>Form here</p>
    </div>
  );
};

export default AddForm;
