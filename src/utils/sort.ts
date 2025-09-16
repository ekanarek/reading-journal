import { Entry } from "../types/Entry";

const sortByDate = (
  booksArr: Entry[],
  startOrFinish: "finished" | "started"
) => {
  return [...booksArr].sort(
    (a, b) =>
      new Date(b[startOrFinish]).getTime() -
      new Date(a[startOrFinish]).getTime()
  );
};

const sortByTitle = (booksArr: Entry[]) => {
  return [...booksArr].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByAuthor = (booksArr: Entry[]) => {
  return [...booksArr].sort((a, b) => a.author.localeCompare(b.author));
};

const sortByRating = (booksArr: Entry[], highOrLow: "low" | "high") => {
  return [...booksArr].sort((a, b) =>
    highOrLow === "low" ? a.rating - b.rating : b.rating - a.rating
  );
};

export { sortByDate, sortByTitle, sortByAuthor, sortByRating };
