// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
// Examples

function mdFormat(word, style) {
	switch(style){
    case ("b"):
      return `**${word}**`;
      break;
    case ("i"):
      return `_${word}_`;
      break;
    case ("c"):
      return "`"+ `${word}` + "`";
      break;
    case ("s"):
      return `~~${word}~~`;
      break;  
  }
}
console.log(mdFormat("Bold", "b"))// ➞ "**Bold**"

console.log(mdFormat("leaning text", "i"))// ➞ "_leaning text_"

console.log(mdFormat("Edabit", "c"))// ➞ "`Edabit`"

console.log(mdFormat("That's a strike!", "s"))// ➞ "~~That's a strike!~~"