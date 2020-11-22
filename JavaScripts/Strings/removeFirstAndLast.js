// Remove the First and Last Characters

// Create a function that removes the first and last characters from a string.
// Examples
function removeFirstLast(str){
  if (str.length > 2){
    arr = str.split('')
    arr.shift();
    arr.pop();
    str = arr.join('');
  }
  return str;
}

console.log(removeFirstLast("hello"))// ➞ "ell"

console.log(removeFirstLast("maybe"))// ➞ "ayb"

console.log(removeFirstLast("benefit"))// ➞ "enefi"

console.log(removeFirstLast("a"))// ➞ "a"

// Notes

// If the string is 2 or fewer characters long, return the string itself (See Example #4).