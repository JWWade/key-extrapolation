import { CreateScale } from '../scales/scale-factory';
import { CreateChord } from '../chords/chord-factory';
import Key from '../../types/keys/keys';
import { keyIntervals } from '../../constants/intervals';
import { twelveTone } from '../../constants/tone-systems';
import { keyQualities } from '../../constants/keys';

// TODO: move to types
enum HarmonicStructure {
  Ternary = 'ternary',
  Quartal = 'quartal'
}

function CreateKey(rootNote: string, keyQuality: string, harmonicStructure: HarmonicStructure): Key {
  const scaleIntervals = keyIntervals[keyQuality];
  const scale = CreateScale(rootNote, twelveTone, scaleIntervals);
  console.log(scale);
  const chordQualities = keyQualities[keyQuality as keyof typeof keyQualities].chordQualities;
  const chords = scale.map(note => CreateChord(note, twelveTone, chordQualities[scale.indexOf(note)]));
  const scaleDegrees = keyQualities[keyQuality as keyof typeof keyQualities].scaleDegrees;

  return {
    name: `${rootNote}${keyQuality}`,
    chords: chords,
    scaleDegrees: scaleDegrees
  };
}

export { CreateKey, HarmonicStructure };
