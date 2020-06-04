// Given an array move all values forward by one index, dropping the first and leaving a "0" value at the end

function shiftValues(givenArray) {
  {
    for(x = 0; x < givenArray.length; x++)
    {
      givenArray[x] = givenArray[x+1];
    }
      givenArray.pop();
      givenArray.push(0);
      console.log(givenArray);
  }
  
}
shiftValues([1,2,3,4,5]);