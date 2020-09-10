//  Replace any negative array values with "Dojo"

function replace_negatives(givenArray) {
  for (x = 0; x < givenArray.length; x++)
  {
    if (givenArray[x] < 0)
      givenArray[x] = "Dojo";
  }
  console.log(givenArray);
}

replace_negatives([4,12, -2, 8, -10]);