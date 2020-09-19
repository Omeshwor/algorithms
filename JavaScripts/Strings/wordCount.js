// Get Word Count

// Create a function that takes a string and returns the word count. The string will be a sentence.
// Examples

// countWords("Just an example here move along") ➞ 6

// countWords("This is a test") ➞ 4

// countWords("What an easy task, right") ➞ 5

function countWords(str) {
  const words = str.split(' ');
  return words.length;
}

console.log(countWords("Just an example here move along"));

countWords("This is a test")

countWords("What an easy task, right")