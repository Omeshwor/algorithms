// Repeating Letters N Times

// Create a function that repeats each character in a string n times.
// Examples
function repeat(str, num){
  arr = str.split('');
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i].repeat(num);
  }
  str = arr.join('');
  return str;
}

console.log(repeat("mice", 5)) // ➞ "mmmmmiiiiiccccceeeee"

console.log(repeat("hello", 3)) // ➞ "hhheeellllllooo"

console.log(repeat("stop", 1)) // ➞ "stop"