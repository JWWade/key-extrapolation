import Chord from '../../types/chords/chord';
import { keyIntervals } from '../../constants/intervals';
import { CreateScale } from '../scales/scale-factory';
import { chordQualities } from '../../constants/chord-qualities';

function CreateChord(chordRootNote: string, toneSystem: string[], quality: string, extensions: string[] = []): Chord {
  return {
    name: chordRootNote,
    notes: GetNotes(chordRootNote, toneSystem, quality, extensions),
    quality: GetShortChordQualityName(quality) ?? quality,
    extensions: extensions
  };
}

// Construct the chord by taking every other note from the scale
function GetTriad(scale: string[]): string[] {
  const triad = [];
  for (let i = 0; i < 3; i++) {
    triad.push(scale[i * 2]);
  }
  return triad;
}

function GetNotes(rootNote: string, toneSystem: string[], quality: string, extensions: string[]): string[] {
  const isMinor = quality === 'minor' || quality === 'min';
  const fullQuality = Object.keys(chordQualities).find(key => chordQualities[key as keyof typeof chordQualities].shortName === quality) ?? quality;
  const chordQuality = chordQualities[fullQuality as keyof typeof chordQualities];
  if (!chordQuality) {
    throw new Error(`Chord quality '${quality}' not found`);
  }
  const scaleIntervals = isMinor ? keyIntervals.naturalMinor : keyIntervals[chordQuality.name] || [];
  const scale = CreateScale(rootNote, toneSystem, scaleIntervals);

  const chordNotes = GetTriad(scale);

  // For now, ignoring extensions
  return chordNotes;
}

function GetShortChordQualityName(quality: string): string | undefined {
  const match = Object.keys(chordQualities)
    .map(key => chordQualities[key as keyof typeof chordQualities])
    .find((q: { name: string; shortName: string }) => q.name === quality);
  return match ? match.shortName : undefined;
}

export { CreateChord, GetNotes, GetShortChordQualityName };
