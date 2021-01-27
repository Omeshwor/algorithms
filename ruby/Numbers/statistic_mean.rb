# Basic Statistics: Mean

# The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).
# Examples

def mean(nums)
  count = nums.count.to_f
  (nums.reduce(:+)/count).round(1)
end
puts mean([1, 6, 6, 7, 8, 8, 9, 10, 10])# ➞ 7.2

puts mean([1, 3, 8, 9, 9, 10])# ➞ 6.7

puts mean([2, 3, 3, 6, 6, 8, 9, 10])# ➞ 5.9

# Notes

# N/A