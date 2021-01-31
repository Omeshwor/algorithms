# Filter Repeating Character Strings

# Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
# Examples

def identical_filter(arr)
  new_arr = []
  for i in arr
    if i.squeeze.size == 1
      new_arr << i
    end
  end
  new_arr
end


puts identical_filter(["aaaaaa", "bc", "d", "eeee", "xyz"])
# ➞ ["aaaaaa", "d", "eeee"]

# identical_filter(["88", "999", "22", "545", "133"])
# ➞ ["88", "999", "22"]

# identical_filter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
# ➞ []

# Notes

#     A string with a single character is trivially counted as a string with repeating identical characters.
#     If there are no strings with repeating identical characters, return an empty array (see example #3).