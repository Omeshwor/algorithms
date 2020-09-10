// Create an array with all the odd integers between 1 and 255(inclusive)
function printOddArray() {
  var Arr = [];
  for (x = 1; x <= 255; x+=2)
  {
   Arr.push(x);
  }
  console.log(Arr);
  
}
printOddArray();