import { someFromScratch } from '../utils';

type SomeInput1 = number;
type SomeInput2 = {
  value: number | string;
  required: boolean;
};
type SomeInput3 = {
  obj: {
    value: string;
  };
  amount: number;
}[];

describe('Testing implementation some from scratch', () => {
  test('Is some string in array', () => {
    const someInput1 = [1, 2, 3, 4, 5, 6];
    const someOutput1 = false;

    const result = someFromScratch(
      someInput1,
      (value: SomeInput1) => typeof value === 'string',
    );

    expect(result).toEqual(someOutput1);
  });

  test('Is some string in object and it object is required', () => {
    const someInput2 = [
      { value: 1, required: true },
      { value: 2, required: false },
      { value: 3, required: true },
      { value: 'secret', required: false },
      { value: 'right', required: true },
    ];
    const someOutput2 = true;

    const result = someFromScratch(
      someInput2,
      ({ value, required }: SomeInput2) =>
        typeof value === 'string' && required,
    );

    expect(result).toEqual(someOutput2);
  });

  test('Is amount in object is greater, than 100', () => {
    const someInput3 = [
      [{ obj: { value: '1' }, amount: 0 }],
      [{ obj: { value: '2' }, amount: 10 }],
      [{ obj: { value: '3' }, amount: 50 }],
      [{ obj: { value: '4' }, amount: 250 }],
    ];
    const someOutput3 = true;

    const result = someFromScratch(someInput3, (element: SomeInput3) => {
      const { amount } = element[0];

      return amount > 100;
    });

    expect(result).toEqual(someOutput3);
  });
});
