import { keyQualities } from './keys.ts';

const W = 2; // whole step
const H = 1; // half step

export const keyIntervals: { [key: string]: number[] } = {
    [keyQualities.major.name]: [W, W, H, W, W, W, H],
    [keyQualities.naturalMinor.name]: [W, H, W, W, H, W, W],
    [keyQualities.harmonicMinor.name]: [W, H, W, W, H, W, W],
    [keyQualities.melodicMinor.name]: [W, H, W, W, W, W, H],
    [keyQualities.diminished.name]: [W, W, W, W, W, W, W],
    [keyQualities.quartal.name]: [W, W, H, W, W, W, H],
};
