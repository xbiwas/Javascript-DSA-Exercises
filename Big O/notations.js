const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Omega (Best Case): Finding number 1
function findNumber1(arr, target) {
  return arr.indexOf(target);
}

// Theta (Average Case): Finding number 6
function findNumber6(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Not found
}

// Oh (Worst Case): Finding number 11
function findNumber11(arr, target) {
  return arr.lastIndexOf(target);
}

// Example usage
console.log(findNumber1(numbers, 1)); // Output: 0
console.log(findNumber6(numbers, 6)); // Output: 5
console.log(findNumber11(numbers, 11)); // Output: 10
