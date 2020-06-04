function fib(num) {
  if (num <= 2){
    return 1;
  }
  else
    return console.log(fib(num-1) + fib(num-2));
}

console.log(fib(8));

// recursive method
function recursiveFib(num){

  if (num <= 2){
    return 1;
  }

  var first = 1;
  var second = 2;
  var nth = 2;

  for(var i = 3; i <= num-1; i++){
    nth = first + second;
    first = second;
    second = nth;
  }
  return nth;
}

console.log(recursiveFib(20));
