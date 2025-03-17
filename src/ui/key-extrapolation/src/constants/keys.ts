import { chordQualities } from "./chord-qualities";

export const keyQualities = {
    major: {
        name: 'major',
        scaleDegrees: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
        chordQualities: [
            chordQualities.major.shortName,
            chordQualities.minor.shortName,
            chordQualities.minor.shortName,
            chordQualities.major.shortName,
            chordQualities.major.shortName,
            chordQualities.minor.shortName,
            chordQualities.diminished.shortName],
    },
    naturalMinor: {
        name: 'naturalMinor',
        scaleDegrees: ['i', 'ii°', 'III', 'iv', 'v', 'VI', 'VII'],
        chordQualities: [
            chordQualities.minor.shortName,
            chordQualities.diminished.shortName,
            chordQualities.major.shortName,
            chordQualities.minor.shortName,
            chordQualities.minor.shortName,
            chordQualities.major.shortName,
            chordQualities.major.shortName],
    },
    harmonicMinor: {
        name: 'harmonicMinor',
        scaleDegrees: ['i', 'ii°', 'III+', 'iv', 'V', 'VI', 'vii°'],
        chordQualities: [
            chordQualities.minor.shortName,
            chordQualities.diminished.shortName,
            chordQualities.major.shortName,
            chordQualities.minor.shortName,
            chordQualities.major.shortName,
            chordQualities.major.shortName,
            chordQualities.diminished.shortName],
    },
    diminished: {
        name: 'diminished',
        scaleDegrees: ['i°', 'ii°', '♭III°', 'iv°', 'v°', '♭vi°', '♭vii°', '°'],
        chordQualities: [
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName,
            chordQualities.diminished.shortName],
    },
};
