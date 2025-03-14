import React from "react";
import { CreateChord } from "../../utilities/chords/chord-factory";
import { twelveTone } from '../../constants/tone-systems';
import "./chord.css";
import Notes from "./components/notes";

type ChordProps = Readonly<{
  name: string;
  quality: string;
  scaleDegree: string;
}>;

const Chord = ({ name, quality, scaleDegree }: ChordProps) => {
  const chord = CreateChord(name, twelveTone, quality, []);
  return (
    <div className="chord-wrapper">
      <div className="chord-scale-degree">
        {scaleDegree}
      </div>
      <div className="chord-container">
        {`${chord.name}${chord.quality}`}
      </div>
      <Notes notes={chord.notes} />
    </div>
  );
};

export default Chord;
