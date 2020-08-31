# Pi to N Decimal Places
# Given a number n, write a function that returns PI to n decimal places.

# Examples
# my_pi(5) ➞ 3.14159

# my_pi(4) ➞ 3.1416

# my_pi(15) ➞ 3.141592653589793
# Notes
# n will not be above 15, to keep this challenge simple.
# Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
# The return value must be a number, not a string.

def my_pi(n)
  return Math::PI.round(n)
end

puts my_pi(5)
puts my_pi(4)
puts my_pi(15)
