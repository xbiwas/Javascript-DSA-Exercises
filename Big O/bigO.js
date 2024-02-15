// O(n): Linear time complexity - Iterating through an array
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

// O(n^2): Quadratic time complexity - Nested loops iterating through a 2D array
function nestedLoopExample(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
}

// O(1): Constant time complexity - Accessing an element in an array using its index
function accessElement(arr, index) {
  return arr[index];
}

// O(logn): Logarithmic time complexity - Binary search in a sorted array
function binarySearch(sortedArr, target) {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (sortedArr[mid] === target) {
      return mid; // Found
    } else if (sortedArr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1; // Not found
}
