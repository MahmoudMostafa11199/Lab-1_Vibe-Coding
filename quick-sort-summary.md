# Quick Sort — Summary

## Overview

This document summarizes the implementation found in `quick-sort.js`. The function `quickSort(arr)` is a recursive implementation of the Quick Sort algorithm that partitions the input array around a pivot, recursively sorts the partitions, and returns the concatenated result.

## Algorithm Steps (concise)

- Base case: If `arr.length <= 1`, return `arr`.
- Choose a pivot (this implementation uses the last element).
- Partition all elements except the pivot into two arrays:
  - `left`: elements strictly less than the pivot
  - `right`: elements greater than or equal to the pivot
- Recurse: return `quickSort(left) + pivot + quickSort(right)`.

## Pivot Selection

- Current strategy: deterministic — pick the last element of the array slice as the pivot (`arr[arr.length - 1]`).
- Equal elements are placed in `right` (since the code uses `if (arr[i] < pivot) left.push(...) else right.push(...)`).

## Consequences of Last-Element Pivot

- Simplicity: easy to implement and understand.
- Performance:
  - Average-case: O(n log n) on randomish inputs.
  - Worst-case: O(n^2) when the pivot is consistently the smallest or largest (e.g., already sorted or reverse-sorted arrays).
- Memory: Not in-place — creates `left` and `right` arrays, increasing memory usage.
- Stability: Not stable; equal items may change their relative order.

## Improvements / Alternatives

- Random pivot: pick a random index to reduce chance of worst-case on adversarial inputs.
- Median-of-three: use the median of first/middle/last to choose a better pivot for partially-sorted inputs.
- In-place partitioning (Lomuto or Hoare): reduces memory overhead by avoiding extra arrays.
- Handle equals explicitly (three-way partitioning) to improve performance on arrays with many duplicates.

## Example

Input: `[3, 6, 8, 10, 1, 2, 1]` — Output: `[1, 1, 2, 3, 6, 8, 10]`

---

File: Labs/quick-sort.js (original implementation)
