// Startup Name Generator
// You are a co-founder to a new, unnamed startup. After bickering for hours over  
// what the venture's name should be, the founding team makes a compromise. 
// They will take the first letter of each of their names, capitalized, and sorted 
// in alphabetical order - this will be the name of the startup. Because your 
// colleagues have pulled two all-nighters in a row, you decide to take one for 
// the team and write a function that will return this new name.

function nameGenerator(arr){
  let newName = [];
  arr.sort();
  for (var i in arr){
    newName.push(arr[i].charAt(0));
  }
  return newName.join('').toUpperCase();
}

arr = ["mark", "joice", "henry", "stan" ];
console.log(nameGenerator(arr));