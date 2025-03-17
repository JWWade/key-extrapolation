import Chord from '../../types/chords/chord';
import { chordQualities } from '../../constants/chord-qualities';
import { HarmonicStructure } from '../keys/key-factory';

function CreateChordFromScale(chordRootNote: string, scale: string[], quality: string, extensions: string[] = [], harmonicStructure : HarmonicStructure): Chord {
  return {
    name: chordRootNote,
    notes: GetNotes(chordRootNote, scale, quality, extensions, harmonicStructure),
    quality: GetShortChordQualityName(quality) ?? quality,
    extensions: extensions
  };
}

// Construct the chord by taking every other note from the scale
function GetTriad(scale: string[], harmonicStructure : HarmonicStructure): string[] {
  const offset : number = harmonicStructure === HarmonicStructure.Ternary ? 2 : 3;
  const triad = [];
  for (let i = 0; i < 3; i++) {
    triad.push(scale[i * offset]);
  }

  console.log(`triad: ${triad[0]}-${triad[1]}-${triad[2]}`);

  return triad;
}

function GetNotes(rootNote: string, scale: string[], quality: string, extensions: string[], harmonicStructure: HarmonicStructure): string[] {
  const fullQuality = Object.keys(chordQualities).find(key => chordQualities[key as keyof typeof chordQualities].shortName === quality) ?? quality;
  const chordQuality = chordQualities[fullQuality as keyof typeof chordQualities];
  if (!chordQuality) {
    throw new Error(`Chord quality '${quality}' not found`);
  }

  // Rotate the scale so that rootNote is the first element
  const rootIndex = scale.indexOf(rootNote);
  if (rootIndex === -1) {
    throw new Error(`Root note '${rootNote}' not found in scale`);
  }
  
  const rotatedScale = [...scale.slice(rootIndex), ...scale.slice(0, rootIndex)];
  
  console.log(`scale for ${rootNote}${quality}_${harmonicStructure}: ${rotatedScale}`);

  const chordNotes = GetTriad(rotatedScale, harmonicStructure);

  // For now, ignoring extensions
  return chordNotes;
}

function GetShortChordQualityName(quality: string): string | undefined {
  const match = Object.keys(chordQualities)
    .map(key => chordQualities[key as keyof typeof chordQualities])
    .find((q: { name: string; shortName: string }) => q.name === quality);
  return match ? match.shortName : undefined;
}

export { CreateChordFromScale, GetNotes, GetShortChordQualityName };
