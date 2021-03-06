// Sum of the Items in an Array

// Create a function that takes an array and returns the sum of all items in the array.
// Examples

// sumArray([1, 2, 3]) ➞ 6
// // 1 + 2 + 3 = 6

// sumArray([1, [2, [1]], 3]) ➞ 7
// // 1 + 2 + 1 + 3 = 7

// Notes

// The item in an array can be another array.

function sumArray(arr){
  return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

console.log(sumArray([1, 2, 3])) //Output: 6

console.log(sumArray([1, [2, [1]], 3])) //Output: ➞ 7