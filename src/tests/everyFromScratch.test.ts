import { everyFromScratch } from '../utils';

type EveryInput1 = string;
type EveryInput2 = {
  value: number | string;
  required: boolean;
};
type EveryInput3 = {
  obj: {
    value: string;
  };
  amount: number;
}[];

describe('Testing implementation every from scratch', () => {
  test('Is every value is string in array', () => {
    const everyInput1 = ['1', '2', '3', '4', '5', '6'];
    const everyOutput1 = true;

    const result = everyFromScratch(
      everyInput1,
      (value: EveryInput1) => typeof value === 'string',
    );

    expect(result).toEqual(everyOutput1);
  });

  test('Is every object is required', () => {
    const everyInput2 = [
      { value: 1, required: true },
      { value: 2, required: false },
      { value: 3, required: true },
      { value: 'secret', required: false },
      { value: 'right', required: true },
    ];
    const everyOutput2 = false;

    const result = everyFromScratch(
      everyInput2,
      ({ required }: EveryInput2) => required,
    );

    expect(result).toEqual(everyOutput2);
  });

  test('Is every amount in object is greater, than 100', () => {
    const everyInput3 = [
      [{ obj: { value: '1' }, amount: 110 }],
      [{ obj: { value: '2' }, amount: 10 }],
      [{ obj: { value: '3' }, amount: 50 }],
      [{ obj: { value: '4' }, amount: 250 }],
    ];
    const everyOutput3 = false;

    const result = everyFromScratch(everyInput3, (element: EveryInput3) => {
      const { amount } = element[0];

      return amount > 100;
    });

    expect(result).toEqual(everyOutput3);
  });
});
