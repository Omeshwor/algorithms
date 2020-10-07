// Count the Letters and Digits
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
function countAll(str) {
  let countString = 0;
  let countDigits = 0;
  let regex = /[A-Z,a-z]/g
  let regexDigits = /[\d]/g
  if (regex.test(str)){
    // (str.match(regex).length) != null){
    countString = str.match(regex).length
  }
  if (regexDigits.test(str)){
    // (str.match(regexDigits).length) != null){
    countDigits = str.match(regexDigits).length;
  }
  obj = { LETTERS: countString, DIGITS: countDigits}
  return obj
}
// Examples
console.log(countAll("Hello World"))// ➞ { "LETTERS":  10, "DIGITS": 0 }

console.log(countAll("H3ll0 Wor1d"))// ➞ { "LETTERS":  7, "DIGITS": 3 }

console.log(countAll("149990"))// ➞ { "LETTERS": 0, "DIGITS": 6 }
// Notes
// Tests contain only alphanumeric characters.
// Spaces are not letters.
// All tests contain valid strings.