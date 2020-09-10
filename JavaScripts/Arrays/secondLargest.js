// Second-Largest
// Return the second-largest element of an array.
  

// loop through the Array
// find the largest Element
// compare each element with the largest element
// find the second largest Element

function secondLargest(arr){
  var max = arr[0];
  var secondlargest = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
  }
//   return max;
  for (var j = 0; j < arr.length; j++){
    if (arr[j] > secondlargest && arr[j] < max){
      secondlargest = arr[j]
    }
  }
  return secondlargest;
}

console.log(secondLargest([6,2,3,4,5,8,13]))