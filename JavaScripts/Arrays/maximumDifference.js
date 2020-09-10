// Maximum Difference

// Given an array of integers, return the difference between the largest and smallest integers in the array.
// Examples

// difference([10, 15, 20, 2, 10, 6]) ➞ 18
// // 20 - 2 = 18

// difference([-3, 4, -9, -1, -2, 15]) ➞ 24
// // 15 - (-9) = 24

// difference([4, 17, 12, 2, 10, 2]) ➞ 15

function difference(nums) {
  var max = nums[0];
  var min = nums[0];
  for (var x = 0; x < nums.length; x++){
    if (nums[x] > max){
      max = nums[x];
    }
    if (nums[x] < min){
      min = nums[x];
    }
  }
  return max - min;
}
console.log(difference([10, 15, 20, 2, 10, 6]));
console.log(difference([-3, 4, -9, -1, -2, 15]));
console.log(difference([4, 17, 12, 2, 10, 2]));