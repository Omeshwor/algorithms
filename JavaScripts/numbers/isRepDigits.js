// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.
function isRepdigit(n){
  let arr = n.toString().split('')
  const x = (val) => val === arr[0];
  return arr.every(x);
}
// Examples
console.log(isRepdigit(66))// ➞ true

console.log(isRepdigit(0))// ➞ true

console.log(isRepdigit(-11))// ➞ false
// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.