# Give Me the Even Numbers
# Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

def sum_even_nums_in_range(start, stop)
  sum = 0
  for i in start..stop
    if i.even?
      sum += i
    end
  end
  sum
end
# Examples
puts sum_even_nums_in_range(10, 20) # ➞ 90
# # 10, 12, 14, 16, 18, 20

puts sum_even_nums_in_range(51, 150) # ➞ 5050

puts sum_even_nums_in_range(63, 97) # ➞ 1360
# Notes
# Remember that the start and stop values are inclusive.