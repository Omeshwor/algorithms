# Regex Series: 5-Digit Zip Code

# Write a regular expression that matches a string if and only if it is a valid zip code.
# Examples

def regex_match st
  
  x = (/^\d{5}$/)
  st.match?(x)
end

puts regex_match "32554" #➞ true

puts regex_match "92 342" #➞ false
# # Invalid: contains a whitespace

puts regex_match "9@342" #➞ false
# # Invalid: contains a non-numeric character
# 
puts regex_match "923444" #➞ false
# # Invalid: length is not 5

# Notes

#     Zipcodes must be 5 digits long exactly and only contain numbers.
#     Not allowed: non-numeric characters or whitespaces.
#     This challenge is designed to use Regex only.