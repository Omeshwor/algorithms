# Double Letters

# Create a function that takes a word and returns true if the word has two consecutive identical letters.
# Examples

def double_letters(word)
  str = word.squeeze
  str.size != word.size
end

puts double_letters("loop") #➞ true

puts double_letters("yummy")# ➞ true

puts double_letters("orange")# ➞ false

puts double_letters("munchkin")# ➞ false

# Notes

# N/A
