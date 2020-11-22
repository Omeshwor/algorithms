let arr = [5,7,4,3,8]
let left = []
let right = []
let equal = []
let pivot = arr[0]
equal = pivot;
function quickSort(a){
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > pivot){
      right.push(arr[i])
    }
    if (arr[i] < pivot){
      left.push(arr[i])
    }
  }
  newArr = []
  newArr.push(left, equal, right)
  x = newArr.flat(Infinity)
  return x;
}

console.log(quickSort(arr))