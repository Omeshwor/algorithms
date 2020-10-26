// Snail Goes Up the Stairs
// A snail goes up the stairs. Every step, he must go up the step, then go across // to the next step. He wants to reach the top of the tower.

// Write a function that returns the distance the snail must travel to the top of // the tower given the height and length of each step and the height of the tower.

// Examples
console.log(totalDistance(0.2, 0.4, 100.0))// ➞ 300.0
// // Total distance is 300.

console.log(totalDistance(0.3, 0.2, 25.0))// ➞ 41.7

console.log(totalDistance(0.1, 0.1, 6.0))// ➞ 12.0
console.log(totalDistance(0.12, 0.1, 10.0)) //, 18.3
// Notes
// All given values are greater than 0.
// Round answers to the nearest tenth 0.1.
// Number of steps determined by tower height divided by stair height.
// For the purposes of this exercise, the last step's length must be counted to // complete the journey.

function totalDistance(height, length, tower) {
	let numberStair = 0;
  numberOfStair = tower / height;
  totaldistance = numberOfStair * (height + length);
  return totaldistance.toFixed(1)*1;
}