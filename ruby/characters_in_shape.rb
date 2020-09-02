# Characters in Shapes
# Create a function that counts how many characters make up a rectangular shape. You will be given an array of strings.

# Examples
# count_characters([
#   "###",
#   "###",
#   "###"
# ]) ➞ 9

# count_characters([
#   "22222222",
#   "22222222",
# ]) ➞ 16

# count_characters([
#   "------------------"
# ]) ➞ 18

# count_characters([]) ➞ 0

# count_characters(["", ""]) ➞ 0
# Notes
# Return 0 if given an empty array.

def count_characters(arr)
  count = 0
  for i in arr
    count += i.length
  end
  puts count
end

count_characters([
  "###",
  "###",
  "###"
])

count_characters([
  "------------------"
]) 

count_characters([
  "22222222",
  "22222222",
])

def count_characters(arr)
  count = 0
  for i in arr
    count += i.length
  end
  puts count
end