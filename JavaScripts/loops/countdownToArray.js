// Generate a Countdown of Numbers in an Array

// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
// Examples

// countdown(5) ➞ [5, 4, 3, 2, 1, 0]

// countdown(1) ➞ [1, 0]

// countdown(0) ➞ [0]

function countdown(start) {
  let x = start;
  arr = []
	while(x >= 0){
    arr.push(x);
    x--;
  }
  return arr;
}

console.log(countdown(5))// ➞ [5, 4, 3, 2, 1, 0]

console.log(countdown(1))// ➞ [1, 0]

console.log(countdown(0))// ➞ [0]