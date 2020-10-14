// Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(string){
  return string.split('').sort().join("")
}
// Examples
console.log(AlphabetSoup("hello"))// ➞ "ehllo"

console.log(AlphabetSoup("edabit"))// ➞ "abdeit"

console.log(AlphabetSoup("hacker"))// ➞ "acehkr"

console.log(AlphabetSoup("geek"))// ➞ "eegk"

console.log(AlphabetSoup("javascript"))// ➞ "aacijprstv"
// Notes
// You can assume numbers and punctuation symbols won't be included in test cases. You'll only have to deal with single word, alphabetic characters.