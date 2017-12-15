function random(n) {
  return (Math.random() * n) | 0;
}

export function fuzzySortAssert(sortRoutine, inPlace) {
  let assertCount = random(100);
  while (assertCount--) {
    const unsorted = Array.from({ length: random(100) }).map(() => random(3000));
    const sorted = [...unsorted].sort((a, b) => a - b);
    if (inPlace) {
      sortRoutine(unsorted);
      expect(unsorted).toEqual(sorted);
    } else {
      expect(sortRoutine(unsorted)).toEqual(sorted);
    }
  }
}
