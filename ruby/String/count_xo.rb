# Xs and Os, Nobody Knows

# Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.

#     Return a boolean value (true or false).
#     Return true if the amount of x's and o's are the same.
#     Return false if they aren't the same amount.
#     The string can contain any character.
#     When "x" and "o" are not in the string, return true.

# Examples

def xo(str)
  str.downcase.count("x") == str.count("o")
end


puts xo("ooxx") # ➞ true

puts xo("xooxx") #➞ false

puts xo("ooxXm") #➞ true
# # Case insensitive.

puts xo("zpzpzpp") #➞ true
# # Returns true if no x and o.

puts xo("zzoo") #➞ false

# Notes

#     Remember to return true if there aren't any x's or o's.
#     Must be case insensitive.