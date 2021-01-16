# Probabilities (Part 1)

# Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.
# Examples

def probability(arr, n)
  num_count = 0
  num_count = arr.count{|x| x >= n}
  percent = 100 * (num_count) / arr.length.to_f
  percent.round(1)
end

puts probability([5, 1, 8, 9], 6) #➞ 50.0

puts probability([7, 4, 17, 14, 12, 3], 16) #➞ 16.7

puts probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6) #➞ 70.0

# Notes

# Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)