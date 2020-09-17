// Convert Key, Values in an Object to Array

// Write a function that converts an object into an array of keys and values.
// Examples

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function objectToArray(obj) {
  let arr = []
	for (const [key, value] of Object.entries(obj)){
    arr.push([key, value])
  }
  return arr
}

function objectToArray(obj) {
	return Object.keys(obj).map(key => [key, obj[key]])
}
console.log(objectToArray({
  D: 1,
  B: 2,
  C: 3
}))
