# Minimum Removals to Make Sum Even

# Create a function that returns the minimum number of removals to make the sum of all elements in an array even.
# Examples

def minimum_removals(arr)
  sum = 0
  for i in arr
    sum += i
  end
  sum.even? ? 0 : 1
end


puts minimum_removals([1, 2, 3, 4, 5]) #➞ 1

puts minimum_removals([5, 7, 9, 11]) #➞ 0

puts minimum_removals([5, 7, 9, 12]) #➞ 1

# Notes

#     If the sum is already even, return 0 (see example #2).
#     The output will be either 0 or 1.