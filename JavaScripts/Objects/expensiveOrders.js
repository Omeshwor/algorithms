// Expensive Orders
// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.

// Examples
function expensiveOrders(orders, cost) {
	arr = []
  for (const [key, value] of Object.entries(orders)){
    if (value > cost){
      arr.push([key, value])
    }
  }
  obj = Object.fromEntries(arr);
  return obj;
}
console.log(expensiveOrders({ "a": 3000, "b": 200, "c": 1050 }, 1000))
// ➞ { "a": 3000, "c": 1050 }

console.log(expensiveOrders({ "Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550, "Dolce Gabana Heels": 4000 }, 20000))
// ➞ { "Gucci Fur": 24600 }

console.log(expensiveOrders({ "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }, 40))
// ➞ {}


////////////
const expensive_orders = (obj, cost) =>
	Object.fromEntries(Object.entries(obj).filter(([, price]) => price > cost));