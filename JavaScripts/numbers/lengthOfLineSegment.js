// Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// Examples
// lineLength([15, 7], [22, 11]) ➞ 8.06

// lineLength([0, 0], [0, 0]) ➞ 0

// lineLength([0, 0], [1, 1]) ➞ 1.41
// Notes
// The order of the given numbers is X, Y.
// This challenge is easier than it looks.
// Round your result to two decimal places.

function lineLength([x1, y1], [x2, y2]) {
  //abs(x1 - x2)
  x = Math.abs(x1 -x2)
  //abs(y1 - y2)
  y = Math.abs(y1 - y2)
  //power 2 of both x and y
  powered = Math.pow(x, 2) + Math.pow(y, 2)
  //sqrt of the power
  squareRoot = Math.sqrt(powered).toFixed(2);
  return squareRoot;
}

a = [15, 7];
b = [22, 11];
console.log(lineLength(a, b));