// nteger in Range?

// Create a function that validates whether a number n is exclusively within the bounds of lower and upper. Return false if n is not an integer.
// Examples


// Notes

//     Exclusively means that a number is considered not within the bounds if it is equal to the upper bound (see example #2).
//     Bounds will be always given as integers.

function intWithinBounds(n, lower, upper){
  if(!Number.isInteger(n)){
    return false
  }else {
    return (n >= lower && n < upper)
  }
}

console.log(intWithinBounds(3, 1, 9))// ➞ true)//

console.log(intWithinBounds(6, 1, 6))// ➞ false

console.log(intWithinBounds(4.5, 3, 8))// ➞ false
