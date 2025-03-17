import Chord from "../chords/chord";

// Define the Key type
type Key = {
    name: string;
    scale: string[];
    chords: Chord[];
    scaleDegrees: string[];
  };

export default Key;
