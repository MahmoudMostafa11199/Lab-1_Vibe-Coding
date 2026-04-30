const { quickSort, quickSortIterative } = require('./quick-sort');

describe('QuickSort Implementation Tests', () => {
  const algorithms = [
    { name: 'Recursive QuickSort', fn: quickSort },
    { name: 'Iterative QuickSort', fn: quickSortIterative },
  ];

  algorithms.forEach(({ name, fn }) => {
    describe(`${name}`, () => {
      test('should return an empty array when input is empty', () => {
        expect(fn([])).toEqual([]);
      });

      test('should return the same array for an array with one element', () => {
        const input = [42];
        expect(fn([...input])).toEqual([42]);
      });

      test('should return the same array for an already sorted array', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
        expect(fn([...input])).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });

      test('should correctly sort a reverse-sorted array', () => {
        const input = [7, 6, 5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5, 6, 7];
        expect(fn([...input])).toEqual(expected);
      });

      test('should correctly sort an array with duplicate elements', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
        const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
        expect(fn([...input])).toEqual(expected);
      });

      test('should correctly sort a large array of random numbers', () => {
        const size = 1000;
        const largeArray = Array.from({ length: size }, () =>
          Math.floor(Math.random() * 10000),
        );

        const expected = [...largeArray].sort((a, b) => a - b);
        const result = fn([...largeArray]);

        expect(result).toEqual(expected);
      });
    });
  });

  describe('Input Validation', () => {
    test('should throw TypeError if input is not an array', () => {
      expect(() => quickSort(null)).toThrow(TypeError);
      expect(() => quickSortIterative(undefined)).toThrow(TypeError);
      expect(() => quickSort('string')).toThrow(TypeError);
    });

    test('should throw TypeError if array contains invalid numeric types', () => {
      expect(() => quickSort([1, '2', 3])).toThrow(TypeError);
      expect(() => quickSortIterative([1, null, 3])).toThrow(TypeError);
      expect(() => quickSort([1, undefined, 3])).toThrow(TypeError);
      expect(() => quickSortIterative([1, NaN, 3])).toThrow(TypeError);
      expect(() => quickSort([1, { num: 2 }, 3])).toThrow(TypeError);
    });
  });
});
