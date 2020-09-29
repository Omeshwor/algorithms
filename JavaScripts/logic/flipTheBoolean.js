// Flip the Boolean

// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
// Examples

// reverse(true) ➞ false

// reverse(false) ➞ true

// reverse(0) ➞ "boolean expected"

// reverse(null) ➞ "boolean expected"

function reverse(bool) {
	if (typeof(bool) === "boolean"){
    return !bool
  }
  else
    return "boolean expected"
}
// Terniary Method
function reverse(bool){
  return (typeof(bool) === "boolean") ? (!bool) : "boolean expected"
}

console.log(reverse(true))//

console.log(reverse(false))//

console.log(reverse(0))//

console.log(reverse(null))//