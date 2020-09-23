// Travelling Salesman Problem

// A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home.

// Return the total number of possible paths a salesman can travel, given n cities.
// Examples

// paths(4) ➞ 24

// paths(1) ➞ 1

// paths(9) ➞ 362880

// Notes

// Inspired by a video from Dr. Peter Uelkes.

function paths(num){
  if (num < 1){
    return 1;
  }
  return num*paths(num - 1);
}

console.log(paths(1));
console.log(paths(4));
console.log(paths(9));