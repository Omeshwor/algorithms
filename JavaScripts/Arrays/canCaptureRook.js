// Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture(arr){
  arr1 = arr[0].split('');
  arr2 = arr[1].split('');
  return (arr1[0] === arr2[0] || arr1[1] === arr2[0] || arr2[1] === arr1[1])
}
// Examples
console.log(canCapture(["A8", "E8"]))// ➞ true

console.log(canCapture(["A1", "B2"]))// ➞ false

console.log(canCapture(["H4", "H3"]))// ➞ true

console.log(canCapture(["F5", "C8"]))// ➞ false
// Notes
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).