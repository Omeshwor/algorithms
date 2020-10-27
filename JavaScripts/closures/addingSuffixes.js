// All About Anonymous Functions: Adding Suffixes
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
add_ly = add_suffix("ly")

console.log(add_ly("hopeless"))// ➞ "hopelessly"
console.log(add_ly("total"))//➞"totally"

add_less = add_suffix("less")

console.log(add_less("fear"))// ➞ "fearless"
console.log(add_less("ruth"))// ➞ "ruthless"

add_ing = add_suffix("ing");
console.log(add_ing("cheer"))
console.log(add_ing("book"))
// Notes
// N/A
function add_suffix(suffix){
  function add_word(word){
    return word+suffix;
  }
  return add_word;
}