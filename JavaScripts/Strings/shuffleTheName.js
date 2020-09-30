// Shuffle the Name

// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
// Examples

// nameShuffle("Donald Trump") ➞ "Trump Donald"

// nameShuffle("Rosie O'Donnell") ➞ "O'Donnell Rosie"

// nameShuffle("Seymour Butts") ➞ "Butts Seymour"

function nameShuffle(str){
  arr = str.split(" ");
  str2 = arr[1].concat(' ',arr[0]);
  return str2;
}


function nameShuffle(str){
  return str.split(' ').reverse().join(' ');
}
console.log(nameShuffle("Donald Trump"))// ➞ "Trump Donald"

console.log(nameShuffle("Rosie O'Donnell"))// ➞ "O'Donnell Rosie"

console.log(nameShuffle("Seymour Butts"))// ➞ "Butts Seymour"