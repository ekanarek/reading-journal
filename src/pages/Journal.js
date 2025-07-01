import React, { useState, useEffect } from "react";
import JournalCard from "../components/JournalCard";

const Journal = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/journal")
      .then((r) => r.json())
      .then((data) => setEntries(data));
  }, []);

  return (
    <div className="journal">
      {entries.map((entry) => (
        <JournalCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default Journal;
