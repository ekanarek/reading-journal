import React from "react";
import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/AddForm.css";
import { Book } from "../types/Book";
import { Entry } from "../types/Entry";

interface AddFormContext {
  selectedBook: Book | null;
  handleAddEntry: (entry: Entry) => void;
}

type FormValues = {
  title: string;
  author: string;
  image: string;
  started: string;
  finished: string;
  rating: number;
  notes: string;
};

const AddForm: React.FC = () => {
  const { selectedBook, handleAddEntry } = useOutletContext<AddFormContext>();

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      title: selectedBook?.title ?? "",
      author: selectedBook?.author ?? "",
      image: selectedBook?.image ?? "",
      started: "",
      finished: "",
      rating: 0,
      notes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const newEntry: Entry = {
      ...data,
      rating: Number(data.rating),
    };
    handleAddEntry(newEntry);
    reset();
  };

  return (
    <div className="addFormContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Add A New Journal Entry</h3>
        <div className="formRow">
          <label>Title: </label>
          {selectedBook?.title ? (
            <input type="text" {...register("title")} readOnly disabled />
          ) : (
            <input type="text" {...register("title")} />
          )}
        </div>
        <div className="formRow">
          <label>Author: </label>
          {selectedBook?.author ? (
            <input type="text" {...register("author")} readOnly disabled />
          ) : (
            <input type="text" {...register("author")} />
          )}
        </div>
        <div className="formRow">
          <label>Cover Image URL: </label>
          <input type="text" {...register("image")} />
        </div>
        <div className="formRow">
          <label>Date Started: </label>
          <input type="date" {...register("started")} />
        </div>
        <div className="formRow">
          <label>Date Finished: </label>
          <input type="date" {...register("finished")} />
        </div>
        <div className="formRow">
          <label>Rating (1-5): </label>
          <input
            type="number"
            min="1"
            max="5"
            {...register("rating", { valueAsNumber: true })}
          />
        </div>
        <div className="formRow column">
          <textarea
            placeholder="Add your reading notes here..."
            rows={10}
            cols={50}
            {...register("notes")}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddForm;
