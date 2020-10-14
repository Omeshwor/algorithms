// Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.
const inkLevels = (obj) => {
  return Math.min(...Object.values(obj))
}
// Examples
console.log(inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
}))// ➞ 10

console.log(inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
}))// ➞ 432

console.log(inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
}))// ➞ 0
// Notes
// A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).