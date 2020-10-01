// Return the Objects Keys and Values

// Create a function that takes an object and returns the keys and values as separate arrays.
// Examples
function keysAndValues(obj){
  let z = [];
  let y = [];
  //sort keys first
  x = Object.entries(obj).sort()
  x.forEach(element => (y.push(element[0]), z.push(element[1])))
  return [y,z];
}

// console.log(keysAndValues({ a: 1, b: 2, c: 3 }))
// ➞ [["a", "b", "c"], [1, 2, 3]]

// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }))
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Notes

// Remember to sort the keys.