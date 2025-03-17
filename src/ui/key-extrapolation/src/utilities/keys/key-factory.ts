import { CreateScale } from '../scales/scale-factory';
import { CreateChordFromScale } from '../chords/chord-factory';
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
  const intervals = keyIntervals[keyQuality];
  const scale = CreateScale(rootNote, twelveTone, intervals);
  const chordQualities = keyQualities[keyQuality as keyof typeof keyQualities].chordQualities;

  return {
    name: `${rootNote}${keyQuality}`,
    scale: scale,
    chords: scale.map(note => CreateChordFromScale(note, scale, chordQualities[scale.indexOf(note)], [], harmonicStructure)),
    scaleDegrees: keyQualities[keyQuality as keyof typeof keyQualities].scaleDegrees
  };
}

export { CreateKey, HarmonicStructure };
