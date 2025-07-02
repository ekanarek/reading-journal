import React, { useState, useEffect } from "react";
import JournalCard from "../components/JournalCard";
import { sortByTitle } from "../utils/sort";
import "../styles/Journal.css";

const journalAPI = "http://localhost:3001/journal/";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [sortedBy, setSortedBy] = useState("finished");

  useEffect(() => {
    fetch(journalAPI)
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, []);

  const sortedEntries = () => {
    switch (sortedBy) {
      case "finished":
        return entries;
      case "started":
        return entries;
      case "title":
        return sortByTitle(entries);
      default:
        return entries;
    }
  };

  const handleDelete = (entry) => {
    if (
      window.confirm(
        "Are you sure you would like to delete? This cannot be undone."
      )
    ) {
      fetch(journalAPI + entry.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((r) => r.json())
        .then(setEntries(entries.filter((e) => e.id !== entry.id)));
    }
  };

  return (
    <div>
      <label>Sort by: </label>
      <select onChange={(e) => setSortedBy(e.target.value)}>
        <option value="finished">Date Finished</option>
        <option value="started">Date Started</option>
        <option value="title">Title</option>
      </select>
      <div className="journalGrid">
        {sortedEntries().map((entry) => (
          <JournalCard
            key={entry.id}
            entry={entry}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Journal;
