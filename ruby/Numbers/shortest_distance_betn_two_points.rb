# Calculate the Shortest Distance Between Two Points

# Create a function that takes a string of four numbers. These numbers represent two separate points on a graph known as the x-axis (horizontal axis) and y-axis (vertical axis).

# The order of coordinates in the string corresponds as follows:

# "x1,y1,x2,y2"

# Calculate the distance between x and y.
# Examples

def shortest_distance (coordinates)
  arr = coordinates.split(',')
  x = arr[2].to_f-arr[0].to_f
  y = arr[3].to_f-arr[1].to_f
  distance = Math.sqrt(x**2 + y**2).round(2)
end

puts shortest_distance("1,1,2,1") #➞ 1

puts shortest_distance("1,1,3,1") #➞ 2

puts shortest_distance("-5,1,3,1") #➞ 8

puts shortest_distance("-5,2,3,1") #➞ 8.06

# Notes

# All floats fixed to two decimal places (e.g. 2.34).