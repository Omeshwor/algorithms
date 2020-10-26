// Spending Safely
// You've been quarantined and have become addicted to online shopping and start hoarding ramen. 
// Much to your surprise, you discover that your favorite online marketplace is not secure and 
// displays your credit card details in plain text. Being the good samaritan that you are, you 
// decide to write a function for them that takes in a credit card number and returns a string 
// that replaces all but the last four digits with stars, like this: "************1111". Make 
// sure that the number of stars matches with the exact number of digits being replaced.

function replaceCCN(num){
  str = num.toString();
  let regex = /\d/g;
  str1 = str.slice(0, 12).replaceAll(regex, '*');
  str2 = str.slice(12, 16)
  return str1 + str2;
}

num = 1234567890123456
console.log(replaceCCN(num));