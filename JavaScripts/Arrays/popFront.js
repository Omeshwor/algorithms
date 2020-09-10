// Given an Array, remove and return the value at the beginning of the Array.
// Do this without using any built-in array methods except pop();

function popFront (arr) {
  var val = arr[0];
  for (var i = 0; i < arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log(arr);
  console.log(val);
}

popFront([1,2,3,4,5]);