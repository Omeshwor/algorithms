# Return the Index of the First Vowel

# Create a function that returns the index of the first vowel in a string.
# Examples
def first_vowel(str)
  regex = /[aeiouAEIOU]/
  str.index(regex)
end

puts first_vowel("apple")# ➞ 0

puts first_vowel("hello") #➞ 1

puts first_vowel("STRAWBERRY") #➞ 3

puts first_vowel("pInEaPPLe")# ➞ 1

# Notes

#     Input will be single words.
#     Characters in words will be upper or lower case.
#     "y" is not considered a vowel.
#     Input always contains a vowel.