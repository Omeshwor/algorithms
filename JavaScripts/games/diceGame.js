// Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.
function diceGame(arr){
  let total = 0;
  for(var i in arr){
    if (arr[i][0] === arr[i][1]){
      return 0;
    }
    total += arr[i][0] + arr[i][1]
  }
  return total;
}

// Examples
console.log(diceGame([[1, 2], [3, 4], [5, 6]])) // ➞ 21

console.log(diceGame([[1, 1], [5, 6], [6, 4]])) // ➞ 0

console.log(diceGame([[4, 5], [4, 5], [4, 5]])) // ➞ 27
console.log(diceGame([[1, 3], [4, 3], [5, 5]]))
// Notes
// Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
// John only has two dice and will always give you outcomes for three rounds.