// Find the Discount
// Create a function that takes two arguments: the final price and the discount percentage as integers and returns the final price after the discount.

// Alternative Text
function dis(price, discount){
  let x = (price * discount)/100
  //To fixed returns a string, Add *1 to return as integer
  return (price - x).toFixed(2)*1;
}

// Examples
console.log(dis(1500, 50))// ➞ 750

console.log(dis(89, 20))// ➞ 71.2

console.log(dis(100, 75))// ➞ 25
console.log(dis(593, 61))
// Notes
// Your answer should be rounded to two decimal places.