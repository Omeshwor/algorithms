// Double Factorial

// Create a function that takes a number num and returns its double factorial.
// Examples

// doubleFactorial(0) ➞ 1

// doubleFactorial(2) ➞ 2

// doubleFactorial(9) ➞ 945

// doubleFactorial(14) ➞ 645120

// Notes

//     Assume all input values are greater than or equal to -1.
//     Try to solve it with recursion.
//     Double factorial is not the same as factorial * 2.
function doubleFactorial(num) {
  if (num === 1 || num === 0 || num === -1){
    return 1;
  }
  
  // if (num%2 === 0) {
  //    if (num === 0){
  //      return 1;
  //    }
     return num * doubleFactorial(num - 2);
  //  }
  // if (num%2 === 1) {
  //    if (num === 1){
  //      return 1;
  //    }
  //    return num * doubleFactorial(num - 2);
  //  }
    
  }
  
  console.log(doubleFactorial(0));
  
  console.log(doubleFactorial(2));
  
  console.log(doubleFactorial(9)) // 945
  
  console.log(doubleFactorial(14)) // 645120