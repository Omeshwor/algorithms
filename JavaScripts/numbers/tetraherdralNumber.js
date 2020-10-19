// Find the nth Tetrahedral Number
// Create a function that takes an integer n and returns the nth tetrahedral number.
function tetra(n){
  let t = 0;
  return (n * (n + 1) * (n + 2))/ 6
}
// Alternative Text

// Examples
console.log(tetra(2))// ➞ 4

console.log(tetra(5) )//➞ 35

console.log(tetra(6) )//➞ 56
// Notes
// There is a formula for the nth tetrahedral number.