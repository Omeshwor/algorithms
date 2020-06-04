// Write a function factiorial(num) that, fiven a number, returns the product(multiplication) of all positive integers from 1 upto  number (inclusive).
// for example, factorial(3) = 6 (1*2*3); factorial(5) = 120(or 1*2*3*4*5)

function factorial(num) {
  var multi = 1;
  for (x = 1; x <= num; x++)
  {
    multi *= x;
  }
  console.log(multi);
}

factorial(5);