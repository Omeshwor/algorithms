// Special Arrays

// An array is special, if every even index contains an even number 
// and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.
// Examples

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
// // Index 2 has an odd number 9.

// isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
// // Index 3 has an even number 8.

function isSpecialArray(arr) {
  let bool = true;
  let i = 0;
  for (i = 0; i < arr.length - 1; i++){
    if (i % 2 == 0 ){
      if (arr[i] % 2 !== 0){
        return !bool
      }
    }
    if (i % 2 == 1){
      if (arr[i] % 2 !== 1){
        return !bool
      }
    }
  }
  return bool;
}


function isSpecialArray(arr) {
	return arr.every((n, i) => n % 2 === i % 2);
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));