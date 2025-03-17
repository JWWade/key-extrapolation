import React from "react";
import { CreateChordFromScale } from "../../utilities/chords/chord-factory";
import "./chord.css";
import Notes from "./components/notes";
import { HarmonicStructure } from "../../utilities/keys/key-factory";

type ChordProps = Readonly<{
  name: string;
  scale: string[];
  quality: string;
  scaleDegree: string;
  harmonicStructure : HarmonicStructure;
}>;

const Chord = ({ name, scale, quality, scaleDegree, harmonicStructure }: ChordProps) => {
  const chord = CreateChordFromScale(name, scale, quality, [], harmonicStructure);
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
