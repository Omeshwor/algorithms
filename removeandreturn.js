function removeAndReturn(arr)
{
  temp = arr[0];
  arr[0] = arr[arr.length -1];
  arr[arr.length - 1] = temp;
  return arr.pop();
}
console.log(removeAndReturn([1,2,3,0]));
