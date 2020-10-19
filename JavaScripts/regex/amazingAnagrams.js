// Amazing Anagrams
// Anagrams are words that contain the exact same letters in the same quantity. Robin challenges you to write a function that accepts two words and returns true if they are anagrams. BONUS: write the function so that it can receive any number of words and returns true if all of them are anagrams of each other.

function amazingAnagrams(str1, str2){
  const regex = /\S/g;
  arr1 = [...str1.match(regex)].sort();
  arr2 = [...str2.match(regex)].sort();
  for (var i in arr1, arr2){
    if (arr1[i] == arr2[i] && arr1.length === arr2.length){
      return true;
    }
    return false;
  }
  
}
console.log(amazingAnagrams('below', 'elbow'));
console.log(amazingAnagrams('funeral', 'real fun'));
console.log(amazingAnagrams('sweep the floor', 'too few helpers'))
console.log(amazingAnagrams('acb','abcd'));
