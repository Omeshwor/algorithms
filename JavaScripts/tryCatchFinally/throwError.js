// * Complete the isPositive function.
// * If 'a' is positive, return "YES".
// * If 'a' is 0, throw an Error with the message "Zero Error"
// * If 'a' is negative, throw an Error with the message "Negative Error"

function isPositive(a) {
 let message = "";
 if (a > 0){
   return message = "YES"
 }
 else if (a === 0){
   message = "Zero Error"
 }
 else if (a < 0){
   message = "Negative Error"
 }
 throw Error (message);    
}