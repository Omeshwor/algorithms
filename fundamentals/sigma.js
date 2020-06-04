// Implement a function sigma(num) that, given a number, returns the sum of all positive integers from 1 upto number(inclusive)
function sigma(num)
{
  var sum = 0;
  for(x = 1; x <= num; x++)
    {
//      sum = sum + x; 
     sum += x
    }
  console.log(sum);
}

sigma(5);