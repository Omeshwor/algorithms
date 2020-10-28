// Broken Bridge
// Create a function which validates whether a bridge is  
// safe to walk on (i.e. has no gaps in it to fall through).
function isSafeBridge(str){
  return !str.includes(" ");
}
// Examples
console.log(isSafeBridge("####")) //➞ true

console.log(isSafeBridge("## ####")) // ➞ false

// isSafeBridge("#") ➞ true
// Notes
// You can expect the bridge's ends connecting it to its surrounding.