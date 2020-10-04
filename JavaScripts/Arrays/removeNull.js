// Remove Null from an Array
// Create a function to remove all null values from an array.

const removeNull = (arr) => {
  for(var i = 0; i < arr.length; i++){
    if (arr[i] === null){
      arr.splice(i,1)
      i = i -1;
    }
  }
  return arr;
}
// Examples
console.log(removeNull(["a", null, "b", null]))// ➞ ["a", "b"]

console.log(removeNull([null, null, null, null, null]))// ➞ []

console.log(removeNull([7, 8, null, 9]))// ➞ [7, 8, 9]
