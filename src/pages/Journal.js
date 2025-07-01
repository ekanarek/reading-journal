import React, { useState, useEffect } from "react";
import JournalCard from "../components/JournalCard";

const Journal = () => {
  const journalAPI = "http://localhost:3001/journal/";

  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch(journalAPI)
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, []);

  const deleteEntry = (entry) => {
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
    <div className="journal">
      {entries.map((entry) => (
        <JournalCard key={entry.id} entry={entry} handleDelete={deleteEntry} />
      ))}
    </div>
  );
};

export default Journal;
