// Square each value in a given array, returning that same array with changed values.

function squareArray(givenArray) {
  for (x = 0; x < givenArray.length; x++)
  {
    givenArray[x] = givenArray[x]*givenArray[x];
  }
  console.log(givenArray)
}

squareArray([1,2,3,4,5]);
