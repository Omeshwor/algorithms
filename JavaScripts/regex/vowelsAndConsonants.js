function vowelsAndConsonants(s) {
  let arr = s.split('');
  let vowel = /[aeiou]/g;
  let consonant = /[^aeiou]/g;
  let vowels = s.match(vowel);
  let consonants = s.match(consonant)
  for (var i = 0; i < vowels.length; i++){
    console.log(vowels[i]);
  }
  for (var i = 0; i < consonants.length; i++){
    console.log(consonants[i])
  }
}

let s = "javascriptloops"

console.log(vowelsAndConsonants(s));