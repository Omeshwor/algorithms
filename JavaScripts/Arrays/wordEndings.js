// Word Endings
// Create a function that adds a string ending to each member in an array.
function addEnding(arr, ending){
  const map1 = arr.map(str => str+ending);
  return map1;
}
// Examples
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"))
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

console.log(addEnding(["new", "pander", "scoop"], "er"))
// ➞ ["newer", "panderer", "scooper"]

console.log(addEnding(["bend", "sharpen", "mean"], "ing"))
// ➞ ["bending", "sharpening", "meaning"]