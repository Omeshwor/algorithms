// Cube the Square Root

// Create a function that takes a number as an argument and returns the square root of that number cubed.
// Examples

// cubeSquareRoot(81) ➞ 729

// cubeSquareRoot(1646089) ➞ 2111932187

// cubeSquareRoot(695556) ➞ 580093704

// Notes

// All numbers will evenly square root, so don't worry about decimal numbers.

function cubeSquareRoot(num) {
	return Math.sqrt(Math.pow(num, 3))
  // cube = Math.pow(num, 3);

  // console.log(cube);
  // sqrRoot = Math.sqrt(cube);
  // console.log(sqrRoot);
}
console.log(cubeSquareRoot(81));