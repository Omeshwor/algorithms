// Given an array, print the max, min and average values for that array.

function print_min_max_avg(givenArray) {
  var max = givenArray[0];
  var min = givenArray[0];
  var sum = 0;
  var average = 0;
  
  for (x = 0; x < givenArray.length; x++)
  {
    if (givenArray[x] > max)
      {
        max = givenArray[x];
      }
    if (givenArray[x] < min)
      {
        min = givenArray[x];
      }
    sum = sum + givenArray[x];
  }
  
  average = sum/givenArray.length;
  console.log("Max = ", max);
  console.log("Min = ", min);
  console.log("Average = ", average);
}

print_min_max_avg([11,5,6,2,4,8]);
