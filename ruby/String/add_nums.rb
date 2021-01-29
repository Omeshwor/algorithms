# Adding Numbers in a String

# Given a string of numbers separated by a comma and space, return the total of all the numbers.
# Examples

def add_nums(str)
  arr = str.split(', ')
  sum = 0
  for i in arr
    sum += i.to_i
  end
  sum
end

puts add_nums("2, 5, 1, 8, 4") #➞ 20

puts add_nums("1, 2, 3, 4, 5, 6, 7") ##➞ 28

puts add_nums("10") #➞ 10

# Notes

#     Numbers will always be separated by a comma and space.
#     Your function should accept negative numbers.