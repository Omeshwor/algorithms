# Join Two Portions of a Path

# Write a function that receives two portions of a path and joins them. The portions will be joined with the "/" separator. There could be only one separator and if it is not present it should be added.
# Examples

def join_path(str1, str2)
  str1.sub("/", "")+ "/" + str2.sub("/", "")
end

puts join_path("portion1", "portion2") #➞ "portion1/portion2"

puts join_path("portion1/", "portion2") #➞ "portion1/portion2"

puts join_path("portion1", "/portion2") #➞ "portion1/portion2"

puts join_path("portion1/", "/portion2") #➞ "portion1/portion2"

# Notes

# Try not to solve this challenge using only if-else conditions.