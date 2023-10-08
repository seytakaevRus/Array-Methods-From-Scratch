import { filterFromScratch } from '../utils';

type FilterInput1 = number;
type FilterInput2 = {
  value: number;
  required: boolean;
};
type FilterInput3 = {
  obj: {
    value: string;
  };
  amount: number;
}[];

describe('Testing implementation filter from scratch', () => {
  test('Filtering array of even elements', () => {
    const filterInput1 = [1, 2, 3, 4, 5, 6];
    const filterOutput1 = [2, 4, 6];

    const result = filterFromScratch(
      filterInput1,
      (value: FilterInput1) => value % 2 === 0,
    );

    expect(result).toEqual(filterOutput1);
  });

  test('Filtering array of objects with required property', () => {
    const filterInput2 = [
      { value: 1, required: true },
      { value: 2, required: false },
      { value: 3, required: true },
      { value: 4, required: false },
    ];

    const filterOutput2 = [
      { value: 1, required: true },
      { value: 3, required: true },
    ];

    const result = filterFromScratch(
      filterInput2,
      ({ required }: FilterInput2) => required,
    );

    expect(result).toEqual(filterOutput2);
  });

  test('Filtering array of objects with amount greater then 100', () => {
    const filterInput3 = [
      [{ obj: { value: '1' }, amount: 0 }],
      [{ obj: { value: '2' }, amount: 250 }],
      [{ obj: { value: '3' }, amount: 50 }],
      [{ obj: { value: '4' }, amount: 0 }],
    ];
    const filterOutput3 = [[{ obj: { value: '2' }, amount: 250 }]];

    const result = filterFromScratch(filterInput3, (element: FilterInput3) => {
      const { amount } = element[0];

      return amount > 100;
    });

    expect(result).toEqual(filterOutput3);
  });
});
