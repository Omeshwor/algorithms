// Given an array, find and print its largest element

function Largest_element() {
  var givenArray = [5, 3, 8, 2, 10, 6, 9, 11];
  var max = givenArray[0];
  for (x = 0; x <= givenArray.length; x++)
    {
      if (max < givenArray[x])
        {
          max = givenArray[x];
        }
    }
  console.log(max);
}

Largest_element();
