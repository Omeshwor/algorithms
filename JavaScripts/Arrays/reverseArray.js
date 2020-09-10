// Given a numberical array, reverse the order of the values. The reversed array 
// should have the same length, with existing elements moved to other indices so 
// that the order of elements is reversed.


function reverseArray(arr) {
  console.log(arr.length)
  for( var i = 0; i < arr.length/2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }
  console.log(arr);
  
}

reverseArray([1,2,3,4,5,6]);