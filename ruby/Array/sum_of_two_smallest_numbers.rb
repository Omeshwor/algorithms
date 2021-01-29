# Return the Sum of the Two Smallest Numbers

# Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
# Examples

def sum_two_smallest_nums(arr)
  arr1 = arr.sort().reject{|i| i < 0}
  sum = arr1[0] + arr1[1]
end

puts sum_two_smallest_nums([19, 5, 42, 2, 77]) #➞ 7

puts sum_two_smallest_nums([10, 343445353, 3453445, 3453545353453]) #➞ 3453455

puts sum_two_smallest_nums([2, 9, 6, -1]) #➞ 8

puts sum_two_smallest_nums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) #➞ 563

puts sum_two_smallest_nums([3683, 2902, 3951, -475, 1617, -2385]) #➞ 4519

# Notes

#     Don't count negative numbers.
#     Floats and empty arrays will not be used in any of the test cases.