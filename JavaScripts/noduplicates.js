function noDuplicates {
  var arr2 = a[];
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] == arr[i+1])
    {
      i += 1;
      arr2.push(arr[i]);
    }
    arr = arr2;
  }
  return arr;
}

noDuplicates([1,1,2,3,4]);
