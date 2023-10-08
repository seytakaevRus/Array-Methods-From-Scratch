type CommonCallback<T, K> = (value: T, index: number, array: T[]) => K;

type ForEachCallback<T> = CommonCallback<T, void>;
type MapCallback<T> = CommonCallback<T, T>;
type FilterCallback<T> = CommonCallback<T, boolean>;
type SomeCallback<T> = CommonCallback<T, boolean>;
type EveryCallback<T> = CommonCallback<T, boolean>;
type FindCallback<T> = CommonCallback<T, boolean>;

type ReduceFunction<T> = (
  accumulator: T,
  value: T,
  index: number,
  array: T[],
) => T;
type ReduceFunctionWithInitialValue<T, K> = (
  accumulator: K,
  value: T,
  index: number,
  array: T[],
) => K;

type ReduceMethod = {
  <T>(array: T[], callbackFn: ReduceFunction<T>): T;
  <T>(array: T[], callbackFn: ReduceFunction<T>, initialValue: T): T;
  <T, K>(
    array: T[],
    callbackFn: ReduceFunctionWithInitialValue<T, K>,
    initialValue: K,
  ): K;
};

function isTypeAEqualsTypeB<T, K>(a: T | K, b: T): a is T {
  return typeof a === typeof b;
}

export const forEachFromScratch = <T>(
  array: T[],
  callbackFn: ForEachCallback<T>,
): void => {
  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    callbackFn(array[index], index, array);
  }
};

export const mapFromScratch = <T>(
  array: T[],
  callbackFn: MapCallback<T>,
): T[] => {
  const results: T[] = [];

  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    results.push(callbackFn(array[index], index, array));
  }

  return results;
};

export const filterFromScratch = <T>(
  array: T[],
  callbackFn: FilterCallback<T>,
): T[] => {
  const results: T[] = [];

  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    if (callbackFn(array[index], index, array)) {
      results.push(array[index]);
    }
  }

  return results;
};

export const someFromScratch = <T>(
  array: T[],
  callbackFn: SomeCallback<T>,
): boolean => {
  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    if (callbackFn(array[index], index, array)) {
      return true;
    }
  }

  return false;
};

export const everyFromScratch = <T>(
  array: T[],
  callbackFn: EveryCallback<T>,
): boolean => {
  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    if (!callbackFn(array[index], index, array)) {
      return false;
    }
  }

  return true;
};

export const findFromScratch = <T>(
  array: T[],
  callbackFn: FindCallback<T>,
): T | undefined => {
  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  for (let index = 0; index < array.length; index++) {
    if (callbackFn(array[index], index, array)) {
      return array[index];
    }
  }

  return undefined;
};

export const reduceFromScratch: ReduceMethod = <T, K>(
  array: T[],
  callbackFn: ReduceFunction<T> | ReduceFunctionWithInitialValue<T, K>,
  initialValue?: T | K,
) => {
  if (typeof callbackFn !== 'function') {
    throw new Error('callbackFn is not a function');
  }

  if (isTypeAEqualsTypeB(initialValue, array[0])) {
    let accumulator = initialValue;

    for (let index = 0; index < array.length; index++) {
      const tempCallback = callbackFn as ReduceFunction<T>;

      accumulator = tempCallback(accumulator, array[index], index, array);
    }

    return accumulator;
  }

  if (initialValue !== undefined) {
    let accumulator = initialValue as K;

    for (let index = 0; index < array.length; index++) {
      const tempCallback = callbackFn as ReduceFunctionWithInitialValue<T, K>;

      accumulator = tempCallback(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  let accumulator = array[0];

  for (let index = 1; index < array.length; index++) {
    const tempCallback = callbackFn as ReduceFunction<T>;

    accumulator = tempCallback(accumulator, array[index], index, array);
  }

  return accumulator;
};
