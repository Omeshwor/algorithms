// Given an array, index, and additional value, ​ insert the value into the array at 
// the given index. Do this without using built-in array methods. You can think of ​ 
// PushFront(arr,val)​ as equivalent to InsertAt(arr, 0 ,val)

function insertAt(arr, location, val) {
  for (var i = location-1; i < arr.length; i++){
   temp = arr[i];
    arr[i] = val;
    val = temp;
  }
  console.log(arr);
}

insertAt([1,2,3,4,5], 2, 6);