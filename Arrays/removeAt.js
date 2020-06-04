// Given an array and an index into the array, remove and return the array value ​ at that index.
// Do this without using any built-in array methods except ​ pop()​ . Think of ​ PopFront(arr)​ as
// equivalent to ​ RemoveAt(arr,0)​ .

function removeAt(arr, loc) {
  var val = arr[loc];
  for(var i = loc; i < arr.length-1; i++){
    arr[i] = arr[i+1];
  }
  arr.pop();
  console.log(arr);
  console.log(val);
  
}

removeAt([1,2,3,4,5], 2);
