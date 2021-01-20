# Check for Anagrams

# Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
# Examples

def is_anagram(str1, str2)
  arr1 = str1.downcase.split('').sort()
  arr2 = str2.downcase.split('').sort()
  arr1 == arr2
end
puts is_anagram("cristian", "Cristina") #➞ true

puts is_anagram("Dave Barry", "Ray Adverb") #➞ true

puts is_anagram("Nope", "Note") #➞ false

# Notes

#     Should be case insensitive.
#     The two given strings can be of different lengths.