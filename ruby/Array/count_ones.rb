# Count Ones in a 2D Array

# Create a function to count the number of 1s in a 2D array.
# Examples

# count_ones([
#   [1, 0],
#   [0, 0]
# ]) #➞ 1

# count_ones([
#   [1, 1, 1],
#   [0, 0, 1],
#   [1, 1, 1]
# ]) ➞ 7

# count_ones([
#   [1, 2, 3],
#   [0, 2, 1],
#   [5, 7, 33]
# ]) ➞ 2

# Notes

# def count_ones arr
#   count = 0
#   for i in arr
#     for j in i
#       if (j == 1)
#         count += 1
#       end
#     end
#   end
#   puts count
# end

def count_ones arr
  puts arr.flatten.count(1)
end


count_ones([
  [1, 0],
  [0, 0]
]) #➞ 1

count_ones([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]) #➞ 7

count_ones([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
]) #➞ 2
