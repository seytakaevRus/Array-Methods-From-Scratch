import { forEachFromScratch } from '../utils';

type ForEachInput1 = number;

describe('Testing implementation forEach from scratch', () => {
  test('Calculate sum via forEachFromScratch', () => {
    const forEachInput1 = [1, 2, 3, 4, 5, 6];
    const forEachOutput1 = 21;

    let sum = 0;

    forEachFromScratch(forEachInput1, (value: ForEachInput1) => (sum += value));

    expect(sum).toBe(forEachOutput1);
  });
});
