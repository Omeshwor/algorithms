// Return the Four Letter Strings

// Create a function that takes an array of strings and returns the words that are exactly four letters.
// Examples
function isFourLetters(arr){
  newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length == 4){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"])) // ➞ ["Pair"]

console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])) // ➞ ["Bear"]

console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])) //➞ ["Ryan", "Matt"]