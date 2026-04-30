const { quickSortIterative } = require('./quick-sort');
const { performance } = require('perf_hooks');

const ARRAY_SIZE = 10000;
const originalArray = Array.from({ length: ARRAY_SIZE }, () =>
  Math.floor(Math.random() * 100000),
);

console.log(`--- Benchmarking Sort Algorithms (${ARRAY_SIZE} elements) ---`);

// Benchmark QuickSort Iterative
const arr1 = [...originalArray];
const startQS = performance.now();
quickSortIterative(arr1);
const endQS = performance.now();
const timeQS = endQS - startQS;

console.log(`quickSortIterative: ${timeQS.toFixed(4)}ms`);

// Benchmark Built-in .sort()
// Note: We use a comparator (a, b) => a - b because the default .sort()
// converts elements to strings before comparing.
const arr2 = [...originalArray];
const startBuiltIn = performance.now();
arr2.sort((a, b) => a - b);
const endBuiltIn = performance.now();
const timeBuiltIn = endBuiltIn - startBuiltIn;

console.log(`Built-in .sort():   ${timeBuiltIn.toFixed(4)}ms`);

const ratio = (timeQS / timeBuiltIn).toFixed(2);
console.log(
  `\nResult: Built-in .sort() is approximately ${ratio}x faster than quickSortIterative.`,
);
