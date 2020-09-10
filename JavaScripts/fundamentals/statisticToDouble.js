// Statistics to Doubles
// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles 
// are rolled. Display the ​ number of rolls ​ , ​ min , ​ ​ max , ​and ​ average ​ .


function dieRoll1() {
  return Math.floor(Math.random() * 6) + 1;
}

function doubles()
{
  var die1;
  var die2;
  var count = 0;
  var min = 6;
  var max = 1;
  var sum = 0;
  do
  {
    die1 = dieRoll1();
    die2 = dieRoll1();
    count = count + 1;
    sum = sum + die1 + die2;
    console.log("die1:", die1);
   console.log("die2:", die2);
   if (die1 < min)
   {
     min = die1;
   }
   else if (die2 < min)
   {
     min = die2;
   }
   if (die1 > max)
   {
     max = die1;
   }
   else if (die2 > max)
   {
     max = die2;
   }
  }
  while(die1 != die2)
  console.log("No of rolls: ", count, "Max: ", max, "Min: ", min, "Sum :", sum, "Avg : ", sum/count);

}



doubles();