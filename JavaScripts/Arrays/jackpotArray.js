// Hitting the Jackpot

// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Examples
function testJackpot(arr){
  for (var i = 0; i < arr.length; i++){
    if (arr[0] === arr[i]){
      continue;
    }
    return false;
  }
  return true;
}
console.log(testJackpot(["@", "@", "@", "@"]))// ➞ true

console.log(testJackpot(["abc", "abc", "abc", "abc"]))// ➞ true

console.log(testJackpot(["SS", "SS", "SS", "SS"]))// ➞ true

console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))// ➞ false

console.log(testJackpot(["SS", "SS", "SS", "Ss"]))// ➞ false

// Notes

// The elements must be exactly identical for there to be a jackpot.