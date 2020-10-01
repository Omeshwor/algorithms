// Seven Boom!

// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
function sevenBoom(arr){
  const regex = (/[7]/g);
  x = arr.toString();
  return x.match(regex)? "Boom!" : "there is no 7 in the array"
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))// ➞ "Boom!"

console.log(sevenBoom([8, 6, 33, 100]))// ➞ "there is no 7 in the array"

console.log(sevenBoom([2, 55, 60, 97, 86]))// ➞ "Boom!"