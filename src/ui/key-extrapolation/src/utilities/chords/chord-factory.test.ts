import { CreateChordFromScale } from './chord-factory';
import { HarmonicStructure } from '../keys/key-factory';

describe('CreateChord', () => {
  test('should create a major chord starting from C', () => {
    const chord = CreateChordFromScale('C', ['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'major', [], HarmonicStructure.Ternary);
    const expectedChord = {
      name: 'C',
      notes: ['C', 'E', 'G'], // Assuming GetTriad returns these notes
      quality: 'maj',
      extensions: []
    };
    expect(chord).toEqual(expectedChord);
  });

  test('should create a minor chord starting from A', () => {
    const chord = CreateChordFromScale('A', ['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'minor', [], HarmonicStructure.Ternary);
    const expectedChord = {
      name: 'A',
      notes: ['A', 'C', 'E'], // Assuming GetTriad returns these notes
      quality: 'min',
      extensions: []
    };
    expect(chord).toEqual(expectedChord);
  });

  test('should throw an error for an unknown chord quality', () => {
    expect(() => CreateChordFromScale('C', ['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'unknownQuality', [], HarmonicStructure.Ternary)).toThrow("Chord quality 'unknownQuality' not found");
  });

  test('should create a chord with extensions', () => {
    const chord = CreateChordFromScale('C', ['C', 'D', 'E', 'F', 'G', 'A', 'B'], 'major', ['7'], HarmonicStructure.Ternary);
    const expectedChord = {
      name: 'C',
      notes: ['C', 'E', 'G'], // Assuming GetTriad returns these notes
      quality: 'maj',
      extensions: ['7']
    };
    expect(chord).toEqual(expectedChord);
  });
});
