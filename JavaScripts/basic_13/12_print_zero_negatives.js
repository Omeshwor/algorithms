// Return the given array, after setting any negative values to zero

function negativesToZero(givenArray) {
  for(x = 0; x < givenArray.length; x++)
  {
    if (givenArray[x] < 0)
    {
      givenArray[x] = 0;
    }
  }
  console.log(givenArray);
}

negativesToZero([1,2,3,-1,-2,3]);