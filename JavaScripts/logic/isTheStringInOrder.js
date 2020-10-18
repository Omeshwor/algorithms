// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str){
  arr = str.split('').sort().join('')
  return arr === str;
}
// Examples
console.log(isInOrder("abc"))// ➞ true

console.log(isInOrder("edabit"))// ➞ false

console.log(isInOrder("123"))// ➞ true

console.log(isInOrder("xyzz"))// ➞ true