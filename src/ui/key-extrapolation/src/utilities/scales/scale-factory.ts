function CreateScale(rootNote: string, toneSystem: string[], intervals: number[]): string[] {
  const rootIndex = toneSystem.indexOf(rootNote);
  if (rootIndex === -1) {
    throw new Error('Root note not found in tone system');
  }

  const scale = [rootNote];
  let currentIndex = rootIndex;

  for (let i = 0; i < intervals.length - 1; i++) {
    currentIndex = (currentIndex + intervals[i]) % toneSystem.length;
    scale.push(toneSystem[currentIndex]);
  }

  return scale;
}

export { CreateScale };
