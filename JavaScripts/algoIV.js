var count = 0;
function greaterThan (arr,y)
{
  for (x = 0; x <arr.length; x++)
  {
    if (arr[x] > y)
    {
      count = count + 1;
     }

  }
  console.log(count);
}

greaterThan ([1,2,3,4,5], 2);


function compute(arr)
{
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  var avg = 0;
  for ( x=0; x<arr.length; x++)
    {
      if (arr[x] <min)
        {
          min = arr[x];
        }
      if (arr[x]>max)
        {
          max = arr[x];
        }
      sum += arr[x];
    }
    avg = sum/arr.length;
console.log(avg, min, max);
}
compute([1,2,3,4]);


function replaceNegatives(arr)
{
  for( var i in arr)
  {
    if ( arr[i] < 0)
    {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);
}
replaceNegatives([1,2,-3,-4]);

function removeVals (arr,x,y) {
  var arrb = [];
  for (i in arr) {
    if (i < x ) {
      arrb.push(arr[i]);
    }
    if (i > y ) {
      arrb.push(arr[i]);
    }
  }
  console.log(arrb);
}
removeVals ([1,2,3,4,5,6,7,8,9],4,5);
