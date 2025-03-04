import Chord from '../../types/chords/chord';
import { keyIntervals } from '../../constants/intervals.ts';
import { CreateScale } from '../scales/scale-factory.ts';
import { chordQualities } from '../../constants/chord-qualities.ts';

function CreateChord(name: string, toneSystem: string[], quality: string, extensions: string[] = []): Chord {
  return {
    name: name,
    notes: GetNotes(name, toneSystem, quality, extensions),
    quality: quality,
    extensions: extensions
  };
}

// Construct the chord by taking every other note from the scale
function GetTriad(scale: string[]): string[] {
  return [scale[0], scale[2], scale[4]];
}

function GetNotes(rootNote: string, toneSystem: string[], quality: string, extensions: string[]): string[] {
  const isMinor = quality === 'minor';
  const scaleIntervals = isMinor ? keyIntervals.naturalMinor : keyIntervals[chordQualities[quality as keyof typeof chordQualities].name] || [];
  const scale = CreateScale(rootNote, toneSystem, scaleIntervals);

  const chordNotes = GetTriad(scale);

  // For now, ignoring extensions
  return chordNotes;
}

export { CreateChord, GetNotes };
