// Instant JAZZ
// Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr){
  for (var i in arr){
    if (!arr[i].includes(7)){
      arr[i] = arr[i]+7
    }
  }
  return arr
}

// Examples
console.log(jazzify(["G", "F", "C"])) // ➞ ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])) // ➞ []
// Notes
// Return an empty array if the given array is empty.
// You can expect all the tests to have valid chords.