// All Numbers in Array Are Prime

// Create a function thats takes an array of integers and returns true if every number is prime. Otherwise, return false.
// Examples

// all_prime([7, 5, 2, 4, 6]) ➞ false

// all_prime([2, 3, 5, 7, 13, 17, 19, 23, 29]) ➞ true

// all_prime([1, 5, 3]) ➞ false

function test_prime(n){
  if (n === 1){
    return false;
  }
  else if ( n === 2){
    return true;
  }
  else {
    for (var x = 2; x < n; x++){
      if (n % x === 0){
        return false;
      }
    }
  return true;
  }
}

function allPrime(nums) {
  return nums.every(test_prime)
}
