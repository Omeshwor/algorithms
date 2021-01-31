# Transforming Words into Binary Strings

# Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
# Examples

def convertBinary(str)
  str.gsub(/[a-mA-M]/, "0").gsub(/[n-zN-Z]/, "1")
end

puts convertBinary("house") #➞ "01110"

puts convertBinary("excLAIM") #➞ "0100000"

puts convertBinary("moon") #➞ "0111"

# Notes

# Conversion should be case insensitive (see example #2).