# Hurdle Jump

# Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles

# A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
# Examples

def hurdle_jump hurdles, jump_height
  hurdles.all? { |hurdle| hurdle <= jump_height }
end


puts hurdle_jump([1, 2, 3, 4, 5], 5) #➞ true

puts hurdle_jump([5, 5, 3, 4, 5], 3) #➞ false

puts hurdle_jump([5, 4, 5, 6], 10) #➞ true

puts hurdle_jump([1, 2, 1], 1) #➞ false

# Notes

# Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).