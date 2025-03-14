import Chord from "../chords/chord";

// Define the Key type
type Key = {
    name: string;
    chords: Chord[];
    scaleDegrees: string[];
  };

export default Key;
