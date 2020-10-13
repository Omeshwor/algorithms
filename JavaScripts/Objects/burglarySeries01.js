// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
  if (Object.keys(obj).length < 1){
    return "Lucky you!"
  }
	let sum = 0;
  for(let i in obj){
    sum += obj[i]
  }
  return sum;
  
}
// Examples
console.log(calculateLosses(stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
}))// ➞ 100

console.log(calculateLosses(stolenItems = {
  painting: 20000,
}))// ➞ 20000

console.log(calculateLosses(stolenItems = {}))
// Notes
// The item value is always positive.
// This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.