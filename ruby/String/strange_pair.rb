# Strange Pair
# A pair of strings form a strange pair if both of the following are true:

# The 1st string's first letter = 2nd string's last letter.
# The 1st string's last letter = 2nd string's first letter.
# Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.
def is_strange_pair(str1, str2)
  if str1.end_with?(str2.chr) && str2.end_with?(str1.chr)
    return true
  else
    return false
  end
end

# Examples
puts is_strange_pair("ratio", "orator") #➞ true
# # "ratio" ends with "o" and "orator" starts with "o"
# # "ratio" starts with "r" and "orator" ends with "r"

puts is_strange_pair("sparkling", "groups") #➞ true

puts is_strange_pair("bush", "hubris") #➞ false

puts is_strange_pair("", "") #➞ true
# Notes
# It should work on a pair of empty strings (they trivially share nothing).