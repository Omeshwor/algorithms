// Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.
function additiveInverse(arr){
  let arr1 = []
  for (var i in arr){
    arr1.push(-arr[i])
  }
  return arr1
  
}
// Examples
console.log(additiveInverse([5, -7, 8, 3]))// ➞ [-5, 7, -8, -3]

console.log(additiveInverse([1, 1, 1, 1, 1]))// ➞ [-1, -1, -1, -1, -1]

console.log(additiveInverse([-5, -25, 35]))// ➞ [5, 25, -35]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.