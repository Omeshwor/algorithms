// Nth-to-Last
// Return the element that is N-from-array’s-end.
function nthToLast(arr, n){
  for (var i = 0; i < arr.length; i++){
      if (i == arr.length-n)
      {
        return arr[i];
      }
  }
  
}

console.log(nthToLast([1,2,3,4,5,6], 2))