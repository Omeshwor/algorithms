// Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2){
  return str1.endsWith(str2)
}
// Examples
console.log(checkEnding("abc", "bc"))// ➞ true

console.log(checkEnding("abc", "d"))// ➞ false

console.log(checkEnding("samurai", "zi"))// ➞ false

console.log(checkEnding("feminine", "nine"))// ➞ true

console.log(checkEnding("convention", "tio"))// ➞ false
// Notes
// All test cases are valid one word strings.