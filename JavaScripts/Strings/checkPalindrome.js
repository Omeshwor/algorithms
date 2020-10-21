// Given the string, check if it is a palindrome.

// Example

//     For inputString = "aabaa", the output should be
//     checkPalindrome(inputString) = true;
//     For inputString = "abac", the output should be
//     checkPalindrome(inputString) = false;
//     For inputString = "a", the output should be
//     checkPalindrome(inputString) = true.
function checkPalindrome(inputString){
  let arr = inputString.split('');
  for(var i = 0; i< arr.length/2; i++){
    if(arr[i] === arr[(arr.length-1) - i]){
      return true;
    }
    return false;
  }
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('a'));
console.log(checkPalindrome("abac"));