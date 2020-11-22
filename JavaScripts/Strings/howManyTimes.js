// Edaaaaabit

// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
// Examples

function howManyTimes(n){
  let x = "a";
  x = x.repeat(n);
  return "Ed"+x+"bit"
}

console.log(howManyTimes(5))// ➞ "Edaaaaabit"

console.log(howManyTimes(0))// ➞ "Edbit"

console.log(howManyTimes(12))// ➞ "Edaaaaaaaaaaaabit"

// Notes

//     The string must start with "Ed" and end with "bit".
//     You'll only be given integers as test input.