import React from 'react';
import { CreateKey, HarmonicStructure } from '../../utilities/keys/key-factory';
import Chord from '../chord/chord';

type KeyProps = Readonly<{
  rootNote: string;
  quality: string;
  harmonicStructure: HarmonicStructure;
}>;

const Key = ({ rootNote, quality, harmonicStructure }: KeyProps) => {
  const key = CreateKey(rootNote, quality, harmonicStructure);
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <h1>{key.name}</h1>
      {key.chords.map((chord) => (
        <Chord
          key={`${chord.name}${chord.quality}-${key.chords.indexOf(chord)}`}
          name={chord.name}
          quality={chord.quality}
          scaleDegree={key.scaleDegrees[key.chords.indexOf(chord)]}
        />
      ))}
    </div>
  );
};

export default Key;
