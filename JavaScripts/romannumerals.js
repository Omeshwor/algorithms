function intToRoman(x)
{
  var R = [1000, 500, 100, 50, 10, 5, 1];
  var Letter = ["M", "D", "C", "L", "X", "V", "I"]
  var temp = "";
  var b;
  if (x < 4000)
  {
    while( x > 0)
    {
      for( var i in R)
      {
        if (x % R[i] > 1)
        {
          b= x % R[i];
          x -=b[i];

          temp += ((x/R[i]) * Letter[i]);
          x = b;
        }
      }
    }
  }
  return temp;
}

console.log(intToRoman(300));

function romanToInt (str)
{
  var r = [1000, 500, 100, 50, 10, 5, 1];
  var x = ["M","D","C","L","X","V","I"];
  var temp = 0;
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] == "M")
    {
      temp += 1000;
    }
    if (str[i] == "D")
    {
      temp += 500;
    }
    if (str[i] == "C")
    {
      temp += 100;
    }
    if (str[i] == "L")
    {
      temp += 50;
    }
    if (str[i] == "X")
    {
      temp += 10;
    }
    if (str[i] == "V")
    {
      temp += 5;
    }
    if (str[i] == "I")
    {
      temp += 1;
    }
  }
  return temp;
}

console.log(romanToInt("XXXXX"));
