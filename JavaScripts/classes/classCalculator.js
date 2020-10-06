// Simple OOP Calculator
// Create functions for the Calculator class that can do the following:
class Calculator {
  add(num1, num2){
    return num1 + num2
  }
  subtract(num1, num2){
    return num1 - num2
  }
  multiply = (num1, num2) => num1 * num2;
  divide = (num1, num2) => num1 / num2;
}
// Add two numbers.
// Subtract two numbers.
// Multiply two numbers.
// Divide two numbers.
// Examples
var calculator = new Calculator()

console.log(calculator.add(10, 5))// ➞ 15

console.log(calculator.subtract(10, 5))// ➞ 5

console.log(calculator.multiply(10, 5))// ➞ 50

console.log(calculator.divide(10, 5))// ➞ 2
// Notes
// The functions should return the result of the calculation.