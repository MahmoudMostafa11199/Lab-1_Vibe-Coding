# Quick Sort Summary

Quick Sort is an in-place divide-and-conquer algorithm.
It chooses a pivot element and partitions the array into:

- elements less than the pivot on the left
- elements greater than or equal to the pivot on the right

The algorithm recursively sorts the left and right subarrays until the entire array is sorted.

## Partition

- Uses the last element as the pivot
- Moves smaller elements before the pivot
- Returns the pivot's final index

## QuickSort

- Recursively sorts subarrays around the pivot
- Base case: subarray of size 0 or 1 is already sorted

## Example

`[3, 6, 8, 10, 1, 2, 1]` becomes `[1, 1, 2, 3, 6, 8, 10]`
\*/
