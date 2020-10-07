// International Greetings
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
const greeting = (name) => {
  if(GUEST_LIST.hasOwnProperty(name)){
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
  }
  return "Hi! I'm a guest."
}
// Write a function that takes in a name and returns a name tag, that should read:

// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return:

// "Hi! I'm a guest."
// Examples
console.log(greeting("Randy"))// ➞ "Hi! I'm Randy, and I'm from Germany."

console.log(greeting("Sam"))// ➞ "Hi! I'm Sam, and I'm from Argentina."

console.log(greeting("Monti"))// ➞ "Hi! I'm a guest."