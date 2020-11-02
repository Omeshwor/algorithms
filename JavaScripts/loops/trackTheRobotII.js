// Track the Robot (Part 2)
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

function trackRobot(...steps) {
  // separate steps into parts
  let location = [0, 0];
  for (var i in steps){
    if(i === 0 || i % 4 === 0){
      location[1] += steps[i];
    }
    if(i === 1 || i % 4 === 1){
      location[0] += steps[i];
    }
    if(i === 2 || i % 4 === 2){
      location[1] -= steps[i];
    }
    if(i === 3 || i % 4 === 3){
      location[0] -= steps[i]
    }
  }
  return location;
  
}
// 20 steps North, now at (0, 20)steps
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples
// let steps = (0, 1, 2, 3, 
//    4, 5, 6, 7, 
//    8, 9, 10, 11)

// console.log(trackRobot(steps))
console.log(trackRobot(20, 30, 10, 40)) // ➞ [-10, 10]

// console.log(trackRobot()) // ➞ [0, 0]
// // // No movement means the robot stays at (0, 0).

// console.log(trackRobot(-10, 20, 10)) // ➞ [20, -20]
// // The amount to move can be negative.
// Notes
// Each movement is an integer (whole number).