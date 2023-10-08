import { reduceFromScratch } from '../utils';

describe('Testing implementation reduce from scratch', () => {
  test('Reduce without initial value', () => {
    const someInput1 = [1, 2, 3, 4, 5, 6];
    const someOutput1 = 21;

    const result = reduceFromScratch(
      someInput1,
      (acc: number, value: number) => {
        acc += value;

        return acc;
      },
    );

    expect(result).toEqual(someOutput1);
  });

  test('Reduce with initial value', () => {
    const someInput2 = [1, 2, 3, 4, 5, 6];
    const someOutput2 = 100;

    const result = reduceFromScratch(
      someInput2,
      (acc: number, value: number) => {
        acc += value;

        return acc;
      },
      79,
    );

    expect(result).toEqual(someOutput2);
  });

  test('Reduce with initial value, but has another type from first element of array', () => {
    const someInput3 = [1, 2, 3, 4, 5, 6];
    const someOutput3 = [21];

    const result = reduceFromScratch(
      someInput3,
      (acc: number[], value: number) => {
        acc[0] += value;

        return acc;
      },
      [0],
    );

    expect(result).toEqual(someOutput3);
  });
});
