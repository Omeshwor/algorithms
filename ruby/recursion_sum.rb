# Recursion: Sum
# Write a function that finds the sum of the first n natural numbers. Make your function recursive.

# Examples
# sum(5) ➞ 15
# # 1 + 2 + 3 + 4 + 5 = 15

# sum(1) ➞ 1

# sum(12) ➞ 78
# Notes
# Check the Resources tab for info on recursion.

def sum(n)
  sum = 0
  (0..n).each do |i|
    sum = sum + i
  end
  puts sum
end

sum(1)