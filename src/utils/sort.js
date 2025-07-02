const sortByDate = (booksArr, startOrFinish, descOrAsc) => {
  return [...booksArr].sort((a, b) => {
    return descOrAsc === "descending"
      ? new Date(b[startOrFinish]) - new Date(a[startOrFinish])
      : new Date(a[startOrFinish]) - new Date(b[startOrFinish]);
  });
};

const sortByTitle = (booksArr) => {
  return [...booksArr].sort((a, b) => a.title.localeCompare(b.title));
};

export { sortByDate, sortByTitle };
