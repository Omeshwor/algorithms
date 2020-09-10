function resetNegatives(arr) {
  for (var i in arr)
  {
    if(arr[i] < 0)
    {
      arr[i] = 0;
    }
  }
  console.log(arr);
}

resetNegatives([1,2,5,-6]);

function moveValues(arr){
  var b = [];
  for (i = 0; i < arr.length; i++) {
    if (i<(arr.length -1))
    {
      b[i]= arr[i+1];
    }
    else {
      b[i] = 0;
    }
  }
  return b;
}

console.log(moveValues([1,2,3,5]));



function reverseArray(arr){
  var r = [];
  for (i = arr.length -1; i >= 0; i--)
  {
    r.push(arr[i]);
  }
  console.log(r);
}
reverseArray([1,2,3]);

function repeatTwice(arr)
{
  var b = [];
  for (var i in arr)
    {
      b.push (arr[i]);
      b.push (arr[i]);
    }
  console.log(b);
}

repeatTwice([4,"Ulysses", 42, false]);
