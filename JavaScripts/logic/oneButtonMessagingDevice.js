// One Button Messaging Device

// Imagine a messaging device with only one button. For the letter A, you press the button one time, for E, you press it five times, for G, 
// it's pressed seven times, etc, etc.

// Write a function that takes a string (the message) and returns the total number of times the button is pressed.
// Examples

// howManyTimes("abde") ➞ 12

// howManyTimes("azy") ➞ 52

// howManyTimes("qudusayo") ➞ 123

// Notes

//     Ignore spaces.
//     The given string argument will be in lower case.

var anum={
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
  l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
  u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
}
function howManyTimes(msg) {
  let sum = 0
  arr = msg.split('');
  arr.forEach(element => sum += (anum[element]));
  return sum;

}

const howManyTimes = msg => [...msg].reduce((a,v) => a + v.charCodeAt()-96, 0);