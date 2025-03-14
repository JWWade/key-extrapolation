import { CreateScale } from './scale-factory';
import { keyIntervals } from '../../constants/intervals';
import { twelveTone } from '../../constants/tone-systems';

describe('CreateScale', () => {
  const toneSystem = twelveTone;

  test('should create a major scale starting from C', () => {
    const intervals = keyIntervals.major;
    const expectedScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    expect(CreateScale('C', toneSystem, intervals)).toEqual(expectedScale);
  });

  test('should create a major scale starting from G', () => {
    const intervals = keyIntervals.major;
    const expectedScale = ['G', 'A', 'B', 'C', 'D', 'E', 'G♭'];
    expect(CreateScale('G', toneSystem, intervals)).toEqual(expectedScale);
  });

  test('should throw an error if the root note is not in the tone system', () => {
    const intervals = keyIntervals.major;
    expect(() => CreateScale('H', toneSystem, intervals)).toThrow('Root note not found in tone system');
  });

  test('should create a natural minor scale starting from A', () => {
    const intervals = keyIntervals.naturalMinor;
    const expectedScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    expect(CreateScale('A', toneSystem, intervals)).toEqual(expectedScale);
  });

  test('should create a natural minor scale starting from C', () => {
    const intervals = keyIntervals.naturalMinor;
    const expectedScale = ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'];
    expect(CreateScale('C', toneSystem, intervals)).toEqual(expectedScale);
  });

  test('should create a harmonic minor scale starting from C', () => {
    const intervals = keyIntervals.harmonicMinor;
    const expectedScale = ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B'];
    expect(CreateScale('C', toneSystem, intervals)).toEqual(expectedScale);
  });
  
  test('should create a diminished scale starting from C', () => {
    const intervals = keyIntervals.diminished;
    const expectedScale = ['C', 'D', 'E♭', 'F', 'G♭', 'A♭', 'A', 'B'];
    expect(CreateScale('C', toneSystem, intervals)).toEqual(expectedScale);
  });
});
