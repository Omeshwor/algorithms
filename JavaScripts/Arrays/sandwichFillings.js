// Sandwich Fillings

// Given a sandwich (as an array), return an array of fillings inside the sandwich. 
// This involves ignoring the first and last elements.
// Examples

// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

// Notes

// The first and last elements will always be "bread".


function getFillings(sandwich){
  sandwich.pop(sandwich.shift())
  return sandwich
}

getFillings(["bread", "ham", "cheese", "ham", "bread"])

getFillings(["bread", "sausage", "tomato", "bread"])

getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])