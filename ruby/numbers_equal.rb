# Are the Numbers Equal?
# Create a function that returns true when num1 is equal to num2; otherwise return false.

# Examples
# is_same_num(4, 8) ➞ false

# is_same_num(2, 2) ➞  true

# is_same_num(2, "2") ➞ false
# Notes
# Don't forget to return the result.

def is_same_num(arg1, arg2)
  return arg1 === arg2
end


is_same_num(2, "2")

is_same_num(2, 2)

is_same_num(4, 8)