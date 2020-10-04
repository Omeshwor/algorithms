// The Sweetest Ice Cream
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.

// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
class IceCream {
  constructor(flavors, numSprinkles){
    this.flavors = flavors;
    this.numSprinkles = numSprinkles
  }
  getValue(){
    return Flavors[this.flavors] + this.numSprinkles;
  }

}

const sweetestIcecream = (arr) => {
  sweetest = arr[0].getValue();
  for(var i = 0; i < arr.length; i++){
    if (arr[i].getValue() > sweetest){
      sweetest = arr[i].getValue();
    }
  }
  return sweetest;
}


const Flavors = {
  "Plain": 0,
  "Vanilla": 5,
  "ChocolateChip": 5,
  "Strawberry": 10,
  "Chocolate": 10
}
// Flavors	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	10
// You'll be given instance properties in the order flavor, numSprinkles.

// Examples
ice1 = new IceCream("Chocolate", 13)         // value of 23
ice2 = new IceCream("Vanilla", 0)           // value of 5
ice3 = new IceCream("Strawberry", 7)        // value of 17
ice4 = new IceCream("Plain", 18)             // value of 18
ice5 = new IceCream("ChocolateChip", 3)      // value of 8
// console.log(ice1.getValue());
console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]))// ➞ 23

console.log(sweetestIcecream([ice3, ice1]))// ➞ 23

console.log(sweetestIcecream([ice3, ice5]))// ➞ 17
// Notes
// Remember to only return the sweetness value.