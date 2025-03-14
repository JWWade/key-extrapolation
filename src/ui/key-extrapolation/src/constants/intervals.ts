import { keyQualities } from './keys';

const H = 1; // half step
const W = 2; // whole step
const W_H = 3; // whole step + half step

export const keyIntervals: { [key: string]: number[] } = {
    [keyQualities.major.name]: [W, W, H, W, W, W, H],
    [keyQualities.naturalMinor.name]: [W, H, W, W, H, W, W],
    [keyQualities.harmonicMinor.name]: [W, H, W, W, H, W_H, H],
    [keyQualities.diminished.name]: [W, H, W, H, W, H, W, H],
    [keyQualities.quartal.name]: [W, W, H, W, W, W, H],
};
