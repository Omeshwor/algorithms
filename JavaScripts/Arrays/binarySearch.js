// Binary Search
// Given a sorted array and a value, return whether that value is present in the array. Do not
// sequentially iterate the entire array. Instead, ‘divide and conquer’, taking advantage of 
// the fact that the array is sorted

function binarySearch(arr, val) {
    let initial = 0;
    let last = arr.length;
    let found = false;
    let middle;
    let position = -1;

    while(found === false && initial <= last){
        middle = Math.floor((initial + last) /2);
        if (arr[middle] == val){
            found = true;
            position = middle;
        }
        else if (arr[middle] > val ){
            last = middle - 1;
        }
        else {
            initial = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch([1,3,5,8,9,11,12], 12));