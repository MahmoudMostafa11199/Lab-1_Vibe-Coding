// Helper to validate that the input is a valid array of numbers
function validateInput(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (typeof val !== 'number' || Number.isNaN(val)) {
      throw new TypeError(`Invalid element at index ${i}: ${val}. Array must contain only valid numbers.`);
    }
  }
}

// Function to implement the quick sort algorithm (in-place version)
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  // Perform validation only on the initial public call (one argument provided)
  if (arguments.length <= 1) {
    validateInput(arr);
  }

  if (low < high) {
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

// Iterative version of Quick Sort
function quickSortIterative(arr) {
  validateInput(arr);

  // Stack to store start and end indices
  let stack = [];

  // Push initial boundaries
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length > 0) {
    // Pop high and low
    let high = stack.pop();
    let low = stack.pop();

    // Partition the array
    let pi = partition(arr, low, high);

    // If there are elements on the left side of pivot, push to stack
    if (pi - 1 > low) {
      stack.push(low);
      stack.push(pi - 1);
    }

    // If there are elements on the right side of pivot, push to stack
    if (pi + 1 < high) {
      stack.push(pi + 1);
      stack.push(high);
    }
  }
  return arr;
}

// Example usage
const array1 = [3, 6, 8, 10, 1, 2, 1];
console.log('Recursive:', quickSort([...array1])); // Output: [1, 1, 2, 3, 6, 8, 10]

const array2 = [3, 6, 8, 10, 1, 2, 1];
console.log('Iterative:', quickSortIterative([...array2])); // Output: [1, 1, 2, 3, 6, 8, 10]

module.exports = {
  quickSort,
  quickSortIterative,
};
