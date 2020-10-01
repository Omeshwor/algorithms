// Square Every Digit

// Create a function that squares every digit of a number.
// Examples
function squareDigits(num){
  // convert number to string
  let x = num.toString()
  // console.log(x);
  // split string
  let y = x.split("");
  // console.log(y)
  // convert string[each] number
  // square number 
  let z = []
  y.forEach(element => z.push(Math.pow(element, 2)))
  // console.log(z)
  return parseInt(z.join(""));
  
  // convert number to string
  // add strings 
  // convert string to num

}
console.log(squareDigits(9119))// ➞ 811181

console.log(squareDigits(2483))// ➞ 416649

console.log(squareDigits(3212))// ➞ 9414

// Notes

// The function receives an integer and must return an integer.