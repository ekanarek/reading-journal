const sortByDate = (booksArr, startOrFinish) => {
  return [...booksArr].sort(
    (a, b) => new Date(b[startOrFinish]) - new Date(a[startOrFinish])
  );
};

const sortByTitle = (booksArr) => {
  return [...booksArr].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByAuthor = (booksArr) => {
  return [...booksArr].sort((a, b) => a.author.localeCompare(b.author));
};

const sortByRating = (booksArr, highOrLow) => {
  return [...booksArr].sort((a, b) =>
    highOrLow === "low" ? a.rating - b.rating : b.rating - a.rating
  );
};

export { sortByDate, sortByTitle, sortByAuthor, sortByRating };
