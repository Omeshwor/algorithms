// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of adjectives used. Given an object with a list of adjectives, return the total amount of adjectives used.
function totalAmountAdjectives(obj){
  let count = 0;
  Object.values(obj).forEach(element => count++)
  return count;
}

// Examples
console.log(totalAmountAdjectives({ a: "moron" }))// ➞ 1

console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }))// ➞ 3

console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }))// ➞ 4
// Notes
// The list will never be empty (no empty object).