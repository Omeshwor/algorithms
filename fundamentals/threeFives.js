// Create function ThreesFives() that adds each value from 100 to 400000 (inclusive) if that 
// value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
// 

function ThreesFives() {
  var sum = 0;
  for ( x = 100; x <= 4000000; x++)
  {
    if (x % 3 === 0 ^ x % 5 === 0 )
      {
        sum += x;
//         console.log(x);
//         console.log(sum);
      }
    
  }
  console.log(sum)
  
}

ThreesFives();
// change your function to make a BetterThreesFives(start, end) where start and end values are
// customizable. You can think of the above ThreesFives() function as BetterThreesFives(100, 400000)

function BetterThreesFives(start, end) {
  var sum = 0;
  for ( x = start; x <= end; x++)
  {
    if (x % 3 === 0 ^ x % 5 === 0 )
      {
        sum += x;
//         console.log(x);
//         console.log(sum);
      }
    
  }
  console.log(sum)
  
}

BetterThreesFives(100,4000000);
