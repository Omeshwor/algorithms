// Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

const reverse = (str) => {
  arr = str.split('');
  return arr.reverse().join('')
}
// Examples
console.log(reverse("Hello World"))// ➞ "dlroW olleH"
//
console.log(reverse("The quick brown fox."))// ➞ ".xof nworb kciuq ehT"

console.log(reverse("Edabit is really helpful!"))// ➞ "!lufpleh yllaer si tibadE"
// Notes
// You can expect a valid string for all test cases.