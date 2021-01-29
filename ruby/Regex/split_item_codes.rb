# Split Item Codes

# You have an array of item codes with the following format: "[letters][digits]"

# Create a function that splits these strings into their alphabetic and numeric parts.
# Examples
def split_code(codes)
  arr = []
  num = codes.scan(/\d/).join('')
  str = codes.scan(/[a-zA-Z]+/)
  arr << str
  arr << num.to_i
  arr.flatten
end


puts split_code("TEWA8392") #➞ ["TEWA", 8392]

puts split_code("MMU778") #➞ ["MMU", 778]

puts split_code("SRPE5532")# ➞ ["SRPE", 5532]

