// Get Sum of People's Budget

// Create the function that takes an array with objects and returns the sum of people's budgets.
// Examples

function getBudgets(arr){
  let total = 0;
  for (const {budget: budget} of arr){
    total += budget;
  }
  return total;
  
}

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))


console.log(getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]))