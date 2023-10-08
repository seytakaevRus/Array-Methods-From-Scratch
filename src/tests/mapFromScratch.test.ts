import { mapFromScratch } from '../utils';

type MapInput1 = number;
type MapInput2 = {
  value: number;
};
type MapInput3 = {
  obj: {
    value: string;
  };
}[];

describe('Testing implementation map from scratch', () => {
  test('Mapping simple array', () => {
    const mapInput1 = [1, 2, 3, 4, 5, 6];
    const mapOutput1 = [2, 4, 6, 8, 10, 12];

    const result = mapFromScratch(mapInput1, (value: MapInput1) => value * 2);

    expect(result).toEqual(mapOutput1);
  });

  test('Mapping array with objects', () => {
    const mapInput2 = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
    const mapOutput2 = [{ value: 5 }, { value: 6 }, { value: 7 }, { value: 8 }];

    const result = mapFromScratch(mapInput2, ({ value }: MapInput2) => ({
      value: value + 4,
    }));

    expect(result).toEqual(mapOutput2);
  });

  test('Mapping array with crazy data', () => {
    const mapInput3 = [
      [{ obj: { value: '1' } }],
      [{ obj: { value: '2' } }],
      [{ obj: { value: '3' } }],
      [{ obj: { value: '4' } }],
    ];
    const mapOutput3 = [
      [{ obj: { value: '10' } }],
      [{ obj: { value: '20' } }],
      [{ obj: { value: '30' } }],
      [{ obj: { value: '40' } }],
    ];

    const result = mapFromScratch(mapInput3, (element: MapInput3) => {
      const value = Number(element[0].obj.value) * 10;

      return [
        {
          obj: {
            value: String(value),
          },
        },
      ];
    });

    expect(result).toEqual(mapOutput3);
  });
});
