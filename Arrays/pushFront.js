// Given an array and an additional value, insert this value at the beginning of the array.
// Do this without using any built-in array methods.

function pushFront(arr, val){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    newArr[0] = val;
    newArr[i+1] = arr[i];
//     console.log(newArr);
  }
  console.log(newArr);

}

pushFront([1,2,3,4,5], 0);