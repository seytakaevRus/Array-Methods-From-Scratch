import { findFromScratch } from '../utils';

type FindInput1 = string;
type FindInput2 = {
  value: number;
  required: boolean;
};
type FindInput3 = {
  obj: {
    value: string;
  };
  amount: number;
}[];

describe('Testing implementation find from scratch', () => {
  test('Find string with length greater, than 5', () => {
    const findInput1 = ['1', '21', 'egergerg3', '4'];
    const findOutput1 = 'egergerg3';

    const result = findFromScratch(
      findInput1,
      (value: FindInput1) => value.length > 5,
    );

    expect(result).toEqual(findOutput1);
  });

  test('Find object, where value equals 666', () => {
    const filterInput2 = [
      { value: 1, required: true },
      { value: 2, required: false },
      { value: 3, required: true },
      { value: 4, required: false },
    ];
    const filterOutput2 = undefined;

    const result = findFromScratch(
      filterInput2,
      ({ value }: FindInput2) => value === 666,
    );

    expect(result).toEqual(filterOutput2);
  });

  test('Find object where value equals 3 and amount greater than 200', () => {
    const filterInput3 = [
      [{ obj: { value: '1' }, amount: 0 }],
      [{ obj: { value: '2' }, amount: 250 }],
      [{ obj: { value: '3' }, amount: 50 }],
      [{ obj: { value: '3' }, amount: 500 }],
      [{ obj: { value: '4' }, amount: 0 }],
    ];
    const filterOutput3 = [{ obj: { value: '3' }, amount: 500 }];

    const result = findFromScratch(filterInput3, (element: FindInput3) => {
      const { obj, amount } = element[0];

      return obj.value === '3' && amount > 200;
    });

    expect(result).toEqual(filterOutput3);
  });
});
