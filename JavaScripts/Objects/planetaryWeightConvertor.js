// Planetary Weight Converter
// In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

// To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

// weight on planetA / gravitational force of planetA * gravitational force of planetB

const Planet = {
  Mercury: 3.7,
  Venus:	8.87,
  Earth:	9.81,
  Mars:	3.711,
  Jupiter:	24.79,
  Saturn:	10.44,
  Uranus:	8.69,
  Neptune:	11.15
  }
// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.
function spaceWeights(planetA, weight, planetB){
  return (weight / Planet[planetA] * Planet[planetB]).toFixed(2) * 1
}
// Examples
console.log(spaceWeights("Earth", 1, "Mars"))// ➞ 0.38

console.log(spaceWeights("Earth", 1, "Jupiter"))// ➞ 2.53

console.log(spaceWeights("Earth", 1, "Neptune"))// ➞ 1.14
// Notes
// N/A