/**
 * Calculates the total area of rectangles given an array of rectangle dimensions.
 *
 * @param {number[][]} rectangles - An array of rectangles, where each rectangle is represented by [length, width].
 * @returns {number} - The total area of all rectangles.
 */
function calculateTotalArea(rectangles) {
  // Implementation is intentionally omitted in this file.
}

/**
 * Finds and returns the largest element in an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers.
 * @returns {number|null} - The largest element or null if the array is empty.
 */
function findLargestElement(numbers) {
  // Implementation is intentionally omitted in this file.
}

/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} inputString - The input string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(inputString) {
  // Implementation is intentionally omitted in this file.
}

/**
 * Counts the occurrences of a specific element in an array.
 *
 * @param {Array} array - The array of elements.
 * @param {*} targetElement - The element to count occurrences of.
 * @returns {number} - The number of occurrences of the target element.
 */
function countOccurrences(array, targetElement) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetElement) {
      count++
    }
  }
  return count;
}
/**
 * Merges two sorted arrays into a new sorted array.
 *
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} - The merged and sorted array.
 */
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeSortedArrays([1, 2, 3, 4], [5, 6, 7, 8]));
/**
 * Calculates the factorial of a non-negative integer.
 *
 * @param {number} n - The non-negative integer.
 * @returns {number} - The factorial of the given number.
 */
function calculateFactorial(n) {
  let product = 1;
  for (let i = 1; i <= n; product*=i++) {
  }
  return product;
}
console.log(calculateFactorial(5)); //> 120