// Given an array and a value of Y, count and print the number of array values greater than Y
function greater_than_Y(givenArray, Y) {
  var max = Y;
  var count = 0;
  for( x = 0; x < givenArray.length; x++ )
    {
      if (givenArray[x] > max )
      {
        count = count + 1;
      }
    }
  console.log("Count = ", count);
}

greater_than_Y([1, 5, 10, 2, 8, 3, 11], 4);