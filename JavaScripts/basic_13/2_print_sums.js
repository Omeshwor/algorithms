// Print integers from 0 to 255 and with each integer print the sum so far

function Print_sum()
{
  sum = 0;
  for (x = 0; x <=255; x++)
  {
    sum = sum + x;
    console.log("number = ", x);
    console.log("sum so far = ", sum);
  }
}

Print_sum();
