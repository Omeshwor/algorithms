// Implement ​ generateCoinChange(cents)​ that accepts a parameter for the number of cents, and
// computes how to represent that amount with the smallest number of coins. Console.log the result.
function generateCoinChange(cents) 
{
  var dollarCoin = 0;
  var halfDollarCoin = 0;
  var quarterCoin = 0;
  var dimeCoin = 0;
  var nickelCoin = 0;
  var pennyCoin = 0;
  for (x=0; x <= cents; x++)
    {
      while (cents >= 100)
      {
        cents = cents - 100;
        dollarCoin++;
      }
      while (cents >= 50)
      {
        cents = cents - 50;
        halfDollarCoin++;
      }
      while (cents >= 25)
        {
          cents = cents - 25;
          quarterCoin++;
        }
      while (cents >= 10)
          {
            cents = cents - 10;
            dimeCoin++;
          }
      while (cents >= 5)
        {
          cents = cents - 5;
          nickelCoin++;
        }
      while (cents >= 1)
        {
          cents = cents - 1;
          pennyCoin++
        }
        
      
    }
  console.log("Dollar: ", dollarCoin, "HalfDollar:", halfDollarCoin, 
              "Quarter:", quarterCoin, "Dime: ", dimeCoin,
              "Nickel: ", nickelCoin, "Penny: ", pennyCoin)
}

generateCoinChange(23);