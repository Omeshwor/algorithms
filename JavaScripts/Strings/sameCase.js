// Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

// Examples
function sameCase(str) {
  return str.toUpperCase() === str || str.toLowerCase() === str
}
console.log(sameCase("hello"))// ➞ true

console.log(sameCase("HELLO"))// ➞ true

console.log(sameCase("Hello"))// ➞ false

console.log(sameCase("ketcHUp"))// ➞ false