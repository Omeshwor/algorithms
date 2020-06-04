// Analyze an array's values and print the average

function print_Average(givenArray) {
  var sum = 0;
  for (x = 0; x < givenArray.length; x++)
  {
    sum = sum + givenArray[x];
  }
  average = sum / givenArray.length;
  console.log(average);
  console.log(givenArray.length)
}

print_Average([4,6,10,8,9]);