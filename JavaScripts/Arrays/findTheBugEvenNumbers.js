// Find the Bug: Checking Even Numbers

// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }

// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
// Examples

// checkAllEven([1, 2, 3, 4]) ➞ false

// checkAllEven([2, 4, 6]) ➞ true

// checkAllEven([5, 6, 8, 10]) ➞ false

// checkAllEven([-2, 2, -2, 2]) ➞ true

function checkAllEven(arr) {
	const modulo = (val) => val % 2 === 0
  return arr.every(modulo);
}

checkAllEven([1, 2, 3, 4])
checkAllEven([2, 4, 6])
checkAllEven([5, 6, 8, 10])
checkAllEven([-2, 2, -2, 2])
