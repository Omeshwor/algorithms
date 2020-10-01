// Iterated Square Root

// The iterated square root of a number is the number of times the square root function must be applied to bring the number strictly under 2.

// Given an integer, return its iterated square root. Return "invalid" if it is negative.
// Examples

function iSqrt(n){
  if (n < 0){
    return "invalid"
  }
  let count = 0
  while(n >= 2){
    n = Math.sqrt(n)
    count++
  }
  return count;
}

// console.log(Math.sqrt(256))

console.log(iSqrt(1)) //➞ 0

console.log(iSqrt(2)) //➞ 1

console.log(iSqrt(7))//➞ 2

console.log(iSqrt(27))// ➞ 3

console.log(iSqrt(256))//) ➞ 4

console.log(iSqrt(-1))// ➞ "invalid"