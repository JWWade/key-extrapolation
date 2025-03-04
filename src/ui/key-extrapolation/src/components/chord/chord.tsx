import React from "react";
import { CreateChord } from "../../utilities/chords/chord-factory.ts";
import { twelveTone } from '../../constants/tone-systems.ts';
import "./chord.css";

type ChordProps = Readonly<{
  name: string;
  quality: string;
}>;

function GetNotes(notes: string[]) {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={note}>{note}</div>
      ))}
    </div>
  );
}

const Chord = ({ name, quality }: ChordProps) => {
  const chord = CreateChord(name, twelveTone, quality, []);
  return (
    <div className="chord-wrapper">
      <div className="chord-container">
        {chord.name}
      </div>
      {GetNotes(chord.notes)}
    </div>
  );
};

export default Chord;
