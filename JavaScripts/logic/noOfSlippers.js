// Your friend is a veterinarian and wants to know how many pet slippers he needs to knit before Christmas. 
//Your friend looks after three different species: dogs, cats, and chickens. He asks, very politely, 
//if you can write him a function that calculates how many slippers he needs to make and provides you 
//with the subtotal of each species of animal. Please write a function for your friend that returns the number of slippers that he will be knitting!

function noOfSlipppers(obj){
  return obj.cats * 4 + obj.dogs * 4 + obj.chickens * 2
}

console.log(noOfSlipppers({
  "cats": 4,
  "dogs": 2,
  "chickens": 10,
}))