import React from "react";
import "../chord.css";

interface NotesProps {
  notes: string[];
}

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={`${note}-${notes.indexOf(note)}`}>{note}</div>
      ))}
    </div>
  );
};

export default Notes; 