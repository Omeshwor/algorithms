# Sort a String by Its Last Character

# Create a function that takes a string of words and return a string sorted alphabetically by the last character of each word.
# Examples

def sort_by_last(str)
  arr = str.split(" ")
  new_arr = arr.sort {|a, b| a.split('').last <=> b.split('').last}
  new_arr.join(" ")
end

puts sort_by_last("herb camera dynamic") #➞ "camera herb dynamic"

puts sort_by_last("stab traction artist approach") #➞ "stab approach traction artist"

puts sort_by_last("sample partner autonomy swallow trend") #➞ "trend sample partner swallow autonomy"

# Notes

#     Tests consist of lowercase alphabetic characters (a-z) and spaces.
#     If two words have the same last character, sort by the order they originally appeared.