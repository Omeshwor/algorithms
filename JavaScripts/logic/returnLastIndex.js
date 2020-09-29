// Return Last Index

// Create a function that returns the last value of the last item in an array or string.
// Examples

// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined

// Notes

//     Arrays/strings will be of varying size.
//     Return undefined if array/string is emtpy.

function lastItem(input) {
  if (input.length < 1){
    return undefined;
  }
  if (typeof (input) === "string"){
    return input.charAt(input.length-1)
  }
  if (Array.isArray(input)){
    return input[input.length - 1];
  }
  
}

console.log(lastItem([0, 4, 19, 34, 50, -9, 2]))// ➞ 2

console.log(lastItem("The quick brown fox jumped over the lazy dog"))// ➞ "g"

console.log(lastItem([]))// ➞ undefined
console.log(lastItem(""));