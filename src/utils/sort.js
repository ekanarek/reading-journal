const sortByTitle = (booksArr) => {
  return [...booksArr].sort((a, b) => a.title.localeCompare(b.title));
};

export { sortByTitle };
