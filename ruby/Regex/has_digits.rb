# Regex Series: String Contains at Least One Digit

# Write a regular expression that matches a string if it contains at least one digit.
# Examples

def has_digit(str)
  str.match(/[0-9]/) ? true : false
end
puts has_digit("c8") #➞ true

puts has_digit("23cc4") #➞ true

puts has_digit("abwekz") #➞ false

puts has_digit("sdfkxi") #➞ false

# Notes

# This challenge is designed to use RegEx only.