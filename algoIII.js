//1
5

5

//2

(2,2,5)

(6,8,5)
//ans
(2,2,5)
(2,2,5)
(6,8,5)
(6,8,5)

// 3

[2,2,5]

//ans

[2,2,5]

//4

true
//ans 
true

//5

[coding,coding,coding,coding,coding]

[coding,coding,coding,coding]

//6
[Coding, Dojo]

[5,Coding,Dojo,4]

//7

10 

10

//8

nan;
blank

//9

function printAverage(x){
   sum = 0;
  avg = 0;
   for(var i = 0; i < x.length; i++)
   {
     sum = sum + x[i];
     
   }
  avg = sum / x.length;
  return avg;
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5


//10

function returnOddArray()
{
  var x = []
   for (var i = 1; i <= 255; i++)
     {
      if(i % 2 == 1)
      {
        x.push(i);
      }     
     }
  return x;
}

//11


function squareValue(x){
   for ( var i = 0; i <= x.length; i++)
     {
       x[i] = x[i] * x[i];
     }
   return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]