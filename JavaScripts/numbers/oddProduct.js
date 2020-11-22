// Product of All Odd Integers

// Create a function that returns the product of all odd integers in an array.
// Examples
function oddProduct(arr){
  let product = 1;
  for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 ===1){
      product *= arr[i]
    }
  }
  return product;
}

console.log(oddProduct([3, 4, 1, 1, 5]) )// ➞ 15

console.log(oddProduct([5, 5, 8, 2, 4, 32]) )// ➞ 25

console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])  )//➞ 1

