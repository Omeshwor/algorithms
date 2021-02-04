# Given an number, return a string which contains varying amounts of the word 'MEGA' depending on the given number's order of magnitude.

#     If the number is less than 100, return "not a mega milestone".
#     Otherwise, start with the string "MEGA milestone".
#     For every order of magnitude over 100 that the number is, add the word "MEGA" to the start of the string.

# See the examples below for further clarification!
# Examples
def how_mega_is_it(n)
	# return "not a mega milestone" if -100 < n and n < 100
  # "MEGA " * (n.abs.to_i.to_s.size - 2) + "milestone"
  (n.abs.to_i.to_s.size - 2)
end
puts how_mega_is_it(54) # ➞ "not a mega milestone"

puts how_mega_is_it(143) #➞ "MEGA milestone"

# how_mega_is_it(1000) ➞ "MEGA MEGA milestone"

# how_mega_is_it(9999.9) ➞ "MEGA MEGA milestone"

# how_mega_is_it(10000) ➞ "MEGA MEGA MEGA milestone"

# Notes

#     Large negative numbers can also be considered as MEGA, so use the absolute values.
#     You can expect decimal numbers as well as whole numbers.