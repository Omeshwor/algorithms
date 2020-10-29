// Having no coffee left in the house, you run out to grab some, hastily leaving your wallet behind. You come to this realization after the barista hands over your Ristretto, and pull out some loose change from your pocket. Embarrassed, you go home empty-handed and start on a function to save you next time. Your function will accept a total amount due and an array that represents the change in your pocket, and holds values in this order: pennies, nickels, dimes, quarters. For example, if you provide this array: [1,2,3,4], it means that the contents in your pocket consist of one penny, two nickels, three dimes, and four quarters. If you have enough change to cover your order, the function will return true. Otherwise, it'll return false. Good luck!


function pocketChange(change, charge){
  const pennies = change[0] * 0.01;
  const nickels = change[1] * 0.05;
  const dimes = change[2] * 0.10;
  const quarters = change[3] * 0.25;
  let totalChange = pennies + nickels + dimes + quarters;
  console.log(totalChange)
  if (totalChange > charge){
    return true;
  }
  return false;
}

let change = [2, 3, 5, 10];
let charge = 2.24;
console.log(pocketChange(change, charge));