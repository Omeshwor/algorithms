# Hamming Distance

# Hamming distance is the number of characters that differ between two strings.

# To illustrate:

# String1: "abcbba"
# String2: "abcbda"

# Hamming Distance: 1 - "b" vs. "d" is the only difference.

# Create a function that computes the hamming distance between two strings.
# Examples
def hamming_distance(str1, str2)
  arr1 = str1.split('')
  arr2 = str2.split('')
  i = 0
  count = 0
  while i <= arr1.length
    if arr1[i] != arr2[i]
      count += 1
    end
    i += 1
  end
  count
end


puts hamming_distance("abcde", "bcdef") #➞ 5

puts hamming_distance("abcde", "abcde") #➞ 0

puts hamming_distance("strong", "strung") #➞ 1

# Notes

# Both strings will have the same length.