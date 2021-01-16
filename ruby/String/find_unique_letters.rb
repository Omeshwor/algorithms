# Find the Unique Letters

# Create a function that takes a string and returns the letters that occur only once.
# Examples
def find_letters str
  arr = str.split('')
  count = 0
  arr2 = []
  for i in arr
    if (arr.count(i) <= 1)
        arr2.push(i)
      end
  end
  arr2
end

# puts find_letters("monopoly") # ➞ ["m", "n", "p", "l", "y"]

# puts find_letters("balloon") # ➞ ["b", "a", "n"]

puts find_letters("analysis") # ➞ ["n", "l", "y", "i"]

# Notes

#     The final array should not include letters that appear more than once in the string.
#     Return the letters in the sequence they were originally in, do not sort them.
#     All letters will be in lowercase.