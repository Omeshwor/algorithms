// Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

function winRound(you, opp){
  let str = ""
  function twoDigits(arr){
  let max = 1;
  let secondMax = 1;
  let maxloc = 0;
    for (var i in arr){
      if (arr[i] > max){
        max = arr[i];
        maxloc = i
      }
    }
    for (var i in arr){
      if (arr[i] >= secondMax && arr[i] <= max && i != maxloc){
        secondMax = arr[i]
      }
    }
    return str = max.toString() + secondMax.toString();
    
  }
  let yourDigits = twoDigits(you)
  let oppDigits  = twoDigits(opp);
  console.log(yourDigits, oppDigits)
  if (yourDigits > oppDigits){
    return true;
  }
  else{
    return false;
  }
}

// Worked Example
// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) // ➞ true
// // Your cards can make the number 96
// // Your opponent can make the number 73
// // You win the round since 96 > 73
// Examples
console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) // ➞ true

console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])) // ➞ false

console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])) // ➞ false
console.log(winRound([3, 3, 3, 9, 9], [9, 0, 0, 6, 6]))
// Notes
// Return false if you and your opponent reach the same maximum number (see example #3).


function winRound(you, opp) {
	you.sort(function(a, b) {
  return b - a;
});
	
	opp.sort(function(a, b) {
  return b - a;
});
	
	return you.slice(0,2).join('') > opp.slice(0,2).join('');
}
