// Converting Objects to Arrays

// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// Examples

// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// Notes

// Return an empty array if the object is empty.

function toArray(obj) {
  arr = []
	for(const [key, value] of Object.entries(obj)){
    arr.push([key, value])
  }
  return arr;
}

console.log(toArray({ a: 1, b: 2 }));

console.log(toArray({ shrimp: 15, tots: 12 }));

console.log(toArray({}));