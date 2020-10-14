// Fruit Smoothie
const ingredient = {
  Strawberries: 1.50,
  Banana: 0.50,
  Mango: 2.50,
  Blueberries: 1.00,
  Raspberries: 1.00,
  Apple: 1.75,
  Pineapple: 3.50
}
// Create a class Smoothie and do the following:
class Smoothie {
// Create a constructor property called ingredients.
  constructor(ingredients){
    this.ingredients = ingredients
  }

// Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
  getCost(ingredients){
    let cost = 0.00;
    for (let i in this.ingredients){
      cost += ingredient[this.ingredients[i]]
    }
    return cost.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }
// Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
  getPrice(ingredients){
    let price = 0.00;
    let cost = 0.00;
    for (let i in this.ingredients){
      cost += ingredient[this.ingredients[i]]
    }
    price = (cost) + (cost) * 1.5;
    return price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }
// Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". See the examples below.
  getName(ingredients){
    let str = ""
    console.log(this.ingredients.length)
    this.ingredients.sort();
    for (let i in this.ingredients){
      if(this.ingredients[i].endsWith("berries")){
        str += this.ingredients[i].replace("berries", `berry `)
      }else {
        str += this.ingredients[i]+ " "
      }
    }
    if (this.ingredients.length > 1){
      return str + "Fusion"
    }
    else {
      return str + "Smoothie"
    }
  }
}

// Ingredient	Price
// Strawberries	$1.50
// Banana	$0.50
// Mango	$2.50
// Blueberries	$1.00
// Raspberries	$1.00
// Apple	$1.75
// Pineapple	$3.50
// Examples
// s1 = new Smoothie(["Banana"])

// console.log(s1.ingredients)// ➞ ["Banana"]gredients

// console.log(s1.getCost())// ➞ "$0.50"

// console.log(s1.getPrice())// ➞ "$1.25"

// console.log(s1.getName())// ➞ "Banana Smoothie"
s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"])

console.log(s2.ingredients) // ➞ ["Raspberries", "Strawberries", "Blueberries"]

console.log(s2.getCost()) // ➞ "$3.50"
// 
console.log(s2.getPrice()) // ➞ "$8.75"

console.log(s2.getName())// ➞ "Blueberry Raspberry Strawberry Fusion"
// Notes
// Feel free to check out the Resources tab for a refresher on classes.