// Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

function shiftToLeft(x, y) {
	return x * Math.pow(2, y)
}


// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

// Examples
console.log(shiftToLeft(5, 2))// ➞ 20

console.log(shiftToLeft(10, 3))// ➞ 80

console.log(shiftToLeft(-32, 2))// ➞ -128

console.log(shiftToLeft(-6, 5))// ➞ -192

console.log(shiftToLeft(12, 4))// ➞ 192

console.log(shiftToLeft(46, 6))// ➞ 2944
// Notes
// There will be no negative values for the second parameter y.
// This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
// Optionally, you can solve this challenge via recursion.
// A recursive version of this challenge can be found here.