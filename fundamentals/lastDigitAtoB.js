// Implement a function that accepts two non-negative integers as arguments. Function ​ lastDigitAtoB(a,
//   b)​ should return the last digit of the first number (a) raised to an exponent of the second number (b).
//   Examples: given ​ (3, 4)​ , you should return ​ 1 ​ (the last digit of 81: 3 * 3 * 3 * 3). Given ​ (12, 5)​ , return
//   2​ (the least significant digit of 248832, which is 12 * 12 * 12 * 12 * 12).

function lastDigitAtoB(a, b){
  var exponent = Math.pow(a, b);
  console.log(exponent);
  return exponent % 10;
}
console.log(lastDigitAtoB(3,4));

console.log(lastDigitAtoB(12, 5));