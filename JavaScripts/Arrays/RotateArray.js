// Rotate Array
// Implement ​ rotateArr(arr, shiftBy)​ that accepts array and offset. Shift arr’s values ​ to the
// right ​ by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, 
// so that no data is lost. Operate in-place: given ([1,2,3],1)​ , change the array to [3,1,2]​ .

function rotateArr(arr, shiftBy){
  // loop through the array
  for (var i = shiftBy; i < arr.length; i++)
  {
    console.log(arr[i])
  }
  // find the location of shift by
  // move the values to the right by the shift by value
}

rotateArr([1,2,3], 1); // 3,1,2
rotateArr([1,2,3,4,5], 2); // 3,4,5,1,2


???????????????????????????????????????