function threeFives()
{
  var x = 100;
  var sum = 0;
  while (x <= 400000)
    {
      if (
        (( x % 3) === 0 || ( x % 5) === 0) && 
        ( x % 15 ) !== 0)
        sum = sum + x;
        x++;
    }
  console.log(sum);
}
threeFives();

function threeFives(a,b)
{
  var x = a;
  var sum = 0;
  while (x <= b)
    {
      if (( x % 3) === 0 || 
          (x % 5) === 0 && 
          ( x % 15 ) !== 0)
        sum = sum + x;
        x++;
    }
  console.log(sum);
}
threeFives(1,20);