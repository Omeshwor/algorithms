// Second-to-Last
// Return the second-to-last element of an array

function SecondtoLast(arr){
  for (var i = 0; i < arr.length; i++){
      if (i == arr.length-2)
      {
        return arr[i];
      }
  }
  
}

console.log(SecondtoLast([1,2,3,4,5,6]))